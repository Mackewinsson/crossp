export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  position: string;
  company: string;
  avatar?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    quote: "The AI strategy they developed helped us increase operational efficiency by 40% and opened up entirely new revenue streams we hadn't considered.",
    author: "Sarah Johnson",
    position: "CTO",
    company: "TechFlow Solutions"
  },
  {
    id: "testimonial-2",
    quote: "Their custom software development expertise transformed our legacy systems into modern, scalable solutions that can grow with our business.",
    author: "Michael Chen",
    position: "VP of Engineering",
    company: "InnovateCorp"
  },
  {
    id: "testimonial-3",
    quote: "The machine learning models they implemented provide insights that have directly contributed to a 25% increase in our customer retention rate.",
    author: "Emily Rodriguez",
    position: "Head of Data Science",
    company: "DataDrive Inc"
  },
  {
    id: "testimonial-4",
    quote: "Their cloud migration guidance was invaluable. We reduced infrastructure costs by 60% while improving performance and reliability.",
    author: "David Thompson",
    position: "IT Director",
    company: "Global Retail Group"
  },
  {
    id: "testimonial-5",
    quote: "The digital transformation project they led completely modernized our workflows and significantly improved team productivity and satisfaction.",
    author: "Lisa Wang",
    position: "Operations Manager",
    company: "FutureTech Industries"
  },
  {
    id: "testimonial-6",
    quote: "Their ongoing support and maintenance services ensure our systems stay current and perform optimally, giving us peace of mind.",
    author: "Robert Kim",
    position: "Systems Administrator",
    company: "SecureNet Solutions"
  },
  {
    id: "testimonial-7",
    quote: "CrossP transformed our business operations with their AI integration expertise. The automated workflow system they built has increased our efficiency by 300% and reduced manual errors to zero. Their team's technical expertise and business understanding is exceptional.",
    author: "Sarah Johnson",
    position: "CTO",
    company: "TechFlow Solutions"
  },
  {
    id: "testimonial-8",
    quote: "Working with CrossP on our digital transformation was a game-changer. They modernized our legacy systems, implemented cloud solutions, and trained our team. The ROI was immediate and continues to grow. Highly recommended for any business looking to scale.",
    author: "Michael Chen",
    position: "CEO",
    company: "InnovateCorp"
  }
]; 