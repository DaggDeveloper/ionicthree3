import { Component  } from '@angular/core';

import { NavController, AlertController,NavParams } from 'ionic-angular';
import { FirebaseListObservable, AngularFireDatabase  } from 'angularfire2';
import { DetalleGasPage } from '../detalle-gas/detalle-gas';



@Component({
  selector: 'page-detalleBencinas',
  templateUrl: 'detalleBencinas.html'
})
export class detalleBencinasPage {  

///VARIBLES DE NGIF PARA MOSTRAR TEMPLATES
showGas:boolean;
listGas = [
    {idGas:'1',Tgas:'Cilindro 5K'},
    {idGas:'2',Tgas:'Cilindro 15K'},
    {idGas:'3',Tgas:'Cilindro 45K'}
    
];   
//ALMACENAMOS EL BANNER    
rutabanner;

//
nombreBencina:string;
idCiudadGlobal:number;
idProvinciaGlobal:number;
idRegionGlobal:number;
    
nombreBencinera;
precioBencina;
ubicacionBencinera;
tipoBencina;
idTipoBencina;
    
    ben: FirebaseListObservable<any>;
    gas: FirebaseListObservable<any>;
    e93: FirebaseListObservable<any>;
    s95: FirebaseListObservable<any>;
    p97: FirebaseListObservable<any>;
    gpl: FirebaseListObservable<any>;
    kero: FirebaseListObservable<any>;
    petro: FirebaseListObservable<any>;
    gasN: FirebaseListObservable<any>;
    
    b = [];
    
e93menor = 9999;
e93mayor = 0;
    
  s95menor = 9999;
  s95mayor = 0;
    
