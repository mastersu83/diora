import React, { ChangeEvent, useState } from "react";
import classes from "./Contacts.module.scss";

const Contacts = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  });

  const onChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const onSend = () => {
    console.log("hello");
  };

  return (
    <div className={classes.contacts}>
      <p className={classes.contacts__title}>Контакты</p>
      <div className={classes.contacts__box}>
        <div className={classes.contacts__data}>
          <p>8(928)22-00-633</p>
          <p>E:mail diorakids@mail.ru</p>
        </div>
        <form onSubmit={onSend} className={classes.contacts__form}>
          <input
            onChange={onChange}
            name="name"
            type="text"
            placeholder="Ваше имя"
            required
          />
          <input
            onChange={onChange}
            name="email"
            type="email"
            placeholder="Ваш Email"
            required
          />
          <textarea
            onChange={onChange}
            name="message"
            placeholder="Сообщение"
            required
          />
          <button>Отправить</button>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
