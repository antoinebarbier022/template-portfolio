// image profile
import { DataModel } from '../model/data.model';
import image from './image.jpg';

const data : DataModel= {
    favicon:{
        type: "emoji",
        src: `💻`
    },
    title:"Miary ミアリー",
    subtitle:"Developpeur Web Freelance ",
    /*image:{
        src: image,
        alt: "Michel Hubert dans son studio"
    },*/
    description: <>
        Passionné par le design et l'informatique, je me lance sur <strong>5euros.com</strong> afin de partager mes compétences dans le domaine du développement web. <br/><br/>
        J'ai créé un template de site web vitrine comme celui-ci afin que je puisse vous offrir un site original, personalisé et design pour <strong>seulement 45€ </strong>!
        <br/> <br/>
        À très vite sur la plateforme <a href="https://www.5euros.com"
            title="5euros.com"
            rel="noopener noreferrer"
            target="_blank">5euros.com</a> !
    </>,
    contact: {
        //location: "36 quai des Orfèvres, Paris ",
        email: "antoine.barbier@icloud.com"
    },

    youtubeSlide: { chanelId:"UCK79IQiAXywwMUMsDxqmnGw" },

    customLinks: [
        {name:"🚀 Paypal 🚀", link:"null",},
        {name:"Hello toi", link:"null"},
        {name:"booooom", link:"null"},
    ],
    
    plateforms: [ 
        {name:"5euro.com", link:"null"},
        {name:"Github", link:"null"},
        {name:"Dribbble", link:"null"},
        {name:"Twitch", link:"null"},
       ],
    socialNetworks:[ 
        {name:"Facebook",link:"null"},
        {name:"Instagram",link:"null"},
        {name:"Linkedin",link:"null"},
       ],
    
}

export { data } ;