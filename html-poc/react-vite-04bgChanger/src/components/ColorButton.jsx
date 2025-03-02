
const ColorButton = ({buttonColor, textClass="text-white", onClickParentHandler}) => {
    return (
        <button
            className={`outline-none px-4 py-1 rounded-full shadow-lg ${textClass}`}
            style={{backgroundColor:buttonColor}}
            onClick={() => onClickParentHandler(buttonColor)}
            >{buttonColor}</button>
    );
};

export default ColorButton;