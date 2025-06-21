'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Code, Lightbulb, Users, Zap } from 'lucide-react'

const philosophies = [
  {
    icon: Code,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable, and efficient code that stands the test of time.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Constantly exploring new technologies and approaches to solve complex problems.'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Building strong relationships and working together to achieve exceptional results.'
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Optimizing for speed, efficiency, and user experience in every project.'
  }
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Passionate developer crafting digital experiences that make a difference
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="prose prose-lg dark:prose-invert max-w-none">              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                I&apos;m Abdullah Talal, a passionate Full Stack Developer with over 5 years of experience 
                building innovative web applications and solutions. My journey in technology began with 
                a curiosity about how things work and evolved into a deep passion for creating 
                digital experiences that solve real-world problems.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Specializing in <span className="text-primary-500 font-semibold">Next.js</span>, 
                <span className="text-accent-purple font-semibold"> API integrations</span>, and 
                <span className="text-accent-cyan font-semibold"> modern UX/UI design</span>, 
                I&apos;ve had the privilege of working on diverse projects ranging from NPM packages 
                used by thousands of developers to enterprise-level social media automation platforms.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                When I&apos;m not coding, you&apos;ll find me exploring the latest tech trends, contributing to 
                open-source projects, or sharing knowledge with the developer community. I believe in 
                the power of technology to transform businesses and improve lives.
              </p>
            </div>

            {/* Key Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200 dark:border-gray-800"
            >
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text mb-2">5+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text mb-2">50+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text mb-2">1K+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">NPM Downloads</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Philosophy Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-center mb-8">Developer Philosophy</h3>
            <div className="grid gap-6">
              {philosophies.map((philosophy, index) => (
                <motion.div
                  key={philosophy.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="group p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-r from-primary-500 to-accent-cyan rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <philosophy.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {philosophy.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                        {philosophy.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >          <div className="glass rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Let&apos;s Build Something Amazing</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              I&apos;m always excited to work on new projects and collaborate with fellow developers, 
              designers, and entrepreneurs who share a passion for creating exceptional digital experiences.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.querySelector('#contact')
                if (element) element.scrollIntoView({ behavior: 'smooth' })
              }}
              className="px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-cyan text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300"
            >
              Start a Conversation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
