import { Box, Button, TextField, styled } from "@mui/material";
import loginimg from "../assets/images/loginimg.png";
import "./loginpage.css";

import { useState } from "react";
import { checkadmin, checkuser } from "../features/loginslice";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const admincheck = useSelector((state: any) => state.admin);
  const usercheck = useSelector((state: any) => state.user);
  const [admin, setAdmin] = useState<any>("contained");
  const [user, setUser] = useState<any>("outlined");
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  let emails: any = "";
  let passwords: any = "";

  const setAdminVariant = () => {
    setAdmin("contained");
    setUser("outlined");
  };
  const setUserVariant = () => {
    setAdmin("outlined");
    setUser("contained");
  };

  const checkCredentials = (event: any) => {
    console.log(emails, passwords, "-----");
    if (admin === "contained") {
      if (admincheck.email === emails && admincheck.password === passwords) {
        navigate("/adminportal");
      }
    } else {
      if (usercheck.email === emails && usercheck.password === passwords) {
        navigate("/userportal");
      }
    }
  };

  const Login = styled("div")(() => ({
    display: "flex",
    width: "92.5em",
    height: "800px",
  }));

  const LoginPhoto = styled(Box)(() => ({
    display: "flex",
    width: "46.25em",
    height: "800px",
  }));

  const LoginCredentials = styled(Box)(() => ({
    width: "46.25em",
    height: "800px",
  }));

  const Credentials = styled(Box)(() => ({
    marginLeft: "215px",
    marginTop: "50px",
  }));

  return (
    <div className="login">
      <Login>
        <LoginPhoto
          style={{ backgroundImage: `url(${loginimg})` }}
        ></LoginPhoto>

        <LoginCredentials>
          <h1 className="name">
            <span className="hey">Hey !!</span> <br />
            <span>Login please</span>
          </h1>
          <Button
            style={{ marginLeft: "15%", marginTop: "5%", width: "250px" }}
            variant={admin}
            onClick={setAdminVariant}
          >
            Admin
          </Button>
          <Button
            style={{ marginLeft: "30px", marginTop: "5%", width: "250px" }}
            variant={user}
            onClick={setUserVariant}
          >
            User
          </Button>
          <br />

          <Credentials>
            <label style={{ fontSize: "30px" }} htmlFor="email">
              Email
            </label>
            <br />
            <TextField
              style={{ marginTop: "10px", width: "61%" }}
              key="email"
              id="outlined-search"
              label="Email..."
              type="email"
              onChange={(e) => (emails = e.target.value)}
            />
            <br />
            <label style={{ fontSize: "30px" }} htmlFor="email">
              Password
            </label>
            <br />
            <TextField
              style={{ marginTop: "10px", width: "61%" }}
              key="password"
              id="outlined-password-input"
              label="Password..."
              type="password"
              autoComplete="current-password"
              onChange={(e) => (passwords = e.target.value)}
            />
          </Credentials>
          <div className="credentials" style={{ display: "flex" }}>
            <hr
              style={{
                marginLeft: "15%",
                marginTop: "50px",
                width: "25%",
                borderLeft: "0px",
                borderBottom: "0px",
                borderRight: "0px",
              }}
            />
            <Button
              style={{ marginTop: "30px", width: "80px" }}
              variant="contained"
              onClick={checkCredentials}
            >
              login
            </Button>
            <hr
              style={{
                marginLeft: "5%%",
                marginTop: "50px",
                marginRight: "80px",
                width: "25%",
                borderLeft: "0px",
                borderBottom: "0px",
                borderRight: "0px",
              }}
            />
          </div>
        </LoginCredentials>
      </Login>
    </div>
  );
};

export default LoginPage;
