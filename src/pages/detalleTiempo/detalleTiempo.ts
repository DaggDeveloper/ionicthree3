import { Component } from '@angular/core';

import { NavController, AlertController, NavParams } from 'ionic-angular';
import { ultimos4DiasTiempoPage } from '../ultimos4DiasTiempo/ultimos4DiasTiempo';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2';

@Component({
  selector: 'detalleTiempo-home',
  templateUrl: 'detalleTiempo.html'
})
export class detalleTiempoPage {
    
idCiudadGlobal:number;
idProvinciaGlobal:number;
idRegionGlobal:number;
fechahoyrecibida;
nombreCiudad;
rutaGift;
climaHoy;
    
clima: FirebaseListObservable<any>;
ciudades: FirebaseListObservable<any>;
tiposClima: FirebaseListObservable<any>;
giftTiempo: FirebaseListObservable<any>;
getFecha: FirebaseListObservable<any>;
    
//CARGAMOS LOS DATOS DE BANNER
BdetalleTiempo: FirebaseListObservable<any>;
//LAMACNAMOS EL BANNER     
rutabanner;
    
//DATOS DE IMG TIEMPO
img1
grados1;
nombreClima1;
img2;
grados2;
nombreClima2;
img3;
grados3;
nombreClima3;
img4;
grados4;
nombreClima4;
datos = []; 
d = [];
    
constructor(
            public navCtrl: NavController,
            public alertCtrl: AlertController,
            public database: AngularFireDatabase,
            public navParams:NavParams
            ) {
                this.ciudades = this.database.list('/ciudades');
                this.clima = this.database.list('/Clima');
                this.tiposClima = this.database.list('/tiposClima');
                this.giftTiempo = this.database.list('/imgClimas');
    
    
    this.idCiudadGlobal = this.navParams.get('idCiudad');
    this.idProvinciaGlobal = this.navParams.get('idProvincia');
    this.idRegionGlobal = this.navParams.get('idRegion');
    this.fechahoyrecibida = this.navParams.get('fechaHoy');
    this.nombreCiudad = this.navParams.get('nombreCiudad');
    this.getFecha = this.database.list('/pruebaClima/'+this.nombreCiudad,{
query:{
    orderByChild:'size',
    
}
    });
    
    this.clima.subscribe(res => console.log(res));
    
    //DATOS PARA CLIMA POR FECHA
    this.clima.forEach(ele =>{

        ele.forEach(olo =>{
        if(this.idCiudadGlobal == olo.idCiudad){

            if(this.fechahoyrecibida == olo.fecha_clima){
             
                this.grados1 = olo.grados1;
                this.nombreClima1 = olo.nameTipoClima1;
                
                 this.grados2 = olo.grados2;
                this.nombreClima2 = olo.nameTipoClima2;
                
                 this.grados3 = olo.grados3;
                this.nombreClima3 = olo.nameTipoClima3;
                
                 this.grados4 = olo.grados4;
                this.nombreClima4 = olo.nameTipoClima4;
   // console.log(olo)
               
                                this.giftTiempo.forEach(ele =>{
                                    ele.forEach(data => {
                                                if(olo.tipoClima1 == data.idTipoClima){
                                                    this.img1 = data.rutaimg;
                                                }
                                                if(olo.tipoClima2 == data.idTipoClima){
                                                    this.img2 = data.rutaimg;
                                                }
                                                if(olo.tipoClima3 == data.idTipoClima){
                                                    this.img3 = data.rutaimg;
                                                }
                                                if(olo.tipoClima4 == data.idTipoClima){
                                                    this.img4 = data.rutaimg;
                                                }
                                        })
                                    })
}else{
     
}
        }        
    })
        
    })
    

     this.BdetalleTiempo = this.database.list('/BdetalleTiempo', { preserveSnapshot: true });//
    
    this.BdetalleTiempo
  .subscribe(snapshots => {
    snapshots.forEach(snapshot => {
        if(this.idCiudadGlobal == snapshot.key){
            this.rutabanner = snapshot.val().rutaimg;
        }   
    });
  })

}
    
    
    
getUltimos4Dias(){
    this.navCtrl.push(ultimos4DiasTiempoPage,{
        idCiudad:this.idCiudadGlobal,
        idProvincia:this.idProvinciaGlobal,
        idRegion:this.idRegionGlobal,
        fechaHoy:this.fechahoyrecibida
    });
    
    
}
ionViewDidLoad(){


}
    
   

}
