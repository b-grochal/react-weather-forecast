import { useEffect, useState } from 'react';

const useCityForm = (submitForm, validateForm) => {
    const [values, setValues] = useState({
        cityName: ''
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
        setErrors(validateForm(values));
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
}

export default useCityForm;