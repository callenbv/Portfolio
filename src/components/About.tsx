import { useState } from 'react'
import { motion } from 'framer-motion'
import './About.css'

const About = () => {
  const [imageError, setImageError] = useState(false)
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
    <section id="about" className="about">
      <motion.div
        className="about-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="section-header" variants={itemVariants}>
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            About
          </motion.h2>
        </motion.div>

        <div className="about-content">
          <div className="about-photo">
            {!imageError ? (
              <img
                src="/profile-photo.jpg"
                alt="Calle Betts"
                className="profile-image"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="profile-image profile-placeholder">
                <span>CB</span>
              </div>
            )}
          </div>
          <motion.div className="about-text" variants={itemVariants}>
            <p>
              I'm a Computer Science student based in Redmond, WA, focused on game programming
              and development. I write code for game systems, mechanics, and tools. I enjoy
              the technical challenges of building games and making them run smoothly.
            </p>
            <p>
              Most of my work involves implementing game systems, optimizing performance,
              and building tools that make development easier. I've worked on everything
              from quick game jams to longer-term projects, and I'm always learning new
              programming techniques and patterns.
            </p>
            <p>
              When I'm not coding, I'm usually playing games, analyzing how they're built,
              or working on the next project.
            </p>
          </motion.div>
          <motion.div className="about-stats" variants={itemVariants}>
            <div className="stat-card">
              <div className="stat-number">3+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">2</div>
              <div className="stat-label">Published Games</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">10+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default About
