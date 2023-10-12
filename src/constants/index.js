import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    nextjs,
    pointerz,
    summarization,
    school,
    guessthenumber,
    threejs,
    portfolio,
    socialmedialink,
    dicegame,
    drumkit,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },

    {
        id: "work",
        title: "Work",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Fronted Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Content Creator",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "Next JS",
        icon: nextjs,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "Full-Stack Developer",
        company_name: "Pointerz Inc.",
        icon: pointerz,
        iconBg: "#383E56",
        date: "July 2022 - October 2022",
        points: [
            "Developing Profile, Survey, Feedback module and Dashboard of Human Resource Management System.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Primarily Used JavaScript, React.js, data visualization, Node.js, and Epress.js.",
        ],
    },

];

const projects = [
    {
        name: "Portfolio",
        description:
            "This portfolio website is a cutting-edge showcase of an individual's skills and accomplishments. The result is a visually captivating and user-friendly platform that not only highlights the work but also provides an interactive and memorable experience for visitors.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "tailwindcss",
                color: "pink-text-gradient",
            },
            {
                name: "threejs",
                color: "pink-text-gradient",
            },
        ],
        image: portfolio,
        source_code_link: "https://github.com/sanitwasnik/portfolio",
        live_link: "https://github.com/sanitwasnik/portfolio"

    },
    {
        name: "Summarization",
        description:
            "The website is a platform that offers a unique service for users: summarizing articles and websites.The application will quickly process the content and present a summarized version, saving users time and effort in reading lengthy texts.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "rapidAPI",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: summarization,
        source_code_link: "https://github.com/sanitwasnik/summarify",
        live_link: "https://graceful-pudding-5bc853.netlify.app/"
    },
    {
        name: "School Website",
        description:
            "School website is gateway to an informative and interactive educational experience. Dive into a world of knowledge where you can find essential information about the institution, access resources, check out upcoming events, and engage with dynamic content",
        tags: [
            {
                name: "html",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "green-text-gradient",
            },
            {
                name: "javascript",
                color: "pink-text-gradient",
            },
        ],
        image: school,
        source_code_link: "https://github.com/sanitwasnik/christanandschool",
        live_link: "https://sanitwasnik.github.io/christanandschool/"
    },
    {
        name: "Guess The Number",
        description:
            "Experience the thrill of number guessing with our interactive web game. The user-friendly interface and engaging design make it a fun and educational pastime for all ages. ",
        tags: [
            {
                name: "javascript",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: guessthenumber,
        source_code_link: "https://github.com/sanitwasnik/GuessTheNumber",
        live_link: "https://sanitwasnik.github.io/GuessTheNumber/"
    },
    {
        name: "Social Media Links",
        description:
            "It's a one-stop hub for effortlessly sharing and connecting with your favorite social media platforms. Discover sleek and intuitive design that simplifies the sharing process, while ensuring your online presence remains just a click away.",
        tags: [

            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: socialmedialink,
        source_code_link: "https://github.com/sanitwasnik/GuessTheNumber",
        live_link: "https://sanitwasnik.github.io/SocialMediaLink/"
    },
    {
        name: "Dice Game",
        description:
            "This engaging and interactive game offers excitement and suspense with each roll. Whether you're a seasoned gamer or just looking for some fun,Dice Game is a great way to test your luck and enjoy a virtual gaming experience",
        tags: [
            {
                name: "javascript",
                color: "blue-text-gradient",
            },
            {
                name: "html",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: dicegame,
        source_code_link: "https://github.com/sanitwasnik/DiceGaame.github.io",
        live_link: "https://sanitwasnik.github.io/DiceGaame.github.io/"
    },
    {
        name: "DrumKit",
        description:
            "Our Drum Kit is a virtual drumming experience that puts the rhythm at your fingertips. Each key on your keyboard corresponds to a different drum sound, allowing you to create your own unique beats and melodies.",
        tags: [
            {
                name: "html",
                color: "blue-text-gradient",
            },
            {
                name: "javascript",
                color: "pink-text-gradient",
            },
            {
                name: "css",
                color: "green-text-gradient",
            },
        ],
        image: drumkit,
        source_code_link: "https://github.com/sanitwasnik/DrumKit.github.io",
        live_link: "https://sanitwasnik.github.io/DrumKit.github.io/"
    },

];


export { services, technologies, experiences, projects };