export interface SerialPortPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;

  listen(option: PortCommunicationOption): Promise<{ data: string }>;
  sendText(text: string): Promise<boolean>;
  getAllDevices(): Promise<string[]>;
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
