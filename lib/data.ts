export type Metric = {
  label: string;
  value: string;
};

export type Project = {
  slug: string;
  name: string;
  type: string;
  deliverables: string;
  studio: string;
  role: string;
  services: string;
  description: string;
  overview: string;
  metrics: Metric[];
  image: string;
  bg: string;
  symbol: string;
  font: string;
};

export const projects: Project[] = [
  {
    slug: "idempo",
    name: "IDEMPO",
    type: "WEBHOOK",
    deliverables: "Source code",
    studio: "Personal",
    role: "Backend Engineer",
    services: "Typescript, Node.js, Postgres, Docker, K6",
    description:
      "A distributed event delivery engine capable of processing millions of events with minimal latency. Designed to handle high-throughput webhook delivery with strict ordering and exact-once guarantees.",
    overview:
      "Idempotency is hard. doing it at scale is even harder. I built Idempo to solve the problem of reliable webhook delivery. It uses a competing consumer pattern with transactional locks to ensure that no event is processed twice, even when multiple workers are fighting for the same queue. It handles failures gracefully with exponential backoff and keeps the system healthy by monitoring every heartbeat.",
    metrics: [
      { label: "Events / Hour", value: "1.2M+" },
      { label: "Latency", value: "< 6ms" },
      { label: "Scalability", value: "40%" },
      { label: "Failure Rate", value: "0%" },
    ],
    image: "/project1.jpg",
    bg: "bg-[#5bc0ff]",
    symbol: "I",
    font: "Montserrat",
  },
  {
    slug: "octillion",
    name: "OCTILLION",
    type: "WEB PLATFORM",
    deliverables: "Live Demo",
    studio: "Personal",
    role: "Full Stack Developer",
    services: "Next.js, AWS Lambda, Qdrant, Python",
    description:
      "A multi-document semantic search engine that understands context, not just keywords. It processes hundreds of PDFs in seconds and retrieves precise information using hybrid search algorithms.",
    overview:
      "Search shouldn't be a Ctrl+F experience. Octillion changes that by using vector embeddings to understand the meaning behind your query. I built a custom ingestion pipeline that splits heavy processing between local nodes and AWS Lambda, making it incredibly fast and cost-effective. The hybrid search approach combines the best of keyword matching and semantic understanding to give you the exact answer you need.",
    metrics: [
      { label: "Retrieval Speed", value: "211x" },
      { label: "Cache Hit Rate", value: "94%" },
      { label: "Cost Reduction", value: "60%" },
      { label: "Precision", value: "96%" },
    ],
    image: "/octillion_logo.svg",
    bg: "bg-white",
    symbol: "",
    font: "Montserrat",
  },
  {
    slug: "rootseek",
    name: "ROOTSEEK",
    type: "MOBILE APPLICATION",
    deliverables: "Source Code",
    studio: "Personal",
    role: "Mobile Developer",
    services: "React Native, Node.js, OpenAI, MongoDB",
    description:
      "An AI-powered journaling companion that helps you connect the dots in your life. It analyzes your entries over time to find patterns and insights that you might have missed.",
    overview:
      "Journaling is powerful, but often we forget what we wrote a month ago. RootSeek uses NLP to analyze your long-term entries and surface connections between your daily thoughts and bigger life patterns. It's not just about recording your day, it's about understanding your journey. I focused heavily on the interaction design to make the experience feel intimate and fluid.",
    metrics: [
      { label: "User Engagement", value: "40%" },
      { label: "Efficiency", value: "60%" },
      { label: "Accuracy", value: "85%" },
      { label: "Retention", value: "70%" },
    ],
    image: "/project3.jpg",
    bg: "bg-black",
    symbol: "R",
    font: "GrandHotel",
  },
];
