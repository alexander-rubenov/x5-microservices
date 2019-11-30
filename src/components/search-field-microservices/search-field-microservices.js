import React from 'react'
import styles from './search-field-microservices.module.css'


const SearchFieldMicroservices = () => {
    return (
        <div className={styles.field}>
            <input type="text" placeholder="Поиск" />
        </div>
    )
}

export default SearchFieldMicroservices;