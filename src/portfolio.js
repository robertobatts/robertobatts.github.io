/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: false // Set to false to use static SVG
};

const greeting = {
  username: "Roberto Battaglia",
  title: "Hi, I'm Roberto",
  
  subTitles: [
    { text: "I'm a Backend Developer", backspace: -1 },
    { text: "I work with ", backspace: 0 },
    { text: "Java", backspace: -1 },
    { text: "Spring", backspace: -1 },
    { text: "Microservices", backspace: -1 },
    { text: "AWS", backspace: -1 },
    { text: "SQL", backspace: 20 },
    { text: "I love cutting edge technology", backspace: -1 }
  ],
  resumeLink: process.env.PUBLIC_URL + "/resume.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/robertobatts",
  linkedin: "https://www.linkedin.com/in/robertobatts",
  gmail: "battaroberto@gmail.com",
  stackoverflow: "https://stackoverflow.com/users/10342150/robertobatts",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Skills",
  subTitle: "",
  skills: [
    /*emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )*/
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Java",
      fontClassname: "fab fa-java",
      level: "Proficient",
      workExperiences: ["Playtika", "Cogitare", "GFT", "Personal Projects"]
    },
    {
      skillName: "Spring",
      fontClassname: "icon-spring",
      level: "Proficient",
      workExperiences: ["Playtika", "Cogitare", "GFT", "Personal Projects"]
    },
    {
      skillName: "MongoDB",
      fontClassname: "icon-mongodb",
      level: "Proficient",
      workExperiences: ["Cogitare", "Personal Projects"]
    },
    {
      skillName: "Redis",
      fontClassname: "icon-redis",
      level: "Proficient",
      workExperiences: ["Playtika", "Personal Projects"]
    },
    {
      skillName: "Kafka",
      fontClassname: "fas fa-stream",
      level: "Medium",
      workExperiences: ["Playtika", "Cogitare"]
    },
    {
      skillName: "Maven",
      fontClassname: "icon-apache",
      level: "Proficient",
      workExperiences: ["Playtika", "Cogitare", "GFT", "Personal Projects"]
    },
    {
      skillName: "MySQL",
      fontClassname: "icon-mysql",
      level: "Medium",
      workExperiences: ["GFT", "Personal Projects"]
    },
    {
      skillName: "Microservices",
      fontClassname: "fas fa-cloud",
      level: "Proficient",
      workExperiences: ["Playtika", "Personal Projects"]
    },
    {
      skillName: "Go",
      fontClassname: "icon-go",
      level: "Beginner",
      workExperiences: ["Personal Projects"]
    },
    {
      skillName: "JavaScript",
      fontClassname: "fab fa-js",
      level: "Medium",
      workExperiences: ["GFT", "Personal Projects"]
    },
    {
      skillName: "React",
      fontClassname: "fab fa-react",
      level: "Medium",
      workExperiences: ["Personal Projects"]
    },
    {
      skillName: "AWS",
      fontClassname: "fab fa-aws",
      level: "Medium",
      workExperiences: ["Cogitare", "Personal Projects"]
    },
    {
      skillName: "Docker",
      fontClassname: "fab fa-docker",
      level: "Medium",
      workExperiences: ["Playtika", "Personal Projects"]
    },
    {
      skillName: "Jenkins",
      fontClassname: "fab fa-jenkins",
      level: "Medium",
      workExperiences: ["Playtika", "Cogitare"]
    },
    {
      skillName: "Artifactory",
      fontClassname: "far fa-circle",
      level: "Medium",
      workExperiences: ["Playtika", "Cogitare"]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Lorem ipsum University",
      //logo: require("image.jpg"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Lorem ipsum",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 Proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "60%" //Insert relative proficiency in percentage
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Monese",
      location: "London, UK",
      companylogo: require("./assets/images/moneseLogo.png"),
      date: "Aug 2022 – Now",
      desc: "I worked with a microservice architecture, implementing feature such as Custom Categories and Transaction Enrichment"
    },
    {
      role: "Backend Developer",
      company: "Playtika",
      location: "London, UK",
      companylogo: require("./assets/images/playtikaLogo.png"),
      date: "Oct 2021 – Jun 2022",
      desc: "I designed and developed microservices for a casual mobile game, and I developed internal tools for assets delivery"
    },
    {
      role: "Backend Developer",
      company: "Cogitare",
      location: "London, UK",
      companylogo: require("./assets/images/cogitareLogo.jpeg"),
      date: "Nov 2019 – Oct 2021",
      desc: "I developed APIs for software which provides graph and reports for railway companies. I also processed data from different sources such as GPS, signalling and train black boxes"
    },
    {
      role: "Junior Backend Developer",
      company: "GFT Technologies",
      location: "Milan, Italy",
      companylogo: require("./assets/images/gftLogo.png"),
      date: "Oct 2018 – Oct 2019",
      desc: "I implemented services for the CRM of an insurance company" 
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      //image: require("image.jpg"),
      projectName: "Lorem ipsum",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://loremimpsum.com/"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: "Certifications",
  subtitle: "",
  achievementsCards: [
    {
      title: "AWS Solutions Architect Associate",
      url: "https://www.credly.com/badges/2e56f213-fe25-46df-8353-e06b6f4896bc/public_url",
      subtitle:
        "Studying for this certification allowed me to improve my knowledge and skills necessary to design and manage cloud applications",
      image: require("./assets/images/awsSaaC03.png"),
      footerLink: [
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "",
      title: "",
      description:
        ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for everyone",
  number: "+44 7448651092",
  email_address: "battaroberto@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
