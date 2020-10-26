const isCityNameValid = (cityName) => {
    const regexPattern = /[a-z]+/i;
    return regexPattern.test(cityName);
}

const validateCityFormValues = (values) => {
    let errors = {};

    if(!values.cityName) {
        errors.cityName = 'City name required';
    } else if (!isCityNameValid(values.cityName)) {
        errors.cityName = 'City name contains invalid characters.'
    }

    return errors;
}

export default validateCityFormValues;