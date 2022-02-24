import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/dist/css/splide.min.css';
import useRssFlux from "../../hooks/RssFlux.hook";
import { ReactComponent as Youtube } from '../../assets/icons/socialNetworks/youtube-brands.svg';

type YoutubeRssProps = {
    chanelId?: string
    playlistId?: string,
    hidden?:boolean,
    title?:boolean
    className?: string,
};

function YoutubeSlide({ playlistId, chanelId, title = false, hidden, className }: YoutubeRssProps) {
    const url = chanelId ? 
    "https://www.youtube.com/feeds/videos.xml?channel_id=" + chanelId : 
    (playlistId ? "https://www.youtube.com/feeds/videos.xml?playlist_id=" + playlistId : "");
    const items = useRssFlux(url, 40);
    console.log(items?.length)
    
    const splideOptions: any = { 
        type: 'slide',
        focus  : 'center',
        autoWidth: true,
        fixedWidth: "100px",
        widthRatio: 16/9,
        pagination: false,
        height:'200px',
        gap    : '2rem',
    };

    if (hidden || (items?.length === 0)) {
        return (<></>);
    }
    return ( 
    <div className={`flex flex-col gap-2 section-plateforms container rounded-xl mb-8 ${className}`}>
        <Splide className="slider overflow-hidden" options={splideOptions}>
    {
      items !== undefined &&
      items.map( (value, index) => 
        
            <SplideSlide className="aspect-video h-auto flex flex-col" key={ index }>
                <a  href={value.link}
                    title={value.title}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="w-full h-full transition ease-in-out delay-0 fill-white/50 hover:fill-white/80">
                        
                <figure className=" h-full w-full">
                    <img  src={value.thumbnail} 
                                alt={value.title} 
                                className="w-full h-full object-cover m-auto rounded-xl"/>
                    <Youtube width={70} className="absolute inset-0 m-auto "/>
                    {
                        title && 
                            <span className="w-full truncate overflow-hidden absolute bottom-0 bg-black/40 backdrop-blur-md rounded-b-xl p-2">
                                { new DOMParser().parseFromString( `<!doctype html><body>${value.title}`, 'text/html').body.textContent }
                            </span>
                    }
                </figure>

                </a>
                
                
                
                {/*
                    <img  src={value.thumbnail} 
                            alt={value.title} 
                            className="object-cover"/>
                            { value.title }*/
                }
                

                
            </SplideSlide>
      )
    }
    </Splide>
</div> );
}

export default YoutubeSlide;