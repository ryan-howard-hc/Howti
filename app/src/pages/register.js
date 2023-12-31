import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import AuthService from '../services/auth.service';
import jwtDecode from 'jwt-decode';
import { useGlobalState } from "../context/GlobalState";
import Layout from "./layout";

const label = {
  marginLeft: 'auto', fontWeight: "bolder", fontSize: "20px", flex: "1"
}

const mutedGreenButtonStyle = {
  backgroundColor: '#8B4510',
  color: '#fff',
  borderColor: '#8B4513',
  letterSpacing: '5px'
};

function Register() {
  const { state, dispatch } = useGlobalState();
  const router = useRouter();
  const [user, setUser] = useState({
    password: "",
    passwordConf: "",
    firstName: "",
    lastName: "",
    email: "",
    username: "",
  });

  const handleChange = (key, value) => {
    setUser({
      ...user,
      [key]: value,
    });
  };

  async function handleRegister(e) {
    e.preventDefault();
    AuthService.register(user);
    dispatch({
      currentUserToken: state.currentUserToken,
      currentUser: state.currentUser?.user_id,
    });
    router.push("/");
  }

  

  return (
    <div style ={{backgroundImage: `url(./background.png)`, backgroundSize: 'cover',backgroundRepeat: 'no-repeat',minHeight: '100vh',  }}>
    <Layout>
      <div className="col-12 col-md-6 container d-flex align-items-center justify-content-center h-100">
        <div className="col-6 col-md-6" style={{ marginTop: "100px", background: 'white', borderRadius: '50px', padding: '20px', border: '20px solid black' }}>
          <h1 style={{marginBottom: '20px',fontFamily: 'ClimbingPlant', textAlign: 'center', fontWeight:'bold'}}>Join the Community!</h1>
          <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column' }}>
          <div className="mb-3" style={{ display: "flex", alignItems: "center" }}>
          <label
            htmlFor="firstName"
            className="form-label"
            style={label}
          >
            First Name:
          </label>
          <input
          
            type="text"
            id="firstName"
            className="form-control rounded-pill justify-content-end"
            style={{ width: '300px', marginLeft: 'auto', borderColor: '#333' }} 
            required
            onChange={(e) => handleChange("firstName", e.target.value)}
          />
        </div>
        
        <div className="mb-4" style={{ display: "flex", alignItems: "center" }}>
          <label
            htmlFor="lastName"
            className="form-label"
            style={label}
          >
            Last Name:
          </label>
          <input
            type="text"
            id="lastName" 
            className="form-control rounded-pill"
            style={{ width: '300px', marginLeft: 'auto', borderColor: '#333' }} 
            required
            onChange={(e) => handleChange("lastName", e.target.value)}
          />
        </div>
        
        <div className="mb-4" style={{ display: "flex", alignItems: "center" }}>
          <label
            htmlFor="email"
            className="form-label"
            style={label}
          >
            Email:
          </label>
          <input
            type="text"
            id="email"
            className="form-control rounded-pill"
            style={{ width: '300px', marginLeft: 'auto', borderColor: '#333' }} 
            required
            onChange={(e) => handleChange("email", e.target.value)}
          />
        </div>
        
        <div className="mb-4" style={{ display: "flex", alignItems: "center" }}>
          <label
            htmlFor="password"
            className="form-label"
            style={label}
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            className="form-control rounded-pill"
            style={{ width: '300px', marginLeft: 'auto', borderColor: '#333' }} 
            required
            onChange={(e) => handleChange("password", e.target.value)}
          />
        </div>
        
        <div className="mb-4" style={{ display: "flex", alignItems: "center" }}>
          <label
            htmlFor="passwordConf"
            className="form-label"
            style={label}
          >
            Confirm Password:
          </label>
          <input
            type="password"
            id="passwordConf"
            className="form-control rounded-pill"
            style={{ width: '300px', marginLeft: 'auto', borderColor: '#333' }} 
            required
            onChange={(e) => handleChange("passwordConf", e.target.value)}
          />
        </div>
            <div className="text-center" style = {{fontFamily: 'ClimbingPlant'}}>
              <input
              style={{    backgroundColor: '#8B4510',
              color: '#fff',
              borderColor: '#8B4513',
              letterSpacing: '5px',
              fontSize: '25px'}}
                type="submit"
                value="Register!"
                className="btn btn-primary btn-lg rounded-pill"
                disabled={
                  user.password &&
                  user.password.length >= 8 &&
                  user.password === user.passwordConf &&
                  user.firstName &&
                  user.lastName &&
                  user.email
                    ? false
                    : true
                }
              />
            </div>
          </form>
        </div>
      </div>
    </Layout>
    </div>
  );
}

export default Register;