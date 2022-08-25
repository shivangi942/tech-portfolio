import { useEffect, useState } from "react";
import { NavBar, Container } from "react-bootstrap";

export const NavBar = () => {
  //set which link/tab is active
  const { activeLink, setActiveLink } = useState("home");

  //check if user scroll so that we can change the background accordingly or give any other effects based on the scroll if we want
  const { scrolled, setScrolled } = useState(false);

  useEffect(() => {
    //what happens when we scroll
    const onScroll = () => {
      if (window.scrollY > 50) {
        //in Y direction or vertically scroll happens more than 50 or half the scree than:-
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    //added event listener on window for event scroll, if scroll happens then onScroll() function will be called
    window.addEventListener("scroll", onScroll);

    //when componenet gets removed from DOM so we are removing eventlistener from onScroll
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={""} alt="image" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="#">
                <img src={""} alt="" />
              </a>
              <a href="#">
                <img src={""} alt="" />
              </a>
              <a href="#">
                <img src={""} alt="" />
              </a>
            </div>
            <button className="vvd" onClick={() => console.log("works")}>
              <span>Let's Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
