import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    console.log(window.screenY);
    if (window.scrollY > 480) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className='top-to-scroll'>
      {isVisible && (
        <div
          style={{
            position: "fixed",
            right: "1.5rem",
            bottom: "1.5rem",
            overflow: "hidden",
            zIndex: "50",
          }}
          onClick={scrollToTop}
        >
          <Button
            onClick={scrollToTop}
            variant='warning'
            style={{ padding: "0.7rem 1rem", borderRadius: "100%" }}
          >
            <FontAwesomeIcon
              icon={icon({
                name: "arrow-up",
                family: "classic",
                style: "solid",
              })}
              style={{ fontSize: "2rem" }}
            />
          </Button>
        </div>
      )}
    </div>
  );
};

export default ScrollToTop;
