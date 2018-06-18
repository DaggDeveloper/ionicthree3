import { Component } from '@angular/core';

import { NavController, AlertController, Platform, Events } from 'ionic-angular';
import { FirebaseListObservable, AngularFireDatabase  } from 'angularfire2';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { infoPrincipalPage } from '../infoPrincipal/infoPrincipal';
import { Device } from '@ionic-native/device';
import { Network } from '@ionic-native/network';
//import { NativeStorage } from '@ionic-native/native-storage';
import { Storage } from '@ionic/storage';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'/*,
providers:[ DaggService ]*/
})
export class HomePage {

 inicio = {};
po = [
    {idPoligono:1,nombrePoligono:'Poligono A'},
    {idPoligono:2,nombrePoligono:'Poligono B'}
];


tpo = [
    {idPoligono:1,idTpo:1,nombretpo:'Isla Teja'},
    {idPoligono:1,idTpo:2,nombretpo:'Centro'},
    {idPoligono:1,idTpo:3,nombretpo:'El Bosque'},
    {idPoligono:1,idTpo:4,nombretpo:'Villa del Rey'},
    {idPoligono:1,idTpo:5,nombretpo:'Barrios Bajos'},
    {idPoligono:1,idTpo:6,nombretpo:'Regional I'},
    {idPoligono:1,idTpo:7,nombretpo:'Regional II'},
    {idPoligono:1,idTpo:8,nombretpo:'Regimiento'},
    {idPoligono:1,idTpo:9,nombretpo:'Yañez Zabala / Pablo Neruda'},
    {idPoligono:1,idTpo:10,nombretpo:'Altos de Mahuiza'},
    {idPoligono:1,idTpo:11,nombretpo:'Guacamayo'},
    {idPoligono:2,idTpo:12,nombretpo:'Villa Krahmer'},
    {idPoligono:2,idTpo:13,nombretpo:'San Pedro'},
    {idPoligono:2,idTpo:14,nombretpo:'Angachilla'},
    {idPoligono:2,idTpo:15,nombretpo:'Los Fundadores'},
    {idPoligono:2,idTpo:16,nombretpo:'Paillao'},
    {idPoligono:2,idTpo:17,nombretpo:'Las Gaviotas'},
    {idPoligono:2,idTpo:18,nombretpo:'Picarte 3000'},
    {idPoligono:2,idTpo:19,nombretpo:'Las Animas'},
    {idPoligono:2,idTpo:20,nombretpo:'Menzel'},
    {idPoligono:2,idTpo:21,nombretpo:'Corvi'},
    {idPoligono:2,idTpo:22,nombretpo:'Pergola de Las Flores'},
    {idPoligono:2,idTpo:23,nombretpo:'Collico'}

];
tpoli;
poligonos;    
ciudad;
region;
provincia;
d = new Date();
mes;
m;
dia;
year;
fecha;
hora;
h :number;
//DATOS CLIMA
horario;
madrugada;
manana ;
tarde;
noche ;
cerocero;
casidoce;

//PRUEBA DATOS 
dat=[];    
//DATOS DE USUARIO
SO;
idUnico;
email;


public pru:any;
    
regiones: FirebaseListObservable<any>;
provincias: FirebaseListObservable<any>;
ciudades: FirebaseListObservable<any>;
bannerInicio: FirebaseListObservable<any>;
datosUsuarios: FirebaseListObservable<any>;
pruebas: FirebaseListObservable<any>;
    
ruta;
public bencinas: any;
public ci:any;
public pr:any;
    
public tpoligono:any;
nombrePoligono:string;
    
showCon:boolean;
showDes:boolean;
estadoConexion;    
showdatas:boolean;
       
constructor(
            public navCtrl: NavController,
            public alertCtrl: AlertController,
            public database: AngularFireDatabase,
            public plt: Platform,
            private device: Device,
            private network: Network,
            public events: Events,
            private storage: Storage
            ) {
               
                this.ci = [];
                this.pr = [];
                this.tpoligono = [];
                this.pru = [];
                this.regiones = this.database.list('/regiones')
                this.provincias = this.database.list('/provincias');
                this.ciudades = this.database.list('/ciudades');
                this.bencinas = this.database.list('/Bencina');
                this.bannerInicio = this.database.list('banners');
                this.datosUsuarios = this.database.list('datosUsuarios');
                
    
                this.mes = this.d.getMonth()+1;
                if(this.mes <10){
                    this.mes = '0'+this.mes;
                }
                    this.dia = this.d.getDate();
                    if(this.dia  <10){
                    this.dia  = '0'+this.dia;
                }
                this.year = this.d.getFullYear();
                
this.fecha=  this.dia+"/"+this.mes+"/"+this.year; 
this.hora = this.d.getHours();
/***********************************************************************************/              
                this.storage.get('idCiudad').then((val) => {
                                            this.ciudad = val;
                                            console.log(this.ciudad);
                                            alert(this.ciudad);
                                        });
/***********************************************************************************/
    
this.cerocero = '0';
this.madrugada = '23';
this.manana = '07';
this.tarde = '12';
this.noche = '19';

if(this.hora >= this.cerocero && this.hora > this.noche ){
    console.log('stamos en la Noche');
    
    this.horario = 4;
}else if(this.hora > this.manana && this.hora < this.tarde ){
    console.log('estamos en mañana');
    this.horario = 2;
}else if(this.hora >= this.tarde && this.hora <= this.noche){
    console.log('estamos en Tarde');
    this.horario = 3;
}else if(this.hora >= this.cerocero && this.hora < this.manana){
    console.log('stamos en la madrugada')
    this.horario = 1;
}

    
  
plt.ready().then(() => {
    
if(this.plt.is('cordova')){
       let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
  this.showDes = true;
    this.showCon = false;
  let alert = this.alertCtrl.create({
      title: 'No estas Conectado a Internet',
      subTitle: 'Porfavor Revisa tu Conexion a Internet y Vuelve a intertarlo',
      buttons: ['OK']
    });
    alert.present();
    
});
    
    // watch network for a connection
/*let connectSubscription = this.network.onConnect().subscribe(() => {
     this.showCon = true;
    this.showDes = false;
  let alert = this.alertCtrl.create({
      title: 'Conectado a Internet',
      subTitle: 'Tienes Conexion a Internet, Todo está OK',
      buttons: ['OK']
    });
    //alert.present();

});*/

    console.log('cordova plugin run');
}else{
    console.log('no cordova')
}
 
})
    
    


}//FIN CONTRUCTOR
  
    

   // create()    
 getProvincias(idRegion){
    this.pr = [];
    
this.provincias.forEach(pro =>{
        pro.forEach(pr =>{
            if(pr.idRegion == idRegion){
                this.pr.push(pr);
            }else{
                    this.dat = [{ done: false, idProvincia: "0", idRegion: "0", nombreProvincia: "DEBE SELECCIONAR UNA REGION"}];
                this.pr.push(this.dat);    
            }
        })
    })

}
    
