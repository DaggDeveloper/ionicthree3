import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FirebaseListObservable, AngularFireDatabase  } from 'angularfire2';

/*
  Generated class for the DetalleGas page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-detalle-gas',
  templateUrl: 'detalle-gas.html'
})
export class DetalleGasPage {

    idGas;
    idCiudadGlobal;
    idProvinciaGlobal;
    idRegionGlobal;
    
gas:FirebaseListObservable<any>; 
g= [];
gas5k:FirebaseListObservable<any>; 
rutabanner;    
    
  constructor(public navCtrl: NavController, 
            public navParams: NavParams,
            public database: AngularFireDatabase) {
      
        this.idGas = this.navParams.get('idGas');
        this.idCiudadGlobal = this.navParams.get('idCiudad');
        this.idProvinciaGlobal = this.navParams.get('idProvincia');
        this.idRegionGlobal = this.navParams.get('idRegion');
      
      this.gas = this.database.list('/gas');
    this.gas.forEach(ele =>{
        this.g = [];
            ele.forEach(data =>{
                if(this.idCiudadGlobal == data.idCiudad){
                    if(this.idGas == data.idTamanoGas){
                        this.g.push(data);
                    }
                }

            })
    })
      
    if(this.idGas == 1){

     this.gas5k = this.database.list('/5k', { preserveSnapshot: true });//
    
    this.gas5k
  .subscribe(snapshots => {
    snapshots.forEach(snapshot => {
        if(this.idCiudadGlobal == snapshot.key){
            this.rutabanner = snapshot.val().rutaimg;
        }   
    });
  })
}else if(this.idGas == 2){

     this.gas5k = this.database.list('/15k', { preserveSnapshot: true });//
    
    this.gas5k
  .subscribe(snapshots => {
    snapshots.forEach(snapshot => {
     // console.log(snapshot.key)
        if(this.idCiudadGlobal == snapshot.key){
   // console.log(snapshot.val().rutaimg)
            this.rutabanner = snapshot.val().rutaimg;
             
      
        }   
     
    });
  })
}else if(this.idGas == 3){

     this.gas5k = this.database.list('/45k', { preserveSnapshot: true });//
    
    this.gas5k
  .subscribe(snapshots => {
    snapshots.forEach(snapshot => {
     // console.log(snapshot.key)
        if(this.idCiudadGlobal == snapshot.key){
   // console.log(snapshot.val().rutaimg)
            this.rutabanner = snapshot.val().rutaimg;
             
      
        }   
     
    });
  })
}
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalleGasPage');
  }

}
