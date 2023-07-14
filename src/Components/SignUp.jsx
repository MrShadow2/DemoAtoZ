import  { useState } from 'react';
import '../Styles/login.css'
import house from '../assets/house.png'
import sit from '../assets/sit.png'
import bike from '../assets/bike.png'
import { Link } from 'react-router-dom';
const SignUp = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [gmail, setGmail] = useState('');
  
    const handleLogin = () => {
      
      console.log('Username:', username);
      console.log('Password:', password);
    };
  
    return (
      <div className="login-container">
        <div className="illustration">
          <img className='house-img' src={house} alt="login" />
          <img className='sit-img' src={sit} alt="login" />
          <img className='bike-img' src={bike} alt="login" />
        </div>
        <div className="neomorphism-card">
          <h1 className='header-log'>SignUp</h1>
          <form>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                className='login-input'
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                className='login-input'
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
  
            <div className="form-group">
              <label htmlFor="gmail">Gmail:</label>
              <input
                className='login-input'
                type="gmail"
                id="gmail"
                value={gmail}
                onChange={(e) => setGmail(e.target.value)}
              />
            </div>
  
            <link to="/housing"
            style={{

              textDecoration: 'none',
              fontSize: '15px',
            }}
            >
            <button className='login' type="button" onClick={handleLogin}>SignUp</button>
            </link>
            
            <p style={{
                marginTop: '19px',
                }} className='dont'>Already have an account? <Link to="/login">Login</Link></p>

            
          </form>
        </div>
      </div>
    
      
    );
}

export default SignUp