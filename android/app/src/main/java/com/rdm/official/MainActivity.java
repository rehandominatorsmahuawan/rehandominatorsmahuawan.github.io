package com.rdm.official;

import android.os.Bundle;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        registerPlugin(RdmUpdaterPlugin.class);
        super.onCreate(savedInstanceState);
    }
}
