import axios from "axios";
import styles from "./index.module.scss";
import React, { useState, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "react-router-dom";

const EmailForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [captchaValue, setCaptchaValue] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [nameError, setNameError] = useState("");
  const [verificationError, setVerificationError] = useState("");
  const [isEmpty, setIsEmpty] = useState(true)
  const recaptchaRef: any = React.useRef(null);
 
  useEffect((): void => {
    //проверка на то, что нет ошибок после валтдвции и стейты инпутов не пустые. Если условия соблюдены, то кнопка раздизейблится
    if ((!emailError && !nameError && !messageError && !verificationError) && (!!email && !!name && !!message && !!captchaValue)){
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }
  }, [emailError, nameError, messageError, verificationError, email, name, message, captchaValue, isEmpty])

  const validateEmail = (email: string): void => {
    setEmail(email);
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!emailRegex.test(email)) {
      setEmailError("Укажите почту в формате address@example.com ")
    } else {
      setEmailError("")
    }
  };

  const validateName = (name: string): void=> {
    setName(name);
    const nameRegex = /\d/;
    if (name.length && name.length < 2 ){
      setNameError("Введите корректное имя")
    } else if (!name.length){
      setNameError("Это поле обязательное для заполнения")
    } else if(name.match(nameRegex)) {
      setNameError("Имя не должно содержать цифр")
    } else {
      setNameError("")
    }
  }

  const validateMessage = (message: string): void => {
    setMessage(message);
    if (message.length < 4) {
      setMessageError(
        "Текст слишком короткий, минимальная допустимая длина - 4 символа"
      )
    } else {
      setMessageError("")
    }
  } 

  const handleCaptchaChange = (): void => {
    console.log("recaptchaRef.current.getValue()", recaptchaRef.current.getValue(), "recaptchaRef.current", recaptchaRef.current)
    setCaptchaValue( recaptchaRef.current.getValue() || "");
    if (!recaptchaRef.current.getValue()) {
      setVerificationError("Подтвердите, что вы не робот!");
    } else {
      setVerificationError("");

    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const sendFeedbackForm = await axios.post("https://youmath.ru/api/v1/contact/", {
        email,
        name,
        message,
    });
    console.log(sendFeedbackForm);
    setEmail("");
    setName("");
    setMessage("");
    setCaptchaValue("");
  };

  return (
    <form noValidate onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.input}>
        <input
          className={!!emailError ? styles.error: email.length ? styles.success : ""}
          type="text"
          id="email"
          placeholder="email"
          value={email}
          onChange={(e) => validateEmail(e.target.value)}
          required
        />
        <span className={styles.error_massage}>{emailError}</span>
      </div>

      <div className={styles.input}>
        <input
          className={!!nameError ? styles.error : name.length ? styles.success: ""}
          type="text"
          placeholder="Имя"
          id="name"
          value={name}
          onChange={(e) => validateName(e.target.value)}
          required
        />
        <span className={styles.error_massage}>{nameError}</span>
      </div>

      <div className={styles.input}>
        <textarea
          className={!!messageError ? `${styles.error} ${styles.text}` : message.length ? `${styles.success} ${styles.text}` : styles.text}
          id="message"
          placeholder="Введите текст сообщения"
          value={message}
          onChange={(e) => validateMessage(e.target.value)}
          required
        />
        <span className={styles.error_massage}>{messageError}</span>
      </div>
      {/*Попробовать использовать мой ключ sitekey="6LcN6TgpAAAAALHkuubC5yZVBi6zSDFow-BldwIE"*/}
      <div className={captchaValue ? styles.recaptcha__success: verificationError ? styles.recaptcha__error : ""} >
        <ReCAPTCHA ref={recaptchaRef} sitekey="Ваш sitekey"
        onChange={() => handleCaptchaChange()}
        /> 
        <span className={styles.error_massage}>{verificationError}</span>
      </div>
      {/* Перейдите на сайт reCAPTCHA и нажмите на кнопку "Начать использование".
Вам будет предложено войти в свою учетную запись Google. Если у вас нет учетной записи, создайте новую.
После входа вам будет предложено зарегистрировать свой сайт. Введите название вашего сайта в поле "Метка", выберите тип reCAPTCHA (в данном случае выберите "reCAPTCHA v2"), а затем введите домен вашего сайта в поле "Домены".
Прочтите и примите условия использования сервиса reCAPTCHA.
После успешной регистрации вам будет предоставлен siteKey. Вы увидите его вместе с инструкциями по встраиванию reCAPTCHA на ваш сайт.
Сохраните siteKey в безопасном месте, так как вам понадобится использовать его в коде вашего приложения.
Обратите внимание, что для разработки на локальном сервере или в тестовой среде вам может потребоваться добавить дополнительные домены или использовать тестовый siteKey, предоставляемый reCAPTCHA.
Убедитесь, что вы следуете официальной документации и руководствам, предоставленным Google reCAPTCHA, чтобы правильно настроить и использовать reCAPTCHA на вашем сайте. */}

      <button type="submit" className={styles.button} disabled={isEmpty}>
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
