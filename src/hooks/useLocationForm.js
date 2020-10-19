import { useEffect, useState } from 'react';
import validateLocationFormValues from '../helpers/validateLocationFormValues';
import valdateLocationFormValues from '../helpers/validateLocationFormValues';

const useLocationForm = (submitForm, validateForm) => {
    const [values, setValues] = useState({
        latitude: null,
        longitude: null
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        setErrors(validateLocationFormValues(values));
        setIsSubmitting(true);
    }

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            submitForm();
        }
    },
        [errors]
    );

    return { handleChange, handleSubmit, values, errors};
};

export default useLocationForm;