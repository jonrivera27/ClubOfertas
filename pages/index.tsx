import { ListOferta } from '@/components/list-oferta'
import { Main } from '../components/layout/Main'
import { Button } from '@nextui-org/react';



export default function Home() {



  const items = [ //ARREGLO TIENE MUCHOS ELEMENTOS DE OBJETOS 
     
    {
      id: 1,  // key=value = JSON  (OBEJETO )
      md: 12,
      title: 'Inflable Gigante',
      description:'Con este original Inflable Gigante en Forma de Sirena te sentirás como una.',
      price:'$323',
      priceDiscount: '$200',
      urlImgArticle: 'https://pin.amovil.mx/ofertasimg/2023-08-02_20:08:46_64cb13ea2c187',
      urlImgBrand: 'http://wap.amovil.mx/ofertas_alta_n/img/sanborns_img.png',
      urlPromo: 'https://www.sanborns.com.mx/producto/59698/inflable-gigante-en-forma-de-sirena-bigmouth',
    },
    {
      id: 2,
      md: 12,
      title: 'Home Nature Estante de Madera',
      description: 'El Estante de madera para almacenamiento de 4 Niveles color natural.',
      price: '$123',
      priceDiscount: '$9,00',
      urlImgArticle: 'https://pin.amovil.mx/ofertasimg/2023-08-02_20:08:58_64cb1432e6876',
      urlImgBrand: 'http://wap.amovil.mx/ofertas_alta_n/img/sanborns_img.png',
      urlPromo: 'https://www.sears.com.mx/producto/2307426/home-nature-estante-de-madera-para-almacenamiento-de-4-niveles-hn-bao541-home-nature'
    },
    {
      id: 3,
      md: 12,
      title: 'Cámara Nikon Coolpix P950',
      description: ' Zoom óptico de 83x de la nueva cámara Nikon COOLPIX P950.',
      price: '$27,499',
      priceDiscount: '$19,533',
      urlImgArticle: 'https://pin.amovil.mx/ofertasimg/2023-08-02_20:08:17_64cb14097be8c',
      urlImgBrand: 'http://wap.amovil.mx/ofertas_alta_n/img/sanborns_img.png',
      urlPromo: 'https://www.sanborns.com.mx/producto/125207/camara-nikon-coolpix-p950'
    }, 
    {
      id: 4,
      md: 6,
      title: 'Mono denim largo',
      description: '',
      price: '$1,299',
      priceDiscount: '$239',
      urlImgArticle: 'https://pin.amovil.mx/ofertasimg/2023-08-02_20:08:29_64cb14519b980',
      urlImgBrand: 'http://wap.amovil.mx/ofertas_alta_n/img/sanborns_img.png',
      urlPromo: 'https://www.bershka.com/mx/mono-denim-largo-cargo-bandeau-c0p140238205.html?colorId=428'
    },
    {
      id: 5,
      md: 6,
      title: 'CHAMARRA ALASKA ACOLCHADA',
      description: '',
      price: '$2,299',
      priceDiscount: '$1,172',
      urlImgArticle: 'https://pin.amovil.mx/ofertasimg/2023-08-02_20:08:05_64cb14b15c7d8',
      urlImgBrand: 'http://wap.amovil.mx/ofertas_alta_n/img/sanborns_img.png',
      urlPromo: 'https://mx.tommy.com/chamarra-alaska-acolchada-color-block-tommy-jeans-de-hombre-dm0dm14460-c87/p'
    },
    {
      id: 6,
      md: 6,
      title: 'Gillette Cartucho Mach 3 Sensitve',
      description: '',
      price: '$278',
      priceDiscount: '$194',
      urlImgArticle: 'https://pin.amovil.mx/ofertasimg/2023-08-02_20:08:07_64cb14efd763f',
      urlImgBrand: 'http://wap.amovil.mx/ofertas_alta_n/img/sanborns_img.png',
      urlPromo: 'https://www.farmaciasanpablo.com.mx/cuidado-personal-y-belleza/afeitado/cartucho---para-hombre/gillette-cartucho-mach-3-sensitve/p/000000000007310040'
    },
    {
      id: 7,
      md: 6,
      title: 'Nivea Men Sensitive Bálsamo ',
      description: '',
      price: '$178',
      priceDiscount: '$124',
      urlImgArticle: 'https://pin.amovil.mx/ofertasimg/2023-08-02_20:08:40_64cb14d4bf060',
      urlImgBrand: 'http://wap.amovil.mx/ofertas_alta_n/img/sanborns_img.png',
      urlPromo: 'https://www.farmaciasanpablo.com.mx/cuidado-personal-y-belleza/afeitado/after-shave/nivea-men-sensitive-balsamo-after-shave/p/000000000000480446'
    },
    {
    id: 8,
    md: 6,
    title: 'SUDADERA CON MEDIA CIERRE ',
    description: '',
    price: '$2,299',
    priceDiscount: '$1,174',
    urlImgArticle: 'https://pin.amovil.mx/ofertasimg/2023-08-02_20:08:25_64cb148984bc4',
    urlImgBrand: 'http://wap.amovil.mx/ofertas_alta_n/img/sanborns_img.png',
    urlPromo: 'https://mx.tommy.com/sudadera-con-media-cierre-de-corte-amplio-tommy-jeans-de-hombre-dm0dm15021-pj4/p'
  },
  {
    id: 9,
    md: 6,
    title: 'Sobrecamisa manga larga',
    description: '',
    price: '$849',
    priceDiscount: '$239',
    urlImgArticle: 'https://pin.amovil.mx/ofertasimg/2023-08-02_20:08:57_64cb146d729c9',
    urlImgBrand: 'http://wap.amovil.mx/ofertas_alta_n/img/sanborns_img.png',
    urlPromo: 'https://www.bershka.com/mx/sobrecamisa-manga-larga-algod%C3%B3n-bolsillos-c0p127244844.html?colorId=505'
  },
  {
    id: 10,
    md: 6,
   title: 'sobre tipo de camisas',
   description: 'Color amarillo fosforesente',
   price: '$903',
   priceDiscount: '$450',
   urlImgArticle: 'https;//pin,amovil.mx/ofertasimg/2023-08-02 20:08:57 64cb146d729c9',
   urlImgBrand: 'http://wap.amovil.mx/ofertas_alta_n/img/sanborns_img.png',
   urlPromo: 'https://www.bershka.com/mx/sobrecamisa-manga-larga-algod%C3%B3n-bolsillos-c0p127244844.html?colorId=505'
  }

    
  ]
  return (
    <>
      <Main title=":: Club Ofertas ::">  

      <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/css/bootstrap.min.css" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossOrigin="anonymous"></link>
        <link rel="icon" href="/favicon.ico" />
        <link rel="container-center"  href=".logo.png" className='img-responsive center-block'></link>
        
        
        {/* <Button type="button" className="btn btn-danger">
          OFERTA
        </Button> */}
        {items.map(element => { // 
          return <ListOferta key={element.id} oferta={element} price={0} priceDiscount={0}  ></ListOferta>;
        })}

     
      </Main>
    </>
  )
}
