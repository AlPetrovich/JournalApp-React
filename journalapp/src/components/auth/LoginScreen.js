import React from 'react';
import {Link} from 'react-router-dom'
import { useForm } from '../../hooks/useForm';
import { useDispatch } from 'react-redux';
import { login, startLoginEmailPassword } from '../../actions/auth';

export const LoginScreen = () => {

  //permite disparar nuestra accion desde cualquier lugar
  const dispatch = useDispatch();

  const [formValues, handleInputChange] = useForm({
     email : 'nando@gmail.com',
     password: '123456'
   })

  const { email , password } = formValues;

  const handleLogin=(e)=>{
     e.preventDefault();
     //primer dispatch de una accion a mi store -- useDispatch
     //1ero crear la accion - agruparlas en un archivo
     //dispara la accion login recibe id y nombre, retornar type login y cuerpo con id y nombre
    dispatch( startLoginEmailPassword( email, password) )

   }

  return (
    <div>
        <h3 className='auth__title'>Login</h3>

        <form onSubmit={ handleLogin }>
            <input className='auth__input' type="text" placeholder="Email" name="email"  autoComplete='off' value={ email } onChange={handleInputChange}/>
            <input className='auth__input' type="password" placeholder="Password" name="password" value={password} onChange={handleInputChange}/>

            <button
              type='submit'
              className='btn btn-primary btn-block'
            >
              Login
            </button>

            <div className='auth__social-networks'>
                <p>Login with social networks</p>
                  <div 
                  className="google-btn"
                  >
                  <div className="google-icon-wrapper">
                      <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                  </div>
                  <p className="btn-text"> 
                    <b> Sign with google</b>
                  </p>
              </div>
            </div>

            <Link to="/auth/register" className='link'>
                Create new account
            </Link>

        </form>
    </div>
  )
}
