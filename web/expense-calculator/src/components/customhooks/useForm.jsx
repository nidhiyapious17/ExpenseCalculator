import { useState } from "react";

export default function useForm (intialValues) {
    const [values, setValues] = useState(intialValues)
    const handleChange = (e) => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const resetForm = () =>{
        setValues(intialValues);
    }

    return [values, handleChange, resetForm];
}