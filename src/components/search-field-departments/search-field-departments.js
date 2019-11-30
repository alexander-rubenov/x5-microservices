import React from 'react'
import styles from './search-field-departments.module.css'

const SearchFieldDepartments = () => {
    return (
        <div className={styles.field}>
            <input type="text" placeholder="Поиск" />
        </div>
    )
}

export default SearchFieldDepartments