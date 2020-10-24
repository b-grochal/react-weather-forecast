import React, { useContext } from 'react';
import { WeatherForecastContext } from '../context/WeatherForecastContext';
import validateLocationFormValues from '../helpers/validateLocationFormValues';
import useLocationForm from '../hooks/useLocationForm';
import './LocationForm.css';

const LocationForm = () => {
    const submitForm = async () => {
        console.log('Form submitted sucessfully.');
        await getWeatherForecastForLocation('62f76619fd030ab523e8efd5f818b37c', values.latitude, values.longitude);
    }

    const { handleChange, handleSubmit, values, errors } = useLocationForm(
        submitForm,
        validateLocationFormValues
    );

    const { getWeatherForecastForLocation } = useContext(WeatherForecastContext);

    return (
        <form onSubmit={handleSubmit} className='form'>
            <div className='form__inputs-container'>
                <div className='form__input-group'>
                    <div className='form__input-container'>
                        <label className='form__label'>Latitude</label>
                        <input
                            className='form__input'
                            type='number'
                            name='latitude'
                            placeholder='50'
                            step='0.01'
                            value={values.latitude}
                            onChange={handleChange}
                        />
                    </div>
                    {errors.latitude && <p className='form__input-validation-text'>{errors.latitude}</p>}
                </div>
                <div className='form__input-group'>
                    <div className='form__input-container'>
                        <label className='form__label'>Longitude</label>
                        <input
                            className='form__input'
                            type='number'
                            name='longitude'
                            placeholder='50'
                            step='0.01'
                            value={values.longitude}
                            onChange={handleChange}
                        />
                    </div>
                    {errors.longitude && <p className='form__input-validation-text'>{errors.longitude}</p>}
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

export default LocationForm;