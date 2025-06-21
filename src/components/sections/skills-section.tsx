'use client'

import * as React from 'react'
import { motion } from 'framer-motion'

const skills = [
  { name: 'Next.js', level: 95, category: 'Frontend' },
  { name: 'React', level: 92, category: 'Frontend' },
  { name: 'TypeScript', level: 90, category: 'Language' },
  { name: 'Node.js', level: 88, category: 'Backend' },
  { name: 'Python', level: 85, category: 'Language' },
  { name: 'API Integration', level: 93, category: 'Backend' },
  { name: 'WhatsApp API', level: 95, category: 'Specialty' },
  { name: 'Social Media APIs', level: 90, category: 'Specialty' },
  { name: 'Database Design', level: 87, category: 'Backend' },
  { name: 'UI/UX Design', level: 82, category: 'Design' },
  { name: 'Tailwind CSS', level: 94, category: 'Frontend' },
  { name: 'Framer Motion', level: 88, category: 'Frontend' },
  { name: 'AWS', level: 80, category: 'Cloud' },
  { name: 'Docker', level: 75, category: 'DevOps' },
  { name: 'Git/GitHub', level: 92, category: 'Tools' },
]

const categories = ['All', 'Frontend', 'Backend', 'Language', 'Specialty', 'Design', 'Cloud', 'DevOps', 'Tools']

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = React.useState('All')
  const [hoveredSkill, setHoveredSkill] = React.useState<string | null>(null)

  const filteredSkills = activeCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory)

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      Frontend: 'from-blue-500 to-blue-600',
      Backend: 'from-green-500 to-green-600',
      Language: 'from-purple-500 to-purple-600',
      Specialty: 'from-yellow-500 to-yellow-600',
      Design: 'from-pink-500 to-pink-600',
      Cloud: 'from-indigo-500 to-indigo-600',
      DevOps: 'from-red-500 to-red-600',
      Tools: 'from-gray-500 to-gray-600',
    }
    return colors[category] || 'from-primary-500 to-accent-cyan'
  }

  return (
    <section id="skills" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
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
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Proficient in modern technologies and frameworks for full-stack development
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-primary-500 to-accent-cyan text-white shadow-lg'
                  : 'glass border border-gray-300 dark:border-gray-700 hover:border-primary-400 dark:hover:border-primary-400'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredSkill(skill.name)}
              onHoverEnd={() => setHoveredSkill(null)}
              className="group relative"
            >
              <div className="skill-tag p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                {/* Category Badge */}
                <div className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(skill.category)} text-white`}>
                  {skill.category}
                </div>

                {/* Skill Name */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 pr-16">
                  {skill.name}
                </h3>

                {/* Progress Bar */}
                <div className="relative">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Proficiency</span>
                    <span className={`text-sm font-bold transition-all duration-300 ${
                      hoveredSkill === skill.name ? 'text-primary-500' : 'text-gray-700 dark:text-gray-300'
                    }`}>
                      {skill.level}%
                    </span>
                  </div>
                  
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className={`h-full bg-gradient-to-r ${getCategoryColor(skill.category)} rounded-full relative`}
                    >
                      {/* Animated shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 animate-pulse" />
                    </motion.div>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${getCategoryColor(skill.category)} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 gradient-text">Continuous Learning</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-500 mb-2">5+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-purple mb-2">20+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-cyan mb-2">50+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-500 mb-2">100%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
