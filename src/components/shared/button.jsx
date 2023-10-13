"use client";

export default function Button({ children, option = "primary", onClick = () => {} }) {
    const style = option === "secondary" ? 
        "bg-dark-purple p-2 text-lg rounded-md border-2 border-white hover:bg-aquamarine hover:border-aquamarine hover:text-dark-purple" :
        "bg-white text-dark-purple p-2 text-lg rounded-md border-2 border-white hover:bg-dark-purple hover:border-aquamarine hover:text-aquamarine";

    return (
        <button className={style + ` transition delay-100 ease-linear`} onClick={() => onClick()}>
            {children}
        </button>
    );
}