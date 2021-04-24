import React, { useEffect } from 'react';

function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
        contactSelected,
        setContactSelected
    } = props;

    function categorySelected(name) {
         console.log(`${name} clicked`);
    };

    return (
            <nav>
                <ul>
                {categories.map((category) => (
                        <li className="nav" key={category.name}>
                        <span onClick={() => categorySelected(category.name)}>{category.name}</span>
                        </li>
                    ))}
                    
                </ul>
            </nav>
    );
}

export default Nav;