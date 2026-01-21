import { motion } from 'framer-motion'
import './Projects.css'

interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  tags: string[]
  image: string
  link?: string
  github?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Neon Runner',
    description: 'Fast-paced endless runner with neon visuals',
    longDescription:
      'Endless runner built in Unity. Focused on making the movement feel tight and responsive, with procedurally generated obstacles and a clean neon art style.',
    tags: ['Unity', 'C#', 'Game Design', 'Procedural Generation'],
    image: '🎮',
    link: '#',
    github: '#',
  },
  {
    id: 2,
    title: 'Puzzle Dimensions',
    description: '3D puzzle game with spatial mechanics',
    longDescription:
      'Puzzle game where you manipulate objects in 3D space. Spent a lot of time playtesting to make sure the puzzles felt fair but challenging.',
    tags: ['Unity', 'C#', '3D Design', 'Puzzle Mechanics'],
    image: '🧩',
    link: '#',
    github: '#',
  },
  {
    id: 3,
    title: 'Echoes of Time',
    description: 'Story-driven adventure with time mechanics',
    longDescription:
      'Adventure game where you can rewind time to change outcomes. Built the branching narrative system and worked on making the time mechanics feel intuitive.',
    tags: ['Unreal Engine', 'Blueprints', 'Narrative Design', 'C++'],
    image: '⏰',
    link: '#',
    github: '#',
  },
  {
    id: 4,
    title: 'Arena Champions',
    description: 'Multiplayer arena combat game',
    longDescription:
      'Arena combat game with multiple characters, each with different abilities. Handled the networking and spent a lot of time balancing the combat to make it fun.',
    tags: ['Unity', 'Networking', 'Multiplayer', 'Game Balance'],
    image: '⚔️',
    link: '#',
    github: '#',
  },
  {
    id: 5,
    title: 'Cosmic Explorer',
    description: 'Space exploration roguelike',
    longDescription:
      'Roguelike where you explore space, find planets, and upgrade your ship. Procedural generation keeps each run feeling fresh. Built in Godot.',
    tags: ['Godot', 'GDScript', 'Roguelike', 'Procedural Generation'],
    image: '🚀',
    link: '#',
    github: '#',
  },
  {
    id: 6,
    title: 'Rhythm Quest',
    description: 'Music-based rhythm game',
    longDescription:
      'Rhythm game that mixes platforming with music timing. Created the level editor so players could make their own levels. Multiple difficulty settings to keep it accessible.',
    tags: ['Unity', 'Audio Design', 'Rhythm Mechanics', 'Level Editor'],
    image: '🎵',
    link: '#',
    github: '#',
  },
]

const Projects = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="projects" className="projects">
      <motion.div
        className="projects-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="section-header" variants={itemVariants}>
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            Projects
          </motion.h2>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="project-image">
                <div className="project-emoji">{project.image}</div>
                <div className="project-overlay">
                  <div className="project-links">
                    {project.link && (
                      <a
                        href={project.link}
                        className="project-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title}`}
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        className="project-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Projects
