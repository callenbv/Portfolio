import { motion } from 'framer-motion'
import './Hero.css'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 className="hero-title" variants={itemVariants}>
            <span className="gradient-text-start">Programmer</span>
            <br />
            <span className="gradient-text-end">& Game Designer</span>
          </motion.h1>

          <motion.p className="hero-description" variants={itemVariants}>
            Building innovative software solutions and crafting engaging game experiences
          </motion.p>

          <motion.div className="hero-buttons" variants={itemVariants}>
            <motion.a
              href="#projects"
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              className="btn btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-code"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="code-editor">
            <div className="code-header">
              <div className="code-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <span className="code-filename">portfolio.ts</span>
            </div>
            <div className="code-content">
              <div className="code-line">
                <span className="code-keyword">const</span>{' '}
                <span className="code-function">createPortfolio</span> = () =&gt; {'{'}
              </div>
              <div className="code-line">
                <span className="code-indent">  </span>
                <span className="code-keyword">const</span> skills = [
              </div>
              <div className="code-line">
                <span className="code-indent">    </span>
                <span className="code-string">'TypeScript'</span>,
              </div>
              <div className="code-line">
                <span className="code-indent">    </span>
                <span className="code-string">'React'</span>,
              </div>
              <div className="code-line">
                <span className="code-indent">    </span>
                <span className="code-string">'Game Design'</span>,
              </div>
              <div className="code-line">
                <span className="code-indent">    </span>
                <span className="code-string">'Problem Solving'</span>
              </div>
              <div className="code-line">
                <span className="code-indent">  </span>];
              </div>
              <div className="code-line">
                <span className="code-indent">  </span>
                <span className="code-keyword">return</span> {'{'}
              </div>
              <div className="code-line">
                <span className="code-indent">    </span>
                <span className="code-property">projects</span>: <span className="code-function">build</span>(),
              </div>
              <div className="code-line">
                <span className="code-indent">    </span>
                <span className="code-property">passion</span>: <span className="code-function">innovate</span>(),
              </div>
              <div className="code-line">
                <span className="code-indent">    </span>
                <span className="code-property">future</span>: <span className="code-function">explore</span>()
              </div>
              <div className="code-line">
                <span className="code-indent">  </span>{'}'};
              </div>
              <div className="code-line">
                {'}'};
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
      </div>
    </section>
  )
}

export default Hero
