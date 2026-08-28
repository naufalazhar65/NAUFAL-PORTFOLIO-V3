"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";

import {
  FiX,
  FiTerminal,
  FiClock,
  FiCheckCircle,
  FiCpu,
  FiFileText,
  FiBox,
} from "react-icons/fi";

import { FaApple, FaAndroid, FaTelegram, FaHtml5 } from "react-icons/fa";
import { SiPytest, SiAppium } from "react-icons/si";

const iconMap = {
  test: FiCheckCircle,
  pytest: SiPytest,
  page: FiFileText,
  driver: FiCpu,
  appium: SiAppium,
  android: FaAndroid,
  ios: FaApple,
  report: FaHtml5,
  telegram: FaTelegram,
};

export default function WorkflowMobileModal({ step, onClose }) {
  useEffect(() => {
    if (!step) return;

    const html = document.documentElement;
    const body = document.body;

    const prevHtmlOverflow = html.style.overflow;
    const prevBodyOverflow = body.style.overflow;
    const prevTouchAction = body.style.touchAction;

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    body.style.touchAction = "none";

    const handleEsc = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      html.style.overflow = prevHtmlOverflow;
      body.style.overflow = prevBodyOverflow;
      body.style.touchAction = prevTouchAction;
      window.removeEventListener("keydown", handleEsc);
    };
  }, [step, onClose]);

  if (!step) return null;

  const Icon =
    typeof step.icon === "function" ? step.icon : iconMap[step.icon] || FiBox;

  return createPortal(
    <>
      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
        className="fixed inset-0 z-[999999] bg-black/60 backdrop-blur-md"
      />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.98, y: 25 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-x-3 top-24 z-[1000000] mx-auto max-w-md overflow-hidden rounded-3xl border border-[#16f2b3]/30 bg-[#111827] shadow-[0_30px_80px_rgba(0,0,0,.45)]"
      >
        {/* Header */}
        <div className="border-b border-white/10 p-5 sm:p-6">
          <div className="flex items-start justify-between">
            <div>
              <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs font-semibold text-green-400">
                SUCCESS
              </span>

              <div className="mt-5 flex items-center gap-4">
                <div className="rounded-xl bg-[#16f2b3]/10 p-3">
                  <Icon className="text-2xl text-[#16f2b3]" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="text-gray-400">{step.subtitle}</p>
                </div>
              </div>
            </div>

            <button
              onClick={onClose}
              aria-label="Close modal"
              className="rounded-xl p-2 text-gray-400 transition hover:bg-white/10 hover:text-white"
            >
              <FiX size={22} />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="max-h-[50vh] sm:max-h-[55vh] overflow-y-auto overscroll-contain scroll-smooth custom-scrollbar space-y-5 p-5 sm:p-6">
          {/* Description */}
          <div>
            <h4 className="mb-2 text-xs uppercase tracking-[3px] text-gray-500">
              Description
            </h4>
            <p className="leading-7 text-gray-300">{step.description}</p>
          </div>

          {/* Command */}
          {step.command && (
            <div>
              <div className="mb-3 flex items-center gap-2 text-xs uppercase tracking-[3px] text-gray-500">
                <FiTerminal />
                Command
              </div>

              <pre className="max-h-40 max-w-full overflow-auto rounded-xl bg-[#0d1117] p-3 text-sm text-[#16f2b3] custom-scrollbar whitespace-pre-wrap break-words">
                {step.command}
              </pre>
            </div>
          )}

          {/* Output */}
          {step.output?.length > 0 && (
            <div>
              <h4 className="mb-3 text-xs uppercase tracking-[3px] text-gray-500">
                Output
              </h4>

              <div className="space-y-3">
                {step.output.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/5 px-2 py-2.5"
                  >
                    <FiCheckCircle className="text-[#16f2b3]" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Duration */}
          {step.duration && (
            <div className="flex items-center gap-2 text-gray-400">
              <FiClock />
              <span>{step.duration}</span>
            </div>
          )}
        </div>
      </motion.div>
    </>,
    document.body,
  );
}
