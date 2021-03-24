import React from 'react';

import static_email_1 from '../assests/pictures/static_email_1.png';
import static_email_2 from '../assests/pictures/static_email_2.png';
import animated_email_1 from '../assests/pictures/animated_email_1.png';
import animated_email_2 from '../assests/pictures/animated_email_2.png';

import { animated, useSpring, Spring } from 'react-spring';

const HeroCarousel = () => {

    const imgset1 = [static_email_1, static_email_2];
    const imgset2 = [animated_email_1, animated_email_2];

    const AnimatedColumn = (e) => {

        return (
            <Spring
                to={{ transform: e.direction === "up" ? "translateY(-80%)" : "translateY(50%)" }}
                from={{ transform: e.direction === "up" ? "translateY(50%)" : "translateY(-90%)", position: "relative" }}
                config={{ duration: e.duration }}
                loop={true}
                reset={true}
            >
                { prop => <animated.div style={prop}>
                    {e.content.map(ele => {
                        return (
                            <img key={`img-${ele}`} src={ele} width={250} style={{ marginTop: "10.4vmax" }} />
                        )
                    })}
                </animated.div>
                }
            </Spring>
        )
    }

    return (
        <div style={{ position: "absolute", height: "100vh", width: '100%', right: "0", backgroundColor: "black", overflow: "hidden" }}>
            <div style={{ top: "0", position: "absolute", background: "linear-gradient(180deg, black, rgba(0,0,0,0))", height: "55vh", width: "100%", zIndex: 1 }} />
            <div style={{ bottom: "0", position: "absolute", background: "linear-gradient(0deg, black 10%, rgba(0,0,0,0))", height: "55vh", width: "100%", zIndex: 1 }} />
            <div style={{ position: "absolute", width: "270px", right: "30.5vw" }}>
                <AnimatedColumn direction={"down"} content={imgset1} duration={20000} />
            </div>
            <div style={{ position: "absolute", width: "270px", right: "5.5vw" }}>
                <AnimatedColumn direction={"up"} content={imgset2} duration={20000}/>
            </div>
        </div >
    )
}

export default React.memo(HeroCarousel);