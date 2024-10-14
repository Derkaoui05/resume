import { Home, Info, Briefcase, Mail, Code, Layout, Server, Smartphone, Database, TestTube, Cloud } from "lucide-react"; // Import icons from lucide-react

interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    image: string;
    link: string;
}
interface NavLink{
    id: number;
    name: string;
    path: string;
    icon: React.ReactNode;
}

interface Education {
    degree: string;
    school: string;
    year: string;
}

interface Experience {
    company: string;
    role: string;
    description: string;
    duration: string;
}

interface Skills {
    icon: JSX.Element,
    title: string,
    description: string,
}

interface PersonalInfo {
    name: string;
    role: string;
    bio: string;
    location: string;
}

interface ContactLink {
    platform: string;
    url: string;
    icon: string;
}
interface Services{
    text : string,
}

export const data = {
    personalInfo: {
        name: "Derkaoui Yassir",
        role: "Junior Developer",
        bio: "I'm a passionate web developer with expertise in React, Next.js, and TypeScript. With a keen eye for design and a love for clean code, I create engaging and performant web applications that deliver exceptional user experiences.",
        location: "Morocco",
    } as PersonalInfo,

    Services: [
        {
            text : "Web Development",
        },
        {
            text : "UI/UX Design",
        },
        {
            text : "Mobile App Development",
        },
        {
            text : "API Integration",
        },
        {
            text : "E-commerce Solutions",
        },
        {
            text : "Performance Optimization",
        },
        {
            text : "SEO",
        },
        {
            text : "Cloud Services",
        },
    ] as Services[],


    NavLink: [
        {
            id: 1,
            name: 'Home',
            path: '/',
            icon: <Home />, 
        },
        {
            id: 2,
            name: 'About',
            path: '/about',
            icon: <Info />,
        },
        {
            id: 3,
            name: 'Work',
            path: '/work',
            icon: <Briefcase />,
        },
        {
            id: 4,
            name: 'Contact',
            path: '/contact',
            icon: <Mail />,
        },
    ] as NavLink[],
    
    skills: [
        {
            icon: <Code className="w-6 h-6 mb-2" />,
            title: "Programming Languages",
            description: "I'm well-versed in a variety of programming languages, including /JavaScript, TypeScript, Python, and I'm currently exploring Rust.",
        },
        {
            icon: <Layout className="w-6 h-6 mb-2" />,
            title: "Frontend",
            description: "My expertise in frontend development spans across a range of frameworks and technologies, such as React, Vue, Vuex, JavaScript, TypeScript, Next.js, Nuxt.js, and Gatsby.js. I'm committed to creating seamless user experiences.",
        },
        {
            icon: <Server className="w-6 h-6 mb-2" />,
            title: "Backend",
            description: "I have a strong foundation in backend development, with proficiency in Node.js, Express.js, Koa.js, Laravel, Core PHP, and hands-on experience with Django.",
        },
        {
            icon: <Smartphone className="w-6 h-6 mb-2" />,
            title: "Mobile",
            description: "My skills extend to mobile development, particularly in React Native and Android app development using Kotlin.",
        },
        {
            icon: <Database className="w-6 h-6 mb-2" />,
            title: "Databases",
            description: "I'm well-versed in working with databases like Mariadb, MySQL, MongoDB, PostgreSQL, Redis, and Sqlite, enabling me to build robust and efficient data-driven applications.",
        },
        {
            icon: <TestTube className="w-6 h-6 mb-2" />,
            title: "Testing Tools",
            description: "I use a range of testing tools, including Jest for testing React applications, Vue Test Utils for testing Vue.js applications, Mocha for Node.js backend testing, and Chai for Node.js backend testing, to ensure the reliability of the software I develop.",
        },
        {
            icon: <Cloud className="w-6 h-6 mb-2" />,
            title: "DevOps and Microservices",
            description: "I have experience with DevOps practices, including Docker and Docker Compose, and I specialize in building microservices with Node.js. I also have familiarity with message queuing systems like RabbitMQ.",
        },
    ] as Skills[],

    projects: [
        {
            id: 1,
            title: "E-commerce Store",
            description: "Built a full-fledged store with WordPress and custom styling.",
            technologies: ["WordPress", "CSS", "JavaScript"],
            image: "/images/project1.png",
            link: "https://example.com/project1",
        },
        {
            id: 2,
            title: "Shelter Project Platform",
            description: "Developed a platform inspired by the Shelter Projects series.",
            technologies: ["React", "Tailwind CSS"],
            image: "/images/project2.png",
            link: "https://shelterprojects-dp.mayaapps.site",
        },
    ] as Project[],

    resume: {
        education: [
            {
                degree: "bachelor's degree in physics",
                school: "Ocean Atlantic",
                year: "2022",
            },
            {
                degree: "Specialized Technician in Software Development",
                school: "IFIAG",
                year: "2024",
            },
        ] as Education[],
        experiences: [
            {
                company: "2mag Agency",
                role: "Web Development Intern",
                description: "Worked on an e-commerce website using WordPress.",
                duration: "1 month",
            },
        ] as Experience[],
        skills: ["React", "Next.js", "Tailwind CSS", "TypeScript", "WordPress"],
    },

    contactLinks: [
        {
            platform: "LinkedIn",
            url: "https://www.linkedin.com/in/derkaoui-yassir/",
            icon: "linkedin",
        },
        {
            platform: "GitHub",
            url: "https://github.com/derkaoui05",
            icon: "github",
        },
        {
            platform: "Email",
            url: "mailto:derkaouidev@gmail.com",
            icon: "mail",
        },
    ] as ContactLink[],
};
