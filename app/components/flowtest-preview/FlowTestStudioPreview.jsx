"use client";

import { useEffect, useRef, useState } from "react";

import DesktopPreview from "../../projects/[slug]/components/hero/preview/desktop/DesktopPreview";
import { HeroProvider } from "../../projects/[slug]/components/hero/preview/HeroContext";

const DESIGN_WIDTH = 900;
const DESIGN_HEIGHT = 560;

export default function FlowTestStudioPreview({
  hideFrame = false,
}) {
  const containerRef = useRef(null);

  const [scale, setScale] = useState(1);

  useEffect(() => {
    const element = containerRef.current;

    if (!element) {
      return;
    }

    const updateScale = () => {
      const width = element.getBoundingClientRect().width;

      const nextScale = Math.min(
        width / DESIGN_WIDTH,
        1,
      );

      setScale(nextScale);
    };

    updateScale();

    const observer = new ResizeObserver(updateScale);

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  const scaledHeight = DESIGN_HEIGHT * scale;

  return (
    <div
      ref={containerRef}
      className="w-full overflow-hidden"
      style={{
        height: scaledHeight,
      }}
    >
      <div
        className="origin-top-left"
        style={{
          width: DESIGN_WIDTH,
          height: DESIGN_HEIGHT,
          transform: `scale(${scale})`,
        }}
      >
        <HeroProvider>
          <DesktopPreview
            variant="workflow"
            hideFrame={hideFrame}
          />
        </HeroProvider>
      </div>
    </div>
  );
}