import React, { useEffect, useState, useRef } from 'react';
import './Accordion.css';

const Accordion = ({ title, content }) => {
    const [active, setActive] = useState(false);
    const contentRef = useRef(null);

    const toggleActive = () => {
        setActive(!active);
    }

    useEffect(() => {
        contentRef.current.style.maxHeight = active ? `${contentRef.current.scrollHeight}px` : '0px';
    }, [active]);

    return (
        <div className='accordion'>
            <button className='accordion__header' onClick={toggleActive}>
                <p className='accordion__header-title'>{title}</p>
                <i className={active ? 'fas fa-minus accordion__header-icon' : 'fas fa-plus accordion__header-icon'} />
            </button>
            <div className='accordion__content' ref={contentRef}>
                <p className='accordion__content-text'>{content}</p>
            </div>
        </div>
    )
}

export default Accordion;