"use client"

import { motion } from "framer-motion"

interface HeroProps {
  setActiveSection: (section: string) => void
}

export default function Hero({ setActiveSection }: HeroProps) {
  const handleViewProjects = () => {
    setActiveSection("projects")
    const element = document.getElementById("projects")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  const handleDownloadResume = () => {
    const resumeContent = `Md Farhan Azam
Java Full Stack & Cloud Developer
farhanazam140@gmail.com

HEADLINE
Hi, I'm Md Farhan Azam — Java Full Stack & Cloud Developer.
I build scalable web applications and deploy intelligent, cloud-native solutions using Java, Spring Boot, Docker, and AWS.

EDUCATION
B.Tech – Computer Science & Engineering (Cloud Computing)
C.V. Raman Global University (CGPA 8.78)

SKILLS
Languages: Java, Python, JavaScript, SQL, HTML, CSS
Frameworks: Spring Boot, Hibernate, React, Thymeleaf, JSP, Maven
Cloud: AWS (EC2, S3, Lambda, RDS), GCP (Compute Engine, Cloud Functions)
DevOps Tools: Docker, Kubernetes, Jenkins, Git, Postman
Databases: MySQL, MongoDB
Concepts: RESTful APIs, Microservices, MVC, Containerization, System Design

CERTIFICATIONS
- AWS Cloud Practitioner – Amazon Web Services
- Fundamentals of Accelerated Data Science – NVIDIA
- Cisco Cybersecurity Certification – Cisco Networking Academy
- Google UX Design Professional Certificate – Coursera

EXPERIENCE
Infosys Springboard Internship 6.0 (Batch 7 – November 2025)
Forage Virtual Experience Programs: AWS, HPE, Tata (GenAI & Cybersecurity)`

    const element = document.createElement("a")
    element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(resumeContent))
    element.setAttribute("download", "MD_Farhan_Azam_Resume.txt")
    element.style.display = "none"
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-blue-50"
    >
      <motion.div
        className="max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p className="text-lg text-blue-600 font-medium mb-4" variants={itemVariants}>
          Hello, I'm
        </motion.p>

        <motion.h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance text-blue-900"
          variants={itemVariants}
        >
          Md Farhan Azam
        </motion.h1>

        <motion.p className="text-xl sm:text-2xl text-gray-700 font-semibold mb-6 text-balance" variants={itemVariants}>
          Java Full Stack & Cloud Developer
        </motion.p>

        <motion.p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto text-balance" variants={itemVariants}>
          Passionate about building scalable web applications and deploying cloud-based solutions using{" "}
          <span className="font-semibold text-blue-600">Spring Boot</span>,{" "}
          <span className="font-semibold text-blue-600">AWS</span>, and{" "}
          <span className="font-semibold text-blue-600">Docker</span>.
        </motion.p>

        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={itemVariants}>
          <motion.button
            onClick={handleViewProjects}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects <span>↓</span>
          </motion.button>
          <motion.button
            onClick={handleDownloadResume}
            className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>↓</span> Download Resume
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
}
