import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/esm/Container";

const navbarStyle = {
  backgroundColor: "lightblue",
};

const Header = ({ title }) => {
  return (
    <Navbar
      bg="lightblue"
      variant="light"
      className=" bg-lightblue"
      style={navbarStyle}
    >
      <Container>
        <Navbar.Brand href="/">{title}</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
