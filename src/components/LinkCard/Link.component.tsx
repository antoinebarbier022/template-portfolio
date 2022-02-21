import { theme } from "../../config/main";



type LinkCardProps = {
    link?: string,
    name?: string,
    className?: string,
    children?:any,
};

function LinkCard( { name, link, className, children, } : LinkCardProps) {

    return (<a  className={`col-span-full sm:col-span-1 flex items-center justify-center text-center min-w-fit min-h-[60px] rounded-lg ${theme.linkMusicBg} ${theme.linkMusicHoverBg} transition ease-in-out delay-[80] ${className}`} 
            href={link}
            title={name}
            rel="noopener noreferrer"
            target="_blank"
            >
        { children }
        </a>);
}

export default LinkCard;