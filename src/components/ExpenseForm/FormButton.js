import './FormButton.css'

const FormButton = (props) => {
    return (
        <button className="formButton">{props.value}</button>
    )
};

export default FormButton;