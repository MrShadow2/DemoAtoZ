
import CSS from '../Styles/landingPage.module.css'
import logo from '../assets/az.png'
import { Link } from 'react-router-dom'
const LandingPage = () => {

    
    
  return (
    <div className={CSS.mainContainer}>
        <h1 className={CSS.header} style={{
            
        
        }}>Welcome To A-Z</h1>
        <Link to="/login"
        style={{
            textDecoration: 'none',
            color: 'white',
        }}
        >
        <button className={CSS.login}>
        
        Login</button></Link>

      <div className={CSS.background}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={CSS.overLapContainer}>
     
        <img src={logo} alt="logo" className={CSS.logo}/>
        <div className={CSS.overLap}>
            <div className={CSS.content}>
                <ul className={CSS.options}>
                    <li className={CSS.option}>
                        Housing
                    </li>
                    <li className={CSS.option}>
                        Food
                    </li>
                    <li className={CSS.option}>
                        Q&T
                    </li>
                    <li className={CSS.option}>
                        Travel
                    </li>

                </ul>
            </div>
        </div>
      </div>

    </div>

  );
}

export default LandingPage