export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: "ai-strategy",
    title: "AI Strategy & Consulting",
    description: "Develop comprehensive AI roadmaps aligned with your business objectives and technical capabilities.",
    icon: "🤖",
    features: [
      "AI readiness assessment",
      "Technology stack recommendations",
      "ROI analysis and business case development",
      "Implementation roadmap planning"
    ]
  },
  {
    id: "custom-software",
    title: "Custom Software Development",
    description: "Build scalable, secure, and high-performance software solutions tailored to your specific needs.",
    icon: "💻",
    features: [
      "Full-stack web applications",
      "Mobile app development",
      "API design and integration",
      "Legacy system modernization"
    ]
  },
  {
    id: "machine-learning",
    title: "Machine Learning Solutions",
    description: "Implement ML models and AI systems that deliver real business value and actionable insights.",
    icon: "🧠",
    features: [
      "Predictive analytics",
      "Natural language processing",
      "Computer vision applications",
      "Recommendation systems"
    ]
  },
  {
    id: "data-engineering",
    title: "Data Engineering & Analytics",
    description: "Design robust data pipelines and analytics solutions to unlock the full potential of your data.",
    icon: "📊",
    features: [
      "Data pipeline architecture",
      "ETL/ELT process design",
      "Real-time analytics",
      "Data governance and security"
    ]
  },
  {
    id: "cloud-migration",
    title: "Cloud Migration & DevOps",
    description: "Accelerate your cloud journey with expert guidance on migration, optimization, and DevOps practices.",
    icon: "☁️",
    features: [
      "Cloud strategy and planning",
      "Infrastructure as Code",
      "CI/CD pipeline setup",
      "Performance optimization"
    ]
  },
  {
    id: "digital-transformation",
    title: "Digital Transformation",
    description: "Guide your organization through comprehensive digital transformation initiatives.",
    icon: "🚀",
    features: [
      "Process automation",
      "Digital workflow optimization",
      "Change management",
      "Technology training and adoption"
    ]
  }
]; 