import { Container, Header, MyInput, MyButton, Change } from "./Login.styled";
import { useEffect, useState } from "react";
import validator from "validator";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const Login = ({ email, setEmail, password, setPassword, setScreen }) => {
  const history = useNavigate();

  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  async function handleSubmit() {
    try {
      await axios
        .post("http://localhost:8000/", {
          email,
          password,
        })
        .then((res) => {
          if (res.data == "exist") {
            history("/home", { state: { id: email } });
          } else if (res.data == "not exist") {
            alert("User is not exist");
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
  }, [password]);

  return (
    <Container>
      <Header>Log in</Header>
      <MyInput placeholder="Email" type="email" onChange={handleEmail} />
      <MyInput
        placeholder="Password"
        type="password"
        onChange={handlePassword}
      />
      <MyButton
        disabled={!(validEmail && validPassword)}
        onClick={() => {
          handleSubmit();
        }}
      >
        Log in
      </MyButton>
      <Change>
        Don't have an account ?{" "}
        <span
          onClick={() => {
            setScreen("signup");
          }}
        >
          Sign up
        </span>
      </Change>
    </Container>
  );
};

export default Login;
