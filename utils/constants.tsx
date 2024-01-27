import {
  faDev,
  faGithub,
  faLinkedin,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  AcademicCapIcon,
  BriefcaseIcon,
  ClipboardDocumentListIcon,
  FolderOpenIcon,
  HomeIcon,
  Square3Stack3DIcon,
  StarIcon,
} from "@heroicons/react/24/outline";

export const NAVBAR_ROUTES = [
  {
    title: "Home",
    path: "/",
    icon: <HomeIcon width={20} height={20} className="w-5 h-5" />,
  },
  {
    title: "Work experience",
    path: "/experience",
    icon: <BriefcaseIcon width={20} height={20} className="w-5 h-5" />,
  },
  {
    title: "Education & certifications",
    path: "/education",
    icon: <AcademicCapIcon width={20} height={20} className="w-5 h-5" />,
  },
  {
    title: "Projects",
    path: "/",
    icon: <FolderOpenIcon width={20} height={20} className="w-5 h-5" />,
  },
  {
    title: "Awards & mentorships",
    path: "/",
    icon: <StarIcon width={20} height={20} className="w-5 h-5" />,
  },
  {
    title: "Stack",
    path: "/",
    icon: <Square3Stack3DIcon width={20} height={20} className="w-5 h-5" />,
  },
  {
    title: "Posts",
    path: "/",
    icon: (
      <ClipboardDocumentListIcon width={20} height={20} className="w-5 h-5" />
    ),
  },
];

export const NAVBAR_SOCIALS = [
  {
    title: "GitHub",
    path: "https://github.com/flaancs",
    icon: <FontAwesomeIcon className="w-5 h-5" icon={faGithub} />,
  },
  {
    title: "LinkedIn",
    path: "https://www.linkedin.com/in/gstvoantonio/",
    icon: <FontAwesomeIcon className="w-5 h-5" icon={faLinkedin} />,
  },
  {
    title: "Medium",
    path: "https://medium.com/@gustavo1998antonio",
    icon: <FontAwesomeIcon className="w-5 h-5" icon={faMedium} />,
  },
  {
    title: "Dev.to",
    path: "https://dev.to/flaancs",
    icon: <FontAwesomeIcon className="w-5 h-5" icon={faDev} />,
  },
];

export const TECHNICAL_SKILLS = [
  {
    name: "Programming Languages",
    description:
      "Proficiency in key programming languages such as Typescript, JavaScript, Python, C#.",
  },
  {
    name: "Frontend Development",
    description:
      "Expertise in HTML, CSS, JavaScript, and frameworks like React, Angular, Vue.js.",
  },
  {
    name: "Backend Development",
    description:
      "Skills in server-side languages like Node.js, Python, C# and frameworks such as Express, Django, ASP.NET Core.",
  },
  {
    name: "Database Management",
    description:
      "Knowledge of SQL and NoSQL databases, such as MySQL, PostgreSQL, MongoDB, SQL Server.",
  },
  {
    name: "DevOps Practices",
    description:
      "Familiarity with CI/CD, containerization tools like Docker, and orchestration technologies like Kubernetes.",
  },
  {
    name: "Cloud Computing",
    description: "Experience with cloud services like AWS Platform.",
  },
  {
    name: "Version Control",
    description:
      "Proficiency in using Git and GitHub for source code management.",
  },
  {
    name: "Agile Methodologies",
    description:
      "Understanding of Agile and Scrum methodologies in software development.",
  },
  {
    name: "Testing and Debugging",
    description:
      "Experience in test-driven development (TDD), unit testing, integration testing, debugging techniques.",
  },
  {
    name: "Security Best Practices",
    description:
      "Knowledge of cybersecurity fundamentals and secure coding practices.",
  },
];

