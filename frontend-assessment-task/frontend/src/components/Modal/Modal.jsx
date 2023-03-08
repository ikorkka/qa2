import React, { useContext } from "react";
import s from "./Modal.module.scss";
import classNames from "classnames";
import { AddContext } from "../../pages/AddContext/AddContext";
import MyInput from "../MUI/MyInput/MyInput";
import MyButton from '../MUI/Buttons/MyButton/MyButton';

const Modal = () => {
  const { active } = useContext(AddContext);
  console.log(active);
  return (
    <div
      className={active ? classNames(s.modal, s.active) : classNames(s.modal)}
    >
      <div className={s.modal_content}>
        <h1>Редактировать профиль</h1>
        <form>
          <label htmlFor="text">
            Имя
            <MyInput />
          </label>
          <label htmlFor="email">
            E-mail
            <MyInput />
          </label>
          <label htmlFor="url">
          Url аватарки
            <MyInput />
          </label>
         <label htmlFor="">
         Описание <br />
         <textarea name="" id="" cols="65" rows="5"></textarea>
         </label>
         <div className={s.buttons}>
         <MyButton>Отмена</MyButton>
         <MyButton style={{height: 50, background: '#000000', color: '#FFFFFF'}}>Сохранить</MyButton>
         </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
