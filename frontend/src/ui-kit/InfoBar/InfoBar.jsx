import cn from 'classnames'

import './InfoBar.scss'

const CLASS = 'infobar'

const InfoBar = ({ content, animation = true }) => {
  return (
    <div className={cn(CLASS)}>
      <span
        className={cn(`${CLASS}__text`, {
          [`blinking-text`]: animation,
        })}
      >
        {content}
      </span>
    </div>
  )
}

export default InfoBar
