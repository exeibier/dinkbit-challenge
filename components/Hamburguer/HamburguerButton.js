import React from 'react';
import styles from '../../styles/HamburguerToggleButton.module.scss'

const HamburguerButton = props => (
    <button className={styles.toggle_button} onClick={props.click}>
        <div className={styles.toggle_button_line}/>
        <div className={styles.toggle_button_line}/>
        <div className={styles.toggle_button_line}/>
    </button>
);

export default HamburguerButton