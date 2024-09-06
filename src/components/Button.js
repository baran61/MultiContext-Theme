import {useTheme} from '../context/ThemeContext'

function Button() {
  
  const {theme , setTheme} = useTheme()
  
  return (
    <div>
      Active Theme: {theme}
      <br/>

      <button onClick={() => setTheme(theme === 'Light' ? 'dark' : 'Light')}>Change Theme</button>
    </div>
  )
}

export default Button
