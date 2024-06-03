"use client";
import { FaReact, FaNodeJs, FaDatabase, FaFigma } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiFlutter,
  SiFirebase,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiShopify,
  SiMicrosoftazure,
} from "react-icons/si";

const projects = [
  {
    id: "komezart-dashboard",
    color: `from-[#000000] to-[#2D3436]`,
    title: "KomezArt Dashboard",
    author: "Joachim Mwengi",
    client: "KomezArt",
    category: "Web Development",
    link: "https://komezart-app-frontend.onrender.com/",
    github: "",
    aboutClient:
      "KomezArt is a virtual gallery and e-commerce store based in Kigali, Rwanda, showcasing the finest local artists. Our platform curates and sells original artworks and print reproductions, promoting the vibrant Rwandan art scene both locally and internationally.",
    briefAbout: "Data Management Dashboard App for KomezArt",
    images: {
      background:
        "https://res.cloudinary.com/dltjv8zbh/image/upload/v1716738054/kmz-dashboard_e0u0um.png",
      image1:
        "https://res.cloudinary.com/dltjv8zbh/image/upload/v1716807396/browser-kmz-dash_ceesrn.png",
      image2:
        "https://res.cloudinary.com/dltjv8zbh/image/upload/v1700772741/MockUp_Variant3_wkrk50.png",
      image3:
        "https://res.cloudinary.com/dltjv8zbh/image/upload/v1700772739/MockUp_Variant1_w0dngf.png",
    },
    tech_stack: [
      {
        id: "react",
        name: "ReactJS",
        icon: <FaReact fontSize={40} className="h-9 hover:text-gray-900" />,
      },
      {
        id: "node",
        name: "NodeJS",
        icon: <FaNodeJs fontSize={40} className="h-9 hover:text-gray-900" />,
      },
      {
        id: "mongo",
        name: "MongoDB",
        icon: <FaDatabase fontSize={40} className="h-9 hover:text-gray-900" />,
      },
      {
        id: "figma",
        name: "Figma",
        icon: <FaFigma fontSize={40} className="h-9 hover:text-gray-900" />,
      },
    ],
    key_features:
      "Secure User Authentication\nUser-Friendly Interface\nRobust Data Management Tools\nCentralized Database\nAPI Integration Delivering Personalized Content",
    project_objectives:
      "The project focuses on empowering KomezArt through a centralized hub for efficient artwork and artist data management. Doubling as an artist engagement tool, the dashboard offers a user-friendly experience for both artists and internal staff. Artists upload their work for review prior to being added to the KomezArt ecommerce website, while staff effortlessly handle artist, artwork and orders data.",
    project_overview:
      "This innovative solution was tailored to streamline KomezArt's data management of artwork on the global stage. By eliminating the inefficiencies of traditional Excel sheets; the data dashboard ensures precision and engagement for KomezArt when managing organisational data.",
  },
  {
    id: "quiz-time",
    color: "from-[#000000] to-[#2D3436]",
    title: "QuizTime Mobile App",
    author: "Joachim Mwengi",
    client: "The African Leadership University",
    category: "Mobile App Development",
    demoVideo:
      "https://drive.google.com/file/d/11Eee3b0HDXR29knoFgJCEJKe62pBHY-q/view?usp=sharing",
    figma:
      "https://www.figma.com/proto/tyNnFUEaw8YXi5ngF2kdFI/QuizAppPrototype_v1?page-id=0%3A1&node-id=38-2&viewport=-635%2C-337%2C0.38&t=MuxNyu1ywwuRqmVX-1&scaling=scale-down",
    aboutClient:
      "Developed during a 2021 Mobile Application Development Competition at The African Leadership University in Rwanda.",
    briefAbout: "Pop Quiz Mobile Application",
    images: {
      background:
        "https://res.cloudinary.com/dltjv8zbh/image/upload/v1716740770/quiz-time-2_vrgpu3.png",
      image1:
        "https://res.cloudinary.com/dltjv8zbh/image/upload/v1700772676/TestImg_p0tiuf.png",
      image2:
        "https://res.cloudinary.com/dltjv8zbh/image/upload/v1701029416/quiz-anim-b_zl8w9f.gif",
      image3:
        "https://res.cloudinary.com/dltjv8zbh/image/upload/v1701029331/quiz-anim-a_ceh3o7.gif",
    },
    tech_stack: [
      {
        id: "flutter",
        name: "Flutter",
        icon: <SiFlutter fontSize={40} className="h-9 hover:text-gray-900" />,
      },
      {
        id: "firebase",
        name: "Firebase",
        icon: <SiFirebase fontSize={40} className="h-9 hover:text-gray-900" />,
      },
      {
        id: "figma",
        name: "Figma",
        icon: <FaFigma fontSize={40} className="h-9 hover:text-gray-900" />,
      },
    ],
    key_features:
      "Secure User Authentication\nCentralized Firebase Database\nUser Account Personalization\nQuiz Category Selection",
    project_objectives:
      "QuizTime is a testament to my proficiency in leveraging the Flutter framework and Dart programming language, showcasing technical prowess and a commitment to creating a seamless, visually appealing mobile experience. Beyond a showcase of development skills, QuizTime is a vibrant entertainment and competition hub. Tailored to diverse interests and knowledge levels, the app provides users an engaging platform to challenge themselves, personalize accounts, and track scores. This dual-purpose initiative fosters an environment where learning transforms into a thrilling and educational experience, enhancing users' general knowledge capacity through a rich array of quizzes and thought-provoking content.",
    project_overview:
      "QuizTime Trivia App, built with Flutter and Dart, offers diverse quizzes, personalized accounts, and score tracking, blending entertainment, competition, and knowledge enrichment seamlessly.",
  },
  {
    id: "maadvocates",
    color: "from-[#000000] to-[#2D3436]",
    title: "Mosota Abunga Advocates Website",
    author: "Joachim Mwengi",
    client: "Mosota Abunga & Associates Advocates, LLP",
    category: "Website Development",
    link: "https://www.maassociates.co.ke",
    aboutClient:
      "Mosota Abunga & Associates Advocates, LLP is a distinguished boutique law firm specializing in commercial, property, and dispute resolution law, offering expertise across various legal domains.",
    briefAbout:
      "Information Website for Mosota Abunga & Associates Advocates, LLP",
    images: {
      background:
        "https://res.cloudinary.com/dltjv8zbh/image/upload/v1716741303/maa-mockups_oe5iwc.png",
      image1:
        "https://res.cloudinary.com/dltjv8zbh/image/upload/v1716807398/browser-maa-site_qhujpu.png",
      image2:
        "https://res.cloudinary.com/dltjv8zbh/image/upload/v1701029416/quiz-anim-b_zl8w9f.gif",
      image3:
        "https://res.cloudinary.com/dltjv8zbh/image/upload/v1701029331/quiz-anim-a_ceh3o7.gif",
    },
    tech_stack: [
      {
        id: "reactjs",
        name: "ReactJS",
        icon: <FaReact fontSize={40} className="h-9 hover:text-gray-900" />,
      },
      {
        id: "tailwind",
        name: "Tailwind CSS",
        icon: (
          <RiTailwindCssFill
            fontSize={40}
            className="h-9 hover:text-gray-900"
          />
        ),
      },
      {
        id: "nodejs",
        name: "NodeJS",
        icon: <FaNodeJs fontSize={40} className="h-9 hover:text-gray-900" />,
      },
      {
        id: "figma",
        name: "Figma",
        icon: <FaFigma fontSize={40} className="h-9 hover:text-gray-900" />,
      },
    ],
    key_features:
      "Aesthetically Pleasing & Thematic design\nFunctional Contact Form\nComprehensive Service Descriptions\nProfessional Lawyer Profiles\nCompelling Call-To-Action\nMobile Responsive",
    project_objectives:
      "QuizTime Trivia App, built with Flutter and Dart, offers diverse quizzes, personalized accounts, and score tracking, blending entertainment, competition, and knowledge enrichment seamlessly.",
    project_overview:
      "QuizTime Trivia App, built with Flutter and Dart, offers diverse quizzes, personalized accounts, and score tracking, blending entertainment, competition, and knowledge enrichment seamlessly.",
  },
  {
    id: "medichat-app",
    title: "MediChat Web App",
    author: "Joachim Mwengi",
    client: "AL for Health",
    category: "Machine Learning",
    tech_stack: [
      {
        id: "reactjs",
        name: "ReactJS",
        icon: <FaReact fontSize={40} className="h-9 hover:text-gray-900" />,
      },
      {
        id: "node",
        name: "NodeJS",
        icon: <FaNodeJs fontSize={40} className="h-9 hover:text-gray-900" />,
      },
      {
        id: "azure",
        name: "Azure HealthBot",
        icon: (
          <SiMicrosoftazure fontSize={40} className="h-9 hover:text-gray-900" />
        ),
      }, // Assuming an icon
    ],
    demoVideo: "https://drive.google.com/file/d/1wh5Q9CUhfAoZ1_7GCwnhS1HMUU9HO9XO/view?usp=sharing",
    github: "https://github.com/Joachim-Wambua/MediChatApp",
    aboutClient:
      "AL for Health Network, an initiative of ALA, connects African healthcare leaders to address the continent's greatest health challenges. Through year-round engagements and biannual Gatherings, AL for Health builds a strong community of health practitioners and experts, striving for a healthy and prosperous Africa.",
    briefAbout: "Chatbot Application for AL for Health Hackathon 2022",
    images: {
      background:
        "https://res.cloudinary.com/dltjv8zbh/image/upload/v1716741952/medichat-mockup_s43oap.png",
      image1:
        "https://res.cloudinary.com/dltjv8zbh/image/upload/v1716807395/browser-medichat-site_hze2zk.png",
      image2:
        "https://res.cloudinary.com/dltjv8zbh/image/upload/v1701198822/MobileUI-MultipleDevices_l6irb2.png",
      image3:
        "https://res.cloudinary.com/dltjv8zbh/image/upload/v1701198823/WebUI-MultipleDevices_fvbrkc.png",
    },
    key_features:
      "Interactive Chat System\nIllness Symptom Checking & Triage\nKidney Disease Quality of Life Assessment\nPediatric Asthma Symptom Scale Evaluator\nCovid19 Symptoms Assessment\nMental Health Assessment\nDiabetes Risk Evaluation",
    project_objectives:
      "The primary objective of the MediChat project is to employ machine learning concepts, including natural language processing, to develop a medical assistance chatbot. This chatbot, operating through a web-chat interface, mimics human conversation, providing users with accurate medical information in real-time. The specific objectives encompass the identification of reliable data sources for relevant medical information, the creation of medical-related intents for training the chatbot model, and achieving a minimum accuracy score for each trained medical intent during testing. The project also aims to deploy the medical chatbot assistant to a web application for seamless user interaction. Through these objectives, MediChat aspires to bridge the gap between medical providers and patients, making quality healthcare accessible and convenient, thereby transforming the healthcare landscape in Kenya.",
    project_overview:
      "MediChat, born from the AL for Health Health Tech hackathon, revolutionizes patient engagement in Kenya's healthcare with a medical chatbot service, addressing cost, wait times, and resource constraints, leveraging smartphones to extend care and showcasing machine learning's impact.",
  },
  {
    id: "komezart-website",
    title: "KomezArt Website",
    author: "Joachim Mwengi",
    client: "KomezArt",
    category: "Web Development",
    tech_stack: [
      {
        id: "html",
        name: "HTML",
        icon: <SiHtml5 fontSize={40} className="h-9 hover:text-gray-900" />,
      },
      {
        id: "css",
        name: "CSS",
        icon: <SiCss3 fontSize={40} className="h-9 hover:text-gray-900" />,
      },
      {
        id: "js",
        name: "JavaScript",
        icon: (
          <SiJavascript fontSize={40} className="h-9 hover:text-gray-900" />
        ),
      },
      {
        id: "shopify",
        name: "Shopify Liquid",
        icon: <SiShopify fontSize={40} className="h-9 hover:text-gray-900" />,
      },
    ],
    project_overview:
      "The KomezArt website showcases Rwanda's top artists, facilitating discovery and purchase of original artworks and print reproductions, fortifying Rwanda's artistic ecosystem, and amplifying Rwandan art globally.",
    project_objectives:
      "This project aims to enhance the KomezArt website's user experience, brand representation, and global outreach. The mission was to create an aesthetically pleasing and responsive website that aligns seamlessly with the KomezArt brand. Key objectives include optimizing the website's visual appeal, ensuring a user-friendly interface, and harnessing the potential of Shopify's Liquid code for a robust and reliable online art gallery. The overarching aim is to contribute significantly to Rwanda's artistic narrative by providing a virtual space that showcases local artists' talents and encourages global art enthusiasts to engage, discover, and invest in the diverse and vibrant world of Rwandan art.",
    key_features:
      "Aesthetically Pleasing Design\nMobile Responsive Layout\nIntuitive Navigation & Search Functionalities\n Dedicated Artist Profiles\nSecure Payment Options\nCustomer Support Integration",
    link: "https://www.komezart.com/",
    aboutClient:
      "KomezArt is a virtual gallery and e-commerce store based in Kigali, Rwanda, showcasing the finest local artists. Our platform curates and sells original artworks and print reproductions, promoting the vibrant Rwandan art scene both locally and internationally.",
    briefAbout: "E-commerce website for KomezArt",
    images: {
      background:
        "https://res.cloudinary.com/dltjv8zbh/image/upload/v1716750214/kmz-website_l2dol6.png",
      image1:
        "https://res.cloudinary.com/dltjv8zbh/image/upload/v1716807398/browser-kmz-site_sofpej.png",
      image2:
        "https://res.cloudinary.com/dltjv8zbh/image/upload/v1702060758/kmz-mockup-2_1_du3oar.png",
      image3:
        "https://res.cloudinary.com/dltjv8zbh/image/upload/v1702060728/kmz-mockup-3_kgqynw.png",
    },
  },
];

export { projects };
