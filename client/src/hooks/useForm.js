import { useState } from "react";

export const useForm = (initialValues, submitCallback) => {
    const [values, setValues] = useState(initialValues);

    const changeHandler = (e) => {
        setValues(oldValues => ({
            ...oldValues,
            [e.target.name]: e.target.value
        }));
    }

    const submitHandler = async (e) => {
        e.preventDefault();

        submitCallback(values);
    }

    return {
        values,
        changeHandler,
        submitHandler
    }
}