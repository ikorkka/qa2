import React from "react";
import s from "./Header.module.scss";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import MyButton from "../MUI/Buttons/MyButton/MyButton";

const Header = () => {
  return (
    <div className={s.header_container}>
      <header>
        <div className={s.logo_text}>
          <Link to={"/"}>
            <img src={logo} alt="logo" />
          </Link>
          <span>
            Разрабатываем и запускаем <br />
            сложные веб проекты
          </span>
        </div>
        <Link to={"/login"}>
          <MyButton
            style={{
              maxWidth: 114,
              height: 40,
              color: "#000000",
              border: "1px solid #D5D5D5",
              padding: "7px 33px",
            }}
          >
            Войти
          </MyButton>
        </Link>
      </header>
    </div>
  );
};

export default Header;
