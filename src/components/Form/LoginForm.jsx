import React from "react";
import style from './LoginForm.module.css';
import logo from "./../../assets/rick-and-morty1.jpg";
import { useState } from "react";
import { validate } from "../../validation";

export default function LoginForm({login}) {
   
  const [userData, setUserData] = useState({
    email: " ",
    password: " ",
  });

  function handledSubmit(e){
    e.preventDefault();
   
    if(!errors.email && !errors.password){
      login(userData);
    } else{
      alert("Incorrect data")
    }
  };
  
  const [errors, setErrors] = useState({});
  

  function handleChange(event){
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });

    setErrors(validate({
      ...userData,
      [event.target.name]: event.target.value,
    }))
  };

  return (
    <div className={style.container}>

      <div className={style.content}>
        <img className={style.logo} src={logo} alt="No se pudo cargar la imagen" />
        <form>
          <label>Email:</label>
          <input type="text" name="email" placeholder="Ingresa tu e-mail" value={userData.email} onChange={handleChange}/>
          {errors.email && <span>{errors.email}</span>}

          <label>Password:</label>
          <input type="password" name="password" placeholder="Ingresa tu contraseña" value={userData.password} onChange={handleChange} />
          {errors.password && <span>{errors.password}</span>}
          <button type="submit" onClick={handledSubmit}>Submit</button>
        </form>
      </div>

    </div>
  );
};
