import cn from 'classnames'

import DefaultAvata from '@assets/DefaultAvatar.png'
import './Avatar.scss'

const CLASS = 'avatar'

const Avatar = ({ url = DefaultAvata, alt = 'Моковый аватар', size = 'l' }) => {
  return (
    <img
      className={cn(CLASS, {
        [`${CLASS}_size_${size}`]: size,
      })}
      src={url}
      alt={alt}
    />
  )
}

export default Avatar
