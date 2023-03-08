import React, { useState } from "react";
import s from "./SignUp.module.scss";
import user from "../../assets/user.png";
import email from "../../assets/email.png";
import password from "../../assets/password.png";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import MyInput from "../../components/MUI/MyInput/MyInput";
import MyButton from "../../components/MUI/Buttons/MyButton/MyButton";
import Loading from "../../components/Loading/Loading";

const SignUp = () => {
  const [message, setMessage] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const [userData, setUserData] = useState({
    id: 1,
    username: "test",
    email: "test@gmail.com",
    password: "123456",
    avatar: `https://picsum.photos/id/1/200/200`,
    about:
      "Я тестовый пользователь номер один. Я никогда не пропадаю между запусками api!",
  });

  const BASE_URL = "http://localhost:8080";

  const postUserData = async () => {
    try {
      setisLoading(true);
      await axios
        .post(BASE_URL + "/register", userData)
        .then((res) => console.log(res.data.message));
      setMessage("");
    } catch (error) {
      setMessage(error.response.data.error);
      console.log(error.response.data.error);
    }
    setisLoading(false);
  };
  return (
    <Layout>
      <div className={s.signUp_main}>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <h1>Регистрация</h1>
            <form className={s.inputs_btn}>
              <MyInput
                value={userData.username}
                onChange={(e) => {
                  setUserData({ ...userData, username: e.target.value });
                }}
                type="text"
                placeholder="Имя"
              >
                <span>
                  <img src={user} alt={"user"} />
                </span>
              </MyInput>

              <MyInput
                value={userData.email}
                onChange={(e) => {
                  setUserData({ ...userData, email: e.target.value });
                }}
                type="email"
                placeholder="E-mail"
              >
                <span>
                  <img src={email} alt={"email"} />
                </span>
              </MyInput>

              <MyInput
                value={userData.password}
                onChange={(e) => {
                  setUserData({ ...userData, password: e.target.value });
                }}
                type="password"
                placeholder="Пароль"
              >
                <span>
                  <img src={password} alt={"password"} />
                </span>
              </MyInput>

              {!!message.length && <span className={s.message}>{message}</span>}
              {!!userData.username.length &&
              !!userData.email.length &&
              !!userData.password.length ? (
                <MyButton onClick={postUserData} style={{height: 50, background: '#000000', color: '#FFFFFF'}}>Создать аккаунт</MyButton>
              ) : (
                <MyButton onClick={postUserData} disabled style={{height: 50, background: '#000000', color: '#FFFFFF'}}>
                  Создать аккаунт
                </MyButton>
              )}
            </form>
          </>
        )}
      </div>
    </Layout>
  );
};

export default SignUp;
