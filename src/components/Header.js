import {useTheme} from '../context/ThemeContext'


function Header() {

  const {theme , setTheme} = useTheme()

  return (
    <div>
      Active Theme : {theme}
      <button onClick={()=> setTheme(theme === 'Light' ? 'dark' : 'Light')}>Change Theme</button>
    </div>
  )
}

export default Header
