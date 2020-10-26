import React from 'react';
import './Menu.css';

const menu = ({menu}) => (
    <ul className="slider-menu">
        {menu?menu.map((item, key) => <li className="slider-menu__el" key={key}>{item}</li>):''}
    </ul>
)

export default menu;