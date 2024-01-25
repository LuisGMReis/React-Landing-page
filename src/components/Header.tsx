import logo from '../assets/logo.svg'
import { Button } from './Button'

const Header = () => {
  return (
        <header className="flex items-center justify-between py-5 px-32">
        <img src={logo} alt="" />

        <div className='flex items-center gap-8'>
          <a href="#">Início</a>
          <a href="#services">Serviços</a>
          <a href="#portfolio">Nosso Portflio</a>
          <Button title='Fale conosco' size='sm'/>
          </div>
      </header>
  );
}

export default Header