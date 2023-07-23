import { Container, Image } from "./Auth.styled";

import Login from "../../Components/Login/Login";
import Signup from "../../Components/Signup/Signup";

import image from "../../assets/pxfuel.jpg";

import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [screen, setScreen] = useState("login");

  return (
    <Container>
      <Image>
        <img src={image} alt="photo" />
      </Image>
      {screen == "signup" && (
        <Signup
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          repeatPassword={repeatPassword}
          setRepeatPassword={setRepeatPassword}
          setScreen = {setScreen}
        />
      )}
      {screen == "login" && (
        <Login
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          setScreen = {setScreen}
        />
      )}
    </Container>
  );
};

export default Auth;
