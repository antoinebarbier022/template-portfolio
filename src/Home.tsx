import  {data, theme} from "./config/main";

import Card from './components/Card/Card.component';
import SocialNetworks from './components/SocialNetworks/SocialNetworks.component';
import MusicPlateforms from './components/LinksPlateforms/LinksPlateforms.component';
import Contact from "./components/Contact/Contact.component";
import YoutubeSlide from "./components/YoutubeSlide/YoutubeSlide.component";
import CustomLinksSection from "./components/CustomLinksSection/CustomLinksSection.component";
import useRssFlux from "./hooks/RssFlux.hook";

function Home() {
      // set background 
  const tab = theme.appBg.split(" ");
  tab.map( (x: string) => document.body.classList.add(x));

  const test = useRssFlux("https://www.youtube.com/feeds/videos.xml?channel_id=UCK79IQiAXywwMUMsDxqmnGw");


  return (
    <div className={`App h-full py-10 ${theme.textColor}`}>
      <Card background={theme.cardBg} opacity={theme.cardOpacity}>
          <div className={`mb-8`}>
            {
              data.image &&
                <figure className={`mb-10`}>
                  <img src={data.image.src} alt={data.image.alt} className={`mx-auto rounded-2xl border-4 border-white/10 ${theme.styleImg} aspect-auto`}></img>
                </figure>
            }
            
            <h1 className={`text-2xl font-bold uppercase`}>{data.title}</h1>
            <h2 className={`mb-2 text-md font-mono`}>{data.subtitle}</h2> 
            <p className={`description font-light text-justify my-5  ${theme.textOpacity} ${theme.textColor} `}> {data.description}</p>
          </div>

          <YoutubeSlide chanelId={data.youtubeSlide!.chanelId} playlistId={data.youtubeSlide!.playlistId}></YoutubeSlide>

          <CustomLinksSection data={data.customLinks} hidden={data.customLinks === undefined}></CustomLinksSection>

          <MusicPlateforms data={data.plateforms} 
                            className={!(data.contact === undefined) ? "mb-2": ""}
                            hidden={data.plateforms === undefined} />
          <Contact  email={data.contact?.email} 
                    phone={data.contact?.phone} 
                    location={data.contact?.location} 
                    hidden={data.contact === undefined}/>
          <SocialNetworks data={data.socialNetworks} 
                            fill={theme.iconFill} 
                            hover={theme.iconFillHover}
                            hidden={data.socialNetworks === undefined}/>

          <footer className={`flex-col justify-center align-center text-center`}>
            <span className={` text-center ${theme.textOpacity} ${theme.textColor}`}>{data.title} © {new Date().getFullYear()}</span>
            <span> - Made with 🚀 by <a href="https://www.antoinebarbier.fr" target="_blank" rel='noopener noreferrer' className={` font-medium ${theme.textColor} `}>@An_toine</a> </span>
          </footer>
        </Card>
    </div>
  );
}

export default Home;
