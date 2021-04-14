import React from "react";
import { useForm }from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./App.css"

const schema = yup.object().shape({
  lastName: yup.string().min(3).required(),
  firstName: yup.string().min(3).required(),
  midleName: yup.string().min(3).required(),
  birthDate: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required().min(6),
  password2: yup.string().oneOf([yup.ref("password"), null]),
});

const Form = ({setData}) => {
  const { register, handleSubmit, formState:{errors} } = useForm({
      resolver:yupResolver(schema),
  });
  const submitForm = (data) => {
    if(data){
        setData(data)
    }
  };
  return (
    <section className="form-sign">
      <div className="form-content-right">
        <form className="setup-form" onSubmit={handleSubmit(submitForm)}>
          <h4>для регистрации заполните все поля</h4>
          <div className="form-control">
            <label htmlFor="lastName" className="form-label">
              фамилия
            </label>
            <input
              className="form-input"
              id="lastName"
              type="text"
              name="lastName"
              placeholder="фамилия"
              {...register("lastName", { required: true })}
            />
            <p className="error">
              {errors.lastName && "Необходимо ввести фамилию"}
            </p>
          </div>
          <div className="form-control">
            <label htmlFor="firstName" className="form-label">
              имя
            </label>
            <input
              className="form-input"
              id="firstName"
              type="text"
              name="firstName"
              placeholder="имя"
              {...register("firstName", { required: true })}
            />
            <p className="error">
              {errors.firstName && "Необходимо ввести имя"}
            </p>
          </div>
          <div className="form-control">
            <label htmlFor="midleName" className="form-label">
              отчество
            </label>
            <input
              className="form-input"
              id="midleName"
              type="text"
              name="midleName"
              placeholder="oтчество"
              {...register("midleName", { required: true })}
            />
            <p className="error">
              {errors.midleName && "Необходимо ввести отчество"}
            </p>
          </div>
          <div className="form-control">
            <label htmlFor="birthDate" className="form-label">
              Дата рождения
            </label>

            <input
              className="form-input"
              type="date"
              name="birthDate"
              {...register("birthDate", { required: true })}
            />
            <p className="error">
              {errors.birthDate && "Необходимо ввести дату рождения"}
            </p>
          </div>
          <div className="form-control">
            <label htmlFor="email" className="form-label" name="birthDate">
              {" "}
              Почта
            </label>
            <input
              className="form-input"
              id="email"
              type="email"
              name="email"
              placeholder="email"
              {...register("email", { required: true })}
            />
            <p className="error">
              {errors.email && "Необходимо ввести коректный email"}
            </p>
          </div>
          <div className="form-control">
            <label htmlFor="password" className="form-label">
              {" "}
              Пароль
            </label>
            <input
              className="form-input"
              id="password"
              type="password"
              name="password"
              placeholder="пароль"
              {...register("password", { required: true })}
            />
            <p className="error">
              {errors.password && "Пароль должен быть не менее 6 символов"}
            </p>
          </div>
          <div className="form-control">
            <label htmlFor="password2" className="form-label">
              {" "}
              Повторить пароль
            </label>
            <input
              className="form-input"
              id="password2"
              type="password"
              name="password2"
              placeholder="повторить пароль"
              {...register("password2", { required: true })}
            />
            <p className="error">{errors.password2 && "Пороли не совпадают"}</p>
          </div>
          <button type="submit" className="submit-btn">
            Отправить
          </button>
        </form>
      </div>
    </section>
  );
};

export default Form;
