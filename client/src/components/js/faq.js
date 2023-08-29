import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import styles from '../css/faq.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const FAQ = () => {
  const [data, setData] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('http://localhost:8080/faq');
        setData(result.data);
      } catch (error) {
        throw new Error('Data not fetched');
      }
    };
    fetchData();
  }, []);

  const toggleAnswer = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <Container>
      {data.map((item, index) => (
        <div key={item.question} className={styles.faq}>
          <div
            className={`${styles.questions} ${openIndex === index ? styles.icon.active : ''}`}
            onClick={() => toggleAnswer(index)}
          >
            <div className={`${styles.icon} ${openIndex === index ? styles.active : ''}`}>
              <FontAwesomeIcon icon={faPlus} />
            </div>
            <h4>{item.question}</h4>
          </div>
          <div className={`${styles.answers} ${openIndex === index ? styles.open : ''}`}>
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </Container>
  );
};

export { FAQ };
