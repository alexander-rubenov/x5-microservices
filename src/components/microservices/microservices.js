import React from 'react'
import './microservices.css'

const Microservices = () => {
  return (
    <div className="related_microservices">

      <h2>Департамент финансов</h2>

      <div className="microservice">
        <div className="name">
          <h4>Финансовая диагностика</h4>
          <p>Версия: 7.10.23.21</p>
          <p className="status">Находится в разработке</p>
        </div>
        <div className="tags">
          <button className="meta meta1" type="button">анализ</button>
          <button className="meta meta2" type="button">риски</button>
          <button className="meta meta3" type="button">классификация</button>
        </div>
        <div className="button">
          <a href="#">Описание связи</a>
          <svg xmlns="http://www.w3.org/2000/svg" width="26.8" height="40.26" viewBox="0 0 26.8 40.26">
            <path id="Path_2035" data-name="Path 2035" d="M12.47,0H0L14.32,20.1,0,40.26H12.47L26.8,20.1,12.47,0"
              fill="#ff8226" fill-rule="evenodd" />
          </svg>
        </div>
      </div>
      <div className="microservice">
        <div className="name">
          <h4>Контроль реализации</h4>
          <p>Версия: 7.10.23.21</p>
          <p className="status">Эксплуатируется</p>
        </div>
        <div className="tags">
          <button className="meta meta1" type="button">поставка</button>
          <button className="meta meta2" type="button">риски</button>
          <button className="meta meta3" type="button">качество</button>
        </div>
        <div className="button">
          <a href="#">Описание связи</a>
          <svg xmlns="http://www.w3.org/2000/svg" width="26.8" height="40.26" viewBox="0 0 26.8 40.26">
            <path id="Path_2035" data-name="Path 2035" d="M12.47,0H0L14.32,20.1,0,40.26H12.47L26.8,20.1,12.47,0"
              fill="#ff8226" fill-rule="evenodd" />
          </svg>
        </div>
      </div>
      <div className="microservice">
        <div className="name">
          <h4>Формы финансирования</h4>
          <p>Version: 7.10.23.21</p>
          <p className="status">Препдроектная подготовка</p>
        </div>
        <div className="tags">
          <button className="meta meta1" type="button"></button>
          <button className="meta meta2" type="button">encounter_mid</button>
          <button className="meta meta3" type="button">finding_NB</button>
        </div>
        <div className="button">
          <a href="#">Описание связи</a>
          <svg xmlns="http://www.w3.org/2000/svg" width="26.8" height="40.26" viewBox="0 0 26.8 40.26">
            <path id="Path_2035" data-name="Path 2035" d="M12.47,0H0L14.32,20.1,0,40.26H12.47L26.8,20.1,12.47,0"
              fill="#ff8226" fill-rule="evenodd" />
          </svg>
        </div>
      </div>

    </div>
  )
}

export default Microservices