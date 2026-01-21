import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <p className="footer-text">
        © {currentYear} Callen Betts. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
