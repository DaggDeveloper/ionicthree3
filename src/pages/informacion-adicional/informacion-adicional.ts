import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FirebaseListObservable, AngularFireDatabase  } from 'angularfire2';
import { TuciudadaldiaPage } from '../tuciudadaldia/tuciudadaldia';

/*
  Generated class for the InformacionAdicional page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-informacion-adicional',
  templateUrl: 'informacion-adicional.html'
})
export class InformacionAdicionalPage {
    
    
//CARGAMOS LOS DATOS DE BANNER
Blistatuciudadaldia: FirebaseListObservable<any>;
//LAMACNAMOS EL BANNER     
rutabanner;
    
    
 TuCiudad = [
     {id:1,nombre:'Recomendaciones o Noticias Actuales'},
     {id:2,nombre:'Plan Cuadrante'},
     {id:4,nombre:'Centro de Salud Familiar (Cesfam)'},
     {id:6,nombre:'Revisión Técnica'},
     {id:3,nombre:'Trasporte Público'},
     {id:5,nombre:'Programas Sociales '},
     {id:7,nombre:'Servicios Públicos ( Horarios, Telefonos, Etc.)'},
     {id:8,nombre:'Centro Comecial (Mall, Galerias, Etc.)'},
     {id:9,nombre:'Supermercados'},
     {id:10,nombre:'Hotel, Cabañas'}
  ];
    
    
idCiudadGlobal:number;
idProvinciaGlobal:number;
idRegionGlobal:number;
    
nombreCiudad:string;
    
lista:FirebaseListObservable<any>;  
    
  constructor(public navCtrl: NavController, 
                public navParams: NavParams,
                public database: AngularFireDatabase) {
      
                this.lista = this.database.list('/informacion_Adicional');
      
                this.idCiudadGlobal = this.navParams.get('idCiudad');
                this.idProvinciaGlobal = this.navParams.get('idProvincia');
                this.idRegionGlobal = this.navParams.get('idRegion');
                this.nombreCiudad = this.navParams.get('nombreCiudad');
    console.log(this.idCiudadGlobal+"-"+this.idProvinciaGlobal+"-"+this.idRegionGlobal+"-"+this.nombreCiudad);
  }
nextInfo(idOpcion: number, nombreOpcion: string){
      this.navCtrl.push(TuciudadaldiaPage,{
          idOpcion: idOpcion,
          nombreOpcion:nombreOpcion,
        idCiudad:this.idCiudadGlobal,
        idProvincia:this.idProvinciaGlobal,
        idRegion:this.idRegionGlobal,
        nombreCiudad:this.nombreCiudad,
    });
  }
    
    
    
  ionViewDidLoad() {
    console.log('ionViewDidLoad InformacionAdicionalPage');
      this.Blistatuciudadaldia = this.database.list('/Btuciudadaldia', { preserveSnapshot: true });//
    
    this.Blistatuciudadaldia
  .subscribe(snapshots => {
    snapshots.forEach(snapshot => {
        if(this.idCiudadGlobal == snapshot.key){
            this.rutabanner = snapshot.val().rutaimg;
    console.log(this.rutabanner);
        }   
    });
  })
 
  }

}
