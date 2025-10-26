"use client"

import { motion } from "framer-motion"

export default function Experience() {
  const experiences = [
    {
      title: "Infosys Springboard Internship 6.0",
      period: "Batch 7 – November 2025",
      description: "Hands-on experience with enterprise-level Java development and cloud technologies.",
    },
    {
      title: "Forage Virtual Experience Programs",
      period: "AWS, HPE, Tata",
      description: "Completed virtual internships in AWS Cloud, HPE Infrastructure, and Tata GenAI & Cybersecurity.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <motion.div
        className="max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2 className="text-4xl font-bold mb-4 text-blue-900 text-center" variants={itemVariants}>
          Experience & Internships
        </motion.h2>

        <motion.p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto" variants={itemVariants}>
          My professional journey and hands-on experience with industry-leading technologies
        </motion.p>

        <motion.div className="space-y-8" variants={containerVariants}>
          {experiences.map((exp, index) => (
            <motion.div key={index} className="border-l-4 border-blue-600 pl-6 relative" variants={itemVariants}>
              <motion.div
                className="absolute -left-3 top-0 w-5 h-5 bg-blue-600 rounded-full border-4 border-white"
                whileHover={{ scale: 1.3 }}
              />
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">{exp.title}</h3>
              <p className="text-blue-600 font-semibold mb-3">{exp.period}</p>
              <p className="text-gray-600">{exp.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
