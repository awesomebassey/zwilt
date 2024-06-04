export const links: string[] = [
  "Find Work",
  "Find Talent",
  "Articles",
  "About Us",
  "Contact Us",
];

export const typedStrings: string[] = [
  "designer?",
  "developer?",
  "project manager?",
  "engineer?",
];

export const ratings: { image: string; data: string }[] = [
  { image: "skills.svg", data: "989 Skills" },
  { image: "sub-categories.svg", data: "45 Sub-Categories" },
  { image: "profiles.svg", data: "1011 Profiles" },
];

export const brands: {
  category: "development" | "design";
  image: string;
  name: string;
}[] = [
  {
    category: "development",
    image: "shopify.svg",
    name: "Shopify Developer",
  },
  {
    category: "development",
    image: "magento.svg",
    name: "Magento Developer",
  },
  {
    category: "development",
    image: "data-scientist.svg",
    name: "Data Scientist",
  },
  {
    category: "development",
    image: "webflow.svg",
    name: "Webflow Developer",
  },
  {
    category: "development",
    image: "dotnet.svg",
    name: "Dot Net Developer",
  },
  {
    category: "design",
    image: "figma.svg",
    name: "UX Designer",
  },
  {
    category: "design",
    image: "photoshop.svg",
    name: "Graphics Designer",
  },
  {
    category: "design",
    image: "illustrator.svg",
    name: "Illustration Artist",
  },
  {
    category: "design",
    image: "unreal.svg",
    name: "Unreal Engine",
  },
  {
    category: "design",
    image: "cinema.svg",
    name: "Cinema 4D",
  },
];

export const steps: { index: number; title: string; body: string }[] = [
  {
    index: 1,
    title: "Resume Screening",
    body: "Lorem Ipsum Dolor Sit Amet",
  },
  {
    index: 2,
    title: "Video Interview",
    body: `Candidates are assessed through skill based questions in
    a virtual setting. Allowing you to gauge personality and
    cultural fit.`,
  },
  {
    index: 3,
    title: "Technical Evaluation",
    body: "Lorem Ipsum Dolor Sit Amet",
  },
  {
    index: 4,
    title: "Application Review",
    body: "Lorem Ipsum Dolor Sit Amet",
  },
  {
    index: 5,
    title: "Lets get to work",
    body: "Lorem Ipsum Dolor Sit Amet",
  },
];

export const faqs: {
  question: string;
  answer: string;
  title?: string;
  subtitle?: string;
}[] = [
  {
    question: "I want to work part-time, is that possible?",
    answer: "Lorem Ipsum Dolor Sit Amet Consecteteur Adipiscing Elit.",
    title: "General",
  },
  {
    question: "How long are the average projects?",
    answer: "Lorem Ipsum Dolor Sit Amet Consecteteur Adipiscing Elit.",
  },
  {
    question: "How does the payment work?",
    answer: "Lorem Ipsum Dolor Sit Amet Consecteteur Adipiscing Elit.",
  },
  {
    question: "How much can I earn?",
    answer: "Lorem Ipsum Dolor Sit Amet Consecteteur Adipiscing Elit.",
  },
  {
    question: "I want to work part-time, is that possible?",
    answer: "Lorem Ipsum Dolor Sit Amet Consecteteur Adipiscing Elit.",
    title: "General",
    subtitle: "Joining Process",
  },
  {
    question: "How long are the average projects?",
    answer: "Lorem Ipsum Dolor Sit Amet Consecteteur Adipiscing Elit.",
  },
  {
    question: "How does the payment work?",
    answer: "Lorem Ipsum Dolor Sit Amet Consecteteur Adipiscing Elit.",
  },
  {
    question: "How much can I earn?",
    answer: "Lorem Ipsum Dolor Sit Amet Consecteteur Adipiscing Elit.",
  },
];

export const footerMenu: { category: string; item: string; link: string }[] = [
  {
    category: "Platform",
    item: "Find Work",
    link: "#!",
  },
  {
    category: "Platform",
    item: "Find Talent",
    link: "#!",
  },
  {
    category: "Platform",
    item: "Categories",
    link: "#!",
  },
  {
    category: "Platform",
    item: "About Us",
    link: "#!",
  },
  {
    category: "Categories",
    item: "Data Science",
    link: "#!",
  },
  {
    category: "Categories",
    item: "IT & Networking",
    link: "#!",
  },
  {
    category: "Categories",
    item: "Web & Mobile",
    link: "#!",
  },
  {
    category: "Help",
    item: "FAQs",
    link: "#!",
  },
  {
    category: "Help",
    item: "Contact Us",
    link: "#!",
  },
  {
    category: "Get In Touch @",
    item: "Instagram",
    link: "#!",
  },
  {
    category: "Get In Touch @",
    item: "Linkedin",
    link: "#!",
  },
  {
    category: "Get In Touch @",
    item: "Twitter",
    link: "#!",
  },
];

export const journeySections: {
  number: number;
  heading: string;
  description: string;
  button: string;
  bg: string;
  image: string;
  numberImage: string;
}[] = [
  {
    number: 1,
    numberImage: "/images/1.svg",
    heading: "Find your next star performer.",
    description:
      "Explore the vast Zwilt marketplace to find the candidate that meets your needs.",
    button: "Join Now",
    bg: "#EDEFFF",
    image: "/images/journey-1.webp",
  },
  {
    number: 2,
    numberImage: "/images/2.svg",
    heading: "Evaluate to your heart's content.",
    description:
      "Assess the candidate through work history, transparent tests and video interviews.",
    button: "Browse More",
    bg: "#FFF7E1",
    image: "/images/journey-2.webp",
  },
  {
    number: 3,
    numberImage: "/images/3.svg",
    heading: "Start building your team.",
    description:
      "Onboard your candidate right away and start creating the next big thing.",
    button: "Join Now",
    bg: "#F3F3F3",
    image: "/images/journey-3.webp",
  },
];
