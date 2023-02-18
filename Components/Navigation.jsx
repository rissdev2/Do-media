import React from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";


export default function Header() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <a className="navbar-brand">
            <img src="assets/images/logo.png" alt="Logo" />
          </a>
          <button
            className="custom-toggler navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExample09"
            aria-controls="navbarsExample09"
            aria-expanded={!isNavCollapsed ? true : false}
            aria-label="Toggle navigation"
            onClick={handleNavCollapse}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`${
              isNavCollapsed ? "collapse" : ""
            } navbar-collapse justify-content-end `}
            id="navbarsExample09"
          >
            <div className="ms-auto">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item ">
                  <Link href="/">
                    <p
                      className={currentRoute === "/" ? "active" : "non-active"}
                    >
                      Home
                    </p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/about">
                    <p
                      className={
                        currentRoute === "/about" ? "active" : "non-active"
                      }
                    >
                      About Us
                    </p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/service">
                    <p
                      className={
                        currentRoute === "/service" ? "active" : "non-active"
                      }
                    >
                      Services
                    </p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/package">
                    <p
                      className={
                        currentRoute === "/package" ? "active" : "non-active"
                      }
                    >
                      Packages
                    </p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/client">
                    <p
                      className={
                        currentRoute === "/client" ? "active" : "non-active"
                      }
                    >
                      Clients
                    </p>
                  </Link>
                </li>
                <li className="nav-item">
                <Link href="/payment">
                    <p
                      className={
                        currentRoute === "/client" ? "active" : "non-active"
                      }
                    >
                      Payment
                    </p>
                  </Link>
                   
                </li>
              </ul>
            </div>
            <div className="d-flex justify-content-center ms-auto ">
              <Link href="/contct">
                <p className="nav-buttn ">Contact Us</p>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
