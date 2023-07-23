import { Container } from "./Home.styled";
import { useLocation, useNavigate } from "react-router-dom";

const Home = () => {
    const location = useLocation()
  return (
    <Container>
      <h1>Hello {location.state.id} and welcome to the home</h1>
    </Container>
  );
};

export default Home;
