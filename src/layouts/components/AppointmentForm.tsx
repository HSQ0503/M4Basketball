"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import CustomButton from "@/components/CustomButton";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  age: string;
  skillLevel: string;
  message: string;
}

const AppointmentForm = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    age: "",
    skillLevel: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/appointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      // Redirect to success page
      router.push("/appointment/success");
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to submit application",
      );
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-12 md:col-6">
          <div className="mb-6" data-aos="fade-up-sm" data-aos-delay="120">
            <label htmlFor="firstName" className="form-label">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              id="firstName"
              name="firstName"
              className="form-input"
              placeholder="Player's First Name"
              type="text"
              required
              value={formData.firstName}
              onChange={handleChange}
              disabled={isSubmitting}
            />
          </div>
        </div>
        <div className="col-12 md:col-6">
          <div className="mb-6" data-aos="fade-up-sm" data-aos-delay="140">
            <label htmlFor="lastName" className="form-label">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              id="lastName"
              name="lastName"
              className="form-input"
              placeholder="Player's Last Name"
              type="text"
              required
              value={formData.lastName}
              onChange={handleChange}
              disabled={isSubmitting}
            />
          </div>
        </div>
        <div className="col-12 md:col-6">
          <div className="mb-6" data-aos="fade-up-sm" data-aos-delay="160">
            <label htmlFor="email" className="form-label">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              className="form-input"
              placeholder="your@email.com"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              disabled={isSubmitting}
            />
          </div>
        </div>
        <div className="col-12 md:col-6">
          <div className="mb-6" data-aos="fade-up-sm" data-aos-delay="180">
            <label htmlFor="phone" className="form-label">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              className="form-input"
              placeholder="(555) 123-4567"
              type="tel"
              required
              value={formData.phone}
              onChange={handleChange}
              disabled={isSubmitting}
            />
          </div>
        </div>
        <div className="col-12 md:col-6">
          <div className="mb-6" data-aos="fade-up-sm" data-aos-delay="200">
            <label htmlFor="age" className="form-label">
              Player Age <span className="text-red-500">*</span>
            </label>
            <input
              id="age"
              name="age"
              className="form-input"
              placeholder="e.g., 13"
              type="number"
              min="11"
              max="16"
              required
              value={formData.age}
              onChange={handleChange}
              disabled={isSubmitting}
            />
          </div>
        </div>
        <div className="col-12 md:col-6">
          <div className="mb-6" data-aos="fade-up-sm" data-aos-delay="220">
            <label htmlFor="skillLevel" className="form-label">
              Skill Level <span className="text-red-500">*</span>
            </label>
            <select
              id="skillLevel"
              name="skillLevel"
              className="form-input"
              required
              value={formData.skillLevel}
              onChange={handleChange}
              disabled={isSubmitting}
            >
              <option value="">Select Skill Level</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
              <option value="high-level">High-Level Competitive</option>
            </select>
          </div>
        </div>
        <div className="col-12">
          <div className="mb-6" data-aos="fade-up-sm" data-aos-delay="240">
            <label htmlFor="message" className="form-label">
              Additional Information
            </label>
            <textarea
              id="message"
              name="message"
              className="form-input"
              placeholder="Tell us about your basketball goals, previous training experience, or any questions..."
              rows={6}
              value={formData.message}
              onChange={handleChange}
              disabled={isSubmitting}
            ></textarea>
          </div>
        </div>

        {error && (
          <div className="col-12 mb-4">
            <div className="rounded-lg bg-red-50 p-4 text-red-600">{error}</div>
          </div>
        )}

        <div className="col-12" data-aos="fade-up-sm" data-aos-delay="260">
          <CustomButton
            label={isSubmitting ? "Submitting..." : "Submit Application"}
            variant="primary"
            button_type="submit"
            className="w-full md:w-auto"
            disabled={isSubmitting}
          />
        </div>
      </div>
    </form>
  );
};

export default AppointmentForm;
