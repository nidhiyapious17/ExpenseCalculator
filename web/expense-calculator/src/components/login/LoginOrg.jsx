import './Login.css';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState , useEffect} from 'react';

export default function Login () {
    const navigate = useNavigate();
    const [formData, setFormData] = useState ({
        username: '',
        password: ''
    });
    const [isFormValid, setIsFormValid] = useState(false);

    const validateForm = () => {
        const {email, password} = formData

        return email !== '' && password !== '';
    }

    useEffect (()=> {
        setIsFormValid(validateForm());
    }, [formData]);

    function handleChange (e) {
        const {name, value} = e.target;
        
        setFormData({
            ...formData,
            [name]: value
        });
    }

    async function handleFormSubmit (e) {
        e.preventDefault();
        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
        } catch(err) {
            throw new Error(err);
        }
        
        navigate('/home');
        console.log(formData);
    }

    return (
        <form className='login-form' onSubmit={handleFormSubmit}>
            <div className="login-container"> 
                <label>Username</label>
                <input type="email" name='username'  onChange={handleChange} value={formData.username} required/>
                <label>Password</label>
                <input type="password" name='password' onChange={handleChange} value={formData.password} required/>
                <button type='submit' disabled={!isFormValid}>Login</button>
                <p className='display-text'>Don't have an Account?</p>
                <Link to='/signup'>Sign Up</Link >
            </div>
        </form>
    )
}