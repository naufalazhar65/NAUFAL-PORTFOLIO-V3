"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { TbMailForward } from "react-icons/tb";

import { isValidEmail } from "@/utils/check-email";

const initialInput = {
  name: "",
  email: "",
  message: "",
};

const initialError = {
  email: false,
  required: false,
};

export default function ContactForm() {
  const [input, setInput] = useState(initialInput);
  const [error, setError] = useState(initialError);
  const [sending, setSending] = useState(false);

  const handleChange = (field, value) => {
    setInput((previous) => ({
      ...previous,
      [field]: value,
    }));

    if (error.required) {
      setError((previous) => ({
        ...previous,
        required: false,
      }));
    }

    if (field === "email" && error.email) {
      setError((previous) => ({
        ...previous,
        email: false,
      }));
    }
  };

  const validate = () => {
    const emailInvalid = input.email.length > 0 && !isValidEmail(input.email);

    const requiredMissing =
      !input.name.trim() || !input.email.trim() || !input.message.trim();

    setError({
      email: emailInvalid,
      required: requiredMissing,
    });

    return !emailInvalid && !requiredMissing;
  };

  const handleSendMail = async (event) => {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;

    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceID || !templateID || !publicKey) {
      toast.error("Email service is not configured.");
      return;
    }

    setSending(true);

    try {
      const response = await emailjs.send(serviceID, templateID, input, {
        publicKey,
      });

      if (response.status === 200) {
        toast.success("Message sent successfully!");

        setInput(initialInput);
        setError(initialError);
      }
    } catch (sendError) {
      console.error("EmailJS error:", {
        status: sendError?.status,
        text: sendError?.text,
        message: sendError?.message,
      });

      toast.error(sendError?.text || "Failed to send message.");
    } finally {
      setSending(false);
    }
  };

  return (
    <form onSubmit={handleSendMail} className="w-full">
      {/* =========================
          FORM HEADER
      ========================= */}

      <div
        className="
          border-b
          border-white/[0.08]
          pb-6
        "
      >
        <div className="flex items-center justify-between gap-4">
          <span
            className="
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.14em]
              text-[#16f2b3]
            "
          >
            Get In Touch
          </span>

          <span
            className="
              rounded-full
              border
              border-white/[0.08]
              bg-white/[0.02]
              px-3
              py-1
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.14em]
              text-gray-400
            "
          >
            Open
          </span>
        </div>

        <h3
          className="
            mt-4
            text-[clamp(28px,4vw,42px)]
            font-medium
            leading-[0.98]
            tracking-[-0.05em]
            text-white
          "
        >
          Tell me what
          <br />
          you&apos;re building.
        </h3>

        <p
          className="
            mt-4
            max-w-xl
            text-[13px]
            leading-7
            text-gray-300
          "
        >
          Share an opportunity, project idea, or collaboration. I&apos;ll get
          back to you as soon as possible.
        </p>
      </div>

      {/* =========================
          FIELDS
      ========================= */}

      <div className="pt-8">
        {/* Name */}

        <div
          className="
            group
            border-b
            border-white/[0.08]
            py-5
            transition-colors
            duration-300
            focus-within:border-white/[0.2]
          "
        >
          <label
            htmlFor="contact-name"
            className="
              block
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.14em]
              text-gray-400
              transition-colors
              duration-200
              group-focus-within:text-white
            "
          >
            Your Name
          </label>

          <input
            id="contact-name"
            type="text"
            name="name"
            maxLength={100}
            autoComplete="name"
            required
            value={input.name}
            onChange={(event) => handleChange("name", event.target.value)}
            className="
              mt-3
              w-full
              border-0
              bg-transparent
              px-0
              py-1
              text-sm
              text-white
              outline-none
              placeholder:text-gray-500
              focus:ring-0
            "
            placeholder="Your name"
          />
        </div>

        {/* Email */}

        <div
          className={`
            group
            border-b
            py-5
            transition-colors
            duration-300
            focus-within:border-white/[0.2]

            ${error.email ? "border-red-400/40" : "border-white/[0.08]"}
          `}
        >
          <label
            htmlFor="contact-email"
            className={`
              block
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.14em]
              transition-colors
              duration-200

              ${
                error.email
                  ? "text-red-400"
                  : "text-gray-400 group-focus-within:text-white"
              }
            `}
          >
            Your Email
          </label>

          <input
            id="contact-email"
            type="email"
            name="email"
            maxLength={100}
            autoComplete="email"
            required
            value={input.email}
            onChange={(event) => handleChange("email", event.target.value)}
            onBlur={() => {
              if (!input.email.trim()) {
                return;
              }

              setError((previous) => ({
                ...previous,
                email: !isValidEmail(input.email),
              }));
            }}
            className={`
              mt-3
              w-full
              border-0
              bg-transparent
              px-0
              py-1
              text-sm
              outline-none
              placeholder:text-gray-500
              focus:ring-0

              ${error.email ? "text-red-300" : "text-white"}
            `}
            placeholder="you@example.com"
          />

          {error.email && (
            <p
              className="
                mt-2
                text-[11px]
                leading-5
                text-red-400
              "
            >
              Please provide a valid email address.
            </p>
          )}
        </div>

        {/* Message */}

        <div
          className="
            group
            border-b
            border-white/[0.08]
            py-5
            transition-colors
            duration-300
            focus-within:border-white/[0.2]
          "
        >
          <label
            htmlFor="contact-message"
            className="
              block
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.14em]
              text-gray-400
              transition-colors
              duration-200
              group-focus-within:text-white
            "
          >
            Your Message
          </label>

          <textarea
            id="contact-message"
            name="message"
            maxLength={500}
            required
            rows={6}
            value={input.message}
            onChange={(event) => handleChange("message", event.target.value)}
            className="
              mt-3
              w-full
              resize-none
              border-0
              bg-transparent
              px-0
              py-1
              text-sm
              leading-7
              text-white
              outline-none
              placeholder:text-gray-500
              focus:ring-0
            "
            placeholder="Tell me about your project or opportunity..."
          />
        </div>
      </div>

      {/* =========================
          REQUIRED ERROR
      ========================= */}

      {error.required && (
        <motion.div
          initial={{
            opacity: 0,
            y: -6,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="
            mt-6
            border-l
            border-red-400/50
            bg-red-400/[0.02]
            py-2
            pl-4
          "
        >
          <p
            className="
              text-[11px]
              leading-6
              text-red-400
            "
          >
            Please complete all required fields.
          </p>
        </motion.div>
      )}

      {/* =========================
          ACTION
      ========================= */}

      <div
        className="
          flex
          flex-col
          gap-5
          pt-7
          sm:flex-row
          sm:items-center
          sm:justify-between
        "
      >
        <p
          className="
            max-w-xs
            text-[10px]
            leading-5
            text-gray-400
          "
        >
          Your message is sent securely through the configured email service.
        </p>

        <button
          type="submit"
          disabled={sending}
          className="
            group
            inline-flex
            min-h-11
            w-full
            items-center
            justify-center
            gap-2
            rounded-full
            bg-white
            px-5
            text-sm
            font-medium
            text-black
            shadow-[0_12px_35px_rgba(0,0,0,.25)]
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:bg-gray-200
            hover:shadow-[0_16px_45px_rgba(255,255,255,.08)]
            disabled:cursor-not-allowed
            disabled:opacity-50
            disabled:hover:translate-y-0
            sm:w-auto
          "
        >
          <span>{sending ? "Sending..." : "Send Message"}</span>

          {!sending && (
            <TbMailForward
              size={18}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          )}
        </button>
      </div>
    </form>
  );
}
