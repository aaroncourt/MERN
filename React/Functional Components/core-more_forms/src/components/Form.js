import react, {useState} from 'react'

const Form = (props) => {
    const [fName, setFName] = useState('');
    const [fNameError, setFNameError] = useState('');

    const [lName, setLName] = useState('');
    const [lNameError, setLNameError] = useState('');

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    const [firstPassword, setFirstPassword] = useState('');
    const [secondPassword, setSecondPassword] = useState('');

    const [pwLengthError, setPWLengthError] = useState('');
    const [pwMatchError, setPWMatchError] = useState('');

    const fNameValid = (e) => {
        setFName(e.target.value);

        if(e.target.value.length === 1){
            setFNameError('The First Name must be at least two characters in length');
        } else {
            setFNameError('');
        }
    }

    const lNameValid = (e) => {
        setLName(e.target.value);
        if(e.target.value.length === 1){
            setLNameError('The Last Name must be at least two characters in length');
        } else {
            setLNameError('');
        }
    }

    const emailValid = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length > 0 && e.target.value.length < 5) {
            setEmailError('The email must be at least five characters in length');
        } else {
            setEmailError('');
        }
    }

    const pwError = () => {
        if (document.getElementById('firstPW').value.length > 0 && document.getElementById('firstPW').value.length < 8) {
            setPWLengthError('Your password must be at least eight characters in length');
        } else {
            setPWLengthError('');
        }
        
        if (document.getElementById('firstPW').value !== document.getElementById('secondPW').value) {
            setPWMatchError('Your passwords do not match');
        } else {
            setPWMatchError('');
        }
    }

    const firstPWValid = (e) => {
        setFirstPassword(e.target.value);
        pwError();
    }

    const secondPWValid = (e) => {
        setSecondPassword(e.target.value);
        pwError();
    }
    
    return(
        <div>
            <div>
                <form>
                    <div style={{margin:'10px'}}>
                        <label>First Name:   </label>
                        <input type='text' onChange={ fNameValid } />
                        { fNameError? <p>{ fNameError }</p>: ''}
                    </div>

                    <div style={{margin:'5px'}}>
                        <label>Last Name:   </label>
                        <input type='text' onChange={ lNameValid } />
                        { lNameError? <p>{ lNameError }</p>: ''}
                    </div>

                    <div style={{margin:'10px'}}>
                        <label>Email:   </label>
                        <input type='text' onChange={ emailValid } />
                        { emailError? <p>{ emailError }</p>: ''}
                    </div>

                    <div style={{margin:'10px'}}>
                        <label>Password:   </label>
                        <input type='password' id='firstPW' onChange={ firstPWValid } />
                    </div>

                    <div style={{margin:'10px'}}>
                        <label>Confirm Password:   </label>
                        <input type='password' id='secondPW' onChange={ secondPWValid } />
                        { pwLengthError? <p>{ pwLengthError }</p>: ''}
                        { pwMatchError? <p>{ pwMatchError }</p>: ''}
                    </div>
                </form>
            </div>

            <div style={{margin: '50px'}}>
                <p>First Name: {fName}</p>
                <p>Last Name: {lName}</p>
                <p>Email: {email}</p>
                <p>Password: {firstPassword}</p>
                <p>Confirm Password: {secondPassword}</p>
            </div>
        </div>
    );
};

export default Form
