import {
  Brush,
  Code2,
  Megaphone,
  Video,
} from "lucide-react";

export const pageLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

export const services = [
  {
    title: "Web Solutions",
    slug: "web",
    short: "Clear websites",
    description:
      "Custom websites, landing pages, portfolio showcases, and performance optimization for businesses that need a strong digital home.",
    bullets: [
      "Custom Business Websites",
      "High-Converting Landing Pages",
      "Portfolio Showcase Sites",
      "Performance Optimization",
    ],
    icon: Code2,
    accent: "#A64DFF",
    image: "web-visual",
    imageSrc: "/assets/service-web.jpg",
  },
  {
    title: "Creative Branding",
    slug: "brand",
    short: "Visual identity",
    description:
      "Logo systems, social content design, banners, posters, and thumbnails that make your brand instantly recognizable.",
    bullets: [
      "Logo & Visual Identity Design",
      "Social Media Content Design",
      "Marketing Banners & Posters",
      "High-Impact YouTube Thumbnails",
    ],
    icon: Brush,
    accent: "#E84BA4",
    image: "brand-visual",
    imageSrc: "/assets/service-branding.jpg",
  },
  {
    title: "Motion & Video",
    slug: "video",
    short: "Dynamic edits",
    description:
      "Short-form videos, YouTube edits, promotional ad videos, subtitles, and motion content built for modern attention spans.",
    bullets: [
      "Instagram Reels & Short Video",
      "Professional YouTube Editing",
      "Promotional Ad Videos",
      "Dynamic Text & Subtitles",
    ],
    icon: Video,
    accent: "#B469FF",
    image: "video-visual",
    imageSrc: "/assets/service-video.jpg",
  },
  {
    title: "Digital Presence",
    slug: "presence",
    short: "Complete setup",
    description:
      "Social media planning, strategic visual content, consistent formatting, and complete brand setup for digital growth.",
    bullets: [
      "Social Media Content Planning",
      "Strategic Visual Content",
      "Consistent Brand Formatting",
      "Complete Brand Setup",
    ],
    icon: Megaphone,
    accent: "#38D7F2",
    image: "presence-visual",
    imageSrc: "/assets/service-presence.jpg",
  },
];

export const audienceChips = ["Small Businesses", "Startups", "Creators", "Local Brands"];

export const projects = [
  {
    title: "CH Info Solutions",
    category: "Business Website",
    copy:
      "Modern business website focused on trust, clarity, and professional digital presence.",
    metric: "Modern UI",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    link: "https://chinfosolution.com",
  },
  {
    title: "Dinesh Caterers",
    category: "Catering Website",
    copy:
      "Elegant catering website with premium visuals, mobile-first layout, and strong local branding.",
    metric: "Premium Experience",
    image:
      "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1200&auto=format&fit=crop",
    link: "https://dineshcaterers.com",
  },
  {
    title: "Creative Portfolio",
    category: "UI/UX Showcase",
    copy:
      "Minimal portfolio experience with smooth motion design and conversion-focused sections.",
    metric: "Smooth Motion",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    link: "#",
  },
];

const testimonials = [
  {
    name: "CH Info Solutions",
    role: "Business Website Development",
    quote:
      "SIRA Digital delivered a modern website that instantly improved our brand image and client trust. The entire process felt smooth, fast, and highly professional.",
    result: "+ Better Brand Presence",
  },
  {
    name: "Dinesh Caterers",
    role: "Catering Business Website",
    quote:
      "We started getting more direct inquiries after launching the website. The design perfectly matched our catering brand and looked premium on mobile too.",
    result: "+ More Customer Leads",
  },
  {
    name: "Local Fitness Studio",
    role: "Social Media & Branding",
    quote:
      "Their creative direction and content strategy helped us stand out locally. The visuals, reels, and branding gave our business a completely fresh identity.",
    result: "+ Stronger Social Reach",
  },
];