import React from 'react';
import { animated, useSpring } from 'react-spring';

import logo from '../assests/pictures/logo.png';

const Header = (props) => {    
    const hideSpring = useSpring({
        to: { transform: props.hide ? "translateY(-6.7vmax)" : "translateY(0)" },
        from: { transform: "translateY(0)", background: "black", height: "6.6vmax", position: "absolute", zIndex: 100, width: "98%" }
    })

    return (
        <animated.div style={{ ...hideSpring }}>
            <div style={{ padding: "1.5vw 6.6vw" }}>
                <img src={logo} style={{ height: "3.3vw" }} />
            </div>
        </animated.div>
    )
}

export default React.memo(Header)