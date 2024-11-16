export interface SerialPortPlugin {
  /** 打印方法，没啥用 */
  echo(options: { value: string }): Promise<{ value: string }>;
  /** 监听对应的串口 */
  listen(option: PortCommunicationOption): Promise<{ data: string }>;
  /** 发送文本 */
  sendTxt(data:{message:string}): Promise<boolean>;
  /** 发送十六进制，请确保传入的是十六进制数据 */
  sendHex(data: { message: string }): Promise<boolean>;
  /** 获取所有串口列表 */
  getAllDevices(): Promise<string[]>;
  /** 关闭当前打开的串口 */
  close(): Promise<boolean>;
}

export interface PortCommunicationOption{
  /** 端口 */
  port: string;
  /** 波特率 */
  baudRate: number;
  /** 停止位 */
  stopBit: number;
  /** 数据位 */
  dataBit: number;
  /** 校验位 */
  parity: number;
  /** 流控 */
  flowControl: number;
}
