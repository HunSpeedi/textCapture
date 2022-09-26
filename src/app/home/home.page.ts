import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';

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

  constructor(
    private platform: Platform,
  ) {
    this.initializeApp();
  }

  initializeApp(): void {
    this.platform.ready().then(async () => {
      console.log('Init started');
      // eslint-disable-next-line @typescript-eslint/naming-convention
      const Scandit = await ScanditCaptureCorePlugin.initializePlugins();
      console.log('Init finished');
      // const context = Scandit.DataCaptureContext.forLicenseKey("-- ENTER YOUR SCANDIT LICENSE KEY HERE --");
      // eslint-disable-next-line max-len
      const context = Scandit.DataCaptureContext.forLicenseKey('AaqxXRNpMXIkMnS3uxwQZWMycxOaC4qRE2YScIMWYM/0Yj3i92a4T10UDq0DbrS8gnx537FV9Vs8ABaqrWnprBtNGPFKJh3WGmyLbgpaMMbxYTapB13W0TQvSCpdMW193wDvAHMiIsdBADHNMlihr/0dJNCxUM4Qb+iCXJ0cXtj68XvtoEgvJFpXf7aJN0baR94Kf/SZYcCiKmk4IIx8OYq9aTS6FV4P/2ymNsr83ZM3LqNfjwiwJXZHFyqjT2d0PCdG3HDhLFbk34pG/ApBQiXEiV0pIVDpYDwuRBlx2c6CddHv4hkENxyE/nQ2zBoA4WV+RLuhrAaQMQQgCHhC13YM4+29CLe/8W3stvT5jTSUPCaPu7YrpBawxco0T52MkGsWdAeXG9EaBBM1KXMkIQ2G4o1gCXr8sAyyfDIF27T7u0uT5XsVHPznCXkr4i5i8DbqjPWfKmSX1fqXGgfBDhuLyMqs1lviAZngmgaJ5dznw2HknELyeC8D3oh9a8G0m04MvpRndKkwvQDbaDRH9YYlVGuamNrMnVch1if3T8LhKRnNLzS8zY+Qoyp6/ovTPoS95zbIC7yrGveiCSK2nCUzl/S6aKmwsQgL9va+DPAFC90JOMAH1rvwPWFlT1WrwRZmCA8+iuBKjAjZ/9YKrHDWoDY6r0lo7Bp7qmgKo4gjOoPls/iff+8vdgInkUNp0QxF4dLw3KK+NH1pfCzcqMrp9VMGXpdHkcvFVl13xMtz5olu1AJuuUoj4PM6kWLpzVHE31Kw2r1VWGqhT6Y0ENL8YF9E+Ogsh0w3XgruW87+fPIttk+Nibx4Ios=');

      const camera = Scandit.Camera.default;
      context.setFrameSource(camera);
      console.log('Reached main check point');
    });

  }

}
