import * as d3 from 'd3';
import {
  CLUB_INFO,
  escHtml,
  formatTextCase,
  resolvePlayerImage
} from '../data/roster.js';

function xnum(v) {
  const n = Number(v);
  return Number.isFinite(n) ? n : 0;
}

export function parseClockParts(str) {
  const m = String(str || '').match(/(\d{1,2}):(\d{2})(?::(\d{2}))?\s*(AM|PM)?/i);
  if (!m) return null;
  let hh = Number(m[1]);
  const mm = Number(m[2]);
  const ss = Number(m[3] || 0);
  const mer = (m[4] || '').toUpperCase();
  if (mer === 'PM' && hh < 12) hh += 12;
  if (mer === 'AM' && hh === 12) hh = 0;
  return { hh, mm, ss };
}

export function parseMatchDateTime(m) {
  if (!m) return null;
  const rawField = m.scheduledAt ?? m.startTime ?? m.dateTime ?? m.date ?? m.matchDate;
  if (rawField && typeof rawField === 'object') {
    if (typeof rawField.toDate === 'function') {
      const d = rawField.toDate();
      return isNaN(d?.getTime?.()) ? null : d;
    }
    if (typeof rawField.seconds === 'number') {
      const d = new Date(rawField.seconds * 1000);
      return isNaN(d.getTime()) ? null : d;
    }
  }
  const rawDate = String(rawField || '').trim();
  if (!rawDate) return null;
  const rawTime = String(m.time ?? m.matchTime ?? '').trim();
  const timeFromTimeField = parseClockParts(rawTime);
  const timeFromDateField = parseClockParts(rawDate);
  const clock = timeFromTimeField || timeFromDateField || { hh: 9, mm: 0, ss: 0 };

  const isoDate = rawDate.match(/^(\d{4})-(\d{1,2})-(\d{1,2})(?:$|[^\d])/);
  if (isoDate) {
    if (/[T]\d{2}:\d{2}/.test(rawDate) && /(?:Z|[+-]\d{2}:?\d{2})$/i.test(rawDate) && !timeFromTimeField) {
      const exactIso = new Date(rawDate);
      if (!isNaN(exactIso.getTime())) return exactIso;
    }
    return new Date(Number(isoDate[1]), Number(isoDate[2]) - 1, Number(isoDate[3]), clock.hh, clock.mm, clock.ss, 0);
  }

  const dmy = rawDate.match(/^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/);
  if (dmy) {
    return new Date(Number(dmy[3]), Number(dmy[2]) - 1, Number(dmy[1]), clock.hh, clock.mm, clock.ss, 0);
  }

  const combined = rawTime && !/\d{1,2}:\d{2}/.test(rawDate) ? `${rawDate} ${rawTime}` : rawDate;
  const parsed = new Date(combined);
  if (!isNaN(parsed.getTime())) {
    if (timeFromTimeField && !/\d{1,2}:\d{2}/.test(rawDate)) {
      parsed.setHours(timeFromTimeField.hh, timeFromTimeField.mm, timeFromTimeField.ss, 0);
    } else if (!timeFromTimeField && !timeFromDateField) {
      parsed.setHours(9, 0, 0, 0);
    }
    return parsed;
  }
  return null;
}

export function classifyMatchStatus(m) {
  if (!m) return 'UPCOMING';
  const explicit = String(m.matchStatus || m.status || '').trim().toUpperCase();
  if (/\bLIVE\b/.test(explicit)) return 'LIVE';
  if (/CANCEL/.test(explicit)) return 'CANCELLED';
  if (/^(COMPLETED|RESULT|FINISHED|WON|LOST|DRAW|TIE|NO RESULT)$/.test(explicit)) return 'COMPLETED';
  if (/^(UPCOMING|SCHEDULED|FIXTURE|NEXT)$/.test(explicit)) {
    if (m.result && !/CANCEL/i.test(String(m.result))) return 'COMPLETED';
    return 'UPCOMING';
  }
  const blob = [explicit, m.result, m.note].filter(Boolean).join(' ').toUpperCase();
  if (/CANCEL/.test(blob)) return 'CANCELLED';
  if (/COMPLETED|RESULT|FINISHED|\bRDM\s*WON\b|\bRDM\s*LOST\b|\bLOST\b|\bDRAW\b|\bTIE\b|\bNO\s*RESULT\b/.test(blob)) return 'COMPLETED';
  if (String(m.ourScore || '').trim() && String(m.oppScore || '').trim()) return 'COMPLETED';
  return 'UPCOMING';
}

