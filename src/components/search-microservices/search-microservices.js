import React from 'react'
import styles from './search-microservices.module.css'
import SearchFieldMicroservices from '../search-field-departments'
import SearchButtonMicroservices from '../search-button-departments'

const SearchMicroservices = () => {
    return (
        <div className={styles.search}>
            <SearchFieldMicroservices />
            <SearchButtonMicroservices />
        </div>
    )
}

export default SearchMicroservices