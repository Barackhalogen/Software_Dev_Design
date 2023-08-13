const Button = ({text, classProps, color, bg, hoverBg}) => {
    return (
        <button type="button" className={ ` ${classProps} text-[${color}] bg-[${bg}] p-2 rounded-lg cursor-pointer hover:bg-[${hoverBg}]`}>
           {text}
        </button>
    );
}

export default Button;