export function parseCricketScore(scoreStr) {
  const s = String(scoreStr || '').trim();
  if (!s) return null;
  const m = s.match(/(\d{1,4})(?:\s*[\/\-]\s*(\d{1,2}))?/);
  if (!m) return null;
  return { runs: Number(m[1]) || 0, wickets: m[2] !== undefined ? Number(m[2]) : null };
}

export function classifyMatchOutcome(m) {
  if (!m) return null;
  const st = classifyMatchStatus(m);
  if (st === 'CANCELLED' || st === 'UPCOMING' || st === 'LIVE') return null;

  const oppUpper = String(m.opponent || '').trim().toUpperCase();
  const inspectResult = txt => {
    const s = String(txt || '').trim().toUpperCase();
    if (!s) return null;
    if (/\bNO\s*RESULT\b|\bN\/?R\b|\bABANDONED\b/.test(s)) return 'NO_RESULT';
    if (/\bTIE\b|\bTIED\b|\bDRAW\b|\bDRAWN\b/.test(s)) return 'TIE';
    if (/\bRDM\s*LOST\b|\bOPPONENT\s*WON\b|\bLOST\b|\bLOSS\b|\bDEFEAT\b/.test(s)) return 'LOSS';
    if (oppUpper && s.includes(oppUpper) && /\b(?:WON|WIN|VICTORY)\b/.test(s) && !/\bRDM\b/.test(s)) return 'LOSS';
    const wonMatch = s.match(/^(.*?)\b(?:WON|WIN|VICTORY)\b/);
    if (wonMatch) {
      const prefix = wonMatch[1].replace(/[^A-Z0-9 ]+/g, ' ').trim();
      if (!prefix || /\b(?:RDM|WE|OUR|TEAM|HOME)\b/.test(prefix)) return 'WIN';
      return 'LOSS';
    }
    return null;
  };

  const fromResult = inspectResult(m.result);
  if (fromResult) return fromResult;

  const fromStatus = inspectResult(m.status || m.matchStatus);
  if (fromStatus) return fromStatus;

  const noteClean = String(m.note || '')
    .replace(/\b(?:won|win|lost)\s+(?:the\s+)?toss\b/gi, ' ');
  const fromNote = inspectResult(noteClean);
  if (fromNote) return fromNote;

  const ourP = parseCricketScore(m.ourScore);
  const oppP = parseCricketScore(m.oppScore);
  if (ourP && oppP) {
    if (ourP.runs > oppP.runs) return 'WIN';
    if (ourP.runs < oppP.runs) return 'LOSS';
    return 'TIE';
  }
  return null;
}

