// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Michael",
  middleName: "",
  lastName: "Lee",
  messages: " Full-Stack Software Engineer ",
  // edit strings in MainBody for Typed Component.
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/WhirlyFan/",
    },
    // {
    //   image: "fa-facebook",
    //   url: "https://www.facebook.com/hashirshoaeb",
    // },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/mhykoly/",
    },
    {
      image: "fa-angellist",
      url: "https://angel.co/u/mhykoly/",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/mhykoly/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/profile_pic.jpg"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/profile_pic.jpg"),
  imageSize: 375,
  message:
    "Hey! I'm Michael a.k.a. WhirlyFan. I'm currently working on my M.S. in Computer Science at UT Austin, I'm super passionate about Machine Learning and Full Stack Software Development. I enjoy snowboarding, travelling, and I believe artificial intelligence will inevitably rule us all one day. :)",
  resume: require("../editable-stuff/resume.pdf"),
  // resume: "https://docs.google.com/document/d/1ZbI-fNM0RWTgg8c_gzTd_fBAPJpq4z1D_rCtocMP3FE/edit?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Projects",
  gitHubUsername: "whirlyfan", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ["Lister", "TheBnB", "Hangers-Academy"],
};

// Leadership SECTION
const leadership = {
  show: true,
  heading: "Project Details",
  message:
    "The images displayed next to this paragraph are examples of projects that I have created. The first image is of a website inspired by MyAnimeList, which is a popular website for tracking and discussing anime. The second image is of a clone of Discord, a popular messaging app primarily used by gamers. The third image is of a clone of AirBnB, a website that allows people to rent out their homes or apartments to travelers. All of these projects were created by me and serve as examples of my programming abilities.",
  images: [
    {
      img: require("../editable-stuff/assets/lister.jpg"),
      label: "Lister",
      paragraph: "Inspired by MyAnimeList",
    },
    {
      img: require("../editable-stuff/assets/hangers_academy.jpg"),
      label: "Hangers Academy",
      paragraph: "Clone of Discord",
    },
    {
      img: require("../editable-stuff/assets/thebnb.jpg"),
      label: "TheBnB",
      paragraph: "Clone of AirBnB",
    },
    // {
    //   img: require("../editable-stuff/assets/bali.jpg"),
    //   label: "First slide label",
    //   paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    // },
    // {
    //   img: require("../editable-stuff/assets/buddha.jpg"),
    //   label: "Second slide label",
    //   paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    // },
    // {
    //   img: require("../editable-stuff/assets/forest.jpg"),
    //   label: "Second slide label",
    //   paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    // },
    // {
    //   img: require("../editable-stuff/assets/korea.jpg"),
    //   label: "Second slide label",
    //   paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    // },
    // {
    //   img: require("../editable-stuff/assets/umbrella.jpg"),
    //   label: "Second slide label",
    //   paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    // },
  ],
  imageSize: {
    width: "615",
    height: "450",
  },
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "JavaScript", value: 90 },
    { name: "TypeScript" },
    { name: "React", value: 65 },
    { name: "Redux", value: 100 },
    { name: "Flask", value: 65 },
    { name: "Express", value: 55 },
    { name: "Django", value: 80 },
    { name: "Apollo/GraphQL", value: 55 },
    { name: "PostgreSQL", value: 75 },
    { name: "Git", value: 85 },
    { name: "HTML/CSS" },
    { name: "PostgreSQL/SQL", value: 75 },
    { name: "Unix/Linux" },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Communication", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "mhykoly@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: "Software Engineer", // Here Add Company Name
      companylogo: require("../assets/img/dell.png"),
      date: "June 2018 – Present",
    },
    {
      role: "Front-End Developer",
      companylogo: require("../assets/img/boeing.png"),
      date: "May 2017 – May 2018",
    },
  ],
};

// Blog SECTION
// const blog = {
//   show: false,
// };

export {
  navBar,
  mainBody,
  about,
  repos,
  skills,
  leadership,
  getInTouch,
  experiences,
};
