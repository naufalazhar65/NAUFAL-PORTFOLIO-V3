"use client";

import { useHero } from "./HeroContext";
import PreviewCard from "./shared/PreviewCard";
import ConnectionLine from "./shared/ConnectionLine";

export default function WorkflowCanvas() {
  const { activeStep, steps } = useHero();

  return (
    <section
      className="
        flex
        items-center
        justify-center
      "
    >
      <div
        className="
          flex
          w-full
          max-w-md
          flex-col
          items-center
        "
      >
        {steps.map((step, index) => {
          const active = index === activeStep;
          const completed = index < activeStep;

          return (
            <div
              key={step.id}
              className="flex w-full flex-col items-center"
            >
              <PreviewCard
                icon={step.icon}
                title={step.title}
                subtitle={step.subtitle}
                active={active}
                completed={completed}
                className="
                  w-full
                  max-w-sm
                "
              />

              {index !== steps.length - 1 && (
                <ConnectionLine
                  direction="vertical"
                  active={active || completed}
                  length={44}
                />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}