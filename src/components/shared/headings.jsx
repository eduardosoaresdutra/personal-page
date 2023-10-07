export function H1({ children, className = "" }) {
    return (
        <h1 className={`text-8xl ${className}`}>{children}</h1>
    );
}

export function H2({ children, className = "" }) {
    return (
        <h2 className={`text-6xl ${className}`}>{children}</h2>
    );
}

export function H3({ children, className = "" }) {
    return (
        <h3 className={`text-4xl ${className}`}>{children}</h3>
    );
}