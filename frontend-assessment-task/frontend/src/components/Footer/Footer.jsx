import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import s from "./Footer.module.scss";

const Footer = () => {
  const [token, setToken] = useState("/login");
  return (
    <footer>
      {token == "/login" ? (
        <>
          <Link to={"/register"}>
            <p>Еще нет аккаунта?</p> Зарегистрироваться
          </Link>
        </>
      ) : (
        <>
          <Link to={"/login"}>
            <p>Уже есть аккаунт?</p> Войти
          </Link>
        </>
      )}
    </footer>
  );
};

export default Footer;
