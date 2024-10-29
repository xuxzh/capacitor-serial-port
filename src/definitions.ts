export interface SerialPortPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
