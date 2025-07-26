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
    quote: "CrossP transformed our business operations with their AI integration expertise. The automated workflow system they built has increased our efficiency by 300% and reduced manual errors to zero. Their team's technical expertise and business understanding is exceptional.",
    author: "Sarah Johnson",
    position: "CTO",
    company: "TechFlow Solutions"
  },
  {
    id: "testimonial-2",
    quote: "Working with CrossP on our digital transformation was a game-changer. They modernized our legacy systems, implemented cloud solutions, and trained our team. The ROI was immediate and continues to grow. Highly recommended for any business looking to scale.",
    author: "Michael Chen",
    position: "CEO",
    company: "InnovateCorp"
  },
  {
    id: "testimonial-3",
    quote: "The machine learning models they implemented provide insights that have directly contributed to a 25% increase in our customer retention rate.",
    author: "Emily Rodriguez",
    position: "Head of Data Science",
    company: "DataDrive Inc"
  }
]; 