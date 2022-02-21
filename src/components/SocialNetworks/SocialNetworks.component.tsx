// Social Networks
import { ReactNode } from 'react';
import { ReactComponent as Dailymotion } from '../../assets/icons/socialNetworks/dailymotion-brands.svg';
import { ReactComponent as Discord } from '../../assets/icons/socialNetworks/discord-brands.svg';
import { ReactComponent as Dribbble } from '../../assets/icons/socialNetworks/dribbble-brands.svg';
import { ReactComponent as Facebook } from '../../assets/icons/socialNetworks/facebook-brands.svg';
import { ReactComponent as Flickr } from '../../assets/icons/socialNetworks/flickr-brands.svg';
import { ReactComponent as Google } from '../../assets/icons/socialNetworks/google-plus-brands.svg';
import { ReactComponent as Instagram } from '../../assets/icons/socialNetworks/instagram-brands.svg';
import { ReactComponent as Line } from '../../assets/icons/socialNetworks/line-brands.svg';
import { ReactComponent as Linkedin } from '../../assets/icons/socialNetworks/linkedin-brands.svg';
import { ReactComponent as Medium } from '../../assets/icons/socialNetworks/medium-brands.svg';
import { ReactComponent as Pinterest } from '../../assets/icons/socialNetworks/pinterest-brands.svg';
import { ReactComponent as Reddit } from '../../assets/icons/socialNetworks/reddit-brands.svg';
import { ReactComponent as Skype } from '../../assets/icons/socialNetworks/skype-brands.svg';
import { ReactComponent as Slack } from '../../assets/icons/socialNetworks/slack-brands.svg';
import { ReactComponent as Snapchat } from '../../assets/icons/socialNetworks/snapchat-brands.svg';
import { ReactComponent as Soundcloud } from '../../assets/icons/socialNetworks/soundcloud-brands.svg';
import { ReactComponent as Telegram } from '../../assets/icons/socialNetworks/telegram-brands.svg';
import { ReactComponent as TikTok } from '../../assets/icons/socialNetworks/tiktok-brands.svg';
import { ReactComponent as Tumblr } from '../../assets/icons/socialNetworks/tumblr-brands.svg';
import { ReactComponent as Twitch } from '../../assets/icons/socialNetworks/twitch-brands.svg';
import { ReactComponent as Twitter } from '../../assets/icons/socialNetworks/twitter-brands.svg';
import { ReactComponent as Viber } from '../../assets/icons/socialNetworks/viber-brands.svg';
import { ReactComponent as Vimeo } from '../../assets/icons/socialNetworks/vimeo-brands.svg';
import { ReactComponent as WhatsApp } from '../../assets/icons/socialNetworks/whatsapp-brands.svg';
import { ReactComponent as Youtube } from '../../assets/icons/socialNetworks/youtube-brands.svg';
import { PlateformType } from '../../types/All.types';

type SocialNetworksProps = {
    hidden?:boolean,
    data: Array<{name: PlateformType, link: string}> | undefined,
    fill: string,
    hover: string,
};

function SocialNetworks( { data, hidden = false, fill, hover } : SocialNetworksProps) {

    const styleIcon = fill + " "+ hover + " transition ease-in-out delay-[80]";

    const PlatformeIcon = new Map<PlateformType, ReactNode>([
        ["Facebook", <Facebook height={30} className={styleIcon}/> ],
        ["Instagram", <Instagram height={30} className={styleIcon}/> ],
        ["Twitch", <Twitch height={30} className={styleIcon}/> ],
        ["Snapchat", <Snapchat height={30} className={styleIcon}/> ],
        ["Linkedin", <Linkedin height={30} className={styleIcon}/> ],
        ["Telegram", <Telegram height={30} className={styleIcon}/> ],
        ["Reddit", <Reddit height={30} className={styleIcon}/> ],
        ["Twitter", <Twitter height={30} className={styleIcon}/> ],
        ["Tiktok", <TikTok height={30} className={styleIcon}/> ],
        ["Slack", <Slack height={30} className={styleIcon}/> ],
        ["GooglePlus", <Google height={30} className={styleIcon}/> ],
        ["Dribbble", <Dribbble height={30} className={styleIcon}/> ],
        ["Pinterest", <Pinterest height={30} className={styleIcon}/> ],
        ["Youtube", <Youtube height={30} className={styleIcon}/> ],
        ["Soundcloud", <Soundcloud height={30} className={styleIcon}/> ],
        ["Medium", <Medium height={30} className={styleIcon}/> ],
        ["WhatsApp", <WhatsApp height={30} className={styleIcon}/> ],
        ["Tumblr", <Tumblr height={30} className={styleIcon}/> ],
        ["Skype", <Skype height={30} className={styleIcon}/> ],
        ["Vimeo", <Vimeo height={30} className={styleIcon}/> ],
        ["Dailymotion", <Dailymotion height={30} className={styleIcon}/> ],
        ["Discord", <Discord height={30} className={styleIcon}/> ],
        ["Viber", <Viber height={30} className={styleIcon}/> ],
        ["Line", <Line height={30} className={styleIcon}/> ],
        ["Flickr", <Flickr height={30} className={styleIcon}/> ],
      ]);

    if (hidden || (data?.length === 0)) {
        return (<></>);
    }
    return ( <div className={`flex flex-wrap gap-10 justify-center m-3`}>
    {
      data !== undefined &&
        data.map( (value, index) =>
        PlatformeIcon.get(value.name) &&
        <a  href={value.link} 
            key={index} 
            title={value.name}
            target="_blank" 
            rel='noopener noreferrer'>
          {PlatformeIcon.get(value.name)}
        </a>)
    }
  </div> );
}

export default SocialNetworks;