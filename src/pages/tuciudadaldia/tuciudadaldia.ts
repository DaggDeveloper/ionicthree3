import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FirebaseListObservable, AngularFireDatabase  } from 'angularfire2';

//import { TuciudadaldiaPage } from '../tuciudadaldia/tuciudadaldia';

/*
  Generated class for the Tuciudadaldia tabs.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Component({
  selector: 'page-tuciudadaldia',
  templateUrl: 'tuciudadaldia.html'
})
export class TuciudadaldiaPage {

    
///VARIBLES DE NGIF PARA MOSTRAR TEMPLATES
showInfoAdicional:boolean;
showPlanCuadrante:boolean;
showcentrosMedicos:boolean;
showchilealdia:boolean;
showrevisionTecnica:boolean;
showmall:boolean;
showsupermercado:boolean;
showhoteles:boolean;
showprogramassociales:boolean;
showlocomocion:boolean;

    
idCiudadGlobal:number;
idProvinciaGlobal:number;
idRegionGlobal:number;
    
nombreCiudad:string;
    
idOpcion:number;
nombreOpcion:string;
    
//DATOS INFO PRINCIPAL
informacion;
//DATOS PLAN CUADRANTE
cuadrante;
idCuadrante;
recintoCargo;
telefonoCuadrante;
zonaCuadrante;
  
//CARGAMOS LOS DATOS DE BANNER
BNoticiasActuales: FirebaseListObservable<any>;
//CARGAMOS LOS DATOS DE BANNER
BPlanCuadrante: FirebaseListObservable<any>;
//CARGAMOS LOS DATOS DE BANNER
BCentroSaludFamiliar: FirebaseListObservable<any>;
//CARGAMOS LOS DATOS DE BANNER
BRevisionTecnica: FirebaseListObservable<any>;
//CARGAMOS LOS DATOS DE BANNER
BTransportePublico: FirebaseListObservable<any>;
//CARGAMOS LOS DATOS DE BANNER
BProgramasSociales: FirebaseListObservable<any>;
//CARGAMOS LOS DATOS DE BANNER
BChilealDia: FirebaseListObservable<any>;   
//CARGAMOS LOS DATOS DE BANNER
BCentroComercial : FirebaseListObservable<any>;
//CARGAMOS LOS DATOS DE BANNER
BHotelesCabanas : FirebaseListObservable<any>;  
//CARGAMOS LOS DATOS DE BANNER 
BSupermercado  : FirebaseListObservable<any>;   
//LAMACNAMOS EL BANNER 
rutabanner;
    
infoAdicional:FirebaseListObservable<any>; 
ia= [];
planCuadrante:FirebaseListObservable<any>; 
pc = [];
centrosMedicos:FirebaseListObservable<any>; 
cm = [];
hoteles:FirebaseListObservable<any>; 
ho = [];
chilealdia:FirebaseListObservable<any>; 
chd = [];
revisionTecnica:FirebaseListObservable<any>; 
rt = [];
locomocion:FirebaseListObservable<any>; 
lc = [];
supermercado:FirebaseListObservable<any>;
sp = [];
mall:FirebaseListObservable<any>;
mll = [];
programassociales:FirebaseListObservable<any>;
ps = [];
  constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public database: AngularFireDatabase) {
            
                    this.infoAdicional = this.database.list('/informacion_Adicional');
                    this.planCuadrante = this.database.list('/plan_cuadrante');
                    this.centrosMedicos = this.database.list('/centros_medicos');
                    this.chilealdia = this.database.list('/chilealdia');
                    this.hoteles = this.database.list('/hotel');
                    this.revisionTecnica = this.database.list('/revision_tecnica');
                    this.locomocion = this.database.list('/locomocion');
                    this.supermercado = this.database.list('/supermercado');
                    this.mall = this.database.list('/mall');
                    this.programassociales = this.database.list('/programassociales');
                  

      
      
                this.idOpcion = this.navParams.get('idOpcion');
                this.nombreOpcion = this.navParams.get('nombreOpcion');
                this.idCiudadGlobal = this.navParams.get('idCiudad');
                this.idProvinciaGlobal = this.navParams.get('idProvincia');
                this.idRegionGlobal = this.navParams.get('idRegion');
                this.nombreCiudad = this.navParams.get('nombreCiudad');
      
      
      

    
   
      
if(this.idOpcion == 1){
    
    this.showInfoAdicional = true;
    this.infoAdicional.forEach(ele =>{
    //console.log(ele);
        this.ia = [];
        ele.forEach(data =>{
            if(this.idCiudadGlobal == data.idCiudad){

                this.ia.push(data);
            }
        })
    })
    this.BNoticiasActuales = this.database.list('/Bnoticiasactuales', { preserveSnapshot: true });//
     this.BNoticiasActuales
      .subscribe(snapshots => {
        snapshots.forEach(snapshot => {
            if(this.idCiudadGlobal == snapshot.key){
                this.rutabanner = snapshot.val().rutaimg;
                console.log(this.rutabanner);
            }   
        });
      })
    
    
}else if(this.idOpcion == 2){
  this.showPlanCuadrante = true;
    this.planCuadrante.forEach(ele =>{
    //console.log(ele);
        this.pc = [];
        ele.forEach(data =>{
            if(this.idCiudadGlobal == data.idCiudad){
              // console.log(data)
                this.pc.push(data);
            }
    
        })
    })
    this.BPlanCuadrante = this.database.list('/BPlanCuadrante', { preserveSnapshot: true });//
     this.BPlanCuadrante
      .subscribe(snapshots => {
        snapshots.forEach(snapshot => {
            if(this.idCiudadGlobal == snapshot.key){
                this.rutabanner = snapshot.val().rutaimg;
                console.log(this.rutabanner);
            }   
        });
      })
}else if(this.idOpcion == 3){
  this.showlocomocion = true;
    this.locomocion.forEach(ele =>{
this.lc = [];
        ele.forEach(data =>{
            if(this.idCiudadGlobal == data.idCiudad){
                    this.lc.push(data);
              
            }
        })
    })
    
this.BTransportePublico = this.database.list('/BTransportePublico', { preserveSnapshot: true });//
     this.BTransportePublico
      .subscribe(snapshots => {
        snapshots.forEach(snapshot => {
            if(this.idCiudadGlobal == snapshot.key){
                this.rutabanner = snapshot.val().rutaimg;
                console.log(this.rutabanner);
            }   
        });
      })
       
    
}else if(this.idOpcion == 4){
  this.showcentrosMedicos = true;
    
    this.centrosMedicos.forEach(ele =>{
        this.cm = [];
        ele.forEach(data =>{
            if(this.idCiudadGlobal == data.idCiudad){
              
                    //console.log(data)
                    this.cm.push(data);
            }
        })
    })
    this.BCentroSaludFamiliar = this.database.list('/BCentroSaludFamiliar', { preserveSnapshot: true });//
     this.BCentroSaludFamiliar
      .subscribe(snapshots => {
        snapshots.forEach(snapshot => {
            if(this.idCiudadGlobal == snapshot.key){
                this.rutabanner = snapshot.val().rutaimg;
                console.log(this.rutabanner);
            }   
        });
      })
}else if(this.idOpcion == 5){
  this.showprogramassociales = true;
    this.programassociales.forEach(ele =>{
this.ps = [];
        ele.forEach(data =>{
        
              if(this.idCiudadGlobal == data.idCiudad){
                    //console.log(data)
                    this.ps.push(data);
              }
            
        })
    })

this.BProgramasSociales = this.database.list('/BProgramasSociales', { preserveSnapshot: true });//
     this.BProgramasSociales
      .subscribe(snapshots => {
        snapshots.forEach(snapshot => {
            if(this.idCiudadGlobal == snapshot.key){
                this.rutabanner = snapshot.val().rutaimg;
                console.log(this.rutabanner);
            }   
        });
      })
}else if(this.idOpcion == 6){
  this.showrevisionTecnica = true;
    this.revisionTecnica.forEach(ele =>{
this.rt = [];
        ele.forEach(data =>{
            if(this.idCiudadGlobal == data.idCiudad){
                this.rt.push(data);          
            }
        })
    })
    
    this.BRevisionTecnica = this.database.list('/BRevisionTecnica', { preserveSnapshot: true });//
     this.BRevisionTecnica
      .subscribe(snapshots => {
        snapshots.forEach(snapshot => {
            if(this.idCiudadGlobal == snapshot.key){
                this.rutabanner = snapshot.val().rutaimg;
                console.log(this.rutabanner);
            }   
        });
      })
}else if(this.idOpcion == 7){
  this.showchilealdia = true;
    this.chilealdia.forEach(ele =>{
        this.chd = [];
        ele.forEach(data =>{
            if(this.idCiudadGlobal == data.idCiudad){
                   // console.log(data)
                    this.chd.push(data);
            }

        })
    })

 this.BChilealDia = this.database.list('/BChilealDia', { preserveSnapshot: true });//
     this.BChilealDia
      .subscribe(snapshots => {
        snapshots.forEach(snapshot => {
            if(this.idCiudadGlobal == snapshot.key){
                this.rutabanner = snapshot.val().rutaimg;
                console.log(this.rutabanner);
            }   
        });
      })
}else if(this.idOpcion == 8){
  this.showmall = true;
    this.mall.forEach(ele =>{
        this.mll = [];
        ele.forEach(data =>{
            if(this.idCiudadGlobal == data.idCiudad){
                   // console.log(data)
                    this.mll.push(data);
            }

        })
    })

 this.BCentroComercial = this.database.list('/BCentroComercial', { preserveSnapshot: true });//
     this.BCentroComercial
      .subscribe(snapshots => {
        snapshots.forEach(snapshot => {
            if(this.idCiudadGlobal == snapshot.key){
                this.rutabanner = snapshot.val().rutaimg;
                console.log(this.rutabanner);
            }   
        });
      })
}else if(this.idOpcion == 9){
  this.showsupermercado = true;
    this.supermercado.forEach(ele =>{
        this.sp = [];
        ele.forEach(data =>{
            if(this.idCiudadGlobal == data.idCiudad){
                    //console.log(data)
                    this.sp.push(data);
            }

        })
    })
    
 this.BSupermercado = this.database.list('/BSupermercado', { preserveSnapshot: true });//
     this.BSupermercado
      .subscribe(snapshots => {
        snapshots.forEach(snapshot => {
            if(this.idCiudadGlobal == snapshot.key){
                this.rutabanner = snapshot.val().rutaimg;
                console.log(this.rutabanner);
            }   
        });
      })
}else if(this.idOpcion == 10){
  this.showhoteles = true;
    this.hoteles.forEach(ele =>{
        this.ho = [];
        ele.forEach(data =>{
            if(this.idCiudadGlobal == data.idCiudad){
                    //console.log(data)
                    this.ho.push(data);
            }

        })
    })

this.BHotelesCabanas = this.database.list('/BHotelesCabanas', { preserveSnapshot: true });//
     this.BHotelesCabanas
      .subscribe(snapshots => {
        snapshots.forEach(snapshot => {
            if(this.idCiudadGlobal == snapshot.key){
                this.rutabanner = snapshot.val().rutaimg;
                console.log(this.rutabanner);
            }   
        });
      })
}
    
      
       console.log(this.idCiudadGlobal+"-"+this.idProvinciaGlobal+"-"+this.idRegionGlobal+"-"+this.nombreCiudad+'-'+this.nombreOpcion+'-'+this.idOpcion);
  }

}