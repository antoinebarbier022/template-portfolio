

import { ReactComponent as Phone } from '../../assets/icons/phone-solid.svg';
import { ReactComponent as Localisation } from '../../assets/icons/location-dot-solid.svg';
import { ReactComponent as Email } from '../../assets/icons/envelope-solid.svg';
import LinkCard from '../LinkCard/Link.component';

type LinkCardProps = {
    email?: string,
    phone?: string,
    location?: string,
    className?: string,
    hidden?: boolean,
};

function Contact( { email, phone, location, hidden, className, } : LinkCardProps) {
    let inline: boolean = [email, phone, location].filter( x => x !== undefined).length === 1;
    let styleLink = "flex flex-1 px-4 py-2 " + (inline ? " flex-row gap-3 " :  "flex-col gap-2 " );

    if (hidden || ([email, phone, location].filter( x => x !== undefined).length === 0)) {
        return (<></>);
    }
    return (  <div className={`container mb-8 flex flex-wrap gap-2 ${className}`}>
        {
            location && 
                <LinkCard link={"https://www.google.com/maps/search/" + location} className={styleLink}>
                    <Localisation width={25} fill="white" className={` ${!inline && 'mt-2'}`}/>
                    <p> { location }</p>
                </LinkCard>
        }
        {
            phone && 
                <LinkCard link={'tel:' + phone} className={styleLink}>
                    <Phone width={25} fill="white" className={` ${!inline && 'mt-2'}`}/>
                    <p> { phone }</p>
                </LinkCard>
        }
        {
            email && 
                <LinkCard link={'mailto:' + email}  className={styleLink}>
                    <Email width={25} fill="white" className={` ${!inline && 'mt-2'}`}/>
                    <p> { email }</p>
                </LinkCard>
        }
    </div>);
}

export default Contact;