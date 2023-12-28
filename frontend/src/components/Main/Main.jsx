import cn from 'classnames'

import './Main.scss'

const CLASS = 'main'

const Main = ({ children }) => {
  return <main className={cn(CLASS)}>{children}</main>
}

export default Main
