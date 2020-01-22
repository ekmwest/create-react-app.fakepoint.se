import { useState } from "react";

const useForm = initialValues => {
    const [values, setValues] = useState(initialValues);

    return [
        values,
        setValues,
        e => {
            setValues({
                ...values,
                [e.target.name]: e.target.value
            });
        }
    ];
};

export default useForm;