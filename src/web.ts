import { WebPlugin } from '@capacitor/core';

import type { SerialPortPlugin,PortCommunicationOption } from './definitions';

export class SerialPortWeb extends WebPlugin implements SerialPortPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }

  async listen(option: PortCommunicationOption): Promise<{ data: string }>{
    console.log('option',option)
    throw this.unimplemented('Not implemented on web.');
  }

  async sendText(text: string): Promise<boolean> {
    console.log('text',text);
    throw this.unimplemented('Not implemented on web.');
  }
  
  async getAllDevices(): Promise<string[]>{
    throw this.unimplemented('Not implemented on web.');
  }
}
