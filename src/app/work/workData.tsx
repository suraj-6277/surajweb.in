import { Icon } from "@/components/Icon";
import { JSX } from "react";

type ResumeData = {
  name: string;
  location: string;
  about: string;
  summary: string;
  avatarUrl: string;
  personalWebsiteUrl: string;
  contact: {
    social: {
      name: string;
      url: string;
      icon: JSX.Element;
    }[];
  };
  education: {
    college: string;
    degree: string;
    start: string;
    end: string;
  }[];
  work: {
    company: string;
    link: string;
    location: string;
    title: string;
    start: string;
    end: string;
    descriptions: string[];
  }[];
  skills: string[];
};

export const RESUME_DATA: ResumeData = {
  name: "Suraj Jadhav",
  location: "Pune, Maharashtra, India",
  about:
    "A design-focused Full Stack Engineer skilled in crafting products with a strong eye for design.",
  summary:
    "Software Design and Engineering, I've developed products entirely from scratch.",
  avatarUrl: "/logo.png",
  personalWebsiteUrl: "https://surajweb.in/",
  contact: {
    social: [
      {
        name: "Mail",
        url: "mailto:surajjadhav071204@gmail.com",
        icon: <Icon name="social-mail" className="w-4 h-4" />,
      },
      {
        name: "GitHub",
        url: "https://github.com/suraj-6277",
        icon: <Icon name="social-github" className="w-4 h-4" />,
      },
      {
        name: "LinkedIn",
        url: "https://in.linkedin.com/in/surajjadhav7",
        icon: <Icon name="social-linkedin" className="w-4 h-4" />,
      },
      {
        name: "X",
        url: "https://x.com/surajjadhav_07",
        icon: <Icon name="social-x" className="w-4 h-4" />,
      },
    ],
  },
  education: [
    {
      college: "Indira college of engineering and management",
      degree: "Bachelor's degree, Computer Science",
      start: "2022",
      end: "2026",
    },
  ],
  work: [
    {
      company: "codsoft pvt ltd",
      link: "https://www.codsoft.in/",
      location: "Pune · Remote",
      title: "Web Devloper Intern",
      start: "10 Jan 2025",
      end: "10 Feb 2025",
      descriptions: [
        "Developed responsive and mobile-first UI components using HTML5, CSS3, and JavaScript, ensuring cross-browser compatibility.",
        "Built reusable React components and managed state efficiently to deliver dynamic and scalable user interfaces.",
        "Integrated REST APIs into frontend features, enabling real-time data rendering and seamless user interactions.",
        "Optimized frontend performance and UI/UX by refactoring code, fixing bugs, and implementing best practices.",
        "Collaborated with backend teams to integrate APIs, enabling dynamic content updates without page reloads.",
      ],
    },
  ],
  skills: ["JavaScript", "TypeScript", "React/Next.js", "Node.js"],
} as const;
