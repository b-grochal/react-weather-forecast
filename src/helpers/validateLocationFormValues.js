const validateLocationFormValues = (values) => {
    let errors = {};

    if(!values.latitude) {
        errors.latitude = 'Latitude required';
    } else if (Math.abs(values.latitude) > 90) {
        errors.latitude = 'Invalid latitude value';
    }

    if(!values.longitude) {
        errors.longitude = 'Longitude required';
    } else if (Math.abs(values.longitude) > 180) {
        errors.longitude = 'Invalid longitude value';
    }

    return errors;
}

export default validateLocationFormValues;