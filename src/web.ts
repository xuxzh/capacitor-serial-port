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

  async sendTxt(data:{message:string}): Promise<boolean> {
    console.log('text',data?.message);
    throw this.unimplemented('Not implemented on web.');
  }

  async sendHex(data: { message: string }): Promise<boolean>{
    console.log('text',data?.message);
    throw this.unimplemented('Not implemented on web.');
  }
  
  async getAllDevices(): Promise<string[]>{
    throw this.unimplemented('Not implemented on web.');
  }

  async close(): Promise<boolean>{
    throw this.unimplemented('Not implemented on web.');
  }
}