export const SOFT_SKILLS = [
  {
    name: "Problem-Solving",
    description:
      "Strong ability to analyze complex problems and develop effective solutions.",
  },
  {
    name: "Continuous Learning",
    description:
      "Commitment to staying updated with the latest industry trends and technologies.",
  },
  {
    name: "Adaptability",
    description:
      "Flexibility in adjusting to new challenges, technologies, and team dynamics.",
  },
  {
    name: "Communication",
    description:
      "Excellent verbal and written communication skills for clear and effective collaboration.",
  },
  {
    name: "Teamwork",
    description:
      "Ability to work effectively in a team, contributing positively to team operations and working relationships.",
  },
  {
    name: "Critical Thinking",
    description:
      "Skilled in assessing situations and making well-informed, logical decisions.",
  },
  {
    name: "Time Management",
    description:
      "Proficiency in managing time effectively, prioritizing tasks, and meeting deadlines.",
  },
  {
    name: "Leadership",
    description:
      "Capability to lead projects or teams, providing guidance and motivation to peers.",
  },
  {
    name: "Creativity",
    description:
      "Innovative thinking in approaching technical challenges and developing solutions.",
  },
  {
    name: "Emotional Intelligence",
    description:
      "Awareness and management of one's own emotions and the ability to empathize with others in the workplace.",
  },
];

export const WORK_EXPERIENCE = [
  {
    company: "Asesorías Informáticas JG LTDA",
    role: "Software Engineer",
    dates: "Dec 2022 - Present",
    duties: [
      "Developed custom software solutions tailored to client necessities",
      "Led a small team, efficiently managing projects and ensuring timely delivery of client-specific software.",
      "Hired and mentored new developers, providing them opportunities to enter the software development industry and teaching them technical skills and business operations.",
      "Utilized a variety of programming languages and technologies to create software that not only met but exceeded client expectations, fostering client satisfaction and repeat business.",
      "Played a crucial role in all phases of the software development process, from initial client consultation to final delivery and support, ensuring high-quality outcomes.",
    ],
    skills: [
      "TypeScript",
      "MySQL",
      "Next",
      "React",
      "Node",
      "C#",
      "PHP",
      "Django",
      "PostgreSQL",
      "React Native",
    ],
  },
  {
    company: "Buydepa",
    role: "Frontend Tech Lead",
    dates: "May 2023 - Nov 2023",
    duties: [
      "Spearheaded the development process at Buydepa using Next.js and TypeScript, ensuring the implementation of strongly-typed code for high-quality, efficient web applications.",
      "Utilized expertise in GraphQL for optimizing data handling and interface management, significantly enhancing application performance.",
      "Advocated for best practices in coding, fostering a culture of excellence and reliability in the team.",
      "Played a pivotal role in project development, including technical architecture and hands-on coding, thereby elevating the quality and efficiency of frontend systems.",
      "Led the team in creating performance-oriented web solutions with a focus on robust and maintainable applications.",
    ],
    skills: ["TypeScript", "GraphQL", "Next", "React", "Node"],
  },
  {
    company: "Uber",
    role: "Software Engineer II",
    dates: "Aug 2022 - May 2023",
    duties: [
      "Played an integral role in the security team at Uber, focusing on the Security Console project, responsible for managing employee permissions, groups, and security policies.",
      "Involved in maintaining and enhancing internal dashboards and plugins, facilitating web authentication and authorization processes.",
      "Utilized a technology stack comprising JavaScript, Flow, TypeScript, RPC, and Express to contribute to the project's success.",
      "Ensured robust and secure system architecture, significantly contributing to the security and efficiency of the Security Console project.",
    ],
    skills: [
      "TypeScript",
      "GraphQL",
      "Javascript",
      "React",
      "GRPC",
      "Express",
      "FlowJS",
    ],
  },
  {
    company: "Cornershop by Uber",
    role: "Security Javascript Engineer",
    dates: "Aug 2021 - Jan 2023",
    duties: [
      "Served as a Security JavaScript Engineer at Cornershop, creating and maintaining sophisticated internal platforms for security purposes.",
      "Handled permissions, authentication, authorization, and VPN configurations as part of key security responsibilities.",
      "Ensured a high standard of frontend security, including managing web vulnerabilities and overseeing package version control.",
      "Contributed expertise to reinforce the security infrastructure, safeguarding the integrity of systems and data at Cornershop.",
    ],
    skills: ["TypeScript", "Node", "Javascript", "React", "Frontend Security"],
  },
  {
    company: "Cornershop by Uber",
    role: "Backend Engineer",
    dates: "Jan 2021 - Aug 2021",
    duties: [
      "Honed skills in the Python Django stack as a Backend Engineer within the security team at Cornershop.",
      "Focused on developing and enhancing platforms for managing internal permissions, groups, and access to third-party platforms.",
      "Gained valuable experience in backend development, particularly in the context of security.",
      "Played a crucial part in maintaining and improving the company's internal security infrastructure.",
    ],
    skills: ["Python", "Django", "PostgreSQL", "Backend Security"],
  },
  {
    company: "Dorange SpA",
    role: "Software Engineer",
    dates: "Sep 2018 - Jan 2021",
    duties: [
      "Specialized in using a VueJS/React/Javascript stack for frontend development and a C# ASP.Net Core stack for backend solutions as a Software Developer at Dorange.",
      "Extended responsibilities to include leading a small team of three, guiding them through various project phases.",
      "Focused primarily on creating bespoke software for clients in the health sector, tailoring approaches to meet unique project needs.",
      "Played a pivotal role with leadership and technical expertise in successfully delivering client-specific solutions at Dorange.",
    ],
    skills: [
      "Python",
      "Django",
      "PostgreSQL",
      "C#",
      "ASP.NET Core",
      "VueJS",
      "PHP",
      "SQL Server",
    ],
  },
  {
    company: "Baqo",
    role: "Mobile Game Developer",
    dates: "Sep 2018 - Jan 2021",
    duties: [
      "Worked as a Mobile Game Developer during my internship at Baqo, as part of my programmer degree program.",
      "Maintained a complex backend built with PHP and managed MySQL databases.",
      "Created engaging mobile games using C# with Unity as the game engine.",
      "Contributed to a notable project, a game celebrating the 500th anniversary of the discovery of the Strait of Magellan.",
      "Gained valuable insights into game development and backend management, applying and enhancing technical skills.",
    ],
    skills: ["C#", "Unity", "PHP", "React Native", "MySQL"],
  },
  {
    company: "UNO10",
    role: "Web Developer",
    dates: "Jun 2017 - Feb 2018",
    duties: [
      "Specialized in creating innovative and fresh websites tailored to diverse client needs as a Web Developer at UNO10.",
      "Leveraged contemporary web technologies to develop engaging, user-friendly, and visually appealing online presences.",
      "Worked across multiple sectors, catering to the specific online needs of businesses in various industries.",
      "Exercised creativity and technical expertise to ensure each project was uniquely crafted, aligning with clients' specific goals and brand identities.",
    ],
    skills: ["Web Development", "PHP", "MySQL", "Wordpress"],
  },
];

