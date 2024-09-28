
const imgSC1= '../../public/img/projects/sabores1.avif';
const imgSC2= '../../public/img/projects/sabores2.avif';
const imgSC3= '../../public/img/projects/sabores3.avif';
const imgSC4= '../../public/img/projects/sabores4.avif';
const amol1= '../../public/img/projects/amol1.avif';
const amol2= '../../public/img/projects/amol2.avif';
const amol3= '../../public/img/projects/amol3.avif';
const amol4= '../../public/img/projects/amol4.avif';
const sb1= '../../public/img/projects/salco.avif';
const sb2= '../../public/img/projects/salco2.avif';
const sb3= '../../public/img/projects/salco3.avif';
const sb4= '../../public/img/projects/salco4.avif';
const sb5= '../../public/img/projects/salco5.avif';
const sportpro1= '../../public/img/projects/sportpro1.avif';
const sportpro2= '../../public/img/projects/sportpro2.avif';
const sportpro3= '../../public/img/projects/sportpro3.avif';
const conomy1= '../../public/img/projects/conomy.avif';
const conomy2= '../../public/img/projects/conomy2.avif';
const conomy3= '../../public/img/projects/conomy3.avif';
const conomy4= '../../public/img/projects/conomy4.avif';
const conomy5= '../../public/img/projects/conomy5.avif';
const shopNow1 = '../../public/img/projects/shopnow2.avif';
const shopNow2 = '../../public/img/projects/shopnow1.avif';
const shopNow3 = '../../public/img/projects/shopnow3.avif';
const shopNow4 = '../../public/img/projects/shopnow4.avif';
const findMedical1 = '../../public/img/projects/findmedical1.avif';
const findMedical2 = '../../public/img/projects/findmedical2.avif';

const logoSc = '../../public/img/projects/logoSabores.avif';
const logoAmol = '../../public/img/projects/amol-logo.avif';
const logoConomy = '../../public/img/projects/conomy-logo.avif';
const logoSportpro = '../../public/img/projects/sportpro-logo.avif';
const logoSalco = '../../public/img/projects/salco-logo.avif';


