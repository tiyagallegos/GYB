import React from 'react'   
import styles from './Footer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';



export default function Footer() {
    return (
        <footer className={styles.Footer}>
            <section>
            <Link to="/aboutus" className="navPages">About Us</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/donations" className="navPages">Donations</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/resources" className="navPages">Resources</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</section>
            <section>
                Copyright &copy; {new Date().getFullYear()}            
            </section>
            <section>
            <a href="https://github.com/tiyagallegos" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} /></a>
                <a href="https://www.linkedin.com/in/tiya-gallegos/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} /></a>
            </section>
        </footer>
    )
}