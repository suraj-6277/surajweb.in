export type JourneyEvent = {
  title: string;
  description: string;
  imageURl?: string;
  url?: string;
};

export type JourneyYear = {
  year: number;
  events: JourneyEvent[];
};

export const journeyData: JourneyYear[] = [
  {
    year: 2026,
    events: [
      {
        title: "Invoice Generator",
        description:
          "Developed an invoice generator that I utilize monthly for sending invoices to my current employer.",
        imageURl: "/journey/invoice-generator.jpeg",
        url: "https://invoice.surajweb.in",
      },
      ],
    },
    {
      year: 2026,
      events: [
      {
        title: "Portfolio",
        description:
          "my portfolio with a new design, and as a developer, grasping the design aspect was challenging. However, I successfully navigated it, giving my portfolio a fresh and appealing look.",
        imageURl: "/journey/portfolio.png",
        url: "https://surajweb.in",
      },
    ],
  },
 
  {
    year: 2022,
    events: [
      {
        title: "Bachelor of Engineering in Computer Science",
        description:
          "I consider myself extremely fortunate to have the opportunity to study Computer Engineering.",
      },
    ],
  },
  {
    year: 2004,
    events: [
      {
        title: "Born",
        description: "on 07th of December.",
      },
    ],
  },
];
