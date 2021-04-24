import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";
import Home from '../Home';
import ContactForm from '../Contact';

function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
        contactSelected,
        setContactSelected
    } = props;

    // useEffect(() => {
    //     document.title = capitalizeFirstLetter(currentCategory.name);
    //   }, [currentCategory]);
    return (
            <nav>
                <ul>
                    {categories.map((category) => (                       
                        <li className={`nav ${currentCategory.name === category.name && 'navActive'}`} key={category.name}>
                        <span onClick={() => {
                            setCurrentCategory(category); 
                            // setContactSelected(false);
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