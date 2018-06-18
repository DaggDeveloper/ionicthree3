import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AngularFireModule } from 'angularfire2';
import { infoPrincipalPage } from '../pages/infoPrincipal/infoPrincipal';
import { listadoBencinerasPage } from '../pages/listadoBencineras/listadoBencineras';
import { detalleBencinasPage } from '../pages/detalleBencinas/detalleBencinas';
import { detalleTiempoPage } from '../pages/detalleTiempo/detalleTiempo';
import { ultimos4DiasTiempoPage } from '../pages/ultimos4DiasTiempo/ultimos4DiasTiempo';
import { InformacionAdicionalPage } from '../pages/informacion-adicional/informacion-adicional';
import { TuciudadaldiaPage } from '../pages/tuciudadaldia/tuciudadaldia';
import { DetalleGasPage } from '../pages/detalle-gas/detalle-gas';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Device } from '@ionic-native/device';
import { Network } from '@ionic-native/network';
import { DaggService } from '../providers/dagg-service';
import { OneSignal } from '@ionic-native/onesignal';
import { IonicStorageModule } from '@ionic/storage';


export const firebaseConfig = {
  apiKey: "AIzaSyCFOYKqXRvTU9qBlNBH0OxCFjqXaIwpVDA",
  authDomain: "chilealerta-79063.firebaseapp.com",
  databaseURL: "https://chilealerta-79063.firebaseio.com",
  storageBucket: "chilealerta-79063.appspot.com",
  messagingSenderId: "91188802595"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
      infoPrincipalPage,
      listadoBencinerasPage,
      detalleBencinasPage,
      detalleTiempoPage,
      ultimos4DiasTiempoPage,
      InformacionAdicionalPage,
      TuciudadaldiaPage,
      DetalleGasPage

  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
      IonicStorageModule.forRoot(),
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
      infoPrincipalPage,
      listadoBencinerasPage,
      detalleBencinasPage,
      detalleTiempoPage,
      ultimos4DiasTiempoPage,
      InformacionAdicionalPage,
      TuciudadaldiaPage,
      DetalleGasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,   
    Device,
    DaggService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Network,
    OneSignal
  ]
})
export class AppModule {}
