import React, {useState} from 'react';
import { login } from "../../store/actions";
import { useDispatch } from "react-redux";
const LoginPage = () => {
    const [user,setUser] = useState({
        name:""
    });

    const dispatch = useDispatch();

    const handleChange = (e) =>{
        setUser({...user,[e.target.name]:e.target.value});
        console.log(user);
    }

    const handleSubmit= (e) =>{
        e.preventDefault();
        console.log('handle submit called');
        console.log(user);
        //here is where we would set redux state
        dispatch(login(user));
    }

    return (
        <section id="pirate-form-main">
        <div className="form-wrap">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="user-name">Username</label>
                    <input type="text" id="user-name" name="name" value={user.name} 
                    onChange={handleChange} />
                </div>
                <button id="pirate-submit" className="btn">Login</button>
            </form>
        </div>
        </section>
    )
}


export default LoginPage;
