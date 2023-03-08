import React from "react";
import s from "./SignIn.module.scss";
import email from "../../assets/email.png";
import password from "../../assets/password.png";
import Layout from "../../components/Layout/Layout";
import MyInput from "../../components/MUI/MyInput/MyInput";
import MyButton from "../../components/MUI/Buttons/MyButton/MyButton";
import { useLocation } from "react-router-dom";

const SignIn = () => {
  const location = useLocation()
  console.log(location.pathname)
  return (
    <Layout>
      <div className={s.signIn_main}>
        <h1>Вход</h1>
        <div className={s.inputs_btn}>
          <MyInput type="email" placeholder="E-mail">
            <span>
              <img src={email} alt={"email"} />
            </span>
          </MyInput>

          <MyInput type="password" placeholder="Пароль">
            <span>
              <img src={password} alt={"password"} />
            </span>
          </MyInput>
          <span>{}</span>
          <MyButton disabled style={{height: 50, background: '#000000', color: '#FFFFFF'}}>Войти</MyButton>
        </div>
      </div>
    </Layout>
  );
};

export default SignIn;
