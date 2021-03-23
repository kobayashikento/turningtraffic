import React from 'react';

import logo from '../assests/pictures/logo.png';

const Header = () => {
    return (
        <div style={{ padding: "2.2vw 6.6vw", position: "absolute", zIndex: 100 }}>
            <img src={logo} style={{ height: "3.3vw" }} />
        </div>
    )
}

export default Header