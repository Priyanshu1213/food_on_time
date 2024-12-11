
import React, { useState } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import Badge from "react-bootstrap/Badge";

import Portal from "../../Portal";
import Cart from "../Cart/Cart";
import { useStateCart } from "../contextReducer";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import foodlogo from "../../Assets/foodpng.png";

export default function Navbar() {
  const state = useStateCart();
  const [cartView, setCartView] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const Navigate = useNavigate();

  function cart() {
    if (localStorage.getItem("authToken")) {
      setCartView(true);
    } else {
      Navigate("/");
      toast.error("Please login");
    }
  }

  function logout() {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userEmail");
    toast.success("You logged out");
    Navigate("/");
  }

  return (
    <div className="Nav">
      {/* Top Navbar */}
      <div className="Navbar_1">
        <div className="Navbar_2">
          <img
            onClick={() => Navigate("/")}
            alt="load"
            src={foodlogo}
          />
        </div>


        <div className="menu">
        {!localStorage.getItem("authToken") ? (
          <div className="Navbar_21">
            <div className="Navbar_211" onClick={() => Navigate("/")}>
              Home
            </div>
            <div className="Navbar_211" onClick={() => Navigate("/login")}>
              Login
            </div>
            <div className="Navbar_211" onClick={() => Navigate("/signup")}>
              Sign-up
            </div>
            <div className="Navbar_211" onClick={cart}>
              Add Cart
            </div>
          </div>
        ) : (
          <div className="Navbar_21">
            <div className="Navbar_211" onClick={() => Navigate("/")}>
              Home
            </div>
            <div className="Navbar_211" onClick={() => Navigate("/myorder")}>
              My Order
            </div>
            <div className="Navbar_211" onClick={cart}>
              Add Cart{" "}
              {!state.length <= 0 ? (
                <Badge pill bg="danger">
                  {state.length}
                </Badge>
              ) : (
                ""
              )}
            </div>
            {cartView && (<Portal onClose={() => setCartView(false)}><Cart /></Portal>)}
            <div className="Navbar_211" onClick={logout}>
              Logout
            </div>
          </div>
        )}

</div>





        <div className="hamburger-menu" onClick={() => setDrawerOpen(!drawerOpen)}>
          ☰ {/* Hamburger icon */}
        </div>

      </div>





      {/* Drawer */}
      <div className={`drawer ${drawerOpen ? "open" : ""}`}>

        {!localStorage.getItem("authToken") ? (
          <div className="Navbar_21">
            <div className="Navbar_211" onClick={() => Navigate("/")}>
              Home
            </div>
            <div className="Navbar_211" onClick={() => Navigate("/login")}>
              Login
            </div>
            <div className="Navbar_211" onClick={() => Navigate("/signup")}>
              Sign-up
            </div>
            <div className="Navbar_211" onClick={cart}>
              Add Cart
            </div>
          </div>
        ) : (
          <div className="Navbar_21">
            <div className="Navbar_211" onClick={() => Navigate("/")}>
              Home
            </div>
            <div className="Navbar_211" onClick={() => Navigate("/myorder")}>
              My Order
            </div>
            <div className="Navbar_211" onClick={cart}>
              Add Cart{" "}
              {!state.length <= 0 ? (
                <Badge pill bg="danger">
                  {state.length}
                </Badge>
              ) : (
                ""
              )}
            </div>
            {cartView && (<Portal onClose={() => setCartView(false)}><Cart /></Portal>)}
            <div className="Navbar_211" onClick={logout}>
              Logout
            </div>
          </div>
        )}
      </div>

      
    </div>
  );
}