getCiudades(idProvincia){
if(idProvincia == 1){
    //this.showdatas = true;
}else{
    this.showdatas = false;
}
    this.ci = [];
        this.ciudades.forEach(ciudad =>{
        ciudad.forEach(esta =>{
            if(esta.idProvincia == idProvincia){
                this.ci.push(esta);
            }
        })
    })
}
    
    
getpoligos(idCiudad){
    if(idCiudad == 1){
    this.showdatas = true;
    }else{
    this.showdatas = false;
    }
} 

gettpol(idPoligono){
    this.tpoligono = [];
    this.tpo.forEach(poligo =>{
            if(poligo.idPoligono == idPoligono){
            this.tpoligono.push(poligo);
            }
    })
}

    showAlertPoligono() {
    let alert = this.alertCtrl.create({
        title: 'Poligono (A o B)',
      subTitle: 'Seleccione Poligono según Corresponda su Sector',
      buttons: ['OK']
    });
    alert.present();
}
  showAlertZonaPoligono() {
    let alert = this.alertCtrl.create({
      title: 'Zona Poligono',
      subTitle: 'Seleccione Sector Donde Actualmente Reside',
      buttons: ['OK']
    });
    alert.present();
}

showAlertRegion() {
    let alert = this.alertCtrl.create({
      title: 'Región',
      subTitle: '<p>Seleccione Región</p>',
      buttons: ['OK']
    });
    alert.present();
}
showAlertProvincia() {
    let alert = this.alertCtrl.create({
      title: 'Provincia',
      subTitle: 'Seleccione Provincia',
      buttons: ['OK']
    });
    alert.present();
}
showAlertCiudad() {
    let alert = this.alertCtrl.create({
      title: 'Ciudad',
      subTitle: 'Seleccione Ciudad',
      buttons: ['OK']
    });
    alert.present();
}
    
