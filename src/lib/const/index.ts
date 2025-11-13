import { Benefit, Project, Testimonial, FAQ } from "@/types/const";

const freelancerName :string = 'Abdul Wahab';

const socialLinks = {
  linkedin: 'https://www.linkedin.com/in/abdul-uiux/',
  dribbble: 'https://dribbble.com/abdul_uiux',
  behance: 'https://www.behance.net/abdul_uiux',
  pinterest: 'https://www.pinterest.com/abdul_uiux/',
  upwork: 'https://upwork.com/freelancers/%7e01c4a68de437b0b304',
  email: 'ab.wahab192@gmail.com'
}

const aboutText :string = ' 👨‍💻 With over 8+ years of experience as an IBM Certified UX/UI Designer, I excel in crafting compelling digital experiences that drive results. Ranked in the Top 1% of talent, I specialize in high-converting UX/UI designs and scalable design systems that empower businesses.';

const benefits :Benefit[] = [
  {
    title: "Business-Centric Solutions",
    text: "Whether it's SaaS dashboard optimization or MVP design, I focus on maximizing user engagement and conversion rates.",
  },
  {
    title: "Proven Track Record",
    text: "Trusted by 45+ clients, including notable names like Prospectory AI and Agent Legend, for consistently delivering exceptional work.",
  },
  {
    title: "End-to-End Expertise",
    text: "From concept to deployment, I ensure seamless transitions and product launches with a focus on quality and performance.",
  },
];

const testimonials: Testimonial[] = [
  {
    review: "Abdul was a fantastic partner to work with. He brought strong product design skills, great attention to detail, and thoughtful problem-solving to every project.",
    name: "Tristan",
    designation: "Chief Operating Officer",
    image: 'https://framerusercontent.com/images/DzmsX9RY7ZMcxnS0VDE8nrEMJwk.jpg'
  },
  {
    review: "Great professional work, always finding solutions to ensure to provide optimal user experience to our we app. Highly recommended.",
    name: "Nadim",
    designation: "Director of Engineering",
    image: 'https://framerusercontent.com/images/GLRr9uvTdE0X3XmXVEeXLdXHgS8.jpg'
  },
  {
    review: "Rehired Abdul and tasked him in turning Figma into React. His commitment to excellence and the timely delivery of high-quality results has earned our trust and for future projects.",
    name: "Jessica Lee",
    designation: "VP of Marketing Strategy",
    image: 'https://framerusercontent.com/images/oUkBi1c8nERocfQrJWNLxZ9Fipw.jpg'
  },
  {
    review: "Fantastic front end developer skills. Followed instructions clearly. Great communication. Efficient delivery.",
    name: "Alex Ramirez",
    designation: "Senior Solutions Architect",
    image: 'https://framerusercontent.com/images/Dq0D8YrZ8rWDXAualtz8984Y1cg.jpg'
  },
  {
    review: "Abdul delivered exceptional work. He genuine care about our project with excellent communication. Without a doubt, we will definitely hire him again in the future!",
    name: "Anna",
    designation: "CEO, Tech Innovation Ltd.",
    image: 'https://framerusercontent.com/images/ZFX2ljkzvDEzlePf7lzdxzPbxXA.jpg'
  },
  {
    review: "Abdul Wahab Is a fantastic product designer. I am shocked that his process is super simple, and he provides proper results even though my internee developer has no problem understanding it.",
    name: "Anna",
    designation: "CEO, Tech Innovation Ltd.",
    image: 'https://framerusercontent.com/images/ZFX2ljkzvDEzlePf7lzdxzPbxXA.jpg'
  },
  {
    review: "Thank you, abdul, for my luxury restaurant landing page. You have never disappointed me. I surely recommend Abdul. He is the best",
    name: "Anna",
    designation: "CEO, Tech Innovation Ltd.",
    image: 'https://framerusercontent.com/images/ZFX2ljkzvDEzlePf7lzdxzPbxXA.jpg'
  },
  {
    review: "OMG, Abdul, you are amazing. I never thought you could make such massive changes with proper spacing and colors. You have made my day. I will recommend you and hire you again for all design work.",
    name: "Maggie",
    designation: "CEO, Tech Innovation Ltd.",
    image: 'https://framerusercontent.com/images/ZFX2ljkzvDEzlePf7lzdxzPbxXA.jpg'
  },
];

const projects :Project[] = [
  {
    id: "quantum",
    title: "Quantum",
    image: "https://framerusercontent.com/images/e633Jp9rA7J1z8Zq58eJTQNeco.jpg",
    alt: "Project 1",
  },
  {
    id: "lora",
    title: "Lora",
    image:
      "https://framerusercontent.com/images/NAJSIK5XnZdV1Y4SAp0lueMbA.jpg?scale-down-to=2048",
    alt: "Project 1",
  },
  {
    id: "eciedge-store",
    title: "Eciedge Store",
    image: "https://framerusercontent.com/images/rhrxm36efhkLLxhTgRh5oSvA3g.png",
    alt: "Project 1",
  },
  {
    id: "zenith",
    title: "Zenith",
    image: "https://framerusercontent.com/images/rhrxm36efhkLLxhTgRh5oSvA3g.png",
    alt: "Project 1",
  },
];

const certifications :string[] = [
  'Fundamentals of Predictive Project Management',
  'User Onboarding 101',
  'Web Development Fundamentals',
  'Cultivating Digital Literacy',
  'User Experience Design Fundamentals'
];

const planDetails = [
  {
    name: 'Free Consultation Call',
    price: '$0/30min',
    description: 'Let’s discuss your goals, pain points, and growth opportunities.',
    benefits: [
      'Personalized project insights',
      'Timeline & budget guidance',
      'Strategic UX/UI recommendations',
      'No commitment required'
    ],
    buttonLabel: 'Get a free Consultation call'
  },
  {
    name: 'Monthly UX/UI Designer Retainer',
    price: '$6000/month',
    description: 'Ongoing design support for teams that need consistent quality and speed.',
    benefits: [
      'Dedicated designer (40 hrs/week)',
      'Slack & Notion collaboration',
      'Design systems & iterations included',
      'Priority turnaround times'
    ],
    buttonLabel: 'Start Retainer Plan'
  }
];

const faqs :FAQ[] = [
  {
    question: 'How soon can we start?',
    answer: ' I can usually begin within 1-2 days; discovery calls are available this week.',
  },
  {
    question: 'Do you work with developers?',
    answer: ' Yes — I hand off production-ready files and collaborate on build.',
  },
  {
    question: 'Can you audit our current site?',
    answer: 'Yes — I’ll deliver a prioritized UX audit with quick wins and a roadmap.',
  },
  {
    question: 'What tools do you use?',
    answer: 'Figma, Framer, and modern design-system workflows',
  }
];

export {
  freelancerName,
  socialLinks,
  aboutText,
  benefits,
  testimonials,
  projects,
  certifications,
  planDetails,
  faqs
}
