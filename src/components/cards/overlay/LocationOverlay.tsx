"use client";
import { useTheme } from "next-themes";
import { useState } from "react";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";

const cities = [
  {
    id: "nyc",
    name: "New York",
    location: [40.7128, -74.006] as [number, number],
  },
];
function CityLabel({ id, name }: { id: string; name: string }) {
  return (
    <div
      style={
        {
          position: "absolute",
          marginBottom: "5px",
          padding: "1px 4px",

          background: "#fff",
          color: "#1a1a2e",

          fontFamily: "monospace",
          fontSize: "0.5rem",
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          whiteSpace: "nowrap",

          pointerEvents: "none",

          opacity: `var(--cobe-visible-${id}, 0)`,
          filter: `blur(calc((1 - var(--cobe-visible-${id}, 0)) * 8px))`,

          transition: "opacity 0.8s, filter 0.8s",

          positionAnchor: `--cobe-${id}`,

          bottom: "anchor(top)",
          left: "anchor(center)",
          translate: "-51%",
        } as React.CSSProperties
      }
    >
      {name}

      <span
        style={{
          position: "absolute",
          top: "100%",
          left: "50%",
          transform: "translate3d(-50%, -1px, 0px)",

          borderWidth: "4px",
          borderStyle: "solid",
          borderColor: "#fff transparent transparent",
        }}
      />
    </div>
  );
}

// const arcs = [
//   {
//     id: "nyc-sf",
//     from: [40.7128, -74.006] as [number, number],
//     to: [37.7749, -122.4194] as [number, number],
//   },
// ];

