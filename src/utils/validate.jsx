import React from 'react'

//valiadate the input and send an error mssg if thereis any
const validate = (Email,password,name) => {
    const isEmailVaild=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(Email);
    const isPasswordValid=/^(?=.*?[0-9])(?=.*?[A-Za-z]).{8,32}$/.test(password);
    // const isNameValid=/^[a-zA-Z]+([-'\s][a-zA-Z]+)*$/.test(name);
    // if(!isNameValid){
    //     return "Enter a valid username";
    // }
    if(!isEmailVaild){
        return "Email is not valid!";
    }
    if(!isPasswordValid){
        return "Password is not valid!";
    }
    return null;
}

export default validate
