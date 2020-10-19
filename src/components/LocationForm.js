import React from 'react';
import './LocationForm.css';

const LocationForm = () => {



    return (
        <form className='form'>
            <div className='form__inputs-container'>
                <div className='form__input-group'>
                    <label className='form__label'>Latitude</label>
                    <input
                        className='form__input'
                        type='number'
                        name='latitude'
                        placeholder='50'
                    />
                </div>
                <div className='form__input-group'>
                    <label className='form__label'>Longitude</label>
                    <input
                        className='form__input'
                        type='number'
                        name='longitude'
                        placeholder='50'
                    />
                </div>
            </div>
            <div className='form__buttons-container'>
                <button className='form__button'>
                    Get location
                </button>
                <button className='form__button'>
                    Get forecast
                </button>
            </div>
        </form>
    )
}

export default LocationForm;