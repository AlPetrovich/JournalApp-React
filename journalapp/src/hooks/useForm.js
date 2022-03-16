import { useState } from 'react';


export const useForm = ( initialState = {} ) => {
    
    //el estado inicial es un objeto
    const [values, setValues] = useState(initialState);

    //seteamos el estado al inicial
    const reset = () => {
        setValues( initialState );
    }

    //selecionamos el input y agregamos el valor
    const handleInputChange = ({ target }) => {

        setValues({
            ...values,
            [ target.name ]: target.value
        });

    }

    return [ values, handleInputChange, reset ];

}