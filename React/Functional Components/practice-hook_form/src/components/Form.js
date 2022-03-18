import react, {useState} from 'react'

const Form = (props) => {
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [email, setEmail] = useState('');
    const [firstPassword, setFirstPassword] = useState('');
    const [secondPassword, setSecondPassword] = useState('');

    return(
        <div>
            <div>
                <form>
                    <div style={{margin:'5px'}}>
                    <label>First Name:</label>
                    <input type='text' onChange={ (e) => setFName(e.target.value) } />
                    </div>

                    <div style={{margin:'5px'}}>
                    <label>Last Name:</label>
                    <input type='text' onChange={ (e) => setLName(e.target.value) } />
                    </div>

                    <div style={{margin:'5px'}}>
                    <label>Email:</label>
                    <input type='text' onChange={ (e) => setEmail(e.target.value) } />
                    </div>

                    <div style={{margin:'5px'}}>
                    <label>Password</label>
                    <input type='password' onChange={ (e) => setFirstPassword(e.target.value) } />
                    </div>

                    <div style={{margin:'5px'}}>
                    <label>Confirm Password:</label>
                    <input type='password' onChange={ (e) => setSecondPassword(e.target.value) } />
                    </div>
                </form>
            </div>

            <div>
                <p >First Name: {fName}</p>
                <p>Last Name: {lName}</p>
                <p>Email: {email}</p>
                <p>Password: {firstPassword}</p>
                <p>Confirm Password: {secondPassword}</p>
            </div>
        </div>
    );
};

export default Form