export const EDUCATION_EXPERIENCE = [
  {
    organization: "Universidad Tecnológica de Chile INACAP",
    career: "Computer Engineering",
    dates: "2019 - 2020",
    status: "Incomplete",
  },
  {
    organization: "Centro de formación técnica INACAP",
    career: "Programmer Analyst",
    dates: "2017 - 2019",
    status: "Complete",
  },
];

export const CERTIFICATIONS = [
  {
    organization: "Preply",
    title: "80 Hours of English lessons",
    date: "Feb 2023",
    credential: "https://preply.com/en/achievement-certificate/514140",
  },
  {
    organization: "EF Standard English Test (EF SET)",
    title: "EFSET English Certificate - C1 Advanced",
    date: "Feb 2023",
    credential: "https://www.efset.org/cert/KXg6r9",
  },
  {
    organization: "Meta",
    title: "Version Control",
    date: "Dec 2022",
    credential:
      "https://www.coursera.org/account/accomplishments/verify/S6RBRHUVUNWG",
  },
  {
    organization: "Meta",
    title: "Introduction to Front-End Development",
    date: "Sep 2022",
    credential:
      "https://www.coursera.org/account/accomplishments/certificate/6S5GPCEZXCDL",
  },
  {
    organization: "Meta",
    title: "Programming with Javascript",
    date: "Sep 2022",
    credential:
      "https://www.coursera.org/account/accomplishments/certificate/9SRQNXV9YLFX",
  },
  {
    organization: "Udemy",
    title: "React-native without frontiers",
    date: "Jul 2022",
    credential: "http://ude.my/UC-60dbf05d-ca43-4bde-aa1c-5996b368cfb8",
  },
  {
    organization: "Platzi",
    title: "OWASP Web Security",
    date: "Mar 2022",
    credential:
      "https://platzi.com/p/gustavo1998antonio/curso/2429-nextjs-owasp/diploma/detalle/",
  },
  {
    organization: "Udemy",
    title:
      "Develop web systems with ASP Net Core, SQL Server and VueJS",
    date: "Jun 2019",
    credential: "http://ude.my/UC-FUZBCMNO",
  },
];
