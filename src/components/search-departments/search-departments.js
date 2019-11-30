import React from 'react'
import styles from './search-departments.module.css'
import SearchFieldDepartments from '../search-field-departments'
import SearchButtonDepartments from '../search-button-departments'

const SearchDepartments = () => {
    return (
        <div className={styles.search}>
            <SearchFieldDepartments />
            <SearchButtonDepartments />
        </div>
    )
}

export default SearchDepartments