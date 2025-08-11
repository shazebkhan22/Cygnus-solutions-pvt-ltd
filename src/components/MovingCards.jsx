import { useEffect, useState, useRef, useCallback } from "react";
import PropTypes from "prop-types";
import { cn } from "../utils";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
}) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const [start, setStart] = useState(false);

  const getDirection = useCallback(() => {
    containerRef.current?.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse"
    );
  }, [direction]);

  const getSpeed = useCallback(() => {
    let duration = "40s"; // default
    if (speed === "fast") duration = "20s";
    if (speed === "slow") duration = "80s";
    containerRef.current?.style.setProperty("--animation-duration", duration);
  }, [speed]);

  const addAnimation = useCallback(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current.appendChild(duplicatedItem);
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }, [getDirection, getSpeed]);

  useEffect(() => {
    if (!start) {
      addAnimation();
    }
  }, [addAnimation, start]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 overflow-hidden mx-auto [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]"
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-6 py-4 animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[250px] md:w-[300px] shrink-0 rounded-2xl border border-gray-200 bg-white text-left p-2 shadow-md transition hover:scale-[1.02]"
            key={`${item.alt}-${idx}`}
          >
            <img
              src={item.src}
              alt={item.alt}
              className="rounded-lg object-cover h-40 w-full"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

// ✅ PropTypes added
InfiniteMovingCards.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
  direction: PropTypes.oneOf(["left", "right"]),
  speed: PropTypes.oneOf(["fast", "normal", "slow"]),
  pauseOnHover: PropTypes.bool,
};
