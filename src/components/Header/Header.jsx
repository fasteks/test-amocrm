import React from "react"

import Logo from "../../assets/img/logo_welbex.svg"
import TelegramIcon from "../../assets/img/wa.svg"
import ViberIcon from "../../assets/img/vb.svg"
import WhatsappIcon from "../../assets/img/tg.svg"

import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <a href="#"><img src={Logo} alt="logo" className="header__logo" /></a>
      <nav className="header__navigation">
        <ul className="navigation">
          <li className="navigation__link"><a href="#">Услуги</a></li>
          <li className="navigation__link"><a href="#">Виджеты</a></li>
          <li className="navigation__link"><a href="#">Интеграции</a></li>
          <li className="navigation__link"><a href="#">Кейсы</a></li>
          <li className="navigation__link navigation__link--hidden"><a href="#">Сертификаты</a></li>
        </ul>
      </nav>
      <div className="header__linkss">
        <ul className="header__links">
          <li><a href="tel:+7 555 555-55-55">+7 555 555-55-55</a></li>
          <li><a href="#"><img src={TelegramIcon} alt="telegram" className="links__telegram" /></a></li>
          <li><a href="#"><img src={ViberIcon} alt="viber" className="links__viber" /></a></li>
          <li><a href="#"><img src={WhatsappIcon} alt="whatsapp" className="links__whatsapp" /></a></li>
        </ul>
      </div>
    </header>
  )
}

export default Header