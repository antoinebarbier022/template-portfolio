// image profile
import { DataModel } from '../model/data.model';
import image from './image.jpg';

const data : DataModel= {
    favicon:{
        type: "emoji",
        src: `💻`
    },
    title:"Miary",
    subtitle:"ミアリー",
    /*image:{
        src: image,
        alt: ""
    },*/
    description: <>

    </>,
    contact: {
        //location: "36 quai des Orfèvres, Paris ",
        email: "antoine.barbier@icloud.com"
    },

    //youtubeSlide: { chanelId:"UCX_WX-QOGnaJBkEKHSoovKA" },
    
    plateforms: [ 
        {name:"Youtube", link:"null"},
        {name:"Twitch", link:"null"},
       ],
    socialNetworks:[ 
        {name:"Facebook",link:"null"},
        {name:"Instagram",link:"null"},
       ],
    
}

export { data } ;