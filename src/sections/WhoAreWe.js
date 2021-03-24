import { Typography } from '@material-ui/core';
import React from 'react';

import { animated, useSpring } from 'react-spring';

import road from '../assests/pictures/road-img.png';

const WhoAreWe = (props) => {

    const textSpring = useSpring({
        to: {
            transform: props.render ? "translateX(-50%)" : "translateX(-55%)", opacity: props.render ? 1 : 0
        },
        from: { transform: "translateX(-55%)", left: "50%", opacity: 0, position: "absolute", zIndex: 1, width: "fit-content" }
    })

    const imageSpring = useSpring({
        to: { transform: props.render ? "translate(20vw, -10%)" : "translate(20vw, 50%)", opacity: props.render ? 1 : 0 },
        from: { transform: "translate(20vw, 60%)", opacity: 0 },
        config: { duration: 600 }
    })

    return (
        <div style={{ background: "black", height: "80vh", paddingTop: "2.2vmax" }}>
            <animated.div style={{ ...textSpring, color: "white", paddingTop: "8vw" }}>
                <div style={{ display: "flex" }}>
                    <Typography variant="h3">
                        We are
            </Typography>
                    <Typography variant="h3" style={{ color: "#F1EF70", textIndent: "1rem" }}>
                        E-mail
            </Typography>
                    <Typography variant="h3" style={{ textIndent: "1rem" }}>
                        and
            </Typography>
                    <Typography variant="h3" style={{ color: "#F1EF70", textIndent: "1rem" }}>
                        SMS
            </Typography>
                    <Typography variant="h3" style={{ textIndent: "1rem" }}>
                        marketing
            </Typography>
                </div>

                <div style={{ display: "flex" }}>
                    <Typography variant="h3">
                        experts and are experts  at
            </Typography>
                </div>
                <div style={{ display: "flex" }}>
                    <Typography variant="h3" color="secondary" >
                        Turning Traffic
                </Typography>
                    <Typography variant="h3" style={{ textIndent: "1rem" }}>
                        into
                </Typography>
                    <Typography variant="h3" color="primary" style={{ textIndent: "1rem" }}>
                        Customers.
                </Typography>
                </div>
            </animated.div>
            <animated.div style={{
                ...imageSpring,
                backgroundImage: `url(${road})`, position: "absolute", backgroundPosition: "right",
                backgroundSize: "contain", backgroundRepeat: "no-repeat", height: "70vh", width: "100%", filter: "brightness(0.2)"
            }} />
        </div>
    )
}

export default WhoAreWe;