package com.serial.port;

import android.util.Log;
import android_serialport_api.SerialPortFinder;

public class SerialPort {

    public String echo(String value) {
        Log.i("Echo", value);
        return value;
    }

    public String[] getAllDevices() {
        return new SerialPortFinder().getAllDevicesPath();
    }
}