  p97menor = 9999;
  p97mayor = 0;
    
x =0;
y =0;
a =0;
e =0;
    
constructor(
            public navCtrl: NavController,
            public alertCtrl: AlertController,
            public navParams: NavParams,
            public database: AngularFireDatabase
            ) 
{
                
                this.idTipoBencina = this.navParams.get('idTipoBencina');
                this.idCiudadGlobal = this.navParams.get('idCiudad');
                this.idProvinciaGlobal = this.navParams.get('idProvincia');
                this.idRegionGlobal = this.navParams.get('idRegion');
                
                this.gas = this.database.list('/gas');
          
    


   
this.ben = this.database.list('/Bencina', {
  query: {
    orderByChild: 'precioBencina'
  }
    });
      
/*this.ben.subscribe(queriedItems => {
  //console.log(queriedItems); 
    
    queriedItems.forEach(ele =>{
    
            if(ele.idCiudad == this.idCiudadGlobal){
                console.log(ele.precioBencina)
                this.b.push(ele);
            }
    
        })
    })*/
    


    
 this.ben.forEach(element =>{
                        this.b = [];
                    element.forEach(el =>{
                           // console.log(el)
                          
                            if(el.idCiudad == this.idCiudadGlobal){
                                //console.log(ele)
                                    if(el.idTipoBencina == this.idTipoBencina){
                                       
                                         this.b.push(el);
    console.log(this.b);
                                        console.log(this.b.reverse());
                                           /* if(parseInt(el.precioBencina) >= this.e93mayor){
                                                    
                                                this.e93mayor = el.precioBencina;
                                                   
                                                   
                                                
                                                                if(this.e93mayor > this.x){
                                                                    this.x = this.e93mayor;
                                                                       // console.log(el);
                                                                }
                                                            
                                                    //console.log(this.e93mayor)
                                                
                                                
                                            }//if(parseInt(el.precioBencina) >= this.e93mayor){*/
                                        
                                        
                                    }else{
                                        
                                    }//if(el.idTipoBencina == this.idTipoBencina){
                             
                            }//if(el.idCiudad == this.idCiudadGlobal){
                        })
 })
   // console.log(this.ben)
if(this.idTipoBencina == 7){
    this.showGas = true;
    
    this.e93 = this.database.list('/GasNormal', { preserveSnapshot: true });//
    
    this.e93
  .subscribe(snapshots => {
    snapshots.forEach(snapshot => {
     // console.log(snapshot.key)
        if(this.idCiudadGlobal == snapshot.key){
   // console.log(snapshot.val().rutaimg)
            this.rutabanner = snapshot.val().rutaimg;
             
      
        }   
     
    });
  })
}else if(this.idTipoBencina == 1){
    this.e93 = this.database.list('/especial93', { preserveSnapshot: true });//
    
    this.e93
  .subscribe(snapshots => {
    snapshots.forEach(snapshot => {
     // console.log(snapshot.key)
        if(this.idCiudadGlobal == snapshot.key){
   // console.log(snapshot.val().rutaimg)
            this.rutabanner = snapshot.val().rutaimg;
             
      
        }   
     
    });
  })
    
}else if(this.idTipoBencina == 2){
    this.s95 = this.database.list('/super95', { preserveSnapshot: true });
     this.s95
  .subscribe(snapshots => {
    snapshots.forEach(snapshot => {
      //console.log(snapshot.key)
        if(this.idCiudadGlobal == snapshot.key){
    //console.log(snapshot.val().rutaimg)
            this.rutabanner = snapshot.val().rutaimg;
             
      
        }   
     
    });
  })
}else if(this.idTipoBencina == 3){
    this.p97 = this.database.list('/premiun97', { preserveSnapshot: true });
     this.p97
  .subscribe(snapshots => {
    snapshots.forEach(snapshot => {
      //console.log(snapshot.key)
        if(this.idCiudadGlobal == snapshot.key){
    //console.log(snapshot.val().rutaimg)
            this.rutabanner = snapshot.val().rutaimg;
             
      
        }   
     
    });
  })
}else if(this.idTipoBencina == 4){
    this.gpl = this.database.list('/GLPVehicular', { preserveSnapshot: true });
     this.gpl
  .subscribe(snapshots => {
    snapshots.forEach(snapshot => {
        //console.log(snapshot.key)
        if(this.idCiudadGlobal == snapshot.key){
        //console.log(snapshot.val().rutaimg)
            this.rutabanner = snapshot.val().rutaimg;
             
      
        }   
     
    });
  })
}else if(this.idTipoBencina == 5){
    this.kero = this.database.list('/Kerosene', { preserveSnapshot: true });
     this.kero
  .subscribe(snapshots => {
    snapshots.forEach(snapshot => {
      //console.log(snapshot.key)
        if(this.idCiudadGlobal == snapshot.key){
            //console.log(snapshot.val().rutaimg)
            this.rutabanner = snapshot.val().rutaimg;
             
      
        }   
     
    });
  })
}else if(this.idTipoBencina == 6){
    this.petro = this.database.list('/PetroleoDiesel', { preserveSnapshot: true });
     this.petro
      .subscribe(snapshots => {
        snapshots.forEach(snapshot => {
          //console.log(snapshot.key)
            if(this.idCiudadGlobal == snapshot.key){
            //console.log(snapshot.val().rutaimg)
                this.rutabanner = snapshot.val().rutaimg;
            }   

        });
      })
}else if(this.idTipoBencina == 6){
    this.petro = this.database.list('/PetroleoDiesel', { preserveSnapshot: true });
     this.petro
      .subscribe(snapshots => {
        snapshots.forEach(snapshot => {
          //console.log(snapshot.key)
            if(this.idCiudadGlobal == snapshot.key){
            //console.log(snapshot.val().rutaimg)
                this.rutabanner = snapshot.val().rutaimg;
            }   

        });
      })
}             
    
       
}
    
detalleGas(idGas: number){
    this.navCtrl.push(DetalleGasPage,{
        idGas:idGas,
        idCiudad:this.idCiudadGlobal,
        idProvincia:this.idProvinciaGlobal,
        idRegion:this.idRegionGlobal
    })
}
 
   

}
