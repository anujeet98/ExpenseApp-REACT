import './FormInput.css';

const FormInput = (props) => {
    const printHandler = (event) => {
        console.log(event.target.value);
    }
    return (
        <input onChange={printHandler} className="formInput" type={props.type} placeholder={props.placeholder ? props.placeholder : ""}/>
    )
};

export default FormInput;