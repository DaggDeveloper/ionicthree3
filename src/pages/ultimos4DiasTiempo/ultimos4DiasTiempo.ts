import { Component } from '@angular/core';

import { NavController, AlertController, NavParams } from 'ionic-angular';
import { FirebaseListObservable, AngularFireDatabase  } from 'angularfire2';


@Component({
  selector: 'ultimos4DiasTiempo-home',
  templateUrl: 'ultimos4DiasTiempo.html'
})
export class ultimos4DiasTiempoPage {
 
idCiudadGlobal:number;
idProvinciaGlobal:number;
idRegionGlobal:number;
    

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
    
    
idClima;
fechaHoy;
datosClima = [];
clima: FirebaseListObservable<any>;
tiposClima: FirebaseListObservable<any>;
giftTiempo: FirebaseListObservable<any>;
constructor(
            public navCtrl: NavController,
            public alertCtrl: AlertController,
            public navParams:NavParams,
            public database: AngularFireDatabase
            ) {
    
    this.clima = this.database.list('/Clima');
    this.tiposClima = this.database.list('/tiposClima');
    this.giftTiempo = this.database.list('/imgClimas');
    
    this.idCiudadGlobal = this.navParams.get('idCiudad');
    this.idProvinciaGlobal = this.navParams.get('idProvincia');
    this.idRegionGlobal = this.navParams.get('idRegion');
    this.fechaHoy = this.navParams.get('fechaHoy');
    
 
        console.log(this.fechaHoy);

    //DATOS PARA CLIMA POR FECHA
    this.clima.forEach(ele =>{

        ele.forEach(olo =>{
        if(this.idCiudadGlobal == olo.idCiudad){

        
             
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

        }        
    })
        
    })

     //DATOS PARA CLIMA POR FECHA
this.clima.forEach(ele =>{
    this.datosClima = [];
        ele.forEach(olo =>{
                
        if(this.idCiudadGlobal == olo.idCiudad){
            if(olo.fecha_clima >= this.fechaHoy){
                    console.log(olo)
                this.datosClima.push(olo);
                     
                       
            }
            

        }
                    
    })
})       
 
    
   
}
    
  
ionViewDidLoad(){


}
    
getUrlGif(idTipoClima){
   this.giftTiempo.forEach(ele =>{
                                    ele.forEach(data => {
    console.log(data)
                                                if(idTipoClima == data.idTipoClima){
                                                    console.log(data.rutaimg);
                                                }
                                                
                                        })
                                    }) 
}

}