export function computeMatchSummaryStats(matches) {
  const list = Array.isArray(matches) ? matches : [];
  const counts = { ALL: list.length, UPCOMING: 0, LIVE: 0, COMPLETED: 0, CANCELLED: 0 };
  let wins = 0;
  let losses = 0;
  let ties = 0;
  let noResult = 0;
  let highestScore = null;
  const decidedItems = [];

  list.forEach((m, idx) => {
    const st = classifyMatchStatus(m);
    if (st === 'LIVE') counts.LIVE++;
    else if (st === 'COMPLETED') counts.COMPLETED++;
    else if (st === 'CANCELLED') counts.CANCELLED++;
    else counts.UPCOMING++;

    const outcome = classifyMatchOutcome(m);
    if (outcome === 'WIN') wins++;
    else if (outcome === 'LOSS') losses++;
    else if (outcome === 'TIE') ties++;
    else if (outcome === 'NO_RESULT') noResult++;

    if (outcome === 'WIN' || outcome === 'LOSS' || outcome === 'TIE' || outcome === 'NO_RESULT') {
      const parsedDt = parseMatchDateTime(m);
      const ts = parsedDt?.getTime() || Number(m.createdMs || 0) || (list.length - idx);
      const rawDateStr = String(m.date || m.matchDate || '').trim();
      let dateLabel = '';
      if (parsedDt && !isNaN(parsedDt.getTime())) {
        dateLabel = parsedDt.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
      } else if (rawDateStr) {
        dateLabel = rawDateStr;
      } else if (m.updatedAt && typeof m.updatedAt.toDate === 'function') {
        const ud = m.updatedAt.toDate();
        if (!isNaN(ud?.getTime?.())) dateLabel = ud.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
      } else if (Number(m.createdMs || 0) > 0) {
        dateLabel = new Date(Number(m.createdMs)).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
      }
      const code = outcome === 'WIN' ? 'W' : outcome === 'LOSS' ? 'L' : outcome === 'TIE' ? 'T' : 'NR';
      decidedItems.push({
        code,
        outcome,
        ts,
        date: rawDateStr,
        dateLabel: dateLabel || 'Result logged',
        opponent: String(m.opponent || 'Opponent').trim() || 'Opponent',
        venue: String(m.venueName || m.venue || '').trim(),
        potm: String(m.potm || '').trim(),
        ourScore: String(m.ourScore || '').trim(),
        oppScore: String(m.oppScore || '').trim(),
        result: String(m.result || m.margin || m.note || '').trim()
      });
    }

    if (st === 'COMPLETED' || st === 'LIVE') {
      const parsedOur = parseCricketScore(m.ourScore);
      if (parsedOur && parsedOur.runs >= 0 && String(m.ourScore || '').trim()) {
        if (
          !highestScore ||
          parsedOur.runs > highestScore.runs ||
          (parsedOur.runs === highestScore.runs && (parsedOur.wickets ?? 99) < (highestScore.wickets ?? 99))
        ) {
          highestScore = {
            runs: parsedOur.runs,
            wickets: parsedOur.wickets,
            display: String(m.ourScore).trim(),
            opponent: m.opponent || 'Opponent'
          };
        }
      }
    }
  });

  const played = counts.COMPLETED;
  const decided = wins + losses + ties;
  const denom = decided > 0 ? decided : (played > noResult ? played - noResult : 0);
  const winPctNum = denom > 0 ? Math.round((wins / denom) * 1000) / 10 : null;
  const winPctText = winPctNum === null
    ? '—'
    : (Number.isInteger(winPctNum) ? `${winPctNum}%` : `${winPctNum.toFixed(1)}%`);

  decidedItems.sort((a, b) => b.ts - a.ts);
  let winStreak = 0;
  for (const item of decidedItems) {
    if (item.outcome === 'NO_RESULT') continue;
    if (item.outcome === 'WIN') winStreak++;
    else break;
  }
  const recentForm = decidedItems.slice(0, 5);
  let cumWins = 0;
  let cumDecided = 0;
  const recentTrend = [...decidedItems.slice(0, 8)].reverse().map((item, i) => {
    if (item.outcome === 'WIN') { cumWins++; cumDecided++; }
    else if (item.outcome === 'LOSS' || item.outcome === 'TIE') { cumDecided++; }
    const runningWinPct = cumDecided > 0 ? Math.round((cumWins / cumDecided) * 1000) / 10 : (cumWins > 0 ? 100 : 50);
    return { ...item, index: i + 1, runningWinPct };
  });

  return {
    totalFixtures: counts.ALL,
    played,
    upcoming: counts.UPCOMING,
    live: counts.LIVE,
    cancelled: counts.CANCELLED,
    wins,
    losses,
    ties,
    noResult,
    decided,
    winStreak,
    winPctNum,
    winPctText,
    highestScore,
    recentForm,
    recentTrend
  };
}

