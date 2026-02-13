"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import CustomButton from "@/components/CustomButton";
import type { Dictionary } from "@/i18n/getDictionary";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  age: string;
  skillLevel: string;
  message: string;
}

const AppointmentForm = ({ dict }: { dict: Dictionary }) => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const t = dict.appointmentForm;

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
        err instanceof Error ? err.message : t.failedSubmit,
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
              {t.firstName} <span className="text-red-500">{t.required}</span>
            </label>
            <input
              id="firstName"
              name="firstName"
              className="form-input"
              placeholder={t.firstNamePlaceholder}
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
              {t.lastName} <span className="text-red-500">{t.required}</span>
            </label>
            <input
              id="lastName"
              name="lastName"
              className="form-input"
              placeholder={t.lastNamePlaceholder}
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
              {t.email} <span className="text-red-500">{t.required}</span>
            </label>
            <input
              id="email"
              name="email"
              className="form-input"
              placeholder={t.emailPlaceholder}
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
              {t.phone} <span className="text-red-500">{t.required}</span>
            </label>
            <input
              id="phone"
              name="phone"
              className="form-input"
              placeholder={t.phonePlaceholder}
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
              {t.playerAge} <span className="text-red-500">{t.required}</span>
            </label>
            <input
              id="age"
              name="age"
              className="form-input"
              placeholder={t.agePlaceholder}
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
              {t.skillLevel} <span className="text-red-500">{t.required}</span>
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
              <option value="">{t.selectSkillLevel}</option>
              <option value="beginner">{t.beginner}</option>
              <option value="intermediate">{t.intermediate}</option>
              <option value="advanced">{t.advanced}</option>
              <option value="high-level">{t.highLevel}</option>
            </select>
          </div>
        </div>
        <div className="col-12">
          <div className="mb-6" data-aos="fade-up-sm" data-aos-delay="240">
            <label htmlFor="message" className="form-label">
              {t.additionalInfo}
            </label>
            <textarea
              id="message"
              name="message"
              className="form-input"
              placeholder={t.messagePlaceholder}
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
            label={isSubmitting ? t.submitting : t.submitApplication}
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
