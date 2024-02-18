import React, { useState, useEffect } from 'react';
import styles from '../css/about_our_company.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SkeletonPlaceholder from './loading-placeholder';
import EmployeeImage from '../../media/Intro-photos.jpg'
import Aos from 'aos';
import 'aos/dist/aos.css';
import AboutImage from '../../media/Intro-photos.jpg'

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
        <div className={`${styles.mainContainer} container-fluid p-0`}>
        <div className="row no-gutters justify-content-center align-items-center p-0">
          <div className={`${styles.imageContainer} col-sm-12 col-md-6 order-sm-2 mb-3 mb-md-0 p-0`}>
            <img src={AboutImage} alt="About Me" className="img-fluid rounded"/>
          </div>
          <div className="col-sm-12 col-md-6 text-center">
            <h2>About Our Company</h2>
            <p>

            Established in 2009 by a Bay Area native, our house cleaning service is rooted in the local community, 
            offering meticulous and reliable cleaning solutions to homes throughout the Bay Area.
             With years of experience, we pride ourselves on our attention to detail and commitment to customer satisfaction.
            </p>
          </div>
        </div>
      </div>
    );
};

export { AboutOurCompany };
