import {React, useState, useEffect} from 'react'
import styles from "../css/faq.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
const FAQ = () => {
    
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get("http://localhost:8030")
                setData(result.data)
            } catch (error) {
                throw new Error("Data not fetched")
            }
        }
        fetchData()

    }, [data]);

useEffect(() => {
    const faqButtons = document.querySelectorAll(`.${styles.questions}`)
    const answersContainers = document.querySelectorAll(`.${styles.answers}`);
    
    if (faqButtons.length === null) {
        throw new Error("No questions in container");
    }
    
    if (answersContainers.length === null) {
        throw new Error("No answers found")
    }
    
    faqButtons.forEach((faqButton, index) => {
        const answersContainer = answersContainers[index];
        const icon = faqButton.querySelector(`.${styles.icon}`);
    
        faqButton.addEventListener("click", (event) => {
        answersContainer.classList.toggle(styles.open);
        icon.classList.toggle(styles.active);
        });
    });
    
    }, [data]);
      
      


    return(
        <Container>
            {data?.map(data => (
            <div  key={data.questions} className={styles.faq}>
                <div className={styles.questions}>
                    <div className={styles.icon}>
                        <FontAwesomeIcon icon={faPlus} />
                    </div>
                    <h4>{data.questions}</h4>
                </div>
                <div className={styles.answers}>
                    <p>{data.answers}</p>
                </div>
            </div>
        ))}
        </Container>
    )
}
