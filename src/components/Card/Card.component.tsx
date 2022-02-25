import { ReactNode } from "react";

type CardProps = {
    background?: string,
    opacity?: string,
    children: ReactNode
};

function Card({background = "bg-white", opacity = "bg-opacity-10", children}: CardProps) {
    return (<div className={`container w-[90%] lg:w-[60%] xl:w-[50%] 2xl:w-[50%] m-auto ${background} ${opacity} rounded-2xl p-4 sm:px-10 pt-10 shadow-xl shadow-black/5`}>
        { children }
    </div> );
}

export default Card;