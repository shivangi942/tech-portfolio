import { useEffect, useState } from "react";
import { NavBar, Container } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

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

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    //if scroll happen then className given scrolled else none. This will help us in adding the effects/ui based upon scrolling action like we can check if the className is scrolled and then add css and stuff to it
    <Navbar bg="light" expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="image" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* if they are active link then active classname will also be added otherwise only navbar-link classname

            when they are click then update the active link to their classname so that we know which link is active            
            */}
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="#">
                <img src={navIcon1} alt="" />
              </a>
              <a href="#">
                <img src={navIcon2} alt="" />
              </a>
              <a href="#">
                <img src={navIcon3} alt="" />
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
