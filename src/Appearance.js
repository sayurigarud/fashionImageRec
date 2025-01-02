import React, {useState, useEffect, useRef} from 'react';
import logoLight from './logo_light_mode.png';
import logoDark from './logo_dark_mode.png';


const Appearance = () => {
     // Check if a theme is saved in localStorage, otherwise default to light
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    const [hoveredButton, setHoveredButton] = useState(null);
    const [clickedButton, setClickedButton] = useState(null);

    const handleMouseEnter = (buttonId) => {
        setHoveredButton(buttonId);
    };
    
    const handleMouseLeave = () => {
        setHoveredButton(null);
    };
    
    const handleClick = (buttonId) => {
        setClickedButton(buttonId);
    };

    useEffect(() => {
        // Apply the current theme to the body
        document.body.className = theme;
        // Store the selected theme in localStorage
        localStorage.setItem('theme', theme);
    }, [theme]);


    const toggleTheme = () => {
        // Toggle between light and dark
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    // Toggle the menu open/close
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    useEffect(() => {
        const handleClickOutside = (event) => {
          if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsOpen(false);
          }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, []);
    

    return (
        <div>
            <div className="transparent-box">
            <div className="header-container" >
                <h1>Welcome To Your Personal Stylist</h1>
                <div className="menu-wrapper">
                        {/* {isOpen && ( */}
                            <ul className="horizontal-menu">
                            <li>Tops</li>
                            <li>Bottoms</li>
                            <li>Help</li>
                            </ul>
                        {/* ) */}
                        {/* } */}
                </div>
            </div>
        </div>
            <h2>
                <div className="button-container">


                <button id="button1"
                className={`pop-text ${
                hoveredButton === "button1" ? "hover" : ""
                } ${clickedButton === "button1" ? "click" : ""}`}
                onMouseEnter={() => handleMouseEnter("button1")}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick("button1")}
                >
                <li>Fits Wrapped</li>
                </button>
                
                <button id="button2"
                className={`pop-text ${
                hoveredButton === "button2" ? "hover" : ""
                } ${clickedButton === "button2" ? "click" : ""}`}
                onMouseEnter={() => handleMouseEnter("button2")}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick("button2")}
                >
                <li>Style Your Day</li>
                </button>


                </div> 
            </h2>
        </div>
        
 
    );

}

export default Appearance;