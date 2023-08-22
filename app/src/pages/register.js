import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import AuthService from '../services/auth.service';
import jwtDecode from 'jwt-decode';
import { useGlobalState } from "../context/GlobalState";
import Layout from "./layout";

const label = {
  fontWeight: "bolder",
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
    <Layout>
      <div className="col-12 col-md-6 container d-flex align-items-center justify-content-center h-100">
        <div className="col-6 col-md-6" style={{ marginTop: "100px" }}>
          <h1 style={{ marginBottom: '20px', fontFamily: 'ClimbingPlant', textAlign: 'center' }}>Registration</h1>
          <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="mb-3" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <label
                htmlFor="firstName"
                className="form-label"
                style={{ ...label, whiteSpace: "nowrap", marginRight: "10px" }}
              >
                First Name:
              </label>
              <input
                type="text"
                id="firstName"
                className="form-control"
                style={{ width: '300px' }}
                required
                onChange={(e) => handleChange("firstName", e.target.value)}
              />
            </div>

            <div className="mb-3" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <label
                htmlFor="lastName"
                className="form-label"
                style={{ ...label, whiteSpace: "nowrap", marginRight: "10px" }}
              >
                Last Name:
              </label>
              <input
                type="text"
                id="lastName"
                className="form-control"
                style={{ width: '300px' }}
                required
                onChange={(e) => handleChange("lastName", e.target.value)}
              />
            </div>

            <div className="mb-3" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <label
                htmlFor="email"
                className="form-label"
                style={{ ...label, whiteSpace: "nowrap", marginRight: "10px" }}
              >
                Email:
              </label>
              <input
                type="text"
                id="email"
                className="form-control"
                style={{ width: '300px' }}
                required
                onChange={(e) => handleChange("email", e.target.value)}
              />
            </div>

            <div className="mb-3" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <label
                htmlFor="password"
                className="form-label"
                style={{ ...label, whiteSpace: "nowrap", marginRight: "10px" }}
              >
                Password:
              </label>
              <input
                type="password"
                id="password"
                className="form-control"
                style={{ width: '300px' }}
                required
                onChange={(e) => handleChange("password", e.target.value)}
              />
            </div>

            <div className="mb-3" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <label
                htmlFor="passwordConf"
                className="form-label"
                style={{ ...label, whiteSpace: "nowrap", marginRight: "10px" }}
              >
                Confirm Password:
              </label>
              <input
                type="password"
                id="passwordConf"
                className="form-control"
                style={{ width: '300px' }}
                required
                onChange={(e) => handleChange("passwordConf", e.target.value)}
              />
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default Register;