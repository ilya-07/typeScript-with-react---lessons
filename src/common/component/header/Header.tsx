import clsx from "clsx";
import React from "react";
import { NavLink, Link } from "react-router-dom";
import Container from "../container/Container";

const Header = () => {
  const makeActive = ({ isActive }: { isActive: boolean }) =>
    clsx("text-black/30 hover:text-black/60 hover:underline", {
      "text-black/70": isActive,
    });

  return (
    <header>
      <Container>
        <nav className="px-2 py-4">
          <div className=" flex justify-between">
            <Link className=" text-green text-2xl uppercase font-bold" to="/">
              UBUNTU
            </Link>
            <ul className="flex gap-[20px]">
              <li>
                <NavLink className={makeActive} to={"/"}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className={makeActive} to={"/in"}>
                  Sign in
                </NavLink>
              </li>
              <li>
                <NavLink className={makeActive} to={"/up"}>
                  Sign up
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
