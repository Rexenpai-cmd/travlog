const Button = ({ className, children }) => {
    return (
        <button
            className={`${className} flex items-center justify-center rounded-full px-8 py-4 gap-2.5`}
        >
            {children}
        </button>
    );
};

export default Button;
