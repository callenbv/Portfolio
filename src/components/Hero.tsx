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
            <span className="gradient-text-start">Engineer,</span>
            <br />
            <span className="gradient-text-end">Developer.</span>
            <span className="terminal-cursor">|</span>
          </motion.h1>

          <motion.p className="hero-description" variants={itemVariants}>
            Building games, software, and engaging games anyone can play.
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
              <span className="code-filename">callen_betts.cpp</span>
            </div>
            <div className="code-content">
              <div className="code-line">
                <span className="code-comment">// Backend engineer & game developer</span>
              </div>
              <div className="code-line">
                <span className="code-keyword">#include</span> <span className="code-string">&lt;iostream&gt;</span>
              </div>
              <div className="code-line">
                <span className="code-keyword">#include</span> <span className="code-string">&lt;vector&gt;</span>
              </div>
              <div className="code-line"></div>
              <div className="code-line">
                <span className="code-keyword">int</span> <span className="code-function">main</span>() {'{'}
              </div>
              <div className="code-line">
                {'    '}
                <span className="code-keyword">std::</span><span className="code-type">vector</span>&lt;<span className="code-type">string</span>&gt; skills = {'{'}
              </div>
              <div className="code-line">
                {'        '}
                <span className="code-string">&quot;C++&quot;</span>,
              </div>
              <div className="code-line">
                {'        '}
                <span className="code-string">&quot;Game Development&quot;</span>,
              </div>
              <div className="code-line">
                {'        '}
                <span className="code-string">&quot;Backend Systems&quot;</span>
              </div>
              <div className="code-line">
                {'    '}{'}'};
              </div>
              <div className="code-line"></div>
              <div className="code-line">
                {'    '}
                <span className="code-keyword">return</span> <span className="code-number">0</span>;
              </div>
              <div className="code-line">
                {'}'}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ opacity: { duration: 0.6, delay: 0.8 }, y: { duration: 2, repeat: Infinity, delay: 1 } }}
      >
        <div className="mouse"></div>
      </motion.div>

    </section>
  )
}

export default Hero
