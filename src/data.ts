export const PHONE_DISPLAY = "914-258-6101";
export const PHONE_HREF = "tel:+19142586101";

export const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "about", label: "About" },
  { id: "service-area", label: "Service Area" },
  { id: "contact", label: "Contact" },
] as const;

export type ServiceItem = {
  id: string;
  title: string;
  text: string;
  image: string;
  alt: string;
  /** Aspect ratio of the card image on desktop */
  ratio: string;
  /** Column span out of 12 on desktop */
  span: number;
  /** Vertical offset on desktop to create an editorial, staggered rhythm */
  offset: number;
};

export const SERVICES: ServiceItem[] = [
  {
    id: "ac-repair",
    title: "Air Conditioning Repair",
    text: "Prompt diagnosis to bring cooling back when your home needs it most.",
    image: "/images/service-ac-repair.jpg",
    alt: "Technician working on an outdoor air conditioning unit",
    ratio: "4 / 5",
    span: 5,
    offset: 0,
  },
  {
    id: "ac-installation",
    title: "AC Installation",
    text: "Careful system selection and a clean, considered installation.",
    image: "/images/service-ac-install.jpg",
    alt: "Air conditioning condenser units set against a building facade",
    ratio: "4 / 3",
    span: 7,
    offset: 140,
  },
  {
    id: "heating-repair",
    title: "Heating Repair",
    text: "Reliable repairs that keep your home warm through the coldest nights.",
    image: "/images/service-heat-repair.jpg",
    alt: "Technician inspecting a metal furnace unit",
    ratio: "4 / 3",
    span: 7,
    offset: 0,
  },
  {
    id: "heating-installation",
    title: "Heating Installation",
    text: "Efficient, comfortable heating systems sized for your home.",
    image: "/images/service-heat-install.jpg",
    alt: "Snow-covered residential houses in winter",
    ratio: "4 / 5",
    span: 5,
    offset: 140,
  },
  {
    id: "hvac-maintenance",
    title: "HVAC Maintenance",
    text: "Seasonal check-ups that help systems run quietly and efficiently.",
    image: "/images/service-maintenance.jpg",
    alt: "Two technicians on a scaffold maintaining air conditioning units on a building",
    ratio: "1 / 1",
    span: 6,
    offset: 0,
  },
  {
    id: "heat-pumps",
    title: "Heat Pumps",
    text: "One efficient system that heats and cools your home year-round.",
    image: "/images/service-heat-pump.jpg",
    alt: "Outdoor heat pump and air conditioner units beside a residential building",
    ratio: "5 / 4",
    span: 6,
    offset: 120,
  },
];

export const SERVICE_OPTIONS = [...SERVICES.map((s) => s.title), "Not sure yet"];