const projects =[
    {
        name:"Sabores card",
        slug:'sabores-card',
        logo:logoSc,
        image:'../../public/img/projects/sabores2.avif',
        description:"Sabores card es una tarjeta de prepago digital y fisica que permite al usuario poder tener su bono de alimentación en una tarjeta de prepago en la cual podia utilizarse en distintos puntos del comercio.",
        url:'https://www.saborescard.cl/',
        stack:['react-Native', 'azureDevops', 'nodejs','react','css','javascript','graphql'],
        longDescription:"Sabores card , era  una tarjeta destinada para las empresas y organizaciones que permitia poder dar un saldo de alimentación a los trabajadores , con la ventaja que está tambien se podia usar como tarjeta prepago. En mi trayectoria en esté proyecto en conjunto con el equipo de la empresa U-payments , no enfocamos hacer que la aplicación funcionará de una manera bastante dinamica, permitiendo así que desde el back to front (bff) se pudiera hacer cambios desde el estilos , imagenes hasta de la forma en como estaba estructurada la aplicación. Este proyecto participe en su desarrollo en el area mobile desarrollandolo con React-native",
        stackImages:[imgSC1,imgSC2,imgSC3,imgSC4],
    },
    {
        name:"Nueva POS Salcobrand",
        slug:'nueva-pos-salcobrand',
        logo:logoSalco,
        image:'../../public/img/projects/salco.avif',
        description:"NuevaPOS de Salcobrand . Estuve participando en esté gran proyecto durante 1 año,en la cual basicamente es la creación de una POS completamente nueva con tecnologia de Vanguardia",
        url:'https://www.salcobrand.cl/',
        stack:['react-Native', 'css', 'redux','typescript','kotlin'],
        longDescription:"NuevaPOS de Salcobrand . Estuve participando en esté gran proyecto durante 1 año. Trataba basicamente es la creación de una POS completamente nueva con tecnología de Vanguardia que permitia a sus trabajadores hacer el flujo de caja ,ventas , obtención de canastas GES, consulta de precio mucho mas rapido , facíl y fluido que sus POS tradicionales , permitiendo así una mejor experiencia al usuario.",
        stackImages:[sb1,sb2,sb3,sb4,sb5],
    },
    {
        name:"Tarjeta Prepago de salud (AMOL)",
        slug:'tarjeta-prepago-de-salud',
        logo:logoAmol,
        image:'../../public/img/projects/amol1.avif',
        description:"AMOL- Tarjeta de salud , era una tarjeta de salud que permitia a sus usuarios poder pagar con ellas articulos y servicios relacionados a la salud",
        url:'https://www.saborescard.cl/',
        stack:['react-Native', 'azureDevops', 'nodejs','react','css','javascript','graphql'],
        longDescription:"AMOL- Tarjeta de salud , era una tarjeta de salud que permitia a sus usuarios poder pagar con ellas articulos y servicios relacionados a la salud , tambien con ella uno iba reuniendo puntos cada vez que era usada llamados “Puntos AMOL”. Estos puntos servían para intercambiarlos por servicios o productos donde estuviera vinculados con la empresa que potenciaba (Colabor@Med). El primer Ecosistema Digital de Salud en Chile, donde los usuarios pueden encontrar Esté proyecto participe casi al 100% creando la aplicación con React-Native",
        stackImages:[amol1,amol2,amol3,amol4],
    },
    {
        name:"Tarjeta Conomy (beta)",
        slug:'tarjeta-conomy',
        logo:logoConomy,
        image:'../../public/img/projects/conomy.avif',
        description:"Conomy es una aplicación inovadora que permite crear una billetera virtual en la cual uno puede almacenar diversas tarjetas bancarias y poder pagar con una sola. ",
        url:'https://www.saborescard.cl/',
        stack:['react-Native','nodejs','css','javascript','flutter','graphql'],
        longDescription:"Conomy es una aplicación inovadora que permite crear una billetera virtual en la cual uno puede almacenar diversas tarjetas bancarias y poder pagar con una sola “Conomy card”,esto permitia utilizar todas tus tarjetas en una. Ademas de poder “ahorrar” mientras compras o realizas algún pago.Ese era uno de sus fuertes. Estuve trabajando con la empresa U-payments en su Fase beta cuando era en desarrollo React-Native y Flutter. Hoy en dia le hicieron un Overhoul pasandolo 100% a Flutter.",
        stackImages:[conomy1,conomy2,conomy3,conomy4,conomy5],
    },
    {
        name:"SportPro (Deporte profesional onDemand)",
        slug:'sport-pro',
        logo:logoSportpro,
        image:'../../public/img/projects/sportpro1.avif',
        description:"SportPro es una plataforma de streaming Chilena en la cual permitia a los jugadores de diferentes deportes poder grabar mientras se encontraban en la cancha practicando o en algún torneo. Luego en la plataforma se podia ver las grabaciones de los diferentes jugadores y ver la calidad de las grabaciones , permitiendo así reaccionar y ver los 'highlights' o transmisiones en vivo de esos jugadores.",
        url:'https://www.sportpro.tv/',
        stack:['azureDevops', 'nestjs','react','css','tailwind','typescript','gcp'],
        longDescription:"SportPro es una plataforma de streaming Chilena en la cual permitia a los jugadores de diferentes deportes poder grabar mientras se encontraban en la cancha practicando o en algún torneo, luego en la plataforma se podia ver las grabaciones de los diferentes jugadores y ver la calidad de las grabaciones , permitiendo así reaccionar y ver los 'highlights' o transmisiones en vivo de esos jugadores.Primero se especializarón en poner camaras en canchas alrededor de la ciudad de Santiago de Chile, luego regiones para finalmente llegar a lugares como Miami , Estados Unidos.En ocaciones sigo trabajando para está plataforma prestando apoyo en desarrollo o mantención de la aplicación",
        stackImages:[sportpro1,sportpro2,sportpro3],
    },
];

const ownerProjects = [
    {
        name:"ShopNow! (prototipo)",
        slug:null,
        logo:null,
        image:shopNow1,
        description:"Un proyecto propio creado en React-Native que permite realizar compras a traves de ella. Basicamente es un e-commerce para un supermercado , tienda o Boutique . Es bastante personalizable despiendo al requerimiento del cliente. Este proyecto está disponible para el que desee.",
        url:null,
        stack:['react-Native', 'azureDevops', 'nestJs','tailwind','javascript','zustand'],
        longDescription:null,
        stackImages:[shopNow1,shopNow2,shopNow3,shopNow4],
    },
    {
        name:"FindMedical(prototipo)",
        slug:null,
        logo:null,
        image:findMedical1,
        description:"Un proyecto propia creado en React-Native que permite realizar busquedas de clinicas, hospitales, farmacias y otros relacionado al rubro de la salud. Esté proyecto está en construcción pero está disponible para el que desee utilizar su plantilla o su concepto.",
        url:null,
        stack:['react-Native', 'azureDevops', 'express','react','css','javascript','zustand'],
        longDescription:null,
        stackImages:[findMedical1,findMedical2],
    },
]
export  {projects,ownerProjects};