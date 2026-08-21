"use client";
import { useEffect, useRef } from "react";
import {
  animate,
  motion,
  MotionValue,
  useMotionValue,
  useTransform,
} from "framer-motion";

import { TechBadge } from "@/components/tech";
import { TECH_ROWS, type TechName } from "@/lib/types";

function TechRow({
  techs,
  reverse = false,
}: {
  techs: TechName[];
  reverse?: boolean;
}) {
  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex w-max"
        animate={{
          translateX: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
        }}
        transition={{
          duration: 20,

          ease: "linear",
          repeat: Infinity,
        }}
      >
        <div className="flex shrink-0 gap-3 pr-3">
          {techs.map((tech) => (
            <TechBadge key={tech} tech={tech} />
          ))}
        </div>

        <div className="flex shrink-0 gap-3 pr-3" aria-hidden>
          {techs.map((tech) => (
            <TechBadge key={`duplicate-${tech}`} tech={tech} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export function TechStackOverlay() {
  const containerRef = useRef<HTMLDivElement>(null);

  const lensX = useMotionValue(0);
  const lensY = useMotionValue(0);

  const LENS_CENTER_OFFSET = 41.27;

  const lensCenterX = useTransform(lensX, (x) => `${x + LENS_CENTER_OFFSET}px`);

  const lensCenterY = useTransform(lensY, (y) => `${y + LENS_CENTER_OFFSET}px`);

  const maskImage = useTransform(
    [lensCenterX, lensCenterY],
    ([x, y]) =>
      `radial-gradient(
        circle 34.15px at ${x} ${y},
        transparent 100%,
        black 100%
      )`,
  );

  const clipPath = useTransform(
    [lensCenterX, lensCenterY],
    ([x, y]) => `circle(34.15px at ${x} ${y})`,
  );

  const transformOrigin = useTransform([lensCenterX], ([x]) => `${x}`);

  const getCenterPosition = () => {
    if (!containerRef.current) {
      return { x: 0, y: 0 };
    }

    const { width, height } = containerRef.current.getBoundingClientRect();

    return {
      x: width / 2 - LENS_CENTER_OFFSET,
      y: height / 2 - LENS_CENTER_OFFSET,
    };
  };

  const returnToCenter = () => {
    const { x, y } = getCenterPosition();

    animate(lensX, x, {
      type: "spring",
      stiffness: 100,
      damping: 20,
    });

    animate(lensY, y, {
      type: "spring",
      stiffness: 100,
      damping: 20,
    });
  };

  useEffect(() => {
    const centerLens = () => {
      const { x, y } = getCenterPosition();

      lensX.set(x);
      lensY.set(y);
    };

    centerLens();

    window.addEventListener("resize", centerLens);

    return () => {
      window.removeEventListener("resize", centerLens);
    };
  }, []);

  return (
    <div className="size-full">
      <div className="absolute inset-0 -bottom-18">
        <div
          ref={containerRef}
          className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden mask-[linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]"
        >
          {/* Base layer */}
          <motion.div
            className="relative z-10 flex h-full w-full flex-col justify-center gap-10 opacity-80"
            style={{
              maskImage,
            }}
          >
            <TechRow techs={TECH_ROWS[0]} />
            <TechRow techs={TECH_ROWS[1]} reverse />
            <TechRow techs={TECH_ROWS[2]} />
          </motion.div>

          {/* Magnified clipped layer */}
          <motion.div
            className="pointer-events-none absolute inset-0 z-20 flex h-full flex-col justify-center select-none"
            style={{
              clipPath,
            }}
          >
            <div className="flex h-full w-full flex-col justify-center gap-10 brightness-110">
              <motion.div
                style={{
                  scale: 1.4,
                  transformOrigin,
                }}
              >
                <TechRow techs={TECH_ROWS[0]} />
              </motion.div>

              <motion.div
                style={{
                  scale: 1.4,
                  transformOrigin,
                }}
              >
                <TechRow techs={TECH_ROWS[1]} reverse />
              </motion.div>

              <motion.div
                style={{
                  scale: 1.4,
                  transformOrigin,
                }}
              >
                <TechRow techs={TECH_ROWS[2]} />
              </motion.div>
            </div>
          </motion.div>

          {/* Magnifying glass */}
          <motion.div
            drag
            dragMomentum={false}
            onDragEnd={returnToCenter}
            className="absolute top-0 left-0 z-40 cursor-grab drop-shadow-xl active:cursor-grabbing"
            style={{
              x: lensX,
              y: lensY,
              userSelect: "none",
              touchAction: "none",
            }}
          >
            <svg
              fill="none"
              height="105"
              viewBox="0 0 512 512"
              width="105"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M365.424 335.392L342.24 312.192L311.68 342.736L334.88 365.936L365.424 335.392Z"
                fill="#B0BDC6"
              />

              <path
                d="M358.08 342.736L334.88 319.552L319.04 335.392L342.24 358.584L358.08 342.736Z"
                fill="#DFE9EF"
              />

              <path
                d="M352.368 321.808L342.752 312.192L312.208 342.752L321.824 352.36L352.368 321.808Z"
                fill="#B0BDC6"
              />

              <path
                d="M332 332C260 404 142.4 404 69.6001 332C-2.3999 260 -2.3999 142.4 69.6001 69.6C141.6 -3.20003 259.2 -2.40002 332 69.6C404.8 142.4 404.8 260 332 332ZM315.2 87.2C252 24 150.4 24 88.0001 87.2C24.8001 150.4 24.8001 252 88.0001 314.4C151.2 377.6 252.8 377.6 315.2 314.4C377.6 252 377.6 150.4 315.2 87.2Z"
                fill="#DFE9EF"
              />

              <path
                d="M319.2 319.2C254.4 384 148.8 384 83.2001 319.2C18.4001 254.4 18.4001 148.8 83.2001 83.2C148 18.4 253.6 18.4 319.2 83.2C384 148.8 384 254.4 319.2 319.2ZM310.4 92C250.4 32 152 32 92.0001 92C32.0001 152 32.0001 250.4 92.0001 310.4C152 370.4 250.4 370.4 310.4 310.4C370.4 250.4 370.4 152 310.4 92Z"
                fill="#7A858C"
              />

              <path
                d="M484.104 428.784L373.8 318.472L318.36 373.912L428.672 484.216L484.104 428.784Z"
                fill="#333333"
              />

              <path
                d="M471.664 441.224L361.344 330.928L330.8 361.48L441.12 471.76L471.664 441.224Z"
                fill="#575B5E"
              />

              <path
                d="M495.2 423.2C504 432 432.8 504 423.2 495.2L417.6 489.6C408.8 480.8 480 408.8 489.6 417.6L495.2 423.2Z"
                fill="#B0BDC6"
              />

              <path
                d="M483.2 435.2C492 444 444.8 492 435.2 483.2L429.6 477.6C420.8 468.8 468 420.8 477.6 429.6L483.2 435.2Z"
                fill="#DFE9EF"
              />
            </svg>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
