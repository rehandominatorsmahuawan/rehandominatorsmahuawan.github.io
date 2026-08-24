/* RDM REAL FIREBASE LOGIN */

const ACCOUNT_COLLECTION = "Accounts";

async function loadFirebaseSession(user) {
  if (!user) {
    session = null;
    updateAuthUI();
    render();
    return;
  }

  try {
    const snap = await rdmDB
      .collection(ACCOUNT_COLLECTION)
      .doc(user.uid)
      .get();

    if (!snap.exists) {
      await rdmAuth.signOut();
      session = null;
      updateAuthUI();
      return;
    }

    const a = snap.data();

    if (a.active === false) {
      await rdmAuth.signOut();
      session = null;
      updateAuthUI();
      return;
    }

    if (a.role === "admin") {
      session = {
        mode: "admin",
        playerId: "RDM001",
        canSwitch: true,
        uid: user.uid
      };
    } else if (a.role === "player") {
      session = {
        mode: "player",
        playerId: a.playerId,
        canSwitch: a.playerId === "RDM001",
        uid: user.uid
      };
    } else {
      await rdmAuth.signOut();
      return;
    }

    updateAuthUI();
    render();

  } catch (err) {
    console.error("Firebase session error:", err);
  }
}


/* OLD LOCAL LOGIN SESSION KO TRUST NAHI KARENGE */
localStorage.removeItem("RDM_V33_SESSION");
session = null;
updateAuthUI();


/* FIREBASE SAVED SESSION RESTORE */
rdmAuth.onAuthStateChanged(async user => {
  await loadFirebaseSession(user);
});


/* REAL LOGIN */
q("#loginForm").onsubmit = async e => {
  e.preventDefault();

  const errorBox = q("#loginError");
  const password = q("#password").value;

  errorBox.textContent = "";

  try {

    const persistence = q("#remember").checked
      ? firebase.auth.Auth.Persistence.LOCAL
      : firebase.auth.Auth.Persistence.SESSION;

    await rdmAuth.setPersistence(persistence);

    let email = "";

    if (loginMode === "admin") {

      const mobile = q("#amobile").value.replace(/\D/g, "");

      if (mobile !== "8521254605") {
        throw new Error("INVALID_ADMIN");
      }

      email = "admin@rdm.invalid";

    } else {

      const playerId = q("#pid").value.trim().toUpperCase();
      const playerName = q("#pname").value.trim().toUpperCase();

      if (!/^RDM\d{3}$/.test(playerId)) {
        throw new Error("INVALID_PLAYER");
      }

      email = playerId.toLowerCase() + "@rdm.invalid";

      const cred = await rdmAuth.signInWithEmailAndPassword(
        email,
        password
      );

      const snap = await rdmDB
        .collection(ACCOUNT_COLLECTION)
        .doc(cred.user.uid)
        .get();

      if (!snap.exists) {
        await rdmAuth.signOut();
        throw new Error("NO_ACCOUNT");
      }

      const a = snap.data();

      if (
        a.role !== "player" ||
        a.playerId !== playerId ||
        String(a.displayName || "").toUpperCase() !== playerName ||
        a.active === false
      ) {
        await rdmAuth.signOut();
        throw new Error("INVALID_PLAYER");
      }

      session = {
        mode: "player",
        playerId: a.playerId,
        canSwitch: a.playerId === "RDM001",
        uid: cred.user.uid
      };

      q("#loginModal").classList.remove("show");
      q("#loginForm").reset();

      render();
      go("profile");
      toast("ʟᴏɢɪɴ ꜱᴜᴄᴄᴇꜱꜱꜰᴜʟ");

      return;
    }


    /* ADMIN LOGIN */

    const cred = await rdmAuth.signInWithEmailAndPassword(
      email,
      password
    );

    const snap = await rdmDB
      .collection(ACCOUNT_COLLECTION)
      .doc(cred.user.uid)
      .get();

    if (!snap.exists) {
      await rdmAuth.signOut();
      throw new Error("NO_ACCOUNT");
    }

    const a = snap.data();

    if (
      a.role !== "admin" ||
      a.loginKey !== "8521254605" ||
      a.active === false
    ) {
      await rdmAuth.signOut();
      throw new Error("INVALID_ADMIN");
    }

    session = {
      mode: "admin",
      playerId: "RDM001",
      canSwitch: true,
      uid: cred.user.uid
    };

    q("#loginModal").classList.remove("show");
    q("#loginForm").reset();

    render();
    go("admin");
    toast("ᴀᴅᴍɪɴ ʟᴏɢɪɴ ꜱᴜᴄᴄᴇꜱꜱꜰᴜʟ");

  } catch (err) {

    console.error(err);

    errorBox.textContent =
      "ʟᴏɢɪɴ ᴅᴇᴛᴀɪʟꜱ ᴅᴏ ɴᴏᴛ ᴍᴀᴛᴄʜ";
  }
};


/* HEADER LOGIN → LOGOUT */
q("#loginOpen").onclick = async () => {

  if (rdmAuth.currentUser) {

    await rdmAuth.signOut();

    session = null;

    updateAuthUI();
    render();
    go("home");

    toast("ʟᴏɢɢᴇᴅ ᴏᴜᴛ");

  } else {

    q("#loginModal").classList.add("show");
  }
};


/*
 ADMIN & REHAN REAL ACCOUNTS ALAG HAIN.
 SWITCH PAR TARGET ACCOUNT KA PASSWORD VERIFY HOGA.
*/
q("#switchBtn").onclick = async () => {

  if (!session?.canSwitch) return;

  const goingAdmin = session.mode !== "admin";

  const password = prompt(
    goingAdmin
      ? "ADMIN PASSWORD"
      : "REHAN PLAYER PASSWORD"
  );

  if (!password) return;

  const email = goingAdmin
    ? "admin@rdm.invalid"
    : "rdm001@rdm.invalid";

  try {

    await rdmAuth.signInWithEmailAndPassword(email, password);

    toast(
      goingAdmin
        ? "ᴀᴅᴍɪɴ ᴍᴏᴅᴇ"
        : "ʀᴇʜᴀɴ ᴘʀᴏꜰɪʟᴇ"
    );

  } catch (err) {

    toast("ᴡʀᴏɴɢ ᴘᴀꜱꜱᴡᴏʀᴅ");
  }
};
