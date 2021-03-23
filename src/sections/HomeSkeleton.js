import React from 'react';
import Scrollbar, { ScrollbarPlugin } from 'smooth-scrollbar';

// gsap
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LandingPage from './LandingPage';

const HomeSkeleton = () => {
    const scrollRef = React.useRef();
    const [scrollBar, setScrollBar] = React.useState(null);

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

        }
    }, [])

    return (
        <div ref={scrollRef}>
            <LandingPage />
        </div>
    )
}

export default HomeSkeleton;