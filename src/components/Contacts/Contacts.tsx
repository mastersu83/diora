import React, { ChangeEvent, FormEvent, useState } from "react";
import classes from "./Contacts.module.scss";
import emailjs from "emailjs-com";

const Contacts = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const onChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  function sendEmail(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    emailjs
      .send("service_9lgjhxd", "template_8ungnpb", inputs, "eQGLG0AZVrB7OFMsY")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  }

  return (
    <div className={classes.contacts}>
      <p className={classes.contacts__title}>Контакты</p>
      <div className={classes.contacts__box}>
        <div className={classes.contacts__data}>
          <p>8(928)22-00-633</p>
          <p>E:mail diorakids@mail.ru</p>
        </div>
        <form onSubmit={sendEmail} className={classes.contacts__form}>
          <input
            onChange={onChange}
            name="name"
            type="text"
            placeholder="Ваше имя"
            value={inputs.name}
            required
          />
          <input
            onChange={onChange}
            name="email"
            type="email"
            placeholder="Ваш Email"
            value={inputs.email}
            required
          />
          <input
            onChange={onChange}
            name="subject"
            type="text"
            placeholder="Тема сообщения"
            value={inputs.subject}
            required
          />
          <textarea
            onChange={onChange}
            name="message"
            placeholder="Сообщение"
            value={inputs.message}
            required
          />
          <button>Отправить</button>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
