import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useGlobalState } from '../context/GlobalState';
import authService from '../services/auth.service';
import jwtDecode from 'jwt-decode';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from './nav/index';
import Layout from "./layout";
import background from '../../public/background.png';

function Login() {
  const router = useRouter();

  const { state, dispatch } = useGlobalState();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const username = email;
    authService.login(email, password, username).then(async (resp) => {
      if (resp.access) {
        let data = jwtDecode(resp.access);
        await dispatch({
          type: 'SET_USER',
          payload: data,
        });
        router.push('/');
      } else {
        console.log('Login failed');
        dispatch({ type: 'LOGOUT_USER' });
      }
    });
  };
  const mutedGreenButtonStyle = {
    backgroundColor: '#8B4510',
    color: '#fff',
    borderColor: '#8B4513',
    letterSpacing: '5px',
    fontSize: '25px'
  };
  const mutedGreenButtonHoverStyle = {
    backgroundColor: '#734f0e', 
  };


  return (
    <div style ={{backgroundImage: `url(./background.png)`, backgroundSize: 'cover',backgroundRepeat: 'no-repeat',minHeight: '100vh',  }}>

    <Layout>

    <div className="col-12 col-md-6 container d-flex align-items-center justify-content-center h-100">
    <div className="col-6 col-md-6" style={{ marginTop: "100px", background: 'white', borderRadius: '50px', padding: '20px', border: '20px solid black' }}>
    <h1 className="text-center" style ={{fontFamily: 'ClimbingPlant', marginTop: "50px", marginBottom: '30px', fontWeight: "bolder", }}>Login</h1>
          

          <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleLogin}>
          <div className="mb-3" style={{ display: "flex"}}>
          <label
            style={{ marginLeft: 'auto', fontWeight: "bolder", fontSize: "20px", flex: "1" }}
            htmlFor="email"
            className="form-label"
          >
            Email:
          </label>

          <input
          style ={{ width: '300px', marginLeft: 'auto', borderColor: '#333' }}
            type="text"
            id="email"
            name="email"
            className="form-control rounded-pill"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          </div>


        <div className="mb-3" style={{ display: "flex", alignItems: "center" }}>
        <label
          style={{ fontWeight: "bolder", fontSize: "20px", flex: "1" }}
          htmlFor="pass"
          className="form-label"
        >
          Password:
        </label>

        <input
          type="password"
          id="pass"
          name="password"
          className="form-control rounded-pill"
          style ={{ width: '300px', marginLeft: 'auto', borderColor: '#333' }}

          minLength="8"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

            
            <div className="text-center" style ={{fontFamily: 'ClimbingPlant', marginTop:'20px' }}>
              <input 
                type="submit"
                value="Sign in"
                className="btn muted-green-btn btn-lg rounded-pill"
                style={mutedGreenButtonStyle}
                onMouseEnter={event => event.target.style.backgroundColor = '#753a08'} 
                onMouseLeave={event => event.target.style.backgroundColor = '#8B4510'} 
              />
            </div>
          </form>


          <div style = {{fontFamily: 'ClimbingPlant', marginTop: '20px' , marginBottom: '50px'}}className="text-center">
          <Link
          href="/register"
          style={{
            ...mutedGreenButtonStyle,
            transition: 'background-color 0.3s', 
          }}
          className="btn btn-primary btn-lg rounded-pill"
          onMouseEnter={event => event.target.style.backgroundColor = '#753a08'} 
          onMouseLeave={event => event.target.style.backgroundColor = '#8B4510'}
        >
          Register Here
        </Link>
        </div>
      </div>
    </div>
    
    </Layout>
    </div>
  );
 }  

export default Login;
