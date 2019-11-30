import React from 'react'
import styles from './search-microservices.module.css'


const SearchMicroservices = () => {
    return (
        <div className={styles.search}>
            <input type="text" placeholder="Поиск" />
            <div>
                Сортировка
                <select>
                    <option>Алфавит A-Z</option>
                    <option>2</option>
                    <option>3</option>
                </select>
            </div>
            <button>Фильтры</button>
        </div>
    )
}

export default SearchMicroservices