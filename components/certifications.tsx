"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"

export default function Certifications() {
  const certifications = [
    {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      year: "2024",
      description: "Foundational understanding of AWS Cloud concepts, services, and terminology",
      badge: "AWS",
      badgeColor: "bg-orange-500",
      iconColor: "bg-orange-500",
      certificateUrl: "#",
    },
    {
      title: "Fundamentals of Accelerated Data Science",
      issuer: "NVIDIA",
      year: "2024",
      description: "Deep learning and accelerated computing for data science applications",
      badge: "NVIDIA",
      badgeColor: "bg-green-500",
      iconColor: "bg-green-500",
      certificateUrl: "#",
    },
    {
      title: "Cisco Cybersecurity Certification",
      issuer: "Cisco Networking Academy",
      year: "2023",
      description: "Network security fundamentals and cybersecurity best practices",
      badge: "Cisco",
      badgeColor: "bg-blue-500",
      iconColor: "bg-blue-500",
      certificateUrl: "#",
    },
    {
      title: "Google UX Design Certificate",
      issuer: "Coursera",
      year: "2023",
      description: "User experience design principles and modern design methodologies",
      badge: "Google",
      badgeColor: "bg-purple-500",
      iconColor: "bg-purple-500",
      certificateUrl: "#",
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
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2 className="text-4xl font-bold mb-4 text-gray-900 text-center" variants={itemVariants}>
          Certifications
        </motion.h2>

        <motion.p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto" variants={itemVariants}>
          Professional certifications and credentials that validate my expertise
        </motion.p>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={containerVariants}>
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all group"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex justify-between items-start mb-4">
                <div
                  className={`${cert.iconColor} rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0`}
                >
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <span className="text-gray-500 text-xs font-medium">{cert.year}</span>
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-1">{cert.title}</h3>
              <p className="text-gray-600 text-xs mb-2">{cert.issuer}</p>

              <p className="text-gray-600 text-sm mb-4">{cert.description}</p>

              <div className="flex justify-between items-center">
                <span className={`${cert.badgeColor} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
                  {cert.badge}
                </span>
                <a
                  href={cert.certificateUrl}
                  className="text-blue-500 hover:text-blue-700 text-xs font-medium flex items-center gap-1 transition-colors"
                >
                  View Certificate
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
