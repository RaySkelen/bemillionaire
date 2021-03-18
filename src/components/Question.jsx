import React from 'react';
import Preloader from './../assets/Preloader.svg';
import styles from './Question.module.css'

const Question = (props) => {
    return (
        <div className={styles.container}>
            {props.question === null && <Preloader/>}
            {props.question !== undefined && props.question !== null &&<span className={styles.question}>{props.question}</span>}
        </div>
    )
}

export default Question;