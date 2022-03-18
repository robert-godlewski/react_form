import React, {useState} from 'react';


const UserForm = () => {
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [conf_password, setConfPassword] = useState("");

    return (
        <div>
            <form>
                <div>
                    <label>First Name</label>
                    <input type="text" onChange={(e) => setFirstName(e.target.value)} />
                    {first_name.length < 2 ? <p>Your first name needs to be at least 2 characters.</p> : null}
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" onChange={(e) => setLastName(e.target.value)} />
                    {last_name.length < 2 ? <p>Your last name needs to be at least 2 characters.</p> : null}
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} />
                    {email.length < 2 ? <p>Your email needs at least 2 characters.</p> : null}
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} />
                    {password.length < 8 ? <p>Your password needs to be at least 8 characters.</p> : null}
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input type="password" onChange={(e) => setConfPassword(e.target.value)} />
                    {password !== conf_password ? <p>Your passwords don't match.</p> : null}
                </div>
            </form>
            <div>
                <h4>Your Form Data</h4>
                <p>First Name: {first_name}</p>
                <p>Last Name: {last_name}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {conf_password}</p>
            </div>
        </div>
    );
};


export default UserForm;
