"use client";

import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import ParticlesBackground from "../components/ParticlesBackground";
import Navbar from "../components/Navbar";

const projects = [
  {
    title: "PopcornPulse",
    subtitle: "Self Project",
    description:
      "An AI-powered movie recommendation platform that personalizes suggestions based on mood, ratings, and user preferences.",
    tech: ["Python","Flask","HTML5","CSS3","JavaScript","pandas","NumPy","scikit-learn","Google Gemini API","OMDb API"],
    features: [
      "Implemented content-based filtering using TF-IDF and cosine similarity to recommend movies",
      "Integrated Google Gemini API to deliver real-time mood-based movie suggestions",
      "Fetched IMDb ratings dynamically using OMDb API for better recommendation accuracy",
      "Designed a responsive and interactive UI for seamless movie browsing",
    ],
    gradient: "from-cyan-500 to-blue-500",
    github: "https://github.com/LakshyaK10/PopcornPulse",
 
  },
    {
    title: "GYMLife Master",
    subtitle: "Self Project",
    description:
      "An interactive AI-driven platform that analyzes workout posture, provides real-time accuracy feedback, and recommends personalized gym and diet plans.",
    tech: ["Python","Flask","React","OpenCV","TensorFlow","MediaPipe","MongoDB","HTML5","CSS3","JavaScript"],
    features: [
      "Implemented AI-based posture and pose estimation with real-time workout form analysis and automated accuracy feedback",
      "Developed personalized recommendation features, including gym plans, diet suggestions, and performance insights based on user data",
      "Built a full-stack platform with a React frontend and Flask backend, integrating ML models for pose tracking and smooth user interaction",
      
    ],
    gradient: "from-indigo-500 to-violet-500",
    github: "https://github.com/LakshyaK10?tab=repositories",
    live: "https://gymlifemaster.com",
  },
  {
    title: "Smart Energy Demand Forecasting",
    subtitle: "Self Project",
    description:
      "A machine learning–based energy forecasting system built to predict household power usage, detect anomalies, and support proactive smart-grid demand planning.",
    tech: ["Python","pandas","NumPy","scikit-learn","TensorFlow","Prophet","statsmodels","Matplotlib"],
    features: [
      "Built forecasting models using ARIMA, Prophet, and LSTM, achieving MAPE of 16.5% (ARIMA) and 46.9% (LSTM) on hourly power consumption data",
      "Optimized time-series performance, reducing RMSE to 0.497 kW and using Isolation Forest to detect energy anomalies for fraud and fault identification",
      "Enabled scalable smart-grid demand planning with ML-driven predictions for energy optimization and proactive load management",
      ],
    gradient: "from-red-500 to-rose-500",
    github: "https://github.com/LakshyaK10?tab=repositories",
    live: "https://energyforecasting.com",
  },
  {
    title: "Online Judge System",
    subtitle: "Group Project",
    description:
      "A secure and scalable online coding judge supporting user authentication, isolated code execution, and real-time submission evaluation.",
    tech: ["Python","Flask","Flask-Login","Werkzeug","Docker","SQLite","Jinja2","JSON"],
    features: [
      "Implemented secure user authentication using Flask-Login and Werkzeug hashing, ensuring users can only access their own submissions",
      "Built an asynchronous code execution pipeline using separate processes and Docker container isolation for safe and responsive code evaluation",
      "Integrated SQLite database for scalable submission storage, along with a debug mode for viewing hidden testcases and dynamic Jinja2 templates for UI pages",

    ],
    gradient: "from-blue-500 to-indigo-500",
    github: "https://github.com/LakshyaK10?tab=repositories",
    live: "https://onlinejudge.com",
  },
  {
    title: "EDUCAP – Assistive Learning Platform",
    subtitle: "Group Project - Gradient Hackathon Finalist",
    description:
      "An accessibility-focused platform designed for physically challenged users, integrating voice-based features, AI assistance, and automated video summarization.",
    tech: ["Python",
    "React.js",
    "JavaScript",
    "HTML",
    "CSS",
    "NLP",
    "Google APIs",
    "Speech-to-Text",
    "Text-to-Speech"],
    features: [
      "Integrated Text-to-Speech, Speech-to-Text, an AI-powered chatbot, and a YouTube video summarizer for accessible learning",
      "Designed a user-friendly, voice-enabled interface tailored for physically challenged users",
      "Built within 24 hours as a functional assistive platform, gaining experience in NLP, AI-driven features, API integration, and full-stack development",
    ],
    gradient: "from-purple-500 to-pink-500",
    github: "https://github.com/LakshyaK10/EduCap",
    live: "https://educad.com",
  },
  {
    title: "Facial Mood Detection",
    subtitle: "Self Project",
    description:
      "A real-time computer vision system that predicts a person's mood using OpenCV, CNN models, and live video detection.",
    tech: ["Python","OpenCV"," Keras","NumPy","pandas","scikit-learn","MediaPipe","Matplotlib"],
    features: [
      "Implemented real-time facial mood detection using CNN models and OpenCV's video capture pipeline",
      "Built an age group classification model using custom datasets stored in the 'datasets' directory",
      "Developed a complete CV workflow including preprocessing, face detection, model training, and live predictions",

    ],
    gradient: "from-green-500 to-teal-500",
    github: "https://github.com/LakshyaK10/Facial-Emotion-detector",
    live: "https://facialmood.com",
  },
  {
    title: "Disease Prediction System",
    subtitle: "Self AIML Project",
    description:
      "A symptom-based disease prediction platform that provides diagnosis, precautions, effects, and personalized health advice with a full user login and admin management system.",
    tech: ["Python","Flask","scikit-learn","pandas","NumPy","Bootstrap","JavaScript", "HTML","CSS"],
    features: [
      "Implemented a symptom-based ML model to predict diseases and display precautions, effects, and advice using a disease_precautions dictionary",
      "Developed complete user authentication with modals, toast alerts, password visibility toggle, and profile management",
      "Built an admin panel for user management, integrated a responsive Bootstrap UI, and designed a smooth symptom-selection workflow",
    ],
    gradient: "from-amber-500 to-orange-500",
    github: "https://github.com/LakshyaK10?tab=repositories",
    live: "https://diseaseprediction.com",
  },
  {
    title: "Stock Analytics Dashboard",
    subtitle: "Data Science & Financial Analysis",
    description:
      "Comprehensive stock market analysis tool built with Python and Jupyter Notebook, featuring advanced data visualization, trend analysis, and predictive insights for investment decisions.",
    tech: ["Python", "Jupyter", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly"],
    features: [
      "Real-time stock data analysis with historical trend visualization and pattern recognition",
      "Interactive visualizations: Candlestick charts, moving averages, volume analysis, and correlation heatmaps",
      "Statistical analysis: Calculate volatility, RSI, MACD, Bollinger Bands, and other technical indicators",
      "Comparative portfolio analysis: Compare multiple stocks and analyze risk-return profiles",
      "Data-driven insights: Generate automated findings and recommendations based on statistical patterns",
      "Built with Pandas for data manipulation and Plotly/Seaborn for professional-grade visualizations",
    ],
    gradient: "from-emerald-500 to-cyan-500",
    github: "https://github.com/LakshyaK10?tab=repositories",
    live: "https://stockanalytics.com",
  },
  {
    title: "Maze Runner Game",
    subtitle: "Self Project",
    description:
      "A multi-level 2D maze game built using Pygame, featuring health, lives, sound effects, menus, and smooth level progression.",
    tech: ["Python","Pygame","OS","JSON"],
    features: [
      "Developed a multi-level maze game with proper level progression, player health, lives, and collision mechanics",
      "Implemented sound effects, pause menu, main menu, and correct icon rendering for an enhanced gameplay experience",
      "Built modular game logic with scalable level design, ensuring smooth transitions and responsive controls",
    ],
    gradient: "from-pink-500 to-purple-500",
    github: "https://github.com/LakshyaK10/maze-game",
    live: "https://mazerunner.com",
  },
  // {
  //   title: "MyBrain - Content Management Hub",
  //   subtitle: "Full-Stack Content Organization Platform",
  //   description:
  //     "A personal knowledge management system where users can save, organize, and access important YouTube videos and Twitter tweets in one centralized platform.",
  //   tech: ["TypeScript", "React", "Tailwind CSS", "MongoDB", "Express", "JWT", "Zod", "Render"],
  //   features: [
  //     "Save and organize YouTube videos and Twitter tweets with tags and categories",
  //     "Secure authentication with JWT tokens and custom middleware for protected routes",
  //     "Input validation using Zod schemas to ensure data integrity and type safety",
  //     "MongoDB database for efficient storage and retrieval of bookmarked content",
  //     "Clean, intuitive UI built with React and Tailwind CSS for seamless content browsing",
  //     "Deployed on Render with optimized performance and reliable uptime for production use",
  //   ],
  //   gradient: "from-violet-500 to-fuchsia-500",
  // },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="fixed inset-0 z-0">
        <ParticlesBackground />
      </div>
      
      <Navbar />
      
      <div className="max-w-7xl mx-auto relative z-10 px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-6">
            Projects
          </h1>
          <p className="text-xl text-gray-400">
            Real-world applications and systems I've built
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="h-full"
            >
              <Tilt
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                glareEnable={true}
                glareMaxOpacity={0.2}
                glareColor="#ffffff"
                glareBorderRadius="20px"
                className="h-full"
              >
                <div className="h-full bg-white/5 border border-cyan-500/30 rounded-xl overflow-hidden hover:border-cyan-500/60 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 flex flex-col">
                  {/* Header with gradient */}
                  <div
                    className={`relative h-48 bg-linear-to-br ${project.gradient} overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="relative h-full flex items-center justify-center">
                      <div className="text-white text-7xl font-bold opacity-30">
                        {project.title.charAt(0)}
                      </div>
                    </div>
                    {/* Decorative pattern */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/20 rounded-full blur-xl"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-white mb-1 gradient-text">
                        {project.title}
                      </h3>
                      <p className="text-cyan-400 font-semibold text-sm">
                        {project.subtitle}
                      </p>
                    </div>

                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 mb-4 flex-1">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs">
                          <span className="text-cyan-400 mt-0.5 flex-shrink-0">▹</span>
                          <span className="text-gray-400 leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 bg-purple-500/20 text-purple-300 rounded-md text-xs border border-purple-500/30 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 mt-auto">
                      <button 
                        onClick={() => window.open(project.github, "_blank")}
                        className="flex-1 px-4 py-2.5 bg-cyan-500/10 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500 hover:text-black transition-all duration-300 flex items-center justify-center gap-2 text-sm font-semibold">
                        <FaGithub /> Code
                      </button>
                      <button 
                        onClick={() => alert("Live demo coming soon!")}
                        className="flex-1 px-4 py-2.5 bg-pink-500/10 border border-pink-500 text-pink-400 rounded-lg hover:bg-pink-500 hover:text-black transition-all duration-300 flex items-center justify-center gap-2 text-sm font-semibold">
                        <FaExternalLinkAlt /> Live
                      </button>
                    </div>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
