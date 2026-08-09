"use client";

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
    const emailInvalid =
      input.email.length > 0 && !isValidEmail(input.email);

    const requiredMissing =
      !input.name.trim() ||
      !input.email.trim() ||
      !input.message.trim();

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

    const serviceID =
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;

    const templateID =
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

    const publicKey =
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceID || !templateID || !publicKey) {
      toast.error("Email service is not configured.");
      return;
    }

    setSending(true);

    try {
      const response = await emailjs.send(
        serviceID,
        templateID,
        input,
        {
          publicKey,
        },
      );

      if (response.status === 200) {
        toast.success("Message sent successfully!");

        setInput(initialInput);
        setError(initialError);
      }
    } catch (sendError) {
      toast.error(
        sendError?.text || "Failed to send message.",
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <form
      onSubmit={handleSendMail}
      className="space-y-6"
    >
      {/* ========================= */}
      {/* HEADER */}
      {/* ========================= */}

      <div>
        <p
          className="
            text-xs
            font-semibold
            uppercase
            tracking-[4px]
            text-[#16f2b3]
          "
        >
          Get In Touch
        </p>

        <h3
          className="
            mt-3
            text-2xl
            font-bold
            text-white
            md:text-3xl
          "
        >
          Contact with me
        </h3>

        <p
          className="
            mt-4
            leading-7
            text-gray-400
          "
        >
          If you have any questions or concerns, please
          don't hesitate to contact me. I am open to work
          opportunities that align with my skills and
          interests.
        </p>
      </div>

      {/* ========================= */}
      {/* NAME */}
      {/* ========================= */}

      <div className="flex flex-col gap-2">
        <label
          htmlFor="contact-name"
          className="
            text-sm
            font-medium
            text-gray-300
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
          onChange={(event) =>
            handleChange("name", event.target.value)
          }
          className="
            w-full

            rounded-xl

            border
            border-white/[0.08]

            bg-white/[0.03]

            px-4
            py-3

            text-sm
            text-white

            outline-none

            placeholder:text-gray-600

            transition-all
            duration-300

            focus:border-[#16f2b3]/50
            focus:bg-white/[0.04]
            focus:ring-1
            focus:ring-[#16f2b3]/20
          "
          placeholder="Your name"
        />
      </div>

      {/* ========================= */}
      {/* EMAIL */}
      {/* ========================= */}

      <div className="flex flex-col gap-2">
        <label
          htmlFor="contact-email"
          className="
            text-sm
            font-medium
            text-gray-300
          "
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
          onChange={(event) =>
            handleChange("email", event.target.value)
          }
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
            w-full

            rounded-xl

            border

            bg-white/[0.03]

            px-4
            py-3

            text-sm
            text-white

            outline-none

            placeholder:text-gray-600

            transition-all
            duration-300

            focus:bg-white/[0.04]
            focus:ring-1

            ${
              error.email
                ? "border-red-400/50 focus:border-red-400/60 focus:ring-red-400/20"
                : "border-white/[0.08] focus:border-[#16f2b3]/50 focus:ring-[#16f2b3]/20"
            }
          `}
          placeholder="you@example.com"
        />

        {error.email && (
          <p className="text-xs text-red-400">
            Please provide a valid email address.
          </p>
        )}
      </div>

      {/* ========================= */}
      {/* MESSAGE */}
      {/* ========================= */}

      <div className="flex flex-col gap-2">
        <label
          htmlFor="contact-message"
          className="
            text-sm
            font-medium
            text-gray-300
          "
        >
          Your Message
        </label>

        <textarea
          id="contact-message"
          name="message"
          maxLength={500}
          required
          rows={5}
          value={input.message}
          onChange={(event) =>
            handleChange("message", event.target.value)
          }
          className="
            w-full
            resize-none

            rounded-xl

            border
            border-white/[0.08]

            bg-white/[0.03]

            px-4
            py-3

            text-sm
            leading-7
            text-white

            outline-none

            placeholder:text-gray-600

            transition-all
            duration-300

            focus:border-[#16f2b3]/50
            focus:bg-white/[0.04]
            focus:ring-1
            focus:ring-[#16f2b3]/20
          "
          placeholder="Tell me about your project or opportunity..."
        />
      </div>

      {/* ========================= */}
      {/* REQUIRED ERROR */}
      {/* ========================= */}

      {error.required && (
        <p
          className="
            rounded-xl
            border
            border-red-400/20
            bg-red-400/5
            px-4
            py-3
            text-sm
            text-red-400
          "
        >
          Please complete all required fields.
        </p>
      )}

      {/* ========================= */}
      {/* SUBMIT */}
      {/* ========================= */}

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={sending}
          className="
            inline-flex
            items-center
            justify-center
            gap-2

            rounded-xl

            bg-[#16f2b3]

            px-6
            py-3

            text-sm
            font-semibold

            text-black

            transition-all
            duration-300

            hover:-translate-y-0.5
            hover:shadow-[0_10px_35px_rgba(22,242,179,.20)]

            disabled:cursor-not-allowed
            disabled:opacity-60
            disabled:hover:translate-y-0
            disabled:hover:shadow-none
          "
        >
          <span>
            {sending ? "Sending..." : "Send Message"}
          </span>

          {!sending && (
            <TbMailForward
              size={19}
            />
          )}
        </button>
      </div>
    </form>
  );
}