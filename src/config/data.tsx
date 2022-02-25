// image profile
import { DataModel } from '../model/data.model';
import avatar from './avatar.png';

const data : DataModel= {
    favicon:{
        type: "emoji",
        src: `💻`
    },
    title:"Mathis Production",
    subtitle:"Freelance Cadreur/Monteur",
    image:{
        src: avatar,
        alt: "Mathis Barbier vidéaste"
    },
    description: <>
        Je m’appelle Mathis Barbier, j’ai 20 ans et j’ai créé mon auto-entreprise audiovisuelle en août 2020. 
        Cela fait maintenant 5 ans que je suis <strong>passionné par le cinéma et la vidéo</strong>, et donc 5 ans que je suis <strong>autodidacte</strong>. 
        Passionné par ce milieu, ce que je préfère plus que tout c’est réussir à transmettre des émotions à travers mes images, 
        capturer les moments de la vie et pouvoir les faire durer éternellement. Je suis motivé et je fais tout pour réussir pleinement 
        dans ce milieu. Je vous laisse jeter un oeil à mes différentes réalisations que j’ai pu réaliser professionnellement 
        au cours de l’année 2020 et 2021.
    </>,
    contact: {
        location: "Narbonne",
        email: "mathis.barbier018@gmail.com"
    },
    youtubeSlide: { chanelId:"UCrICUI4NCuw-P1VrK4vL_dg" },
    plateforms: [

        {name:"Youtube", link:"https://www.youtube.com/channel/UCrICUI4NCuw-P1VrK4vL_dg"},
        //{name:"Malt", link:"https://www.malt.fr/profile/mathisbarbier"},
        
    ],
    socialNetworks:[ 
        {name:"Youtube", link:"https://www.youtube.com/channel/UCrICUI4NCuw-P1VrK4vL_dg"},
        {name:"Instagram", link:"https://www.instagram.com/mathisproduction/"},
        {name:"Tiktok", link:"https://www.tiktok.com/@mathisproduction"},
        //{name:"Linkedin",link:"null"},
        //{name:"Instagram",link:"https://www.instagram.com/mathisproduction/"},
        //{name:"Tiktok",link:"https://www.tiktok.com/@mathisproduction"},
       ],
    
}

export { data } ;