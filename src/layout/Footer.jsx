import React from 'react'

function Footer() {
  return (
    <footer className="page-footer green darken-1">
          <div className="footer-copyright">
            <div className="container">
            © {new Date().getFullYear()} Movies project
            <a className="grey-text text-lighten-4 right" href="#!">More projects</a>
            </div>
          </div>
        </footer>
  )
}

export default Footer