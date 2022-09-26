import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';
import 'scandit-capacitor-datacapture-core';
import 'scandit-capacitor-datacapture-parser';
import 'scandit-capacitor-datacapture-text';

// eslint-disable-next-line @typescript-eslint/naming-convention
const { ScanditCaptureCorePlugin } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  async initTextCapture(): Promise<void> {
    console.log('Init started');
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const Scandit = await ScanditCaptureCorePlugin.initializePlugins();
    console.log('Init finished');
    // eslint-disable-next-line max-len
    const context = Scandit.DataCaptureContext.forLicenseKey("-- ENTER YOUR SCANDIT LICENSE KEY HERE --");

    const camera = Scandit.Camera.default;
    context.setFrameSource(camera);
    console.log('Reached main check point');

  }

}
