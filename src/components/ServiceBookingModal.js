import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BASE_URL from "../BASEURL";

export default function ServiceBookingModal({ service, isOpen, onClose, onSuccess }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: service?.title || "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    let { name, value } = e.target;
    
    // For phone field, only allow digits and limit to 10
    if (name === 'phone') {
      value = value.replace(/[^0-9]/g, '').slice(0, 10);
    }
    
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`${BASE_URL}/api/service-bookings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          submittedAt: new Date().toISOString()
        })
      });

      if (response.ok) {
        const data = await response.json();
        setSubmittedData(formData);
        setShowSuccess(true);
        setIsSubmitting(false);

        setTimeout(() => {
          if (onSuccess) onSuccess();
          handleClose();
        }, 2500);
      } else {
        console.error('Failed to submit service booking');
        setIsSubmitting(false);
        alert('Failed to submit service booking. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting service booking:', error);
      setIsSubmitting(false);
      alert('Error submitting service booking. Please check your connection.');
    }
  };

  const handleClose = () => {
    setShowSuccess(false);
    setFormData({ name: "", email: "", phone: "", service: service?.title || "", message: "" });
    setSubmittedData(null);
    onClose();
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.3 } }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
        >
          <motion.div
            className="relative w-full max-w-2xl bg-white/95 rounded-3xl shadow-2xl overflow-hidden"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <motion.button
              onClick={handleClose}
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-700 z-10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ✕
            </motion.button>

            {/* SUCCESS STATE */}
            <AnimatePresence mode="wait">
              {showSuccess ? (
                <motion.div
                  key="success"
                  className="p-12 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="mx-auto mb-8 w-24 h-24 rounded-full bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center shadow-lg"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  >
                    <span className="text-5xl">✅</span>
                  </motion.div>

                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Service Booking Confirmed!
                  </h2>

                  <p className="text-gray-600 mb-2 text-lg">
                    Thank you <span className="font-semibold text-primary-600">{submittedData?.name}</span>
                  </p>

                  <p className="text-gray-600 mb-6">
                    Our team will contact you at{" "}
                    <span className="font-semibold text-primary-600">
                      +91 {submittedData?.phone}
                    </span>
                  </p>

                  <motion.div
                    className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-6 border border-primary-100"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <p className="text-sm text-gray-500 mb-2">Selected Service</p>
                    <p className="font-bold text-xl text-gray-800">
                      {submittedData?.service}
                    </p>
                  </motion.div>
                </motion.div>
              ) : (
                <motion.div key="form" variants={formVariants} initial="hidden" animate="visible">
                  {/* HEADER */}
                  <div className="bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-500 p-8 text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="relative flex items-center gap-6">
                      <motion.div
                        className="text-6xl opacity-90"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3, type: "spring" }}
                      >
                        {service?.icon || "🔧"}
                      </motion.div>
                      <div>
                        <h2 className="text-2xl font-bold mb-2">Service Booking</h2>
                        <p className="text-primary-100">Book our premium IT services</p>
                      </div>
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
                  </div>

                  {/* BODY */}
                  <form onSubmit={handleSubmit} className="p-8 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input
                        label="Full Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        icon="👤"
                        required
                      />

                      <Input
                        label="Email Address"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        icon="📧"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input
                        label="Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="10-digit mobile number"
                        pattern="[0-9]{10}"
                        maxLength="10"
                        inputMode="numeric"
                        icon="📱"
                        required
                      />

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                          Selected Service
                        </label>
                        <div className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 bg-gray-50 text-gray-700 font-medium">
                          {service?.title || "Service"}
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Additional Requirements (Optional)
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us more about your requirements..."
                        rows="4"
                        className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all resize-none"
                      />
                    </div>

                    {/* CTA */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-primary-600 to-secondary-500 text-white font-bold text-lg hover:shadow-lg transition-all flex justify-center items-center gap-3 disabled:opacity-50"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                          Submitting...
                        </>
                      ) : (
                        <>
                          🚀 Book Service
                        </>
                      )}
                    </motion.button>

                    {/* TRUST */}
                    <div className="text-center">
                      <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
                        <span>🔒</span>
                        Your data is 100% secure & confidential
                      </p>
                    </div>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* Enhanced Input Component */
function Input({ label, icon, ...props }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-3">
        {label}
      </label>
      <div className="relative">
        <input
          {...props}
          className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 pl-12 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all"
        />
        {icon && (
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
}