import React from 'react'
import styles from './add-main.module.css'
import Header from '../header'
import Footer from '../footer'

const AddMain = () => {

  return (
    <div className={styles.blocks}>
      <div>
        <div className={styles.blockName}>
          <label htmlFor="">Название</label>
          <input type="text" />
        </div>
        <div className={styles.blockDescription}>
          <label htmlFor="">Описание</label>
          <input type="text" />
        </div>
        <div className={styles.func}>
          Функционал
          <button>data_analysis</button>
          <button>+</button>
        </div>
      </div>
      <div>
        <div className={styles.status}>
          <label htmlFor="">Статус</label>
          <select>
            <option>Выбрать</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
        <div className={styles.version}>
          <label htmlFor="">Версия</label>
          <input type="text" />
        </div>
      </div>
    </div>
  )
}

export default AddMain