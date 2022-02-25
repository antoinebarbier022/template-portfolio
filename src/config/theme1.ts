import { ThemeModel } from "../model/theme.model";

const theme: ThemeModel = {
    appBg: "bg-gradient-to-br from-indigo-700 via-violet-500 to-amber-700",


    styleImg:"md:w-[200px]",
    
    cardBg: "bg-black",
    cardOpacity: "bg-opacity-10",

    textColor: "text-white",
    textOpacity: "text-opacity-80",

    linkMusicBg: "bg-black/[0.08] ",
    linkMusicHoverBg: "hover:bg-black/[0.15]",

    iconFill: "fill-white/60",
    iconFillHover: "hover:fill-white/90",

    // no tailwind, only color
    boldTextColor: "#fff",
};

export { theme } ;