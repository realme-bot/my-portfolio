"use client"

import { motion } from "framer-motion"

export default function About() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2 className="text-4xl font-bold mb-4 text-blue-900 text-center" variants={itemVariants}>
          About Me
        </motion.h2>

        <motion.p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto" variants={itemVariants}>
          Get to know more about my background, education, and passion for technology
        </motion.p>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6" variants={containerVariants}>
          {/* Education Card */}
          <motion.div
            className="border-l-4 border-blue-600 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="flex items-start gap-4">
              <div className="text-3xl">🎓</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Education</h3>
                <p className="font-semibold text-gray-800">C.V. Raman Global University</p>
                <p className="text-gray-600 text-sm">Bachelor of Computer Science (2022-2026)</p>
                <p className="text-gray-600 text-sm">CGPA: 8.78 | Specialization: Cloud Computing</p>
              </div>
            </div>
          </motion.div>

          {/* My Goal Card */}
          <motion.div
            className="border-l-4 border-purple-600 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="flex items-start gap-4">
              <div className="text-3xl">🎯</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">My Goal</h3>
                <p className="text-gray-600 text-sm">
                  To design and deploy intelligent, efficient, and scalable cloud-native applications that solve
                  real-world problems and create meaningful impact in the technology landscape.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Interests Card */}
          <motion.div
            className="border-l-4 border-green-600 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="flex items-start gap-4">
              <div className="text-3xl">💚</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Interests</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Java Full Stack Development</li>
                  <li>• DevOps & Cloud Automation</li>
                  <li>• Scalable System Architecture</li>
                  <li>• Modern Web Technologies</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Why I Love Development - Gradient Card */}
          <motion.div
            className="bg-gradient-to-br from-blue-600 to-purple-600 text-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all md:col-span-1"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <h3 className="text-lg font-semibold mb-3">Why I Love Development</h3>
            <p className="text-sm leading-relaxed">
              I'm passionate about creating robust, scalable solutions that bridge the gap between innovative ideas and
              practical implementation. My focus on cloud computing and full-stack development allows me to build
              end-to-end solutions that are both powerful and user-friendly.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
