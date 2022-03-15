import React from 'react'
import { Link } from 'react-router-dom'

export const RegisterScreen = () => {
  return (
    <div>
        <h3 className='auth__title'>Register</h3>

        <form>
            <input className='auth__input' type="text" placeholder="Name" name="name"  autoComplete='off'/>
            <input className='auth__input' type="text" placeholder="Email" name="email"  autoComplete='off'/>
            <input className='auth__input' type="password" placeholder="Password" name="password" />
            <input className='auth__input' type="password" placeholder="Confirm password" name="password2" />

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