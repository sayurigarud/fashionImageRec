import React, {useState, useEffect, useRef} from 'react';

import Calendar from './Calendar';


const Home = () => {
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

              {/* <div style={{ flex: 1.5 }}>
                <div className="button-container">
                  <Link to="/calendar">
                    <button id="button1"
                        className={`pop-text ${
                        hoveredButton === "button1" ? "hover" : ""
                        } ${clickedButton === "button1" ? "click" : ""}`}
                        onMouseEnter={() => handleMouseEnter("button1")}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => handleClick("button1")}
                        >
                        Fits Wrapped
                    </button>
                  </Link>
                  <Routes>
                    <Route path="/calendar" element={<Calendar />} />
                  </Routes>
                    <button id="button2"
                      className={`pop-text ${
                      hoveredButton === "button2" ? "hover" : ""
                      } ${clickedButton === "button2" ? "click" : ""}`}
                      onMouseEnter={() => handleMouseEnter("button2")}
                      onMouseLeave={handleMouseLeave}
                      onClick={() => handleClick("button2")}
                      >
                      Style Your Day
                    </button>   
                  </div> 
                </div> */}
              </div>
 
    );

}

export default Home;
