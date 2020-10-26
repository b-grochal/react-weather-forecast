import { useEffect, useState } from 'react';

const useLocationForm = (submitForm, validateForm) => {
    const [values, setValues] = useState({
        latitude: '',
        longitude: ''
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
};

export default useLocationForm;