import React, { useContext } from 'react';
import { WeatherForecastContext } from '../context/WeatherForecastContext';
import validateLocationFormValues from '../helpers/validateLocationFormValues';
import useLocationForm from '../hooks/useLocationForm';
import { getLocation } from '../helpers/geolocation';
import './LocationForm.css';

const LocationForm = () => {
    const submitForm = async () => {
        debugger;
        console.log('Form submitted sucessfully.');
        await getWeatherForecastForLocation(values.latitude, values.longitude);
    }

    const getCurrentLocation = () => {
        getLocation(handleLocationFromGeolocationApi);
    }

    const { handleChange, handleSubmit, handleLocationFromGeolocationApi, values, errors } = useLocationForm(
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
                <button className='form__button' type='button' onClick={getCurrentLocation}>
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