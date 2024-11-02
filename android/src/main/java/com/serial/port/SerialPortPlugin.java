package com.serial.port;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

import java.io.IOException;
import java.security.InvalidParameterException;

import tp.xmaihh.serialport.SerialHelper;
import tp.xmaihh.serialport.bean.ComBean;

@CapacitorPlugin(name = "SerialPort")
public class SerialPortPlugin extends Plugin {

    private SerialPort implementation = new SerialPort();

    private SerialHelper serialHelper = null;

    @PluginMethod
    public void echo(PluginCall call) {
        String value = call.getString("value");

        JSObject ret = new JSObject();
        ret.put("value", implementation.echo(value));
        call.resolve(ret);
    }

    @PluginMethod
    public void getAllDevices(PluginCall call) {
        JSObject ret = new JSObject();
        String[] devices = implementation.getAllDevices();
        ret.put("devices", String.join(",", devices));
        call.resolve(ret);
    }

    @PluginMethod
    public void listen(PluginCall call) throws IOException {
        try {
            if (this.serialHelper != null && this.serialHelper.isOpen()) {
                this.serialHelper.close();
            }
            // 端口号
            String sPort = call.getString("port");
            // 波特率
            int iBaudRate = call.getInt("baudRate");
            // 停止位
            int stopBit = call.getInt("stopBit");
            // 数据位
            int dataBit = call.getInt("dataBit");
            // 校验位
            int parity = call.getInt("parity");
            // 流控
            int flowControl = call.getInt("flowControl");

            this.serialHelper = new SerialHelper(sPort, iBaudRate) {
                @Override
                protected void onDataReceived(ComBean comBean) {
                    JSObject ret = new JSObject();
                    ret.put("data", new String(comBean.bRec));
                    notifyListeners("onDataReceived", ret);
                }
            };
            // TODO:下方参数需要判断有值的时候，才能赋值
            this.serialHelper.setStopBits(stopBit);
            this.serialHelper.setDataBits(dataBit);
            this.serialHelper.setParity(parity);
            this.serialHelper.setFlowCon(flowControl);
            this.serialHelper.open();
            call.resolve();
        } catch (SecurityException e) {
            call.reject("安全错误");
        } catch (IOException e) {
            call.reject("IO错误");
        } catch (InvalidParameterException e) {
            call.reject("非法错误");
        }catch (NullPointerException e){
            call.reject("请检查传入的串口配置是否完整!");
        }catch (Exception e){
            call.reject("接口打开失败："+e.getMessage());
        }

    }

    @PluginMethod()
    public void close(PluginCall call) throws IOException{
        try{
            if(!this.serialHelper.isOpen()){
                call.reject(("请先开启串口!"));
            }
            this.serialHelper.close();
            call.resolve();
        }catch(SecurityException e){
            call.reject("安全错误");
        }catch (Exception e){
            call.reject("接口关闭失败："+e.getMessage());
        }
    }

    @PluginMethod
    public void sendText(PluginCall call) {
        String msg=call.getString("message");
        this.serialHelper.sendTxt(msg);
        call.resolve();
    }
}
