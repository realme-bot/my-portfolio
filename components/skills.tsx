"use client"

import { motion } from "framer-motion"

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Java", "Python", "JavaScript", "SQL", "HTML", "CSS"],
      color: "bg-blue-500",
    },
    {
      title: "Frameworks",
      skills: ["Spring Boot", "Hibernate", "React", "Thymeleaf", "JSP", "Maven"],
      color: "bg-purple-500",
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS (EC2, S3, Lambda, RDS)", "GCP", "Docker", "Kubernetes", "Jenkins", "Git"],
      color: "bg-green-500",
    },
    {
      title: "Databases",
      skills: ["MySQL", "MongoDB"],
      color: "bg-orange-500",
    },
    {
      title: "Concepts",
      skills: ["RESTful APIs", "Microservices", "MVC", "Containerization", "System Design"],
      color: "bg-pink-500",
    },
  ]

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
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2 className="text-4xl font-bold mb-12 text-blue-900 text-center" variants={itemVariants}>
          Skills & Expertise
        </motion.h2>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" variants={containerVariants}>
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-all"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div
                  className={`${category.color} rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0`}
                >
                  <span className="text-white font-bold text-lg">{category.title.charAt(0)}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-all"
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
