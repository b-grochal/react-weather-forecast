import React, { useContext } from 'react';
import { WeatherForecastContext } from '../context/WeatherForecastContext';
import validateCityFormValues from '../helpers/validateCityFormValues';
import useCityForm from '../hooks/useCityForm';
import './CityForm.css';


const CityForm = () => {
    const submitForm = async () => {
        await getWeatherForecastForCity('62f76619fd030ab523e8efd5f818b37c', values.cityName);
    }

    const { handleChange, handleSubmit, values, errors } = useCityForm(
        submitForm,
        validateCityFormValues
    );

    const { getWeatherForecastForCity } = useContext(WeatherForecastContext);
    
    return (
        <form onSubmit={handleSubmit} className='form'>
            <div className='form__inputs-container'>
                <div className='form__input-group'>
                    <div className='form__input-container'>
                        <label className='form__label'>Latitude</label>
                        <input
                            className='form__input'
                            type='text'
                            name='cityName'
                            placeholder='Warsaw'
                            value={values.cityName}
                            onChange={handleChange}
                        />
                    </div>
                    {errors.cityName && <p className='form__input-validation-text'>{errors.cityName}</p>}
                </div>
            </div>
            <div className='form__buttons-container'>
                <button className='form__button'>
                    Get location
                </button>
                <button className='form__button' type='submit'>
                    Get forecast
                </button>
            </div>
        </form>
    )
}

export default CityForm;