export function LocationOverlay() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const DEFAULT_THETA = 0.18;
  const phiRef = useRef(0);
  const thetaRef = useRef(DEFAULT_THETA);

  const dragStartRef = useRef<{
    x: number;
    y: number;
  } | null>(null);

  const velocityPhiRef = useRef(0);
  const velocityThetaRef = useRef(0);

  useEffect(() => {
    if (!mounted || !resolvedTheme) return;

    const canvas = canvasRef.current;

    if (!canvas) return;

    let width = canvas.offsetWidth;
    let animationFrame = 0;

    const globe = createGlobe(canvas, {
      devicePixelRatio: Math.min(window.devicePixelRatio, 2),
      width: width * 2,
      height: width * 2,

      phi: 0,
      theta: DEFAULT_THETA,

      dark: isDark ? 1 : 0,
      diffuse: 1.3,

      mapSamples: 40000,
      mapBrightness: isDark ? 10 : 6,

      baseColor: isDark ? [0.08, 0.08, 0.1] : [1, 1, 1],
      glowColor: isDark ? [1, 1, 1] : [0.18, 0.4, 0.9],
      markerColor: isDark ? [0.25, 0.5, 1] : [0.05, 0.2, 0.65],

      markerElevation: 0.01,

      markers: cities.map((city) => ({
        id: city.id,
        location: city.location,
        size: 0.025,
      })),

      //   arcs: arcs.map((arc) => ({
      //     id: arc.id,
      //     from: arc.from,
      //     to: arc.to,
      //     color: [0.2, 0.45, 1],
      //   })),
      //
      //   arcColor: [0.2, 0.45, 1],
      //   arcWidth: 0.7,
      //   arcHeight: 0.18,
    });

    const animate = () => {
      const isDragging = dragStartRef.current !== null;
      if (!isDragging) {
        if (Math.abs(velocityPhiRef.current) > 0.00001) {
          phiRef.current += velocityPhiRef.current;
          velocityPhiRef.current *= 0.99;
        } else {
          velocityPhiRef.current = 0;
          phiRef.current += 0.0005;
        }
        if (Math.abs(velocityThetaRef.current) > 0.00001) {
          thetaRef.current += velocityThetaRef.current;
          velocityThetaRef.current *= 0.99;
        } else {
          velocityThetaRef.current = 0;

          const thetaDifference = DEFAULT_THETA - thetaRef.current;

          thetaRef.current += thetaDifference * 0.004;

          if (Math.abs(thetaDifference) < 0.0001) {
            thetaRef.current = DEFAULT_THETA;
          }
        }
      }

      // Prevent dragging too far
      const MIN_THETA = -1.1;
      const MAX_THETA = 1.1;

      if (thetaRef.current < MIN_THETA) {
        thetaRef.current = MIN_THETA;
        velocityThetaRef.current = 0;
      }

      if (thetaRef.current > MAX_THETA) {
        thetaRef.current = MAX_THETA;
        velocityThetaRef.current = 0;
      }

      globe.update({
        phi: phiRef.current,
        theta: thetaRef.current,
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.offsetWidth;

      globe.update({
        width: width * 2,
        height: width * 2,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", handleResize);
      globe.destroy();
    };
  }, [isDark, mounted]);

  function handlePointerDown(e: React.PointerEvent<HTMLCanvasElement>) {
    if (e.button !== 0) return;

    dragStartRef.current = {
      x: e.clientX,
      y: e.clientY,
    };

    velocityPhiRef.current = 0;
    velocityThetaRef.current = 0;

    e.currentTarget.setPointerCapture(e.pointerId);
    e.currentTarget.style.cursor = "grabbing";
  }

  function handlePointerMove(e: React.PointerEvent<HTMLCanvasElement>) {
    const last = dragStartRef.current;

    if (!last) return;

    if (e.buttons === 0) {
      handlePointerUp(e);
      return;
    }

    const deltaX = e.clientX - last.x;
    const deltaY = e.clientY - last.y;

    const sensitivity = 250;

    const phiDelta = deltaX / sensitivity;
    const thetaDelta = deltaY / sensitivity;

    phiRef.current += phiDelta;
    thetaRef.current += thetaDelta;

    thetaRef.current = Math.max(-0.9, Math.min(0.9, thetaRef.current));

    velocityPhiRef.current = velocityPhiRef.current * 0.6 + phiDelta * 0.4;

    velocityThetaRef.current =
      velocityThetaRef.current * 0.6 + thetaDelta * 0.4;

    dragStartRef.current = {
      x: e.clientX,
      y: e.clientY,
    };
  }

  function handlePointerUp(e: React.PointerEvent<HTMLCanvasElement>) {
    if (dragStartRef.current === null) return;

    dragStartRef.current = null;

    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }

    e.currentTarget.style.cursor = "grab";
  }

  return (
    <div className="size-full">
      <div className="absolute -bottom-36 left-1/2 w-sm -translate-x-1/2">
        <div
          aria-hidden="true"
          className="relative aspect-square select-none"
          style={{
            // contain: "layout style paint",
            contain: "layout style",
          }}
        >
          <canvas
            ref={canvasRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            style={{
              width: "100%",
              height: "100%",
              cursor: "grab",
              opacity: 1,
              transition: "opacity 1.2s",
              borderRadius: "100%",
              touchAction: "none",
              background: isDark
                ? "radial-gradient(circle, transparent 64%, rgba(255, 255, 255, 0.08) 68%, rgba(255, 255, 255, 0.35) 73%, rgba(255, 255, 255, 0.55) 77%, rgba(255, 255, 255, 0.30) 81%, rgba(255, 255, 255, 0.12) 86%, transparent 92%)"
                : "radial-gradient(circle, transparent 64%, rgba(40, 120, 255, 0.08) 68%, rgba(20, 100, 255, 0.35) 73%, rgba(0, 90, 255, 0.55) 77%, rgba(30, 120, 255, 0.30) 81%, rgba(80, 160, 255, 0.12) 86%, transparent 92%)",

              boxShadow: isDark
                ? "0 0 10px rgba(255, 255, 255, 0.55), 0 0 25px rgba(255, 255, 255, 0.35), 0 0 55px rgba(255, 255, 255, 0.20)"
                : "0 0 10px rgba(0, 100, 255, 0.55), 0 0 25px rgba(0, 110, 255, 0.35), 0 0 55px rgba(30, 130, 255, 0.20)",
            }}
          />

          {cities.map((city) => (
            <CityLabel key={city.id} id={city.id} name={city.name} />
          ))}
        </div>
      </div>
    </div>
  );
}
