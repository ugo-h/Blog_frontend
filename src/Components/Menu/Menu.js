import React, { Fragment } from 'react';
import './Menu.css';

const menu = ({menu, show, toggleHandler}) => {
    const visibility = show? '' : ' hidden';
    return(
        <Fragment>
        <ul className={`slider-menu${visibility} Util__list--vertical`}>
            {menu?menu.map((item, key) => <li onClick={toggleHandler} className="slider-menu__el Util__list__el" key={key}>{item}</li>):''}
        </ul>
        <div className={`backdrop${visibility}`} onClick={toggleHandler}></div>
        </Fragment>
    )
}

export default menu;