import { Component } from '@angular/core';

import { NavController, AlertController, NavParams } from 'ionic-angular';
import { detalleBencinasPage } from '../detalleBencinas/detalleBencinas';
import { FirebaseListObservable, AngularFireDatabase  } from 'angularfire2';


@Component({
  selector: 'page-listadoBencineras',
  templateUrl: 'listadoBencineras.html'
})
export class listadoBencinerasPage {  
    
idCiudadGlobal:number;
idProvinciaGlobal:number;
idRegionGlobal:number;
rutabanner;
    
Tbencinas:FirebaseListObservable<any>;   
bannerBecinas: FirebaseListObservable<any>;   
    
it = [];
a;    
constructor(
            public navCtrl: NavController,
            public alertCtrl: AlertController,
            public navParams:NavParams,
            public database: AngularFireDatabase
            ) {
    
    this.Tbencinas = this.database.list('/tiposBencinas');
    
    this.idCiudadGlobal = this.navParams.get('idCiudad');
    this.idProvinciaGlobal = this.navParams.get('idProvincia');
    this.idRegionGlobal = this.navParams.get('idRegion');
    
    
    this.bannerBecinas = this.database.list('/bannerListadoBencinas', { preserveSnapshot: true });//
    
    this.bannerBecinas
    .subscribe(snapshots => {
    snapshots.forEach(snapshot => {
        if(this.idCiudadGlobal == snapshot.key){
            console.log(snapshot.val().rutaimg)
            this.rutabanner = snapshot.val().rutaimg;
        }   
     
    });
  })
     
}
    
   
    
getDetalleBencina(item: string){
    console.log("Selected Item", item);
    this.navCtrl.push(detalleBencinasPage,{
        idTipoBencina:item,
        idCiudad:this.idCiudadGlobal,
        idProvincia:this.idProvinciaGlobal,
        idRegion:this.idRegionGlobal
    })
}
    

ionViewDidLoad(){


}
    
   

}
