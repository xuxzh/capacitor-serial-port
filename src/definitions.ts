export interface SerialPortPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;

  listen(option: PortCommunicationOption): Promise<{ data: string }>;
  sendText(text: string): Promise<boolean>;
  getAllDevices(): Promise<string[]>;
}

export interface PortCommunicationOption{
  port: string;
  baudRate: number;
}
