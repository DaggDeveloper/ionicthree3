import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Network } from '@ionic-native/network';


@Injectable()
export class DaggService {
    
   
    
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


r = [
    {idRegion:1,nombreRegion:'XVI Región de los Ríos'},
    {idRegion:2,nombreRegion:'Otra'}
  ];
p = [
    {idProvincia:1,nombreProvincia:'Valdivia',idRegion:1},
    {idProvincia:2,nombreProvincia:'Del Ranco',idRegion:1},
    {idProvincia:3,nombreProvincia:'No hay Provinvias Disponibles',idRegion:2}
    
    
];
         
    
po = [
    {idPoligono:1,nombrePoligono:'Poligono A'},
    {idPoligono:2,nombrePoligono:'Poligono B'}
]


c = [
    {idCiudad:1,nombreCiudad:'Valdivia',idProvincia:1,idRegion:1},
    {idCiudad:2,nombreCiudad:'Corral',idProvincia:1,idRegion:1},
    {idCiudad:3,nombreCiudad:'Lanco',idProvincia:1,idRegion:1},
    {idCiudad:4,nombreCiudad:'Los Lagos',idProvincia:1,idRegion:1},
    {idCiudad:5,nombreCiudad:'Mafil',idProvincia:1,idRegion:1},
    {idCiudad:6,nombreCiudad:'Mariquina',idProvincia:1,idRegion:1},
    {idCiudad:7,nombreCiudad:'Panguipulli',idProvincia:1,idRegion:1},
    {idCiudad:8,nombreCiudad:'Futrono',idProvincia:2,idRegion:1},
    {idCiudad:9,nombreCiudad:'La Union',idProvincia:2,idRegion:1},
    {idCiudad:10,nombreCiudad:'Lago Ranco',idProvincia:2,idRegion:1},
    {idCiudad:11,nombreCiudad:'Rio Bueno',idProvincia:2,idRegion:1},
    {idCiudad:12,nombreCiudad:'NO HAY CIUDADPARA ESTÁ PROVINCIA',idProvincia:3,idRegion:2}
    ];

