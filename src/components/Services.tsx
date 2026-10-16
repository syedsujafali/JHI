import type { CSSProperties } from "react";
import { SERVICES } from "../data";
import Reveal from "./Reveal";

type ServicesProps = {
  onSelect: (serviceTitle: string) => void;
};

function ArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export default function Services({ onSelect }: ServicesProps) {
  return (
    <section id="services" className="section services" aria-labelledby="services-title">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="eyebrow">Our Expertise</p>
            <h2 id="services-title" className="section-title" style={{ marginTop: 22 }}>
              A Better Kind of Home Comfort.
            </h2>
          </div>
          <p className="section-lede">
            Repair, installation, and maintenance for residential heating and cooling, with each visit planned around
            your home.
          </p>
        </div>

        <div className="services__grid">
          {SERVICES.map((service, index) => (
            <Reveal
              key={service.id}
              delay={index % 2 === 0 ? 0 : 120}
              className="service-slot"
              style={
                {
                  "--span": service.span,
                  "--offset": `${service.offset}px`,
                  "--ratio": service.ratio,
                } as CSSProperties
              }
            >
              <a
                className="service-card"
                href="#contact"
                onClick={() => onSelect(service.title)}
                aria-label={`${service.title}: request this service`}
              >
                <div className="service-card__media">
                  <img
                    src={service.image}
                    alt={service.alt}
                    loading="lazy"
                    decoding="async"
                    width={1200}
                    height={1200}
                    style={{ objectPosition: "center" }}
                  />
                </div>
                <div className="service-card__body">
                  <span className="service-card__index">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="service-card__title">{service.title}</h3>
                  <span className="service-card__arrow">
                    <ArrowIcon />
                  </span>
                  <p className="service-card__text">{service.text}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <p className="services__note">
          These are our proposed services. Final offerings and descriptions will be confirmed by JHI Services LLC before
          publication.
        </p>
      </div>
    </section>
  );
}
