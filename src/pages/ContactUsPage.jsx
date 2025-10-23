import React from "react";
import { useForm } from "react-hook-form";
import "../scss/contactUs.css";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Thank you for contacting us!");
    reset();
  };

  return (
    <div className="card-background">
      <div className="contact-card">
        <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
          <h2>Contact Us</h2>

          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              placeholder="Enter your name"
            />
            {errors.name && <p className="error">{errors.name.message}</p>}
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
              placeholder="Enter your email"
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              {...register("message", { required: "Message is required" })}
              rows="5"
              placeholder="Type your message..."
            ></textarea>
            {errors.message && (
              <p className="error">{errors.message.message}</p>
            )}
          </div>

          <button type="submit">Send Message</button>

          {isSubmitSuccessful && (
            <p className="success">Message sent successfully!</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
