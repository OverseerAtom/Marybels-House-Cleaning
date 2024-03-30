import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/header.module.css';
import logo from "../../media/Marybel's House Cleaning One Line.png"
import HamburgerIcon from './hamburgerIcon';

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
                            <Link to='/price'>
                                <li>Pricing</li>
                            </Link>
                            <Link to='/services'>
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
                            <Link to='/price'>
                                <a href={price_url}>
                                    <li>Pricing</li>
                                </a>
                            </Link>
                            <a href={services_url}>
                                <li>Services</li>
                            </a>
                            <Link to='/about'>
                                <a href={about_url}>
                                    <li>About</li>
                                </a>
                            </Link>
                            <a href={contact_url}>
                                <li>Contact</li>
                            </a>
                            <a href="mailto:cortesemail5123@yahoo.com?subject=House Cleaning Information&body=Hello, I'm interested in more information about your house cleaning services.">
                                <li>Email</li>
                            </a>
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
                    <HamburgerIcon/>
                </div>
                {isOpen && (
                    <div className={styles.overlay}>
                    <ul className={styles.menuList}>
                        <a href={services_url}>
                            <li>Pricing</li>
                        </a>
                        <a href={services_url}>
                            <li>Services</li>
                        </a>
                        <a href={about_url}>
                            <li>About</li>
                        </a>
                        <a href={contact_url}>
                            <li>Contact</li>
                        </a>
                        <a href="mailto:cortesemail5123@yahoo.com?subject=House Cleaning Information&body=Hello, I'm interested in more information about your house cleaning services.">
                            <li>Email</li>
                        </a>
                        <a href={book_now_url}>
                            <li>Book Now</li>
                        </a>
                    </ul>
                    </div>
                )}
                <div className={styles.rightContentcontainer}>
                    <nav className={styles.rightContent}>
                        <ul>
                        <a href="mailto:cortesemail5123@yahoo.com?subject=House Cleaning Information&body=Hello, I'm interested in more information about your house cleaning services.">
                            <li>Email</li>
                        </a>
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