nextInfoPrincipal(idCiudad,idProvincia,idRegion){
    //VALIDAMOS QUE LA VARIBOE REGION ESTE BACIA 
    if(this.region === undefined || this.region === ""){
        this.showAlertRegion();
    }else{

        if(this.provincia === undefined || this.provincia === ""){

            this.showAlertProvincia();
        }else{
                    if(this.ciudad === undefined || this.ciudad === ""){
                        this.showAlertCiudad();
                    }else{
                        //SI LA EL ID DE LA CIUDAD ES DISTINTO A VALDIVIA O A 1 
                            if(this.ciudad != 1){
                                //alert(this.ciudad);
                                if(this.plt.is('cordova')){
                                    this.storage.set('idCiudad', idCiudad);
                                        this.storage.set('idProvincia', idProvincia);
                                        this.storage.set('idRegion', idRegion);
                                        this.storage.set('idPoligono', this.poligonos);
                                        this.storage.set('idZonaPoligono', this.tpoli);

                                        this.storage.get('idCiudad').then((val) => {
                                            this.ciudad = val;
                                            console.log('CIUDAD'+this.ciudad);
                                        });
                                }else{
                                    alert('no corodva')
                                }
                                
                                
                                        this.navCtrl.push(infoPrincipalPage,{

                                            idCiudad:idCiudad,
                                            idProvincia:idProvincia,
                                            idRegion:idRegion,
                                            fecha:this.fecha,
                                            idHorario: this.horario,
                                            idPoligono:this.poligonos,
                                            idZonaPoligono:this.tpoli,
                                        });          
                                }else{ // if(this.ciudad != 1){
                                        
                                    if(this.poligonos == '' || this.poligonos === undefined){
                                       // alert('seleccione poligono');
                                        this.showAlertPoligono();
                                    }else{
                                        
                                        if(this.tpoli === undefined){
                                            this.showAlertZonaPoligono();
                                        }else{
                                            this.navCtrl.push(infoPrincipalPage,{
                                                idCiudad:idCiudad,
                                                idProvincia:idProvincia,
                                                idRegion:idRegion,
                                                fecha:this.fecha,
                                                idHorario: this.horario,
                                                idPoligono:this.poligonos,
                                                idZonaPoligono:this.tpoli,
                                            });

                                        }//if(this.tpoli === undefined)
                                    }/// FIN if(this.poligonos == '' || this.poligonos === undefined){

                                }// FIN if(this.ciudad != 1)
                        }// FIN if(this.ciudad === undefined){

        }//FINif(this.provincia === undefined){
        
    }//FIN if(this.region === undefined){
}


ionViewDidLoad(){
    this.bannerInicio.forEach(ele =>{
        this.ruta = ele;
        })
}

}
