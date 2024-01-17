import { Logotype, ToolBar } from '@ui-kit'
import { SOCIAL_LINK } from '@utils'
import cn from 'classnames'
import cartIcon from '@assets/cartIcon.svg'
import mailIcon from '@assets/mailIcon.svg'
import phoneIcon from '@assets/phone.svg'

import './Footer.scss'

const CLASS = 'footer'

const Footer = () => {
  return (
    <footer className={cn(CLASS)}>
      <div className={cn(`${CLASS}__container info`)}>
        <div className={cn(`${CLASS}__meta`)}>
          <Logotype src={cartIcon} alt='Мини лого' width='26px' height='26px' />
          <p className={`${CLASS}__description`}>
            Ваш Универсум Игровых Танков
          </p>
        </div>

        <ToolBar options={SOCIAL_LINK} />
      </div>

      <div className={cn(`${CLASS}__container support`)}>
        <div className={cn(`${CLASS}__item el`)}>
          <span className={cn(`${CLASS}__span support`)}>Нужна помощь?</span>
          <p className={cn(`${CLASS}__description support`)}>
            Наша служба поддержки работает для вас 24/7
          </p>
        </div>

        <div className={`${CLASS}__item phone`}>
          <a className={cn(`${CLASS}__link`)} href='tel:+1234567890'>
            <img src={phoneIcon} alt='Иконка телефона' />
            (+7) 000 111 222 333
          </a>
        </div>

        <div className={`${CLASS}__item mail`}>
          <a
            className={cn(`${CLASS}__link`)}
            href=' mailto:example@example.com'
          >
            <img src={mailIcon} alt='Иконка почты' />
            support@tankshope.ru
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
