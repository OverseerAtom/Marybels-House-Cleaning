import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import styles from '../css/header.module.css';
import logo from "../../media/Marybel's House Cleaning One Line.png"

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const homepage_url = process.env.REACT_APP_URL_HOMEPAGE
    const contact_url = process.env.REACT_APP_URL_CONTACT
    const price_url = process.env.REACT_APP_URL_PRICING
    const about_url = process.env.REACT_APP_URL_ABOUT
    const book_now_url = process.env.REACT_APP_URL_BOOK_NOW
    const services_url = process.env.REACT_APP_URL_SERVICES

    console.log(process.env.REACT_APP_URL_HOMEPAGE)

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
                            <a href={services_url}>
                                <li>Services</li>
                            </a>
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