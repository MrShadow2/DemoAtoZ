import  { useState } from 'react';
import '../Styles/login.css'
import house from '../assets/house.png'
import sit from '../assets/sit.png'
import bike from '../assets/bike.png'
import { Link } from 'react-router-dom';
const Login = () => {
 
  const [password, setPassword] = useState('');
  const [gmail, setGmail] = useState('');

  const handleLogin = () => {
    
    console.log('Gmail:', gmail);
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
        <h1 className='header-log'>Login</h1>
        <form>
          
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
            <Link to="/housing"
            style={{

              textDecoration: 'none',
              fontSize: '15px',
            }}
            >
              <button className='login' type="button" onClick={handleLogin}>
                
                Login
              </button>
            </Link>
         
          <p style={{
            marginTop: '19px',
          }} className='dont'>Do not have an account? <Link to="/signup">Sign Up</Link></p>
          
        </form>
      </div>
    </div>
  
    
  );
};

export default Login;
