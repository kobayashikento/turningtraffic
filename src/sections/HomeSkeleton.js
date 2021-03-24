import React from 'react';
import Scrollbar, { ScrollbarPlugin } from 'smooth-scrollbar';
import { useGesture } from 'react-use-gesture';
import { Typography } from '@material-ui/core';

// gsap
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LandingPage from './LandingPage';
import Header from '../components/Header';
import WhoAreWe from './WhoAreWe';

const HomeSkeleton = () => {
    const scrollRef = React.useRef();

    const [scrollBar, setScrollBar] = React.useState(null);
    const [hideHeader, setHideHeader] = React.useState(false);

    const [heroRender, setHeroRender] = React.useState(false);
    const [renderWho, setRenderWho] = React.useState(false);


    React.useEffect(() => {
        if (scrollRef) {
            gsap.registerPlugin(ScrollTrigger);

            let bodyScrollBar = Scrollbar.init(scrollRef.current, { damping: 0.2, plugins: { disableScroll: { direction: 'x' } } });
            setScrollBar(bodyScrollBar);
            bodyScrollBar.track.xAxis.element.remove();
            ScrollTrigger.scrollerProxy(scrollRef.current, {
                scrollTop(value) {
                    if (arguments.length) {
                        bodyScrollBar.scrollTop = value;
                    }
                    return bodyScrollBar.scrollTop;
                }
            });
            bodyScrollBar.addListener(ScrollTrigger.update);

            ScrollTrigger.defaults({ scroller: scrollRef.current });

            //parallax
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: "#hero",
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                    pin: true
                }
            });
            gsap.utils.toArray(".parallax").forEach(layer => {
                const depth = layer.dataset.depth;
                const movement = -(layer.offsetHeight * depth)
                tl.to(layer, { y: movement, ease: "none" }, 0)
            });

            gsap.utils.toArray(".panel").forEach((panel, index) => {
                console.log(panel)
                ScrollTrigger.create({
                    start: index === 0 ? panel.offsetHeight * 1.2 : index === 1 ? panel.offsetTop * 1.5 : 0,
                    end: index === 0 ? panel.offsetHeight * 1.1 : index === 1 ? panel.offsetTop + panel.clientHeight : 0,
                    onEnter: () => {
                        switch (index) {
                            case 0:
                                setHeroRender(true);
                                break
                            case 1:
                                setRenderWho(true);
                                break;
                            default:
                        }
                    },
                    onEnterBack: () => {
                        switch (index) {
                            case 0:
                                setHeroRender(false);
                                break;
                            case 1:
                                setRenderWho(false);
                                break;
                            default:
                        }
                    },
                })
            });
        }
    }, [])

    const bind = useGesture({
        onWheel: ({ wheeling, direction }) => {
            if (wheeling && direction[1] === 1) {
                setHideHeader(true);
            } else if (wheeling && direction[1] === -1) {
                setHideHeader(false);
            }
        }
    })

    return (
        <div>
            <Header hide={hideHeader} />
            <div {...bind()} ref={scrollRef} style={{ height: "100vh", width: '100vw' }}>
                <section id="hero" className="panel hero" style={{ height: "110vh" }} >
                    <LandingPage render={heroRender} />
                </section>
                <section className="panel who">
                    <WhoAreWe render={renderWho} />
                </section>
                <section style={{background: "black", paddingTop: "8.8vmax"}}>
                    <div style={{ color: "white" }}>
                        <Typography align="center" variant="h3" color="primary" style={{ textTransform: "uppercase" }}>
                            Bring back users who almost
            </Typography>
                        <Typography align="center" variant="h3" style={{ textTransform: "uppercase" }}>
                            had their hands in their wallet.
            </Typography>
                    </div>
                </section>

            </div>
        </div>
    )
}

export default React.memo(HomeSkeleton);