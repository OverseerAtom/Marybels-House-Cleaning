import React, { useState, useEffect } from 'react';
import styles from '../css/about_our_company.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SkeletonPlaceholder from './loading-placeholder';
import EmployeeImage from '../../media/Intro-photos.jpg'
import Aos from 'aos';
import 'aos/dist/aos.css';

const AboutOurCompany = () => {
    const [loading, setLoading] = useState(true);
    

    useEffect(() => {
        setTimeout(() => setLoading(false));
        Aos.init();
    }, []);

    if (loading) {
        return (
            <div className={styles.mainContainer} data-Aos='fade-top'>
                <div className={`row ${styles.contentContainer}`}>
                    <div className={`col-md-6 col-sm-12 ${styles.box}`}>
                        <SkeletonPlaceholder height={30} width={570} /> {/* Header skeleton */}
                        <SkeletonPlaceholder count={4} width={570} /> {/* Paragraph skeleton */}
                    </div>
                    <div className={`col-md-6 col-sm-12 ${styles.box}`}>
                        <SkeletonPlaceholder height={370} width={570} /> {/* Image skeleton */}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.mainContainer}>
            <div className="row">
                <div className={`col-lg-6 col-md-12 col-sm-12 ${styles.box}`}>
                    <h3>About Our Company</h3>
                    <p>Welcome to our Bay Area house cleaning service, a local and 
                       woman-owned business serving the community since 2006...
                    </p>
                </div>
                <div className={`col-lg-6 col-md-12 col-sm-12 ${styles.imageContainer}`}>
                    <div className={styles.image} style={{ backgroundImage: `url(${EmployeeImage})` }}>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { AboutOurCompany };
