import { motion } from 'framer-motion'
import './Skills.css'

interface SkillCategory {
  category: string
  skills: string[]
  icon: string
}

const skillCategories: SkillCategory[] = [
  {
    category: 'Game Engines',
    skills: ['Unity', 'Unreal Engine', 'Godot', 'GameMaker Studio'],
    icon: '🎮',
  },
  {
    category: 'Programming',
    skills: ['C#', 'C++', 'GDScript', 'JavaScript', 'TypeScript', 'Python'],
    icon: '💻',
  },
  {
    category: 'Design Tools',
    skills: ['Blender', 'Photoshop', 'Figma', 'Aseprite', 'Procreate'],
    icon: '🎨',
  },
  {
    category: 'Game Design',
    skills: [
      'Mechanics Design',
      'Level Design',
      'Narrative Design',
      'Balance & Tuning',
      'Player Psychology',
    ],
    icon: '🧠',
  },
  {
    category: 'Dev Tools',
    skills: ['React', 'Node.js', 'HTML/CSS', 'WebGL', 'Three.js'],
    icon: '🛠️',
  },
  {
    category: 'Other Skills',
    skills: ['Version Control (Git)', 'Agile Development', '3D Modeling', 'Audio Design', 'Portfolio Website'],
    icon: '⚡',
  },
]

const Skills = () => {
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
    <section id="skills" className="skills">
      <motion.div
        className="skills-container"
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
            Skills & Technologies
          </motion.h2>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.category}
              className="skill-category"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="skill-header">
                <span className="skill-icon">{category.icon}</span>
                <h3 className="skill-category-title">{category.category}</h3>
              </div>
              <div className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    className="skill-item"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Skills
