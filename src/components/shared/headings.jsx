export function H1({ children, className = "" }) {
    return (
        <h1 className={`md:text-8xl text-6xl ${className}`}>{children}</h1>
    );
}

export function H2({ children, className = "" }) {
    return (
        <h2 className={`md:text-5xl text-3xl ${className}`}>{children}</h2>
    );
}

export function H3({ children, className = "" }) {
    return (
        <h3 className={`md:text-4xl text-2xl ${className}`}>{children}</h3>
    );
}

export function H4({ children, className = "" }) {
    return (
        <h4 className={`md:text-2xl text-xl ${className}`}>{children}</h4>
    );
}