export function computeBestMatch(matches) {
  const pool = (matches || []).filter(m => {
    const st = classifyMatchStatus(m);
    if (st === 'CANCELLED') return false;
    return st === 'COMPLETED' || !!(m.result || m.ourScore || m.oppScore || m.potm);
  });
  if (!pool.length) return null;
  const explicitlyFlagged = pool.find(m => m.isBestMatch === true || m.bestMatch === true);
  if (explicitlyFlagged) {
    return {
      match: explicitlyFlagged,
      reason: 'Featured Best Match · Selected by Team Management',
      completedCount: pool.length
    };
  }
  const scored = pool.map((m, idx) => {
    const ourP = parseCricketScore(m.ourScore);
    const oppP = parseCricketScore(m.oppScore);
    const outcome = classifyMatchOutcome(m);
    const isWin = outcome === 'WIN';
    const ourRuns = ourP?.runs || 0;
    const oppRuns = oppP?.runs || 0;
    const totalRuns = ourRuns + oppRuns;
    const diff = (ourP && oppP) ? Math.abs(ourRuns - oppRuns) : null;
    const isClose = diff !== null && diff <= 15;
    const isDominant = isWin && diff !== null && diff >= 40;
    let pts = 0;
    if (isWin) pts += 1000;
    pts += totalRuns;
    if (isClose) pts += 120;
    if (isDominant) pts += 80;
    if (m.potm) pts += 60;
    if (m.batting) pts += 40;
    if (m.bowling) pts += 40;
    let reason = 'Top Logged Match Result';
    if (isWin && isClose) reason = 'Thriller Victory · Narrow Margin Contest';
    else if (isWin && isDominant) reason = 'Commanding RDM Victory';
    else if (isWin && ourRuns > 0) reason = `RDM Victory · ${ourRuns} Runs Scored`;
    else if (m.potm) reason = `Standout Performance · POTM ${formatTextCase(m.potm)}`;
    else if (totalRuns > 0) reason = `High-Scoring Match · ${totalRuns} Combined Runs`;
    return { match: m, pts, reason, idx };
  }).sort((a, b) => (b.pts - a.pts) || (a.idx - b.idx));
  const best = scored[0];
  return { match: best.match, reason: best.reason, completedCount: pool.length };
}

