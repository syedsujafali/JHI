import { useState, type ChangeEvent, type FormEvent } from "react";
import { PHONE_DISPLAY, PHONE_HREF, SERVICE_OPTIONS } from "../data";
import Reveal from "./Reveal";

type FormValues = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

type FieldName = keyof FormValues;
type Errors = Partial<Record<FieldName, string>>;
type Status = { type: "error" | "demo"; title: string; text: string } | null;

const FIELD_ORDER: FieldName[] = ["name", "phone", "email", "service", "message"];

const EMPTY_VALUES: FormValues = {
  name: "",
  phone: "",
  email: "",
  service: "",
  message: "",
};

function validate(values: FormValues): Errors {
  const errors: Errors = {};

  if (!values.name.trim()) {
    errors.name = "Please enter your name.";
  }

  const digits = values.phone.replace(/\D/g, "");
  if (!values.phone.trim()) {
    errors.phone = "Please enter a phone number.";
  } else if (digits.length < 10 || digits.length > 11) {
    errors.phone = "Please enter a valid phone number, including the area code.";
  }

  const email = values.email.trim();
  if (!email) {
    errors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    errors.email = "Please enter a valid email address, such as name@example.com.";
  }

  if (!values.service) {
    errors.service = "Please choose the service you need.";
  }

  const message = values.message.trim();
  if (!message) {
    errors.message = "Please tell us a little about what you need.";
  } else if (message.length < 10) {
    errors.message = "Please add a little more detail (at least 10 characters).";
  }

  return errors;
}

type ContactProps = {
  service: string;
  onServiceChange: (service: string) => void;
};

export default function Contact({ service, onServiceChange }: ContactProps) {
  const [values, setValues] = useState<FormValues>(EMPTY_VALUES);
  const [errors, setErrors] = useState<Errors>({});
  const [attempted, setAttempted] = useState(false);
  const [status, setStatus] = useState<Status>(null);

  const current: FormValues = { ...values, service };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const name = e.target.name as FieldName;
    const value = e.target.value;

    if (name === "service") {
      onServiceChange(value);
    }

    const next: FormValues = { ...current, [name]: value };
    setValues((prev) => ({ ...prev, [name]: value }));

    if (attempted) {
      setErrors(validate(next));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAttempted(true);

    const nextErrors = validate(current);
    setErrors(nextErrors);

    const invalidFields = FIELD_ORDER.filter((field) => nextErrors[field]);

    if (invalidFields.length > 0) {
      const count = invalidFields.length;
      setStatus({
        type: "error",
        title: "Almost there",
        text: `Please check ${count} ${count === 1 ? "field" : "fields"} highlighted below.`,
      });
      document.getElementById(`field-${invalidFields[0]}`)?.focus();
      return;
    }

    // Frontend demo only: nothing is transmitted or stored.
    setStatus({
      type: "demo",
      title: "Thank you. This is a demo.",
      text: "Your enquiry has not been sent or received, because this form is not yet connected to a submission service. To reach JHI Services now, please call 914-258-6101.",
    });
    setValues(EMPTY_VALUES);
    onServiceChange("");
    setErrors({});
    setAttempted(false);
  };

  const fieldProps = (name: FieldName) => ({
    id: `field-${name}`,
    name,
    required: true,
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `field-${name}-error` : undefined,
  });

  const errorFor = (name: FieldName) =>
    errors[name] ? (
      <p id={`field-${name}-error`} className="field__error">
        <span aria-hidden="true">!</span>
        {errors[name]}
      </p>
    ) : null;

  const summaryCount = FIELD_ORDER.filter((field) => errors[field]).length;

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="container contact__grid">
        <Reveal>
          <div>
            <p className="eyebrow">Contact</p>
            <h2 id="contact-title" className="contact__title">
              Let&rsquo;s Make Your Home <em>More Comfortable.</em>
            </h2>
            <p className="contact__text">
              Tell us a little about your home and the service you need, or call us directly and speak with JHI Services
              LLC.
            </p>
            <a className="contact__phone" href={PHONE_HREF}>
              {PHONE_DISPLAY}
            </a>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <form className="form" onSubmit={handleSubmit} noValidate aria-labelledby="form-title">
            <h3 id="form-title" className="form__title">
              Request Service
            </h3>
            <p className="form__intro">Share your details and we will follow up about your heating or cooling needs.</p>

            <div className="form__demo" role="note">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 8v5M12 16.5v.5" />
              </svg>
              <span>
                <strong>Frontend demo.</strong> This form is not yet connected to a submission service, so nothing is
                sent from this page. For immediate help, call {PHONE_DISPLAY}.
              </span>
            </div>

            {attempted && summaryCount > 0 && status?.type === "error" && (
              <div className="form__summary" role="alert">
                {status.text}
              </div>
            )}

            <div className="form__grid">
              <div className={`field ${errors.name ? "is-invalid" : ""}`}>
                <label htmlFor="field-name">
                  Name<span className="req" aria-hidden="true">*</span>
                </label>
                <input type="text" autoComplete="name" placeholder="Your full name" value={values.name} onChange={handleChange} {...fieldProps("name")} />
                {errorFor("name")}
              </div>

              <div className={`field ${errors.phone ? "is-invalid" : ""}`}>
                <label htmlFor="field-phone">
                  Phone<span className="req" aria-hidden="true">*</span>
                </label>
                <input type="tel" autoComplete="tel" inputMode="tel" placeholder="914-258-6101" value={values.phone} onChange={handleChange} {...fieldProps("phone")} />
                {errorFor("phone")}
              </div>

              <div className={`field form__full ${errors.email ? "is-invalid" : ""}`}>
                <label htmlFor="field-email">
                  Email<span className="req" aria-hidden="true">*</span>
                </label>
                <input type="email" autoComplete="email" inputMode="email" placeholder="you@example.com" value={values.email} onChange={handleChange} {...fieldProps("email")} />
                {errorFor("email")}
              </div>

              <div className={`field form__full ${errors.service ? "is-invalid" : ""}`}>
                <label htmlFor="field-service">
                  Service required<span className="req" aria-hidden="true">*</span>
                </label>
                <select value={service} onChange={handleChange} {...fieldProps("service")}>
                  <option value="" disabled>
                    Select a service
                  </option>
                  {SERVICE_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {errorFor("service")}
              </div>

              <div className={`field form__full ${errors.message ? "is-invalid" : ""}`}>
                <label htmlFor="field-message">
                  Message<span className="req" aria-hidden="true">*</span>
                </label>
                <textarea rows={5} placeholder="Briefly describe your home and what you need help with." value={values.message} onChange={handleChange} {...fieldProps("message")} />
                {errorFor("message")}
              </div>
            </div>

            <div className="form__submit">
              <button type="submit" className="btn btn--terracotta btn--block">
                Request Service
              </button>
            </div>

            <div aria-live="polite">
              {status?.type === "demo" && (
                <div className="form__status" role="status">
                  <strong>{status.title}</strong>
                  {status.text}
                </div>
              )}
            </div>

            <p className="form__fine">Fields marked with * are required.</p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
