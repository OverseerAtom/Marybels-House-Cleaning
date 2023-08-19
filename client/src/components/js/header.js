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
    const home_url = 'http://localhost:3000/'
    const contact_url = 'http://localhost:3000/contact'

    return (
        <div className={styles.mainHeader}>
            <div className={styles.header}>
                <div className={styles.leftContentcontainer}>
                    <nav className={styles.leftContent}>
                        <ul>
                            <li>Pricing</li>
                            <li>Services</li>
                            <li>About</li>
                        </ul>
                    </nav>
                </div>
                <div className={styles.mediumContentContainer}>
                    <nav className={styles.leftContent}>
                        <ul>
                            <li>Pricing</li>
                            <li>Services</li>
                            <li>About</li>
                            <li>
                                <a href={contact_url}>
                                    Contact
                                </a>
                            </li>
                            <li>Email</li>
                            <li>Book Now</li>
                        </ul>
                    </nav>
                </div>
                <div className={styles.middleContentcontainer}>
                    <a href={home_url}>
                        <img src={logo} alt="logo"></img>
                    </a>
                </div>
                <div className={styles.sandwich} onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faBars} size="lg" />
                </div>
                {isOpen && (
                    <div className={styles.overlay}>
                    <ul className={styles.menuList}>
                        <li>Pricing</li>
                        <li>Services</li>
                        <li>About</li>
                        <li>
                            <a href={contact_url}>
                                Contact
                            </a>
                        </li>
                        <li>Email</li>
                        <li>Book Now</li>
                    </ul>
                    </div>
                )}
                <div className={styles.rightContentcontainer}>
                    <nav className={styles.rightContent}>
                        <ul>
                            <li>Email</li>
                            <li>Book Now</li>
                            <li>
                            <a href={contact_url}>
                                Contact
                            </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export {Header};