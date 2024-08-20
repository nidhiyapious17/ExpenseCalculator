import './Login.css';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import config from '../../config';
import { useNavigate } from 'react-router-dom';
import LoadMask from '../../LoadMask';
// import LoadMask from 'react-load-mask'
import { ClipLoader } from 'react-spinners';

const api = config.baseUrl;

export  default function SignUp() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [role, setRole] = useState('');
    const [password, setPassword] = useState(' ');

    async function handleFormSubmit (e) {
        e.preventDefault();

        const userData = {
            first_name,
            last_name,
            email,
            gender,
            role,
            password
        }

        try {
            setLoading(true);
            debugger;
            const response = await fetch(`${api}/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });
    
            if(response) {
                setLoading(false);
                navigate('/');
            }
        }
        catch(error) {
            console.log(error);
        }
    }

    function handleFirstNameChange (event) {
        setFirstName(event.target.value);
    }

    function handleLastNameChange (event) {
        setLastName(event.target.value);
    }

    function handleEmailChange (event) {
        setEmail(event.target.value);
    }

    function handleGenderChange(event) {
        setGender(event.target.value);
    }

    function handleRoleChange(event) {
        setRole(event.target.value);
    }

    function handlePasswordChange (event) {
        setPassword(event.target.value);
    }

    return (
        <form className="signup-form" onSubmit={handleFormSubmit}>
            <div className='signup-container'>
                <label>First Name</label>
                <input type="text" value={first_name} onChange={handleFirstNameChange} required/>
                <label>Last Name</label>
                <input type="text" value={last_name} onChange={handleLastNameChange} required/>
                <label>Email</label>
                <input type="email" value={email} onChange={handleEmailChange} required/>
                <label>Gender</label>
                <select value={gender} onChange={handleGenderChange} className="gender-combo"  required>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="others">Others</option>
                </select>
                {/* <input type="text" value={gender} onChange={handleGenderChange} required/> */}
                <label>Role</label>
                <input type="text" value={role} onChange={handleRoleChange} required/>
                <label>Password</label>
                <input type="text" value={password} onChange={handlePasswordChange} required/>
                <button>Sign Up</button>
                {/* <LoadMask loading={loading}></LoadMask> */}
                <Link to='/'>Back to Login</Link>
            </div>
            {/* <LoadMask loading={loading} size={120}/> */}
            <ClipLoader size={50} color={"#123abc"} loading={loading} />
        </form>
        
    )
}