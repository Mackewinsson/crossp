export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const features: Feature[] = [
  {
    id: "expertise",
    title: "Deep Technical Expertise",
    description: "Our team brings 10+ years of experience in AI, machine learning, and software development across diverse industries.",
    icon: "🎯"
  },
  {
    id: "custom-solutions",
    title: "Tailored Solutions",
    description: "Every solution is custom-built to address your specific business challenges and objectives, not one-size-fits-all.",
    icon: "⚙️"
  },
  {
    id: "rapid-delivery",
    title: "Rapid Delivery",
    description: "Agile methodology ensures quick iterations and faster time-to-market for your digital solutions.",
    icon: "⚡"
  },
  {
    id: "ongoing-support",
    title: "Ongoing Support",
    description: "We don't just build and leave - we provide continuous support, maintenance, and optimization services.",
    icon: "🛠️"
  },
  {
    id: "scalable-architecture",
    title: "Scalable Architecture",
    description: "Future-proof your investments with scalable, maintainable, and extensible system architectures.",
    icon: "📈"
  },
  {
    id: "data-security",
    title: "Enterprise Security",
    description: "Built-in security best practices and compliance standards to protect your data and systems.",
    icon: "🔒"
  }
]; 