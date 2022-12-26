import React from "react";

import './Main.css'

const Main = () => {
  return (
    <div className="main main__glass">
      <h1>Зарабатывайте больше <span className="main__welbex">с WELBEX</span></h1>
      <p>Развиваем и контролируем продажи за вас</p>
      <p>Вместе с <span className="main__consultation">бесплатной консультацией</span> мы дарим:</p>
      <p className="main__ball--purple"></p>
      <p className="main__ball--purple__light"></p>
      <p className="main__ball--red"></p>
      <p className="main__ball--red__light"></p>
      <ul>
        <li>SKYPE АУДИТ</li>
        <li>30 ВИДЖЕТОВ</li>
        <li>DASHBOARD</li>
        <li>МЕСЯЦ AMOCRM</li>
      </ul>
    </div>
  )
}

export default Main