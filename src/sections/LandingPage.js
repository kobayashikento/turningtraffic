import React from 'react';

import { Typography } from '@material-ui/core';
import Vivus from 'vivus';

import growth_svg from '../assests/pictures/growth.svg';

import HeroCarousel from '../components/HeroCarousel';

import '../assests/styles/landingStyle.css';
import { animated, useSpring } from '@react-spring/web';

import * as easings from 'd3-ease';

const LandingPage = (props) => {

    let growth_svg_ref = React.useRef(null);

    const [growthVivus, setGrowthVivus] = React.useState();

    React.useEffect(() => {
        setGrowthVivus(new Vivus(growth_svg_ref.current,
            {
                file: growth_svg, animTimingFunction: Vivus.EASE,
                reverseStack: true, start: "manual"
            },
            // function (growthVivus) { growthVivus.play(growthVivus.getStatus() === 'end' ? -2 : 1); }
        ));
    }, [])

    React.useEffect(() => {
        if (growthVivus !== undefined) {
            if (props.render) {
                growthVivus.play(1.5)
            } else {
                growthVivus.play(-2)
            }
        }
    }, [props.render])

    const titleSpring = useSpring({
        to: { transform: "translateX(0%)", opacity: 1 },
        from: { transform: "translateX(-10%)", opacity: 0 },
        config: { duration: 500, easing: easings.easeCircleOut }
    });

    const whoSpring = useSpring({
        to: { transform: props.render ? "translateX(0%)" : "translateX(-10%)", opacity: props.render ? 1 : 0 },
        from: { transform: "translateX(-10%)", opacity: 0 },
        config: { duration: 700, easing: easings.easeCircleOut }
    })

    return (
        <div className="container" style={{ height: "110vh", position: "relative" }}>
            <div className='parallax' data-depth='0.10' style={{ height: "100%", position: "absolute", width: "100%" }}>
                <HeroCarousel />
            </div>
            <div className='parallax' data-depth='0.20' style={{ height: "100%", position: "absolute", width: "100%" }}>
                <animated.div style={{ ...titleSpring, padding: "21.328vw 0px 0px 13vw", color: "white", position: "absolute", zIndex: 1 }}>
                    <div style={{ display: "flex" }}>
                        <Typography variant="h2">
                            Turn
            </Typography>
                        <Typography color="secondary" variant="h2" style={{ textIndent: "1rem", textTransform: "capitalize" }}>
                            website visitors
            </Typography>
                        <Typography variant="h2" style={{ textIndent: "1rem" }}>

                        </Typography>
                    </div>
                    <div style={{ display: "flex" }}>
                        <Typography variant="h2">
                            Into
            </Typography>
                        <Typography color="primary" variant="h2" style={{ textIndent: "1rem", textTransform: "capitalize" }}>
                            paying customers.
            </Typography>
                    </div>
                </animated.div>
            </div>
            <div className='parallax' data-depth='-0.05' style={{ height: "100%", position: "absolute", width: "100%" }}>
                <div ref={growth_svg_ref} style={{ position: "absolute", bottom: "4.4vmax", right: "13vmax", width: "20vw", display: "none" }} />
            </div>
            <div className='parallax' data-depth='0.60' style={{ height: "fit-content", position: "absolute", width: "100%", bottom: "0" }}>
                <animated.div style={whoSpring}>
                    <Typography variant="h2" style={{ color: "white", width: "fit-content", margin: "0 auto", textTransform: "capitalize" }}>
                        Who are we?
            </Typography>
                </animated.div>
            </div>
        </div >
    )
}

export default React.memo(LandingPage);
