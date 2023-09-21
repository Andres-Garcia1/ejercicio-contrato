interface Empresa {
    nombre: string;
    apellido: string,
    direccion: string;
   nit: number;
   numero:number;
   barrio:string;
   ciudad:string;
   
  }

 
  interface Persona {
    nombre: string;
    apellido:string;
    direccion: string;
    barrio:string,
    ciudad:string,
    correo:string,
    numeroIdentificacion: number;
    numeroTelefonico:number;
    cargo:string;
    salario:number;
  }
  

  class Empleador implements Empresa {
    constructor(
      public nombre: string,
      public apellido: string,
      public direccion: string,
      public nit: number,
      public numero:number,
      public barrio:string,
      public ciudad:string
    ) {}
  
  }
  

  class Empleado implements Persona {
    constructor(
      public nombre: string,
      public apellido:string,
      public direccion: string,
      public barrio:string,
      public ciudad:string,
      public correo:string,
      public numeroIdentificacion: number,
      public numeroTelefonico:number,
      public cargo:string,
      public salario:number
    ) {}
  
  }
 
  const Representante = new Empleador("Mauricio", "Guzman","carrera 2 # 35-52" ,45855,3206544875,"Poblado","Medellin");

  const COLABORADOR = new Empleado("Esteban ", "Garcia", "CRA 1 A 13 #73-55","Ingenio","Cali","Esteban.garcia@gmail.com",114418777,3104174458,"Desarrollador de software",3000000);

  const compania =new Empleador("IAS SOFTWARE", "","Calle 30A # 82A - 26" ,245,604544788,"Belen","Medellin")

  let contrato:string=`Contrato laboral  entre   ${Representante.nombre} ${Representante.apellido} representante legal de la empresa ${ compania.nombre} 
  ubicada en la direccion ${compania.direccion} en el barrio ${compania.barrio} con numero telefonico ${compania.numero} de la ciudad de ${compania.ciudad},
  el repsentante legal ${Representante.nombre} ${Representante.apellido} ubicado en la  Dirección: ${Representante.direccion} en el barrio ${Representante.barrio} 
  de la ciudad de ${Representante.ciudad} , con numero de identificacion tributaria ${Representante.nit} ,numero de telefono ${Representante.numero} 
  y el colaborador ${COLABORADOR.nombre} ${COLABORADOR.apellido} identificado con numero de documento ${COLABORADOR.numeroIdentificacion} con domicilio en ${COLABORADOR.ciudad} 
  en la direccion ${COLABORADOR.direccion} en el barrio ${COLABORADOR.barrio} con correo electronico ${COLABORADOR.correo},para el cargo de ${COLABORADOR.cargo} con un salario mensual
  de ${COLABORADOR.salario} con las siguientes responsabilidades laborales:Comprender al usuario y sus necesidades.Dar solución a problemas informáticos.
  Monitorear el desempeño de los programas, hacer mejoras y actualizaciones. Evaluar los sistemas informáticos nuevos. Desarrollar planes de proceso para la escritura de códigos.
  Supervisar a los programadores que crean los códigos. Mapeo de software para futuras actualizaciones y mejoras. `
 console.log(contrato)