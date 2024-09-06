import './App.css';
import { ThemeProvider } from './context/ThemeContext'; // ThemeProvider'ı doğru şekilde import ettik
import Container from './components/Container';
import { UserProvider } from './context/UserContext'; 

function App() {
  return (
    <ThemeProvider> {/* ThemeProvider ile sarmaladık */}
      <UserProvider>
        <Container/>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
