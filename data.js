"use client";

const projects = [
  {
    id: "komezart-dashboard",
    color: `from-[#000000] to-[#2D3436]`,
    title: "KomezArt Dashboard",
    author: "Joachim Mwengi",
    client: "KomezArt",
    category: "Web Development",
    link: "https://komezart-app-frontend.onrender.com/",
    images: {
      background:
        "https://res.cloudinary.com/dltjv8zbh/image/upload/v1701029459/kmz-portal-anim_itbohb.gif",
      image1:
        "https://res.cloudinary.com/dltjv8zbh/image/upload/v1700772729/kmz-portal-cover-1_lrrrkl.png",
      image2:
        "https://res.cloudinary.com/dltjv8zbh/image/upload/v1700772741/MockUp_Variant3_wkrk50.png",
      image3:
        "https://res.cloudinary.com/dltjv8zbh/image/upload/v1700772739/MockUp_Variant1_w0dngf.png",
    },
    tech_stack: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB", "Figma"],
    key_features:
      "Secure User Authentication - Ensures a safe and controlled user experience for both artists and staff.\nArtist-Friendly Interface - Empowers artists with an intuitive platform for showcasing and managing their masterpieces.\nRobust Staff Tools - Equips internal staff with powerful tools for seamless management of artist profiles, pricing, and orders.\nEfficient Tracking with Central Database - Centralizes all data, ensuring efficient tracking of artwork, artists, and transactions.\nAPI Integration for Curated Content - Integrates APIs to deliver curated content, including art-related blogs and exclusive offers, directly to users.",
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
    link: "https://github.com/alu-rwa-prog-1/week-2-class-activity-1-edkizu.git",
    images: {
      background:
        "https://res.cloudinary.com/dltjv8zbh/image/upload/v1700772662/mobile-ui-design2_n4jq1b.png",
      image1:
        "https://res.cloudinary.com/dltjv8zbh/image/upload/v1700772676/TestImg_p0tiuf.png",
      image2:
        "https://res.cloudinary.com/dltjv8zbh/image/upload/v1701029416/quiz-anim-b_zl8w9f.gif",
      image3:
        "https://res.cloudinary.com/dltjv8zbh/image/upload/v1701029331/quiz-anim-a_ceh3o7.gif",
    },
    tech_stack: ["Flutter", "Firebase", "Figma"],
    key_features:
      "Secure User Authentication - Enables users to Sign Up or Sign In securely using their email or Sign Up or Sign In Google credentials. The app also implements the Firebase Storage Database for efficient user data management.\nAccount Personalization - Allow users to build and personalize their accounts, providing details such as emails, images, and personal information.\nCategory Selection - Users can choose their preferred quiz category, personalizing the quiz experience.\nQuiz Engagement - Engage users in a challenging quiz format, testing their knowledge on various topics. The app also tallies and stores user scores for future reference.",
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
    images: {
      background:
        "https://res.cloudinary.com/dltjv8zbh/image/upload/v1700772662/mobile-ui-design2_n4jq1b.png",
      image1:
        "https://res.cloudinary.com/dltjv8zbh/image/upload/v1700772676/TestImg_p0tiuf.png",
      image2:
        "https://res.cloudinary.com/dltjv8zbh/image/upload/v1701029416/quiz-anim-b_zl8w9f.gif",
      image3:
        "https://res.cloudinary.com/dltjv8zbh/image/upload/v1701029331/quiz-anim-a_ceh3o7.gif",
    },
    tech_stack: ["Flutter", "Firebase", "Figma"],
    key_features:
      "Secure User Authentication - Enables users to Sign Up or Sign In securely using their email or Sign Up or Sign In Google credentials. The app also implements the Firebase Storage Database for efficient user data management.\nAccount Personalization - Allow users to build and personalize their accounts, providing details such as emails, images, and personal information.\nCategory Selection - Users can choose their preferred quiz category, personalizing the quiz experience.\nQuiz Engagement - Engage users in a challenging quiz format, testing their knowledge on various topics. The app also tallies and stores user scores for future reference.",
    project_objectives:
      "QuizTime Trivia App, built with Flutter and Dart, offers diverse quizzes, personalized accounts, and score tracking, blending entertainment, competition, and knowledge enrichment seamlessly.",
    project_overview:
      "QuizTime Trivia App, built with Flutter and Dart, offers diverse quizzes, personalized accounts, and score tracking, blending entertainment, competition, and knowledge enrichment seamlessly.",
  },

  {
    id: "medichat-app",
    color: "from-[#000000] to-[#2D3436]",
    title: "MediChat Web App",
    author: "Joachim Mwengi",
    client: "AL for Health",
    category: "Machine Learning",
    tech_stack: ["ReactJS", "Azure HealthBot"],
    link: "https://github.com/Joachim-Wambua/MediChatApp",
    images: {
      background:
        "https://res.cloudinary.com/dltjv8zbh/image/upload/v1701201006/medichat_x6hvss.png",
      image1:
        "https://res.cloudinary.com/dltjv8zbh/image/upload/v1701198830/medichat-img-b_rpd1yb.png",
      image2:
        "https://res.cloudinary.com/dltjv8zbh/image/upload/v1701198822/MobileUI-MultipleDevices_l6irb2.png",
      image3:
        "https://res.cloudinary.com/dltjv8zbh/image/upload/v1701198823/WebUI-MultipleDevices_fvbrkc.png",
    },
    key_features:
      "Informative Introduction - Introduces users to the chatbot's purpose and capabilities, providing a clear understanding of how the chatbot can assist, enhancing user engagement.\nSymptom Checking & Triage - Utilizes advanced algorithms to check and triage medical symptoms, offering reliable information based on data sourced from authoritative platforms like MedlinePlus and the US National Library of Medicine.\nKidney Disease Quality of Life Assessment -  Employs the KDQOL-36 survey to assess the quality of life for patients with kidney disease, providing personalized insights and support.\nPediatric Asthma Symptom Scale Evaluator - Assesses asthma control in children using the Pediatric Asthma Symptom Scale, offering valuable insights for parents and caregivers.\nCovid19 Symptoms Assessment - Guides users through a virtual assessment for COVID-19 symptoms based on CDC data, offering remote support and information.\nMental Health Assessment -Performs mental health evaluations using the PHQ-SADS screener, providing users with valuable insights into their mental well-being.\nDiabetes Risk Evaluation - Utilizes the FINDRISC tool to predict users' risk of contracting diabetes, offering personalized risk assessments for proactive healthcare measures.",
    project_objectives:
      "The primary objective of the MediChat project is to employ machine learning concepts, including natural language processing, to develop a medical assistance chatbot. This chatbot, operating through a web-chat interface, mimics human conversation, providing users with accurate medical information in real-time. The specific objectives encompass the identification of reliable data sources for relevant medical information, the creation of medical-related intents for training the chatbot model, and achieving a minimum accuracy score for each trained medical intent during testing. The project also aims to deploy the medical chatbot assistant to a web application for seamless user interaction. Through these objectives, MediChat aspires to bridge the gap between medical providers and patients, making quality healthcare accessible and convenient, thereby transforming the healthcare landscape in Kenya.",
    project_overview:
      "MediChat, born from the AL for Health Health Tech hackathon, revolutionizes patient engagement in Kenya's healthcare with a medical chatbot service, addressing cost, wait times, and resource constraints, leveraging smartphones to extend care and showcasing machine learning's impact.",
  },
  {
    id: "komezart-website",
    color: "from-[#000000] to-[#2D3436]",
    title: "KomezArt Website",
    author: "Joachim Mwengi",
    client: "KomezArt",
    category: "Web Development",
    tech_stack: ["HTML", "CSS", "JavaScript", "Shopify Liquid"],
    project_overview:
      "The KomezArt website showcases Rwanda's top artists, facilitating discovery and purchase of original artworks and print reproductions, fortifying Rwanda's artistic ecosystem, and amplifying Rwandan art globally.",
    project_objectives:
      "This project aims to enhance the KomezArt website's user experience, brand representation, and global outreach. The mission was to create an aesthetically pleasing and responsive website that aligns seamlessly with the KomezArt brand. Key objectives include optimizing the website's visual appeal, ensuring a user-friendly interface, and harnessing the potential of Shopify's Liquid code for a robust and reliable online art gallery. The overarching aim is to contribute significantly to Rwanda's artistic narrative by providing a virtual space that showcases local artists' talents and encourages global art enthusiasts to engage, discover, and invest in the diverse and vibrant world of Rwandan art.",
    key_features:
      "Aesthetic Design - Present a visually captivating and artistically curated website design that reflects the essence of KomezArt and showcases the artwork appealingly.\r\nResponsive Layout - Ensure a seamless and user-friendly experience across devices with a fully responsive design, allowing art enthusiasts to explore and engage with the platform effortlessly.\r\nArtwork Discovery - Implement intuitive navigation and search functionalities to facilitate easy discovery of original artworks and print reproductions from Rwanda's top artists.\r\nArtist Profiles - Provide dedicated artist profiles, allowing visitors to delve into each featured artist's background, style, and portfolio, fostering a deeper connection between artists and art enthusiasts.\r\nSecure E-commerce Transactions - Integrate robust e-commerce features with secure payment gateways to enable users to purchase artworks and prints confidently, ensuring a safe and trustworthy transaction process.\r\nArtwork Categories and Filters - Organize artworks into categories and incorporate filtering options, empowering users to narrow their preferences and find artworks that align with their interests.\r\nResponsive Customer Support - Offer responsive customer support channels, including live chat and contact forms, to address inquiries, provide assistance, and ensure a positive customer experience.",
    link: "https://www.komezart.com/",
    images: {
      background:
        "https://res.cloudinary.com/dltjv8zbh/image/upload/v1701979264/rxjfmjbjlovaxuznsw46.png",
      image1:
        "https://res.cloudinary.com/dltjv8zbh/image/upload/v1702060739/kmz-mockup-1_nh2bmf.png",
      image2:
        "https://res.cloudinary.com/dltjv8zbh/image/upload/v1702060758/kmz-mockup-2_1_du3oar.png",
      image3:
        "https://res.cloudinary.com/dltjv8zbh/image/upload/v1702060728/kmz-mockup-3_kgqynw.png",
    },
  },
];

export { projects };
