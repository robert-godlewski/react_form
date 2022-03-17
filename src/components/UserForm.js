import React, {useState} from 'react';


const UserForm = () => {
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [conf_password, setConfPassword] = useState("")

    return (
        <div>
            <form>
                <div>
                    <label>First Name</label>
                    <input type="text" onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input type="password" onChange={(e) => setConfPassword(e.target.value)} />
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
    )
}


export default UserForm;
