import React from 'react';
import validateLocationFormValues from '../helpers/validateLocationFormValues';
import useLocationForm from '../hooks/useLocationForm';
import './LocationForm.css';

const LocationForm = () => {
    const submitForm = () => {
        console.log('Form submitted sucessfully.')
    }

    const { handleChange, handleSubmit, values, errors} = useLocationForm(
        submitForm,
        validateLocationFormValues
    );

    return (
        <form onSubmit={handleSubmit} className='form'>
            <div className='form__inputs-container'>
                <div className='form__input-group'>
                    <label className='form__label'>Latitude</label>
                    <input
                        className='form__input'
                        type='number'
                        name='latitude'
                        placeholder='50'
                        value={values.latitude}
                        onChange={handleChange}
                    />
                    {errors.latitude && <p>{errors.latitude}</p>}
                </div>
                <div className='form__input-group'>
                    <label className='form__label'>Longitude</label>
                    <input
                        className='form__input'
                        type='number'
                        name='longitude'
                        placeholder='50'
                        value={values.longitude}
                        onChange={handleChange}
                    />
                    {errors.longitude && <p>{errors.longitude}</p>}
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