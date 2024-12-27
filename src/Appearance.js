import React, {useState, useEffect, useRef} from 'react';
import logoLight from './logo_light_mode.png';
import logoDark from './logo_dark_mode.png';


const Appearance = () => {
     // Check if a theme is saved in localStorage, otherwise default to light
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

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
        <div className="transparent-box">
            <div className="header-container" >
                <h1>WELCOME TO YOUR PERSONAL STYLIST</h1>
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
                <button
                    onClick={toggleTheme}
                    style={{
                    background: 'none',
                    border: 'none',
                    padding: 10,
                    cursor: 'pointer',
                    }}
                >
                {/* Dynamically load the logo based on the current theme */}
                {/* <img
                    src={theme === 'light' ? logoDark : logoLight}
                    alt="Logo"
                    style={{ width: '25px' }}
                /> */}
                </button>
            </div>
            
        </div>
 
    );

}

export default Appearance;