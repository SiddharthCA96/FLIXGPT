import React from 'react'

//valiadate the input and send an error mssg if thereis any
const validate = (Email,password,name) => {
    const isEmailVaild=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(Email);
    const isPasswordValid=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);
    const isNameValid=/^[0-9A-Za-z]{6,16}$/.test(name);
    if(!isNameValid){
        return "Enter a valid username";
    }
    if(!isEmailVaild){
        return "Email is not valid!";
    }
    if(!isPasswordValid){
        return "Password is not valid!";
    }
    return null;
}

export default validate
