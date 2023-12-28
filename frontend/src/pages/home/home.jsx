import { Header, Footer } from '@components'
import { useChangeTitle } from '@hooks'
import { InfoBar } from '@ui-kit'

const HomePage = () => {
  useChangeTitle('Главная')

  return (
    <div>
      <InfoBar content={'Тут должен быть рекламный текст'} />
      <Header />
      <Footer />
    </div>
  )
}

export default HomePage
