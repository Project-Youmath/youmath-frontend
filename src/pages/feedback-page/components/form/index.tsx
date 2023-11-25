import axios from "axios";
import styles from "./index.module.scss";
import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "react-router-dom";

const EmailForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [captchaValue, setCaptchaValue] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [verificationError, setVerificationError] = useState("");

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value || "");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError("");
    setMessageError("");
    setVerificationError("");
    if (!validateEmail(email)) {
      setEmailError("Укажите почту в формате address@example.com ");
      return;
    }
    if (message.length < 4) {
      setMessageError(
        "Текст слишком короткий, минимальная допустимая длина - 4 символа"
      );
      return;
    }

    if (!captchaValue) {
      setVerificationError("Подтвердите, что вы не робот!");
      return;
    }
    console.log({
      email,
      name,
      message,
    });
    const axi = await axios.post("https://youmath.ru/api/v1/contact/", {
      email,
      name,
      message,
    });
    console.log(axi);

    setEmail("");
    setName("");
    setMessage("");
    setCaptchaValue("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.input}>
        <input
          className={styles.mail}
          type="email"
          id="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="email">{emailError}</label>
      </div>

      <div className={styles.input}>
        <input
          type="text"
          placeholder="Имя"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="name"></label>
      </div>

      <div className={styles.input}>
        <textarea
          className={styles.text}
          id="message"
          placeholder="Введите текст сообщения"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <label htmlFor="message">{messageError}</label>
      </div>
      <div className={styles.ReCAPTCHA}>
        <ReCAPTCHA sitekey="Ваш siteKey" onChange={handleCaptchaChange} />
        <label htmlFor="ReCAPTCHA">{verificationError}</label>
      </div>
      {/* Перейдите на сайт reCAPTCHA и нажмите на кнопку "Начать использование".
Вам будет предложено войти в свою учетную запись Google. Если у вас нет учетной записи, создайте новую.
После входа вам будет предложено зарегистрировать свой сайт. Введите название вашего сайта в поле "Метка", выберите тип reCAPTCHA (в данном случае выберите "reCAPTCHA v2"), а затем введите домен вашего сайта в поле "Домены".
Прочтите и примите условия использования сервиса reCAPTCHA.
После успешной регистрации вам будет предоставлен siteKey. Вы увидите его вместе с инструкциями по встраиванию reCAPTCHA на ваш сайт.
Сохраните siteKey в безопасном месте, так как вам понадобится использовать его в коде вашего приложения.
Обратите внимание, что для разработки на локальном сервере или в тестовой среде вам может потребоваться добавить дополнительные домены или использовать тестовый siteKey, предоставляемый reCAPTCHA.
Убедитесь, что вы следуете официальной документации и руководствам, предоставленным Google reCAPTCHA, чтобы правильно настроить и использовать reCAPTCHA на вашем сайте. */}

      <button type="submit" className={styles.button}>
        Отправить
      </button>

      <div className={styles.linkBox}>
        Нажимая на кнопку «Отправить», вы соглашаетесь с обработкой персональных
        данных и с &nbsp;
        <Link className={styles.link} to="#">
          политикой в отношении обработки персональных данных
        </Link>
      </div>
    </form>
  );
};

export default EmailForm;
