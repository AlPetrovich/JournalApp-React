import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'

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

  }

  return (
    <div>
        <h3 className='auth__title'>Register</h3>

        <form onSubmit={ handleRegister }>
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