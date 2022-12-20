import React, { useState } from 'react'
import '../scrollUp.css'

const ScrollUp = () => {
    /* SHOW SCROLL UP */
    const [scrollUp, setScrollUp] = useState(false);

    function scrollHeader() {
        if (this.scrollY >= 200) {
            setScrollUp(scrollUp => scrollUp = true)
        } else {
            setScrollUp(scrollUp => scrollUp = false)
        }
    }

    window.addEventListener('scroll', scrollHeader)

    let scrollUpShow = scrollUp ? 'show-scroll' : '';

    /* ON CLICK -> TOP */
    function scrollToTop() {
        var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
        if (currentScroll > 0) {
            window.requestAnimationFrame(scrollToTop);
            window.scrollTo(0, currentScroll - (currentScroll / 5));
        }
    }

    return (
        <button className={`scrollup ${scrollUpShow}`} id="scroll-up" onClick={scrollToTop}>
            <i className="ri-arrow-up-line scrollup__icon"></i>
        </button>
    )
}

export default ScrollUp