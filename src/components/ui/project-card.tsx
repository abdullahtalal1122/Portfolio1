'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Package, Play, Copy, Check } from 'lucide-react'

interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  github?: string
  npm?: string
  liveUrl?: string
  installCommand?: string
  features?: string[]
  featured?: boolean
  category: string
}

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [copied, setCopied] = React.useState(false)

  const copyInstallCommand = () => {
    if (project.installCommand) {
      navigator.clipboard.writeText(project.installCommand)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="project-card group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-800"
    >
      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-gradient-to-r from-primary-500 to-accent-cyan text-white text-xs font-bold rounded-full">
          Featured
        </div>
      )}

      {/* Project Image */}
      <div className="relative h-48 bg-gradient-to-br from-primary-500/10 to-accent-cyan/10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-purple/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl font-bold text-primary-400/30">
            {project.category === 'Package' ? <Package /> : <Play />}
          </div>
        </div>
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex gap-4">
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
              >
                <ExternalLink className="h-6 w-6 text-white" />
              </motion.a>
            )}
            {project.github && project.github !== '#' && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
              >
                <Github className="h-6 w-6 text-white" />
              </motion.a>
            )}
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-500 transition-colors">
            {project.title}
          </h3>
          <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400">
            {project.category}
          </span>
        </div>

        <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Install Command for NPM packages */}
        {project.installCommand && (
          <div className="mb-4 p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <div className="flex items-center justify-between">
              <code className="text-sm font-mono text-gray-800 dark:text-gray-200">
                {project.installCommand}
              </code>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={copyInstallCommand}
                className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
              >
                {copied ? (
                  <Check className="h-4 w-4 text-green-500" />
                ) : (
                  <Copy className="h-4 w-4 text-gray-500" />
                )}
              </motion.button>
            </div>
          </div>
        )}

        {/* Features */}
        {project.features && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Key Features:</h4>
            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-primary-400 rounded-full" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="skill-tag px-3 py-1 text-xs font-medium bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-full border border-primary-200 dark:border-primary-800"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-800">
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-500 to-accent-cyan text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300"
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </motion.a>
          )}
          
          {project.npm && (
            <motion.a
              href={project.npm}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium transition-colors"
            >
              <Package className="h-4 w-4" />
              NPM
            </motion.a>
          )}
          
          {project.github && project.github !== '#' && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 px-4 py-2 glass border border-gray-300 dark:border-gray-700 rounded-lg font-medium hover:border-primary-400 transition-colors"
            >
              <Github className="h-4 w-4" />
              Code
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  )
}
