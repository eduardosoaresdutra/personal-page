"use client";

export default function Button({ children, option = "primary", className = "", onClick = () => {} }) {
    const style = option === "secondary" ? 
        "bg-transparent p-2 text-lg rounded-md border-2 border-white hover:bg-aquamarine hover:border-aquamarine hover:text-dark-purple" :
        "bg-white text-dark-purple p-2 text-lg rounded-md border-2 border-white hover:bg-transparent hover:border-aquamarine hover:text-aquamarine";

    return (
        <button className={style + ` transition delay-100 ease-linear ${className}`} onClick={() => onClick()}>
            {children}
        </button>
    );
}