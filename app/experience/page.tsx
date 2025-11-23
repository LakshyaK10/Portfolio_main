"use client";

import { motion } from "framer-motion";
import { FaBriefcase, FaUsers, FaCalendarAlt } from "react-icons/fa";
import ParticlesBackground from "../components/ParticlesBackground";
import Navbar from "../components/Navbar";

const experiences = [
  {
    company: "AWAARA RUN CLUB",
    role: "Sponsership Head",
    duration: "Sept 2025 – Present",
    location: "Bangalore · Hybrid",
    icon: FaUsers,
    color: "cyan",
    achievements: [
      "Founded Awaara Run Club, building a growing running community by organizing regular group runs and fitness-focused events",
      "Led sponsorship operations for Awaara Run Club, securing collaborations with local brands to support community run events",
      "Coordinated with event and marketing teams to integrate sponsor branding, boosting event visibility and participant engagement",
    ],
  },
  {
    company: "Gradient AIML Club, BMSCE Bangalore",
    role: "Core Committee Member – Technical",
    duration: "Jun 2025 – Oct 2025 · 5 mos",
    location: "Bangalore · On-site",
    icon: FaCalendarAlt,
    color: "purple",
    achievements: [
      "Actively contributed to technical activities including workshops, coding sessions, and AIML-focused learning events",
      "Collaborated with club members on ML/AI projects, exploring concepts like model building, data preprocessing, and evaluation",
      "Participated in technical discussions and events, staying updated with advancements in AI/ML and enhancing practical skills",
    ],
  },
  // {
  //   company: "EmergX",
  //   role: "Backend Developer – Internship",
  //   duration: "May 2025 – Jul 2025 · 3 mos",
  //   location: "Remote",
  //   icon: FaBriefcase,
  //   color: "green",
  //   achievements: [
  //     "Collaborated in a team to develop and optimize secure APIs for a hiring platform, focusing on performance and data protection",
  //     "Contributed to database design and integration to support scalable job listing storage and retrieval",
  //     "Built and deployed Selenium-based web scraping tools to extract job data from various platforms, automating data ingestion into the system",
  //   ],
  // },
  {
    company: "SIH BMSCE Bangalore",
    role: "Student Admin",
    duration: "Sep 2025 – oct 2025 · 1 mos",
    location: "Bangalore · Hybrid",
    icon: FaUsers,
    color: "pink",
    achievements: [
      "Organized and coordinated the entire SIH Week for all participating teams, ensuring smooth scheduling and event flow",
      "Managed team presentations and evaluations, assisting with PPT setup, logistics, and communication between teams and faculty",
      "Supported administrative operations, helping streamline event activities, participant management, and on-ground coordination",
    ],
  },
  {
    company: "PhaseSift Technical Fest, BMSCE Bangalore",
    role: "Junior Coordinator(Sponsorship)",
    duration: "Nov 2024 – Dec 2024 ·  2 mos",
    location: "Bangalore · On-site",
    icon: FaBriefcase,
    color: "amber",
    achievements: [
      "Assisted in securing sponsorships by reaching out to companies, preparing proposals, and supporting negotiation efforts",
      "Coordinated with sponsors and event teams, ensuring sponsor requirements, branding, and deliverables were executed properly",
      "Supported the core team in event planning, managing documentation, follow-ups, and smooth communication during the tech fest",
    ],
  },
  {
    company: "UTSAV Cultural Fest, BMSCE Bangalore",
    role: "Coordinator(Sponsorship)",
    duration: "Apr 2024 – May 2024 · 2 mos",
    location: "Bangalore · Hybrid",
    icon: FaUsers,
    color: "indigo",
    achievements: [
      "Coordinated sponsorship outreach by connecting with brands, pitching event value, and supporting deal closures",
      "Managed sponsor deliverables and on-ground branding, ensuring visibility across events, stages, and promotional materials",
      "Collaborated with event and logistics teams to enable smooth execution of sponsored activities during the cultural fest",
    ],
  },
  
];

export default function Experience() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="fixed inset-0 z-0">
        <ParticlesBackground />
      </div>
      
      <Navbar />
      
      <div className="max-w-6xl mx-auto relative z-10 px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-6">
            Experience
          </h1>
          <p className="text-xl text-gray-400">My professional journey and contributions</p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div
                className={`bg-white/5 border border-${exp.color}-500/30 rounded-lg p-8 hover:border-${exp.color}-500/60 transition-all hover:shadow-lg hover:shadow-${exp.color}-500/20`}
              >
                <div className="flex items-start gap-6">
                  <div
                    className={`p-4 bg-${exp.color}-500/10 border border-${exp.color}-500/30 rounded-lg`}
                  >
                    <exp.icon className={`text-3xl text-${exp.color}-400`} />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="text-2xl font-bold text-white">{exp.company}</h3>
                      <span className={`text-${exp.color}-400 font-semibold text-sm md:text-base`}>
                        {exp.duration}
                      </span>
                    </div>

                    <h4 className={`text-lg font-semibold text-${exp.color}-300 mb-2`}>
                      {exp.role}
                    </h4>
                    
                    {exp.location && (
                      <p className="text-sm text-gray-400 mb-4">📍 {exp.location}</p>
                    )}

                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className={`text-${exp.color}-400 mt-1.5`}>▹</span>
                          <span className="text-gray-300 leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Connecting line */}
              {index < experiences.length - 1 && (
                <div className="ml-10 h-8 w-0.5 bg-gradient-to-b from-cyan-500/50 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
