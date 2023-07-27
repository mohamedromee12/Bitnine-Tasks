import { Container } from "./Home.styled";
import { useLocation, useNavigate } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  const history = useNavigate();

  const handleLogin = () => {
    history("/");
  };

  const handleLogout = () => {
    // Clear the state.id by navigating to the home page without passing any state
    history("/", { state: null });
  };

  return (
    <Container>
      {location.state && location.state.id ? (
        <div>
          <h1>Hello {location.state.id} and welcome to the home</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <h1>
          Please{" "}
          <span onClick={handleLogin}>
            Login
          </span>
        </h1>
      )}
    </Container>
  );
};

export default Home;
