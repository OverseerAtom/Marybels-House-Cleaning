import { React, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import styles from '../css/header.module.css';
import logo from "../../media/Marybel's House Cleaning One Line.png"
import { Link } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const homepage_url = "http://localhost:3000/"
    const contact_url = "http://localhost:3000/contact"
    const price_url = "http://localhost:3000/price"
    const about_url = "http://localhost:3000/about"
    const book_now_url = "http://localhost:3000/book-now"

    const switchPage = (url) => {
        window.location.href = url
    }

    return (
        <div className={styles.mainHeader}>
            <div className={styles.header}>
                <div className={styles.leftContentcontainer}>
                    <nav className={styles.leftContent}>
                        <ul>
                            <a href={price_url}>
                                <li>Pricing</li>
                            </a>
                            <Link to='services'>
                                <li>Services</li>
                            </Link>
                            <a href={about_url}>
                                <li>About</li>
                            </a>
                        </ul>
                    </nav>
                </div>
                <div className={styles.mediumContentContainer}>
                    <nav className={styles.leftContent}>
                        <ul>
                            <a href={price_url}>
                                <li>Pricing</li>
                            </a>
                            <li>Services</li>
                            <a href={about_url}>
                                <li>About</li>
                            </a>
                            <a href={contact_url}>
                                <li>Contact</li>
                            </a>
                            <li>Email</li>
                            <a href={book_now_url}>
                                <li>Book Now</li>
                            </a>
                        </ul>
                    </nav>
                </div>
                <div className={styles.middleContentcontainer}>
                    <img src={logo} alt="logo" onClick={() => switchPage(homepage_url)}></img>
                </div>
                <div className={styles.sandwich} onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faBars} size="lg" />
                </div>
                {isOpen && (
                    <div className={styles.overlay}>
                    <ul className={styles.menuList}>
                        <a href={price_url}>
                            <li>Pricing</li>
                        </a>
                        <li>Services</li>
                        <a href={about_url}>
                            <li>About</li>
                        </a>
                        <a href={contact_url}>
                            <li>Contact</li>
                        </a>
                        <li>Email</li>
                        <a href={book_now_url}>
                            <li>Book Now</li>
                        </a>
                    </ul>
                    </div>
                )}
                <div className={styles.rightContentcontainer}>
                    <nav className={styles.rightContent}>
                        <ul>
                            <li>Email</li>
                            <a href={book_now_url}>
                                <li>Book Now</li>
                            </a>
                            <a href={contact_url}>
                                <li>Contact</li>
                            </a>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export {Header};