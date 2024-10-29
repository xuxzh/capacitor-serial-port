import { WebPlugin } from '@capacitor/core';

import type { SerialPortPlugin } from './definitions';

export class SerialPortWeb extends WebPlugin implements SerialPortPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
