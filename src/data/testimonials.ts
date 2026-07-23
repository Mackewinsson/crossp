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
    quote: "What stood out was the clarity. Every sprint we got working software, honest trade-offs, and a codebase our team could understand. No black box — just steady progress toward launch.",
    author: "Sarah Johnson",
    position: "CTO",
    company: "TechFlow Solutions"
  },
  {
    id: "testimonial-2",
    quote: "We needed senior architecture without a long hiring cycle. ConaiSoft plugged in quickly, kept communication tight, and handed over everything so we stayed in control of our product.",
    author: "Michael Chen",
    position: "CEO",
    company: "InnovateCorp"
  },
  {
    id: "testimonial-3",
    quote: "They treated AI as part of a real system — not a demo. The RAG workflow fit our operations, and the documentation made it straightforward for our team to maintain afterward.",
    author: "Emily Rodriguez",
    position: "Head of Product",
    company: "DataDrive Inc"
  }
];
