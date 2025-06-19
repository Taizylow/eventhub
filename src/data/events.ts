
export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  price: number;
  category: string;
  attendees: number;
  maxAttendees: number;
  image: string;
  description: string;
  fullDescription: string;
  speaker: {
    name: string;
    bio: string;
    image: string;
    company: string;
    position: string;
  };
  agenda: string[];
  requirements: string[];
  featured: boolean;
}

export const events: Event[] = [
  {
    id: "1",
    title: "Modern Web Development Workshop",
    date: "2024-07-15",
    time: "10:00 AM - 4:00 PM",
    location: "Tech Hub, San Francisco",
    price: 149,
    category: "Workshop",
    attendees: 42,
    maxAttendees: 50,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop",
    description: "Learn the latest web development techniques and frameworks in this hands-on workshop.",
    fullDescription: "Join us for an intensive full-day workshop covering the latest trends in modern web development. You'll learn React, TypeScript, and modern deployment strategies through hands-on projects and real-world examples. Perfect for developers looking to upgrade their skills and stay current with industry best practices.",
    speaker: {
      name: "Sarah Chen",
      bio: "Senior Software Engineer at Google with 8+ years of experience in web development. Sarah has contributed to major open-source projects and is a regular speaker at tech conferences.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      company: "Google",
      position: "Senior Software Engineer"
    },
    agenda: [
      "Introduction to Modern JavaScript",
      "React Hooks and State Management",
      "TypeScript Fundamentals",
      "API Integration and Error Handling",
      "Deployment and Performance Optimization"
    ],
    requirements: [
      "Basic knowledge of HTML, CSS, and JavaScript",
      "Laptop with Node.js installed",
      "Text editor or IDE"
    ],
    featured: true
  },
  {
    id: "2",
    title: "Digital Marketing Strategies Seminar",
    date: "2024-07-20",
    time: "2:00 PM - 5:00 PM",
    location: "Business Center, New York",
    price: 89,
    category: "Seminar",
    attendees: 78,
    maxAttendees: 100,
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=600&fit=crop",
    description: "Discover proven digital marketing strategies to grow your business and reach more customers.",
    fullDescription: "This comprehensive seminar will cover the essential digital marketing strategies every business needs to succeed in today's competitive landscape. Learn about SEO, social media marketing, email campaigns, and conversion optimization from industry experts.",
    speaker: {
      name: "Michael Rodriguez",
      bio: "Digital Marketing Director at HubSpot with over 10 years of experience helping businesses grow their online presence. Michael has worked with Fortune 500 companies and startups alike.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      company: "HubSpot",
      position: "Digital Marketing Director"
    },
    agenda: [
      "Digital Marketing Landscape Overview",
      "SEO Best Practices and Tools",
      "Social Media Strategy Development",
      "Email Marketing Automation",
      "Analytics and Performance Tracking"
    ],
    requirements: [
      "Basic understanding of digital marketing concepts",
      "Notebook for taking notes",
      "Business goals in mind"
    ],
    featured: true
  },
  {
    id: "3",
    title: "AI and Machine Learning Conference",
    date: "2024-07-25",
    time: "9:00 AM - 6:00 PM",
    location: "Convention Center, Austin",
    price: 299,
    category: "Conference",
    attendees: 156,
    maxAttendees: 200,
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=800&h=600&fit=crop",
    description: "Explore the latest advancements in AI and machine learning with industry leaders and researchers.",
    fullDescription: "Join hundreds of AI professionals, researchers, and enthusiasts for a full day of cutting-edge presentations, workshops, and networking opportunities. Discover the latest breakthroughs in machine learning, deep learning, and artificial intelligence applications across various industries.",
    speaker: {
      name: "Dr. Emily Watson",
      bio: "AI Research Scientist at OpenAI and former professor at MIT. Dr. Watson has published over 50 papers in machine learning and is a leading expert in natural language processing.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      company: "OpenAI",
      position: "AI Research Scientist"
    },
    agenda: [
      "Keynote: The Future of AI",
      "Deep Learning in Production",
      "Natural Language Processing Advances",
      "Computer Vision Applications",
      "Ethics in AI Development",
      "Networking Reception"
    ],
    requirements: [
      "Background in computer science or related field",
      "Basic understanding of machine learning concepts",
      "Laptop for workshop sessions"
    ],
    featured: true
  },
  {
    id: "4",
    title: "UX Design Fundamentals Workshop",
    date: "2024-07-18",
    time: "11:00 AM - 3:00 PM",
    location: "Design Studio, Seattle",
    price: 99,
    category: "Workshop",
    attendees: 28,
    maxAttendees: 35,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop",
    description: "Master the principles of user experience design and create intuitive, user-friendly interfaces.",
    fullDescription: "This hands-on workshop will teach you the fundamental principles of UX design, from user research and wireframing to prototyping and usability testing. Perfect for beginners and those looking to transition into UX design.",
    speaker: {
      name: "Jessica Kim",
      bio: "Lead UX Designer at Airbnb with 6 years of experience in product design. Jessica has designed award-winning interfaces and is passionate about user-centered design.",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&crop=face",
      company: "Airbnb",
      position: "Lead UX Designer"
    },
    agenda: [
      "Introduction to UX Design",
      "User Research Methods",
      "Wireframing and Prototyping",
      "Design Systems and Style Guides",
      "Usability Testing Basics"
    ],
    requirements: [
      "No prior design experience required",
      "Laptop with design software (Figma recommended)",
      "Creative mindset"
    ],
    featured: false
  },
  {
    id: "5",
    title: "Entrepreneurship and Startup Funding",
    date: "2024-07-22",
    time: "1:00 PM - 4:00 PM",
    location: "Innovation Hub, Boston",
    price: 75,
    category: "Seminar",
    attendees: 65,
    maxAttendees: 80,
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=600&fit=crop",
    description: "Learn how to start your own business and secure funding from experienced entrepreneurs and investors.",
    fullDescription: "This seminar brings together successful entrepreneurs and venture capitalists to share their insights on building successful startups. Learn about business planning, fundraising strategies, and common pitfalls to avoid.",
    speaker: {
      name: "David Park",
      bio: "Serial entrepreneur and angel investor with 3 successful exits. David has founded multiple tech companies and currently mentors startups at Y Combinator.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
      company: "Y Combinator",
      position: "Mentor & Angel Investor"
    },
    agenda: [
      "From Idea to Business Plan",
      "Understanding Different Funding Options",
      "Pitching to Investors",
      "Legal Considerations for Startups",
      "Q&A with Successful Entrepreneurs"
    ],
    requirements: [
      "Business idea or interest in entrepreneurship",
      "Notebook for planning exercises",
      "Open mind for networking"
    ],
    featured: false
  },
  {
    id: "6",
    title: "Data Science and Analytics Bootcamp",
    date: "2024-07-30",
    time: "9:00 AM - 5:00 PM",
    location: "Data Center, Chicago",
    price: 199,
    category: "Workshop",
    attendees: 35,
    maxAttendees: 40,
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=600&fit=crop",
    description: "Dive deep into data science with Python, machine learning, and advanced analytics techniques.",
    fullDescription: "This intensive bootcamp covers the complete data science pipeline, from data collection and cleaning to advanced machine learning and visualization. Perfect for professionals looking to transition into data science or enhance their analytical skills.",
    speaker: {
      name: "Dr. Amanda Singh",
      bio: "Chief Data Scientist at Netflix with a PhD in Statistics from Stanford. Amanda has led data science teams at several major tech companies and is an expert in machine learning and predictive analytics.",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&crop=face",
      company: "Netflix",
      position: "Chief Data Scientist"
    },
    agenda: [
      "Python for Data Science",
      "Data Cleaning and Preprocessing",
      "Exploratory Data Analysis",
      "Machine Learning Algorithms",
      "Data Visualization with Matplotlib and Seaborn",
      "Building Predictive Models"
    ],
    requirements: [
      "Basic programming knowledge (Python preferred)",
      "Laptop with Python installed",
      "Background in mathematics or statistics helpful"
    ],
    featured: false
  }
];

export const getFeaturedEvents = () => events.filter(event => event.featured);
export const getEventById = (id: string) => events.find(event => event.id === id);
export const getAllEvents = () => events;
