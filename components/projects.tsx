"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function Projects() {
  const projects = [
    {
      title: "Illegal Billboard Detection System",
      description: "AI-powered mobile app for identifying illegal billboards using computer vision.",
      tech: ["React Native", "Spring Boot", "YOLOv8", "Cloud"],
      github: "#",
    },
    {
      title: "Quiz Application",
      description: "Real-time quiz platform with dynamic question rendering and instant feedback.",
      tech: ["Spring Boot", "Thymeleaf", "MySQL", "AWS EC2"],
      github: "#",
    },
    {
      title: "Reddit Clone Deployment",
      description: "Microservices-based Reddit clone with scalable Kubernetes orchestration.",
      tech: ["Docker", "Kubernetes", "Microservices", "Cloud"],
      github: "#",
    },
    {
      title: "Serverless Image Processor",
      description: "Event-driven function for automatic image resizing and storage.",
      tech: ["AWS Lambda", "S3", "API Gateway", "Python"],
      github: "#",
    },
    {
      title: "Blue-Green Deployment Pipeline",
      description: "Automated CI/CD with zero downtime and rollback capabilities.",
      tech: ["Jenkins", "Docker", "Kubernetes", "DevOps"],
      github: "#",
    },
  ]

  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2 className="text-4xl font-bold mb-12 text-blue-900 text-center" variants={itemVariants}>
          Featured Projects
        </motion.h2>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={containerVariants}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all group"
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-lg font-medium border border-blue-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <motion.a
                href={project.github}
                className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors font-semibold"
                whileHover={{ x: 5 }}
              >
                View on GitHub
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3v-6"
                  />
                </svg>
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
