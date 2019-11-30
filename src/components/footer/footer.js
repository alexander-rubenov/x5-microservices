import React from 'react'
import logo from '../../static/img/X5_retail_logo.svg'
import facebook from '../../static/img/facebook.svg'
import vk from '../../static/img/vk.svg'
import instagram from '../../static/img/instagram.svg'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <footer>
      <div className={styles.bigblock}>
        <div className={`${styles.block} ${styles.block1}`}>
          <img src={logo} alt="" />
          <p>&copy;2015-2019 X5 Retail Group N.V.</p>
        </div>
        <div className={`${styles.block} ${styles.block2}`}>
          <h3>Социальные сети</h3>

          <div className={styles.society}>
            <img src={facebook} alt=""/>

            <img src={vk} alt=""/>

            <img src={instagram} alt=""/>
          </div>
        </div>
      </div>

      <div className={`${styles.block} ${styles.block3}`}>
        <ul>
          <h3>Сайт</h3>
          <li><span>О компании</span></li>
          <li><span>Партнерам</span></li>
          <li><span>Инвесторам</span></li>
          <li><span>Пресс-центр</span></li>

        </ul>
      </div>

      <div className={`${styles.block} ${styles.block4}`}>
        <h3>Корпоративный центр</h3>
        <p>Ул.Коровий Вал, 5, стр. 1</p>
        <p>Тел. +7 (495) 662-88-88, +7 (495) 789-95-95</p>
        <p>Факс. +7 (495) 662-88-88, доб. 61-145</p>
      </div>
    </footer>
  )
}

export default Footer