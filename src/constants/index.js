import project1 from "/assets/projects/project1.png";
import project2 from "/assets/projects/project2.png";
import project3 from "/assets/projects/project3.png";

export const HERO_CONTENT = `Passionate Web Developer with a degree in Computer Science. Skilled in HTML5, CSS3, Tailwind, Python, Java, C++, Javascript, and React.`;

export const ABOUT_TEXT = `As a passionate web developer with a degree in computer science, my journey in technology has been one marked by creativity and critical thinking. Throughout my time in college, I immersed myself in the intricacies of coding and software development, honing my skills in languages such as Java, Python, and C++. This foundation allowed me not only to understand the mechanics behind coding but also to appreciate the art of transforming complex ideas into functional solutions.
During my academic tenure, I embraced the challenge of developing projects from existing source code, a practice that sharpened my analytical abilities and deepened my understanding of problem-solving methodologies. I thrive on tackling intricate challenges and finding innovative ways to overcome obstacles. My enthusiasm for development isn't just about writing code; it's about the satisfaction that comes from creating something that works seamlessly and makes a difference in users' lives.
In a fast-paced digital world, I continually seek opportunities to expand my knowledge and stay updated with the latest technological advancements. This drive for growth, combined with my knack for critical thinking, empowers me to approach every project with a fresh perspective. I genuinely enjoy the process of collaborative problem-solving and believe that the best solutions emerge from diverse ideas and teamwork. As I advance in my career, I remain committed to not only furthering my technical expertise but also contributing positively to the dynamic field of web development.`;

export const PROJECTS = [
  {
    title: "Spotify Clone",
    image: project1,
    description:
      "A functional spotify clone that switches between pages using React Router DOM. Click on song covers or the play button to listen and the pause button to stop. Switch between songs using the prev and next arrows.",
    technologies: ["HTML", "CSS", "Tailwind", "React",],
    url: ""
  },
  {
    title: "Tic Tac Toe",
    image: project2,
    description:
      "Play Tic Tac Toe. Uses Xs and Os like the real one except this one stops when it detects someone has one. Refresh to start over.",
    technologies: ["HTML", "CSS", "React"],
    url: ""
  },
  {
    title: "Weather API",
    image: project3,
    description:
      "Search for temperature and weather condition in any location using the OpenWeather API.",
    technologies: ["HTML", "CSS", "Javascript"],
    url: ""
  },
];

export const CONTACT = {
  address: "📍 Virginia",
  phone: "757-434-4170 ",
  email: "mkriscodes@gmail.com",
};
