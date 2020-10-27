import React from 'react';
import Accordion from '../layout/Accordion';
import './AboutPage.css';

const AboutPage = () => {
    return (
        <div className='about-page-container'>
            <Accordion title='Test title' content='Test content of test accordion.' />
            <Accordion title='Test title' content='Test content of test accordion.' />
            <Accordion title='Test title' content='Test content of test accordion.' />
            <Accordion title='Test title' content='Test content of test accordion.' />
        </div>
    )
};

export default AboutPage;