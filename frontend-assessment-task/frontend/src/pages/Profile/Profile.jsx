import React, { useContext } from "react";
import s from "./Profile.module.scss";
import cover from "../../assets/cover.png";
import Header from "../../components/Header/Header";
import MySecondButton from "../../components/MUI/Buttons/MySecondButton/MySecondButton";
import avatar from "../../assets/avatar.png";
import edit from "../../assets/edit.png";
import exit from "../../assets/exit.png";
import { AddContext } from "../AddContext/AddContext";
import Modal from "../../components/Modal/Modal";

const Profile = () => {
  const { setActive } = useContext(AddContext);
  return (
    <div className={s.profile_main}>
      <Header />
      <div className={s.profile_body}>
        <img className={s.cover} src={cover} alt="cover" />
        <div className={s.profile_content}>
          <span className={s.avatar}>
            <img src={avatar} alt="avatar" />
          </span>
          <div className={s.container}>
            <div className={s.name_email}>
              <h1>Владислав</h1>
              <p>example@gmail.com</p>
            </div>
            <MySecondButton
              onClick={() => setActive(true)}
              style={{ maxWidth: 200 }}
            >
              <span className={s.edit_img}>
                <img src={edit} alt="edit" />
              </span>
              Редактировать
            </MySecondButton>
          </div>
          <div className={s.text}>
            <p>
              Рыбатекст используется дизайнерами, проектировщиками и
              фронтендерами, когда нужно быстро заполнить макеты или прототипы
              содержимым. Это тестовый контент, который не должен нести никакого
              смысла, лишь показать наличие самого текста или продемонстрировать
              типографику в деле.
            </p>
          </div>
          <MySecondButton style={{ maxWidth: 130, marginTop: 60 }}>
            <span className={s.exit_img}>
              <img src={exit} alt="exit" />
            </span>
            Выйти
          </MySecondButton>
          <Modal />
        </div>
      </div>
    </div>
  );
};

export default Profile;
