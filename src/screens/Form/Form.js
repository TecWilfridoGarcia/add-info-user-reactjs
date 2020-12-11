import React from 'react';
import './styles.scss';
import  { useForm }  from '../../hooks/useForm';
import  { usePost }  from '../../hooks/usePost';
import userIcon from "./assets/user.svg";
import emailIcon from "./assets/email.svg";
import phoneIcon from "./assets/phone.svg";
import locationIcon from "./assets/location.svg";
import streetIcon from "./assets/streetview.svg";
import Input from '../../components/Input/Input';


export default function Form() { 
  const { execute, pending, error, data } = usePost();
  const [ formValues, handleInputChange, handleChecked, reset ] = useForm({
    idUser: new Date(),
    firstName :"",
    lastName  :"",
    email :"",
    codePostal  :"",
    country :"",
    municipality  :"",
    phone :"",
    suburb  :"",
    city  :"",
    street  :"",
    usedAddress: false,
  });

  const {
    idUser,
    firstName, 
    lastName, 
    email,
    country,
    municipality,
    phone,
    suburb,
    codePostal,
    city,
    street,
    usedAddress
   } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    execute({ endpoint: 'posts', postData: { formValues } });
    console.log(formValues, "formValues")
    reset();
}

    return (
      <form onSubmit={handleSubmit} className="form">

        <div className="parent">
          <div className="div1">
          <Input 
              icon={userIcon} 
              onChange={handleInputChange} 
              type="text" placeholder="Nombre"
              value={firstName} name="firstName" />
          </div>
          <div className="div2">
          <Input 
              icon={userIcon} 
              onChange={handleInputChange} type="text" 
              placeholder="Apellidos" 
              value={lastName} name="lastName" />
          </div>
          <div className="div3">
            <Input 
              icon={emailIcon} 
              onChange={handleInputChange} 
              type="text" placeholder="Correo Electrónico" 
              value={email} name="email" />
          </div>
          <div className="div4">
            <Input 
                icon={phoneIcon} 
                onChange={handleInputChange} 
                type="number" placeholder="Número de teléfono" 
                value={phone} name="phone" />
          </div>
          <div className="div5">
          <Input 
              icon={locationIcon} 
              onChange={handleInputChange} 
              type="number" placeholder="Codigo postal" 
              value={codePostal} name="codePostal" />
          </div>
          <div className="div6">
            <Input 
                icon={locationIcon} 
                onChange={handleInputChange} 
                type="text" placeholder="Colonia" 
                value={suburb} name="suburb" />
          </div>
          <div className="div7">
          <Input 
              icon={locationIcon} 
              onChange={handleInputChange} 
              type="text" placeholder="Estado/Región" 
              value={country} name="country" />
          </div>
          <div className="div8">
          <Input 
              icon={locationIcon} 
              onChange={handleInputChange} 
              type="text" placeholder="Ciudad" 
              value={city} name="city" />
          </div>
          <div className="div9">
           <Input 
              icon={locationIcon} 
              onChange={handleInputChange} 
              type="text" placeholder="Delegación o municipio" 
              value={municipality} name="municipality" />  
          </div>
          <div className="div10">
                <Input 
              icon={streetIcon} 
              onChange={handleInputChange} 
              type="text" placeholder="Calle" 
              value={street} name="street" />
          </div>
        </div>
        <button className="button" type="botton">Libreta de direcciones</button>
        <button className="button" type="submit">Guardar</button> <br/>
        <div className="wrapper-checkbox" >
        <label class="checkbox">
        <input  type="checkbox"
                name={usedAddress}
                //checked={checked[name]}
                onChange={handleChecked}
                required
                 />
        <span className="check"></span>
          Utilizar como dirección de facturación.
        </label>
        </div>
      </form>
    )
}