 info = [
        {idnfo:1,tituloInfo:'Información',descripcionInfo:'esto es una descripcion de Valdivia adicional',fechaPublicacion:Date(),userAdmin:'Dagg',idCiudad:'1'},
        {idnfo:2,tituloInfo:'Información',descripcionInfo:'esto es una descripcion de los info adicionalksajdkjaskdjakjdakjsdkajsdajsdkjadk askdkasdaksndaksd dka sdkansdk ada sd sdkas doasdkas dkas ',fechaPublicacion:Date(),userAdmin:'Dagg',idCiudad:'2'},
        {idnfo:3,tituloInfo:'Información',descripcionInfo:'esto es una descripcion de los info adicional',fechaPublicacion:Date(),userAdmin:'Dagg',idCiudad:'3'},
        {idnfo:4,tituloInfo:'Información',descripcionInfo:'esto es una descripcion de los info adicional',fechaPublicacion:Date(),userAdmin:'Dagg',idCiudad:'4'},
        {idnfo:5,tituloInfo:'Información',descripcionInfo:'esto es una descripcion de los info adicional',fechaPublicacion:Date(),userAdmin:'Dagg',idCiudad:'5'},
        {idnfo:6,tituloInfo:'Información',descripcionInfo:'esto es una descripcion de los info adicional',fechaPublicacion:Date(),userAdmin:'Dagg',idCiudad:'6'},
        {idnfo:7,tituloInfo:'Información',descripcionInfo:'esto es una descripcion de los info adicional',fechaPublicacion:Date(),userAdmin:'Dagg',idCiudad:'7'},
        {idnfo:8,tituloInfo:'Información',descripcionInfo:'esto es una descripcion de los info adicional',fechaPublicacion:Date(),userAdmin:'Dagg',idCiudad:'8'},
        {idnfo:9,tituloInfo:'Información',descripcionInfo:'esto es una descripcion de los info adicional',fechaPublicacion:Date(),userAdmin:'Dagg',idCiudad:'9'},
        {idnfo:10,tituloInfo:'Información',descripcionInfo:'esto es una descripcion de los info adicional',fechaPublicacion:Date(),userAdmin:'Dagg',idCiudad:'10'},
        {idnfo:11,tituloInfo:'Información',descripcionInfo:'esto es una descripcion de los info adicional',fechaPublicacion:Date(),userAdmin:'Dagg',idCiudad:'11'}
        
    ];
clima = [
        
        {idClima:1,nombreClima:'Tan Callendo los Jotes Asados',idCiudad:'1'},
        {idClima:2,nombreClima:'Nublados',idCiudad:'2'},
        {idClima:3,nombreClima:'Soleados',idCiudad:'3'}, 
        {idClima:4,nombreClima:'LLuvioso',idCiudad:'4'},
        {idClima:5,nombreClima:'Como que no quiere la cosa',idCiudad:'5'},
        {idClima:6,nombreClima:'23°',idCiudad:'6'},
        {idClima:7,nombreClima:'50°',idCiudad:'7'},
        {idClima:8,nombreClima:'81°',idCiudad:'8'},
        {idClima:9,nombreClima:'23°',idCiudad:'9'},
        {idClima:10,nombreClima:'esta Pulento pa una xelas',idCiudad:'10'},
        {idClima:11,nombreClima:'mas Calor que la XUXA',idCiudad:'11'}
    ];
 datosFarmacias = [
        {idFarmacia:1,nombrefarmacia:'Cruz Verde',ubicacionFarmacia:'calle',fechaPublicacion:Date(),UserAdmin:'Dagg',idCiudad:'1'},
        {idFarmacia:2,nombrefarmacia:'Farmacia Ahumada',ubicacionFarmacia:'calle',fechaPublicacion:Date(),UserAdmin:'Dagg',idCiudad:'2'},
        {idFarmacia:3,nombrefarmacia:'Salcobran',ubicacionFarmacia:'calle',fechaPublicacion:Date(),UserAdmin:'Dagg',idCiudad:'3'},
        {idFarmacia:4,nombrefarmacia:'Doctor Simi',ubicacionFarmacia:'calle',fechaPublicacion:Date(),UserAdmin:'Dagg',idCiudad:'4'},
        {idFarmacia:5,nombrefarmacia:'Farmacia Prat',ubicacionFarmacia:'calle',fechaPublicacion:Date(),UserAdmin:'Dagg',idCiudad:'5'},
        {idFarmacia:6,nombrefarmacia:'Cruz Verde',ubicacionFarmacia:'calle',fechaPublicacion:Date(),UserAdmin:'Dagg',idCiudad:'6'},
        {idFarmacia:7,nombrefarmacia:'Farmacia Prat',ubicacionFarmacia:'calle',fechaPublicacion:Date(),UserAdmin:'Dagg',idCiudad:'7'},
        {idFarmacia:8,nombrefarmacia:'Farmacia Ahumada',ubicacionFarmacia:'calle',fechaPublicacion:Date(),UserAdmin:'Dagg',idCiudad:'8'},
        {idFarmacia:9,nombrefarmacia:'Cruz Verde',ubicacionFarmacia:'calle',fechaPublicacion:Date(),UserAdmin:'Dagg',idCiudad:'9'},
        {idFarmacia:10,nombrefarmacia:'Salcobran',ubicacionFarmacia:'calle',fechaPublicacion:Date(),UserAdmin:'Dagg',idCiudad:'10'},
        {idFarmacia:11,nombrefarmacia:'Cruz Verde',ubicacionFarmacia:'calle',fechaPublicacion:Date(),UserAdmin:'Dagg',idCiudad:'11'},
        {idFarmacia:12,nombrefarmacia:'Salcobran',ubicacionFarmacia:'calle',fechaPublicacion:Date(),UserAdmin:'Dagg',idCiudad:'12'},
        {idFarmacia:13,nombrefarmacia:'Farmacia Ahumada',ubicacionFarmacia:'calle',fechaPublicacion:Date(),UserAdmin:'Dagg',idCiudad:'13'},
        {idFarmacia:14,nombrefarmacia:'Cruz Verde',ubicacionFarmacia:'calle',fechaPublicacion:Date(),UserAdmin:'Dagg',idCiudad:'14'}
        
    ];
datosBencinera = [
        {idBencinera:1,nombreBencinera:'Copec',ubicacionBencinera:'calle',fechaPublicacion:Date(),UserAdmin:'Dagg',idCiudad:'1'},
        {idBencinera:2,nombreBencinera:'Shell',ubicacionBencinera:'calle',fechaPublicacion:Date(),UserAdmin:'Dagg',idCiudad:'2'},
        {idBencinera:3,nombreBencinera:'Otra',ubicacionBencinera:'calle',fechaPublicacion:Date(),UserAdmin:'Dagg',idCiudad:'3'},
        {idBencinera:1,nombreBencinera:'Copec',ubicacionBencinera:'calle',fechaPublicacion:Date(),UserAdmin:'Dagg',idCiudad:'4'},
        {idBencinera:2,nombreBencinera:'Shell',ubicacionBencinera:'calle',fechaPublicacion:Date(),UserAdmin:'Dagg',idCiudad:'5'},
        {idBencinera:3,nombreBencinera:'Otra',ubicacionBencinera:'calle',fechaPublicacion:Date(),UserAdmin:'Dagg',idCiudad:'6'},
        {idBencinera:1,nombreBencinera:'Copec',ubicacionBencinera:'calle',fechaPublicacion:Date(),UserAdmin:'Dagg',idCiudad:'7'},
        {idBencinera:2,nombreBencinera:'Shell',ubicacionBencinera:'calle',fechaPublicacion:Date(),UserAdmin:'Dagg',idCiudad:'8'},
        {idBencinera:3,nombreBencinera:'Otra',ubicacionBencinera:'calle',fechaPublicacion:Date(),UserAdmin:'Dagg',idCiudad:'9'},
        {idBencinera:1,nombreBencinera:'Copec',ubicacionBencinera:'calle',fechaPublicacion:Date(),UserAdmin:'Dagg',idCiudad:'10'},
        {idBencinera:2,nombreBencinera:'Shell',ubicacionBencinera:'calle',fechaPublicacion:Date(),UserAdmin:'Dagg',idCiudad:'11'},
        {idBencinera:3,nombreBencinera:'Otra',ubicacionBencinera:'calle',fechaPublicacion:Date(),UserAdmin:'Dagg',idCiudad:'12'}
    ];
    
disconnectSubscription;
connectSubscription;
estado;  
    
constructor(private network: Network) {


}
 
public conectado(){
    return this.network.onConnect().subscribe(data => console.log(data), error => console.log(error));
    //this.network.onDisconnect().subscribe(data => console.log(data), error => console.log(error));
}
/*public desconectado(){
     this.disconnectSubscription = this.network.onDisconnect().subscribe(() => {
          console.log('network was disconnected :-(');
         this.estado = true;
       

        });
    return this.estado;
}*/
    

   
    
}
