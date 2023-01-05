import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assests/trew_white.png";
import { Container } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
const Menu = () => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <ul>
            <li>
              {" "}
              <Link href="/documentation" className="link_routes">
                DOCUMENTATIONS
              </Link>
            </li>
            <li>
              <Link href="/plugin" className="link_routes">
                PLUGIN
              </Link>
            </li>
            <li>
              {" "}
              <Link href="/plugin" className="link_routes">
                CONTACT US
              </Link>
            </li>
          </ul>
        </div>

        <div className="ps-5">
          {" "}
          <Link
            href="/"
            className="link_route text-decoration-none language mx-2"
          >
            EN
          </Link>{" "}
          <Link
            href="/"
            className="link_route text-decoration-none language"
          >
            IT
          </Link>
        </div>
      </div>
    </>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <div className="nav_border">
        <Container >
          <div className="navbar">
            <div className="navbar__links">
              <div className="navbar__logo">
                <Link href="/" className="">
                  <Image src={logo} className="logo_trew" width={120} alt="" />
                </Link>
              </div>
              <div className="navbar__right">
                <div className="navbar__pages">
                  <Menu />
                </div>
                <div className="navbar__mobile_menu">
                  {toggleMenu ? (
                    <RiCloseLine
                      color="#fff"
                      onClick={() => setToggleMenu(false)}
                    />
                  ) : (
                    <RiMenu3Line
                      color="#fff"
                      onClick={() => setToggleMenu(true)}
                    />
                  )}
                  {toggleMenu && (
                    <div className="navbar__mobile_menu_links motion">
                      <div className="navbar__mobile_menu_links_drop">
                        <Menu />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Navbar;
