'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Package, Play } from 'lucide-react'
import { ProjectCard } from '@/components/ui/project-card'

const projects = [
  {
    id: 1,
    title: 'WhatsApp Embedded Signup',
    description: 'NPM package for seamless WhatsApp Business API integration with embedded signup flow',
    image: '/api/placeholder/600/400',
    technologies: ['TypeScript', 'Node.js', 'WhatsApp API', 'OAuth 2.0'],
    github: 'https://github.com/abdullahtalal1122/whatsapp-embedded-signup',
    npm: 'https://www.npmjs.com/package/whatsapp-embedded-signup',
    installCommand: 'npm install whatsapp-embedded-signup',
    featured: true,
    category: 'Package'
  },
  {
    id: 2,
    title: 'ONU.ai - Social Media Automation',
    description: 'Make.com for social media - Comprehensive automation platform with API integration focus',
    image: '/api/placeholder/600/400',
    technologies: ['Next.js', 'TypeScript', 'API Integration', 'Automation'],
    liveUrl: 'https://app.onu.ai',
    github: '#',
    featured: true,
    category: 'Web App'
  },
  {
    id: 3,
    title: 'WhatsApp Project Suite',
    description: 'Real-time messaging platform with advanced WhatsApp integration features',
    image: '/api/placeholder/600/400',
    technologies: ['React', 'Node.js', 'Socket.io', 'WhatsApp API'],
    github: 'https://github.com/abdullahtalal1122/whatapp',
    features: ['Real-time messaging', 'Group management', 'Media sharing', 'Bot integration'],
    category: 'Platform'
  },
  {
    id: 4,
    title: 'E-commerce Platform',
    description: 'Full-featured e-commerce solution with integrated payment processing',
    image: '/api/placeholder/600/400',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
    github: 'https://github.com/abdullahtalal1122/Ecom',
    features: ['Payment integration', 'Inventory management', 'Order tracking', 'Admin dashboard'],
    category: 'E-commerce'
  }
]

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = React.useState('All')
  const categories = ['All', 'Package', 'Web App', 'Platform', 'E-commerce']

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory)
  return (
    <section id="projects" className="py-20 px-4 bg-white dark:bg-gray-900">
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
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Showcasing innovative solutions from NPM packages to full-scale applications
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-primary-500 to-accent-cyan text-white shadow-lg'
                  : 'glass border border-gray-300 dark:border-gray-700 hover:border-primary-400 dark:hover:border-primary-400'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
            <Github className="h-12 w-12 mx-auto mb-4 text-primary-400" />
            <h3 className="text-2xl font-bold mb-4">Explore More Projects</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Check out my GitHub for more open-source projects and contributions
            </p>
            <motion.a
              href="https://github.com/abdullahtalal1122"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-full font-medium hover:from-gray-700 hover:to-gray-800 transition-all duration-300"
            >
              <Github className="h-5 w-5" />
              View GitHub Profile
              <ExternalLink className="h-4 w-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
