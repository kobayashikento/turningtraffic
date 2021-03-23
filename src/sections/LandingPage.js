import React from 'react';

import { Typography } from '@material-ui/core';
import Vivus from 'vivus';

import growth_svg from '../assests/pictures/growth.svg';

const LandingPage = (props) => {

    let growth_svg_ref = React.useRef(null);

    const [growthVivus, setGrowthVivus] = React.useState();

    React.useEffect(() => {
        setGrowthVivus(new Vivus(growth_svg_ref.current,
            {
                file: growth_svg, animTimingFunction: Vivus.EASE,
                reverseStack: true
            },
            // function (growthVivus) { growthVivus.play(growthVivus.getStatus() === 'end' ? -2 : 1); }
        ));
    }, [])

    return (
        <div style={{ height: "100vh", background: "black", position: "relative" }}>
            <div style={{ padding: "21.328vw 0px 0px 14vw", color: "white" }}>
                <div style={{ display: "flex" }}>
                    <Typography variant="h2">
                        Turn more website
            </Typography>
                    <Typography color="secondary" variant="h2" style={{ textIndent: "1rem" }}>
                        visitors
            </Typography>
                </div>
                <div style={{ display: "flex" }}>
                    <Typography variant="h2">
                        into paying
            </Typography>
                    <Typography color="primary" variant="h2" style={{ textIndent: "1rem" }}>
                        customers
            </Typography>
                </div>
            </div>
            <div ref={growth_svg_ref} style={{ position: "absolute", bottom: "5vmax", right: "13vmax", width: "20vw" }} />
        </div>
    )
}

export default LandingPage;
