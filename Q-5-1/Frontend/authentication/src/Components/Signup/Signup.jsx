import { Container, Header, MyInput, MyButton, Change } from "./Signup.styled";
import { useEffect, useState } from "react";
import validator from "validator";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const Signup = ({
  email,
  setEmail,
  password,
  setPassword,
  repeatPassword,
  setRepeatPassword,
  setScreen,
}) => {
  const history = useNavigate();

  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const [validRepeatedPassword, setValidRepeatedPassword] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  async function handleSubmit() {
    try {
      await axios
        .post("http://localhost:8000/signup", {
          email,
          password,
        })
        .then((res) => {
          if (res.data == "exist") {
            alert("User already exists");
          } else if (res.data == "not exist") {
            history("/home", { state: { id: email } });
          }
        })
        .catch((err) => {
          alert("Wrong details");
          console.log(err);
        });
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    setValidEmail(validator.isEmail(email));
  }, [email]);

  useEffect(() => {
    setValidPassword(password.length > 7);
    console.log(validRepeatedPassword);
  }, [password]);

  useEffect(() => {
    setValidRepeatedPassword(validPassword && password === repeatPassword);
  }, [repeatPassword]);

  return (
    <Container>
      <Header>Sign up</Header>
      <MyInput placeholder="Email" type="email" onChange={handleEmail} />
      <MyInput
        placeholder="Password"
        type="password"
        onChange={handlePassword}
      />
      <MyInput
        placeholder="Repeat Password"
        type="password"
        onChange={handleRepeatPassword}
      />
      <MyButton
        disabled={!validEmail || !validPassword || !validRepeatedPassword}
        onClick={() => {
          handleSubmit();
        }}
      >
        Sign up
      </MyButton>
      <Change>
        Have an account ?{" "}
        <span
          onClick={() => {
            setScreen("login");
          }}
        >
          Log in
        </span>
      </Change>
    </Container>
  );
};

export default Signup;
