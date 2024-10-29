package com.serial.port;

import android.util.Log;

public class SerialPort {

    public String echo(String value) {
        Log.i("Echo", value);
        return value;
    }
}
