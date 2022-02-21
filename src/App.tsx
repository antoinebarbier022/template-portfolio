import  {data, theme} from "./config/main";
import { FaviconType } from "./types/All.types";
import Home from "./Home";


function setFavicon(type:FaviconType, src: string) {
  let favicon;
  if(type === "emoji"){
    favicon = `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>${src}</text></svg>`
  }else{
    favicon = src;
  }
  (document.querySelector("link[rel*='icon']") as HTMLLinkElement).href = favicon;
  (document.querySelector("link[rel*='apple-touch-icon']") as HTMLLinkElement).href = favicon;
}

function App() {

  // website title
  document.title = data.title;

  // set background 
  const tab = theme.appBg.split(" ");
  tab.map( (x: string) => document.body.classList.add(x));

  // set favicon
  setFavicon(data.favicon.type,data.favicon.src);
  
  return (<Home/>);
}

export default App;
