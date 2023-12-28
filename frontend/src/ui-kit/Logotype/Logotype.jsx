import cn from 'classnames'

import DefaultLogo from '@assets/DefaultLogo.svg'
import './Logotype.scss'

const CLASS = 'logotype'

const Logotype = ({
  src = DefaultLogo,
  alt = 'Дефолтный логотип проекта',
  width = '48px',
  height = '48px',
  title = 'Логотип Лейбл',
}) => {
  return (
    <div className={cn(CLASS)}>
      <img
        className={`${CLASS}__icon`}
        src={src}
        alt={alt}
        width={width}
        height={height}
        style={{ display: 'block', margin: '0 auto' }}
      />
      {title && <h1 className={cn(`${CLASS}__title`)}>{title}</h1>}
    </div>
  )
}

export default Logotype
