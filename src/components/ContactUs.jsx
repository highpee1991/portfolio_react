import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import { motion } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";
import CTAButton from "./CTAButton";

const schema = yup.object().shape({
  from_name: yup.string().required("Name is required"),
  from_email: yup.string().email("Invalid email").required("Email required"),
  subject: yup.string().required("Subject is required"),
  message: yup
    .string()
    .min(10, "Message must be at least 10 characters")
    .required("Message is required"),
});

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      await emailjs.send(
        "service_zza80og",
        "template_4d14til",
        data,
        "X9BCexJukpmEAf4b-"
      );
      toast.success("✅ Message sent successfully!");
      reset();
    } catch (error) {
      console.log(error);
      toast.error("❌ Failed to send message");
    }
  };

  return (
    <div
      id="contacts"
      className=" flex justify-center items-center px-4 pb-10 pt-40 flex-col"
    >
      <motion.h2
        className=" relative tracking-widest inline-block px-6 py-2 text-lg uppercase text-black font-bold border-4 border-black "
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        Contact Me
      </motion.h2>

      <motion.section
        className="w-full max-w-4xl max-auto px-6 py-2"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <ToastContainer position="top-right" autoClose={4000} />

        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className=" grid grid-cols-1 gap-6 bg-white p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div>
            <select
              {...register("subject")}
              className=" border border-gray-300 p-3 rounded-md w-full"
              defaultValue=""
            >
              <option value="" disabled>
                Select a Subject
              </option>
              <option value="General Inquiry">General Inquiry</option>
              <option value="Job Opportunity">Job Opportunity</option>
              <option value="Feedback">Feedback</option>
              <option value="Partnership Request">Partnership Request</option>
              <option value="Other">Other</option>
            </select>
            {errors.subject && (
              <p className="text-red-500 text-sm mt-1">
                {errors.subject.message}
              </p>
            )}
          </div>

          <div>
            <input
              type="text"
              placeholder="Your Name"
              {...register("from_name")}
              className="border border-gray-300 p-3 rounded-md w-full"
            />
            {errors.from_name && (
              <p className="text-red-500 text-sm mt-1">
                {errors.from_name.message}
              </p>
            )}
          </div>

          <div>
            <input
              type="email"
              placeholder="Your Email"
              {...register("from_email")}
              className="border border-gray-300 p-3 rounded-md w-full"
            />
            {errors.from_email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.from_email.message}
              </p>
            )}
          </div>

          <div>
            <textarea
              placeholder="Your Message"
              rows={5}
              {...register("message")}
              className="border border-gray-300 p-3 rounded-md w-full"
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          <CTAButton
            text={isSubmitting ? "Sending..." : "Send Message"}
            type="submit"
            disabled={isSubmitting}
          />
        </motion.form>
      </motion.section>
    </div>
  );
};

export default ContactUs;
