const Button = ({ children, variant = "primary" }) => {
    const base =
        "px-6 py-3 rounded-lg font-medium transition duration-300";

    const styles = {
        primary: "bg-primary text-white hover:opacity-90",
        secondary: "bg-white text-black border hover:bg-gray-100",
        dark: "bg-dark text-white",
    };

    return (
        <button className={`${base} ${styles[variant]}`}>
            {children}
        </button>
    );
};

export default Button;
