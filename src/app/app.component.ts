import { Component } from '@angular/core';
import { Platform , AlertController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';

import { OneSignal } from '@ionic-native/onesignal';
import { Storage } from '@ionic/storage';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = HomePage;
id;    

  constructor(platform: Platform,
            statusBar: StatusBar, 
            splashScreen: SplashScreen,
            private oneSignal:OneSignal,
            private alertCtrl:AlertController,
            private storage: Storage,
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
if( platform.is('cordova')){
     this.handlerNotifications();
}else{
    console.log('no cordova one');
}
   
             /*let notificationOpenedCallback = (jsonData) => {
       console.log(jsonData);
    };
    if (window['plugins']) {
        window['plugins'].OneSignal.startInit("2a0d3009-be9e-4f14-b40c-4a84079d2c86")
             .handleNotificationOpened(notificationOpenedCallback)
             .endInit();
    }*/
    });
  }
private handlerNotifications(){
    
    this.oneSignal.startInit('2a0d3009-be9e-4f14-b40c-4a84079d2c86', '91188802595');
    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
  this.oneSignal.handleNotificationOpened()
  .subscribe(jsonData => {
    let alert = this.alertCtrl.create({
      title: jsonData.notification.payload.title,
      subTitle: jsonData.notification.payload.body,
      buttons: ['OK']
    });
    alert.present();
    console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
  });
    this.oneSignal.getIds().then((ids)=>{
        this.id = ids.userId;
    ///alert(this.id)
        this.storage.set('idonesignal', this.id);
        
        
        }).catch((err)=>{
            
            let alert = this.alertCtrl.create({
              title: "no se puedo obtener el id",
              subTitle: err,
              buttons: ['OK']
            });
            alert.present();
        })
  this.oneSignal.endInit();
}
}
