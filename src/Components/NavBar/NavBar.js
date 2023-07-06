import React,{useState,Fragment} from 'react';
import "./NavBar.css";
import {
  Nav,
  NavContainer,
  NavLogo,
  NavItem,
  NavLinks,
  NavMenu,
  MobileIcon,
} from "./NavBarStyles";

function NavBar() {
  const [colorChange, setcolorChange] = useState(false)
    const changeNavbarColor = () => {
      if (window.scrollY >= 80) {
       
         setcolorChange(false);
      } else {
        setcolorChange(true);
      }
    };
     window.addEventListener("scroll", changeNavbarColor);
  return (
    // <div className="navbar">
    //   <img className='logo'
    //     src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
    //     alt="NetFLix-logo"
    //   />
    //   <img className='avatar'
    //     src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
    //     alt="Avatar"
    //   />
    // </div>

    <Fragment>
      <Nav className={colorChange ? "navbar colorChange" : "navbar"}>
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
          alt="NetFLix-logo"
        />
        <img
          className="avatar"
          src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
          alt="Avatar"
        />
        <NavContainer>
          <MobileIcon></MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks href="#">Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks href="#">TV Shows</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks href="#">Movies</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks href="#">New and Popular</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks href="#">MyList</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks href="#">Browse By Language</NavLinks>
            </NavItem>
          </NavMenu>
        </NavContainer>
      </Nav>
    </Fragment>
  );
}

export default NavBar