import { useState } from 'react';


export const useForm = ( initialState = {} ) => {
    
    //el estado inicial es un objeto
    const [values, setValues] = useState(initialState);

    //seteamos el estado al inicial
    //cuando llamo al reset puede establecerle los valores que quiera al formulario
    const reset = ( newFormState = initialState) => {
        setValues( newFormState );
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