export function computePlayerAnalytics(players, statsList, matches, achievements) {
  const norm = s => String(s || '').toLowerCase().replace(/[^a-z0-9]/g, '');
  const list = (players || []).map(p => {
    const agg = (statsList || []).filter(s => s.playerId === p.id).reduce((a, z) => {
      ['matches', 'runs', 'wickets', 'fours', 'sixes', 'fifties', 'hundreds', 'runOuts'].forEach(k => {
        a[k] = xnum(a[k]) + xnum(z[k]);
      });
      a.highScore = Math.max(xnum(a.highScore), xnum(z.highScore));
      a.strikeRate = Math.max(xnum(a.strikeRate), xnum(z.strikeRate));
      const econ = xnum(z.economy);
      if (econ > 0) a.economy = a.economy > 0 ? Math.min(a.economy, econ) : econ;
      if (z.bestBowling) a.bestBowling = z.bestBowling;
      return a;
    }, { matches: 0, runs: 0, wickets: 0, highScore: 0, fours: 0, sixes: 0, fifties: 0, hundreds: 0, runOuts: 0, strikeRate: 0, economy: 0, bestBowling: '' });

    const pKey = norm(p.name);
    const idKey = norm(p.id);
    const matchPotm = (matches || []).filter(m => {
      const potm = norm(m.potm);
      return potm && ((pKey && potm.includes(pKey)) || (idKey && potm.includes(idKey)));
    }).length;
    const achPotm = (achievements || []).filter(a => {
      if (!/player of the match|potm/i.test(`${a.title || ''} ${a.detail || ''}`)) return false;
      const pn = norm(a.playerName);
      return pn && ((pKey && pn.includes(pKey)) || (idKey && pn.includes(idKey)));
    }).length;
    const potmCount = Math.max(matchPotm, achPotm);
    const mvpPoints =
      agg.runs * 1 +
      agg.fours * 1 +
      agg.sixes * 2 +
      agg.fifties * 15 +
      agg.hundreds * 35 +
      agg.wickets * 22 +
      agg.runOuts * 8 +
      potmCount * 30;
    const hasPerformance =
      agg.matches > 0 || agg.runs > 0 || agg.wickets > 0 || agg.highScore > 0 ||
      agg.fours > 0 || agg.sixes > 0 || agg.runOuts > 0 || potmCount > 0;
    return { p, s: agg, potmCount, mvpPoints, hasPerformance };
  });

  const ranked = [...list].sort((a, b) =>
    (b.mvpPoints - a.mvpPoints) ||
    (b.s.runs - a.s.runs) ||
    (b.s.wickets - a.s.wickets) ||
    (b.potmCount - a.potmCount) ||
    (b.s.matches - a.s.matches)
  );
  return { ranked, bestPlayer: ranked[0]?.hasPerformance ? ranked[0] : null };
}

export function resolvePotmPlayer(potmText, players) {
  const raw = String(potmText || '').trim();
  if (!raw || !Array.isArray(players) || !players.length) return null;
  const norm = s => String(s || '').toLowerCase().replace(/[^a-z0-9]/g, '');
  const needle = norm(raw);
  if (!needle) return null;
  const exact = players.find(p => norm(p.id) === needle || norm(p.name) === needle);
  if (exact) return exact;
  const matches = players.filter(p => {
    const pk = norm(p.name);
    const ik = norm(p.id);
    return (pk && (needle.includes(pk) || pk.includes(needle))) || (ik && needle.includes(ik));
  });
  matches.sort((a, b) => norm(b.name).length - norm(a.name).length);
  return matches[0] || null;
}

export function potmCornerBadgeHtml(count = 1, title = 'Player of the Match') {
  const showCount = Number(count) > 1;
  return `<span class="rdmPotmPortraitBadge${showCount ? ' has-count' : ''}" title="${escHtml(title)}" aria-label="${escHtml(title)}"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.5l2.85 5.77 6.37.93-4.61 4.49 1.09 6.35L12 17.04l-5.7 3 1.09-6.35-4.61-4.49 6.37-.93L12 2.5z"/></svg>${showCount ? `<span>${escHtml(String(count))}×</span>` : ''}</span>`;
}

export function potmInlineTagHtml(label = 'Player of the Match') {
  return `<span class="rdmPotmInlineTag"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.5l2.85 5.77 6.37.93-4.61 4.49 1.09 6.35L12 17.04l-5.7 3 1.09-6.35-4.61-4.49 6.37-.93L12 2.5z"/></svg>${escHtml(label)}</span>`;
}

export function portraitPhotoInfo(imgUrl, brandLogo = '') {
  const resolved = resolvePlayerImage(imgUrl, brandLogo);
  const isCrest = resolved === brandLogo || resolved === CLUB_INFO.logoPath;
  return { src: resolved, isCrest };
}

