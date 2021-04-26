import React from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory
    } = props;

    return (
        <nav className="header nav-bar">
            <ul className ="header-ul navbar-nav">
                {categories.map((category) => (                       
                    <li className={`nav nav-item ${currentCategory.name === category.name && 'navActive'}`} key={category.name}>
                    <span onClick={() => {
                        setCurrentCategory(category);
                    }}>
                        {capitalizeFirstLetter(category.name)}
                    </span>
                    </li>
                ))}    
            </ul>
        </nav>
    );
}

export default Nav;