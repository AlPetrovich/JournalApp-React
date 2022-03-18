import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import validator from 'validator';

export const RegisterScreen = () => {

  const [values , handleInputChange] = useForm({
    name: 'Juan',
    email: 'juan@gmail.com',
    password: '123456',
    password2: '123456'
  })

  //variables que maneja mi formulario
  const {name , email , password , password2} = values;

  const handleRegister =(e) => {
    e.preventDefault();

    if( isFormValid() ){
      console.log('formulario correcto')
    }
  }

    // ---- VALIDACIONES ---
  const isFormValid = () =>{

    if(name.trim().length === 0){
      console.log('name is required')
      return false;
      //VALIDATOR
    }else if ( !validator.isEmail( email ) ){
      console.log('Email is not valid');
      return false; 
    }else if( password !== password2 || password.length < 5 ){
      console.log('Password should be at least 6 characters and match each other')
      return false;
    }



    return true;
  }

  return (
    <div>
        <h3 className='auth__title'>Register</h3>

        <form onSubmit={ handleRegister }>

            <div className='auth__alert-error'>
              Error!
            </div>

            <input className='auth__input' type="text" placeholder="Name" name="name"  autoComplete='off' onChange={ handleInputChange }  value={name}/>
            <input className='auth__input' type="text" placeholder="Email" name="email"  autoComplete='off'onChange={ handleInputChange }  value={email}/>
            <input className='auth__input' type="password" placeholder="Password" name="password"onChange={ handleInputChange }   value={password}/>
            <input className='auth__input' type="password" placeholder="Confirm password" name="password2" onChange={ handleInputChange } value={password2} />

            <button
              type='submit'
              className='btn btn-primary btn-block mb-5'
            >
              Register
            </button>


            <Link to="/auth/login" className='link mt-1'>
                Already registered?
            </Link>

        </form>
    </div>
  )
}