export function renderMatchTrendD3(chartWrap, stats) {
  if (!chartWrap || !d3) return;

  const trend = Array.isArray(stats?.recentTrend) ? stats.recentTrend : [];
  const wrapSel = d3.select(chartWrap);
  wrapSel.selectAll('svg.matchTrendSvg').remove();

  const W = 680;
  const H = 168;
  const margin = { top: 20, right: 24, bottom: 32, left: 42 };
  const iw = W - margin.left - margin.right;
  const ih = H - margin.top - margin.bottom;

  const svg = wrapSel.insert('svg', '.matchTrendTooltip')
    .attr('class', 'matchTrendSvg')
    .attr('viewBox', `0 0 ${W} ${H}`)
    .attr('preserveAspectRatio', 'xMidYMid meet')
    .attr('role', 'img')
    .attr('aria-label', trend.length
      ? `D3 win/loss trend chart across last ${trend.length} completed matches`
      : 'Win/loss trend chart awaiting completed matches');

  const defs = svg.append('defs');
  const gradId = 'rdmTrendAreaGrad';
  const grad = defs.append('linearGradient')
    .attr('id', gradId)
    .attr('x1', '0%').attr('y1', '0%')
    .attr('x2', '0%').attr('y2', '100%');
  grad.append('stop').attr('offset', '0%').attr('stop-color', 'var(--success-text)').attr('stop-opacity', 0.28);
  grad.append('stop').attr('offset', '55%').attr('stop-color', 'var(--brand-blue)').attr('stop-opacity', 0.08);
  grad.append('stop').attr('offset', '100%').attr('stop-color', 'var(--brand-blue)').attr('stop-opacity', 0.0);

  const g = svg.append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`);

  const y = d3.scaleLinear().domain([0, 100]).range([ih, 0]);

  g.selectAll('line.rdmD3Grid')
    .data([0, 50, 100])
    .join('line')
    .attr('class', d => d === 50 ? 'rdmD3Grid rdmD3Baseline' : 'rdmD3Grid')
    .attr('x1', 0)
    .attr('x2', iw)
    .attr('y1', d => y(d))
    .attr('y2', d => y(d));

  const yAxis = d3.axisLeft(y)
    .tickValues([0, 50, 100])
    .tickFormat(d => `${d}%`)
    .tickSize(0)
    .tickPadding(8);

  const yAxisG = g.append('g')
    .attr('class', 'rdmD3Axis')
    .call(yAxis);
  yAxisG.select('.domain').remove();

  if (!trend.length) {
    const emptySlots = ['M1', 'M2', 'M3', 'M4', 'M5'];
    const ex = d3.scalePoint().domain(emptySlots).range([28, iw - 28]);
    g.selectAll('text.rdmD3XLabel')
      .data(emptySlots)
      .join('text')
      .attr('class', 'rdmD3XLabel')
      .attr('x', d => ex(d))
      .attr('y', ih + 20)
      .attr('text-anchor', 'middle')
      .text(d => d);

    g.append('text')
      .attr('class', 'rdmD3Empty')
      .attr('x', iw / 2)
      .attr('y', y(50) - 10)
      .attr('text-anchor', 'middle')
      .text('No completed matches logged in Firestore yet');
    return;
  }

  const xDomain = trend.map((_, i) => i);
  const x = d3.scalePoint()
    .domain(xDomain)
    .range(trend.length === 1 ? [iw / 2, iw / 2] : [30, iw - 30]);

  const stemWidth = Math.min(34, Math.max(18, iw / Math.max(trend.length * 2.2, 6)));
  const stemHeight = d => {
    if (d.code === 'W') return ih * 0.86;
    if (d.code === 'T') return ih * 0.52;
    if (d.code === 'NR') return ih * 0.36;
    return ih * 0.24;
  };
  const toneClass = d => d.code === 'W' ? 'is-win' : d.code === 'L' ? 'is-loss' : d.code === 'T' ? 'is-tie' : 'is-nr';

  g.selectAll('rect.rdmD3Stem')
    .data(trend)
    .join('rect')
    .attr('class', d => `rdmD3Stem ${toneClass(d)}`)
    .attr('x', (_d, i) => x(i) - stemWidth / 2)
    .attr('y', d => ih - stemHeight(d))
    .attr('width', stemWidth)
    .attr('height', d => stemHeight(d))
    .attr('rx', 5);

  if (trend.length > 1) {
    const areaGen = d3.area()
      .x((_d, i) => x(i))
      .y0(ih)
      .y1(d => y(d.runningWinPct))
      .curve(d3.curveMonotoneX);

    g.append('path')
      .datum(trend)
      .attr('class', 'rdmD3Area')
      .attr('fill', `url(#${gradId})`)
      .attr('d', areaGen);

    const lineGen = d3.line()
      .x((_d, i) => x(i))
      .y(d => y(d.runningWinPct))
      .curve(d3.curveMonotoneX);

    g.append('path')
      .datum(trend)
      .attr('class', 'rdmD3Line')
      .attr('d', lineGen);
  }

  const shortOpp = name => {
    const clean = formatTextCase(name || 'Opp');
    return clean.length > 10 ? clean.slice(0, 9) + '…' : clean;
  };

  g.selectAll('text.rdmD3XLabel')
    .data(trend)
    .join('text')
    .attr('class', (_d, i) => `rdmD3XLabel${i === trend.length - 1 ? ' is-latest' : ''}`)
    .attr('x', (_d, i) => x(i))
    .attr('y', ih + 20)
    .attr('text-anchor', 'middle')
    .text((d, i) => `M${i + 1} · ${shortOpp(d.opponent)}`);

  const guideLine = g.append('line')
    .attr('class', 'rdmD3Guide')
    .attr('y1', 0)
    .attr('y2', ih)
    .style('opacity', 0);

  const tipEl = chartWrap.querySelector('.matchTrendTooltip');
  const setHoverIdx = activeIdx => {
    g.selectAll('rect.rdmD3Stem').classed('is-hovered', (_d, idx) => idx === activeIdx);
    g.selectAll('g.rdmD3Node').classed('is-hovered', (_d, idx) => idx === activeIdx);
    if (activeIdx >= 0 && activeIdx < trend.length) {
      const gx = x(activeIdx);
      guideLine.attr('x1', gx).attr('x2', gx).style('opacity', 1);
    } else {
      guideLine.style('opacity', 0);
    }
  };
  const showTip = (d, i) => {
    if (!tipEl) return;
    setHoverIdx(i);
    const oppName = formatTextCase(d.opponent || 'Opponent');
    const dateStr = d.dateLabel || d.date || 'Result logged';
    const venueStr = d.venue ? formatTextCase(d.venue) : '';
    const scoreStr = (d.ourScore || d.oppScore)
      ? `RDM ${d.ourScore || '—'} vs ${d.oppScore || '—'}`
      : '';
    const outcomeWord = d.code === 'W' ? 'WIN' : d.code === 'L' ? 'LOSS' : d.code === 'T' ? 'TIE' : 'NR';
    const resStr = d.result ? formatTextCase(d.result) : (d.code === 'W' ? 'RDM Won' : d.code === 'L' ? 'RDM Lost' : d.code === 'T' ? 'Match Tied' : 'No Result');
    const detailRows = [
      `<div class="matchTrendTipRow"><span>Opponent</span><strong>${escHtml(oppName)}</strong></div>`,
      `<div class="matchTrendTipRow"><span>Date</span><strong>${escHtml(dateStr)}</strong></div>`
    ];
    if (venueStr) {
      detailRows.push(`<div class="matchTrendTipRow"><span>Venue</span><strong>${escHtml(venueStr)}</strong></div>`);
    }
    if (scoreStr) {
      detailRows.push(`<div class="matchTrendTipRow"><span>Score</span><strong>${escHtml(scoreStr)}</strong></div>`);
    }
    const potmHtml = d.potm ? `<span>POTM: <b>${escHtml(formatTextCase(d.potm))}</b></span>` : '';
    tipEl.innerHTML = `<div class="matchTrendTipHead"><b class="matchTrendTipBadge ${toneClass(d)}">${escHtml(outcomeWord)}</b><span class="matchTrendTipMatchNum">Match ${i + 1} of ${trend.length}</span></div><div class="matchTrendTipDetails">${detailRows.join('')}</div><div class="matchTrendTipMeta">${escHtml(resStr)}</div><div class="matchTrendTipFoot"><span>Win Rate: <b>${escHtml(String(d.runningWinPct))}%</b></span>${potmHtml}</div>`;
    tipEl.hidden = false;
    const px = ((margin.left + x(i)) / W) * 100;
    const py = ((margin.top + y(d.runningWinPct)) / H) * 100;
    const flipBelow = py < 50;
    tipEl.classList.toggle('is-below', flipBelow);
    tipEl.style.left = `${Math.min(78, Math.max(22, px))}%`;
    tipEl.style.top = flipBelow
      ? `${Math.min(84, py + 11)}%`
      : `${Math.max(14, py - 9)}%`;
  };
  const hideTip = () => {
    setHoverIdx(-1);
    if (tipEl) {
      tipEl.hidden = true;
      tipEl.classList.remove('is-below');
    }
  };

  const colStep = trend.length > 1 ? (iw - 60) / (trend.length - 1) : iw;
  const colHitW = trend.length > 1 ? Math.max(44, colStep) : iw;

  g.selectAll('rect.rdmD3ColHit')
    .data(trend)
    .join('rect')
    .attr('class', 'rdmD3ColHit')
    .attr('x', (_d, i) => x(i) - colHitW / 2)
    .attr('y', 0)
    .attr('width', colHitW)
    .attr('height', ih)
    .on('mouseenter', function (_ev, d) {
      showTip(d, trend.indexOf(d));
    })
    .on('click', function (_ev, d) {
      const i = trend.indexOf(d);
      if (tipEl && !tipEl.hidden && tipEl.dataset.activeIdx === String(i)) {
        hideTip();
        delete tipEl.dataset.activeIdx;
      } else {
        if (tipEl) tipEl.dataset.activeIdx = String(i);
        showTip(d, i);
      }
    });

  const nodes = g.selectAll('g.rdmD3Node')
    .data(trend)
    .join('g')
    .attr('class', (d, i) => `rdmD3Node ${toneClass(d)}${i === trend.length - 1 ? ' is-latest' : ''}`)
    .attr('transform', (d, i) => `translate(${x(i)},${y(d.runningWinPct)})`)
    .attr('tabindex', '0')
    .attr('role', 'button')
    .attr('aria-label', (d, i) => `Match ${i + 1}, Opponent ${formatTextCase(d.opponent)}, Date ${d.dateLabel || 'logged date'}, Result ${d.code}, running win rate ${d.runningWinPct}%`);

  nodes.append('circle')
    .attr('class', 'rdmD3Hit')
    .attr('r', 16);

  nodes.append('circle')
    .attr('class', 'rdmD3Dot')
    .attr('r', (_d, i) => i === trend.length - 1 ? 7 : 5.5);

  nodes.append('text')
    .attr('class', 'rdmD3NodeCode')
    .attr('y', -11)
    .attr('text-anchor', 'middle')
    .text(d => d.code);

  nodes
    .on('mouseenter focus', function (_ev, d) {
      showTip(d, trend.indexOf(d));
    })
    .on('click', function (_ev, d) {
      const i = trend.indexOf(d);
      if (tipEl && !tipEl.hidden && tipEl.dataset.activeIdx === String(i)) {
        hideTip();
        delete tipEl.dataset.activeIdx;
      } else {
        if (tipEl) tipEl.dataset.activeIdx = String(i);
        showTip(d, i);
      }
    })
    .on('blur', () => {
      if (tipEl) delete tipEl.dataset.activeIdx;
      hideTip();
    });

  svg.on('mouseleave', () => {
    if (tipEl) delete tipEl.dataset.activeIdx;
    hideTip();
  });
}
