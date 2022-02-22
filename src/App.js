import './App.css';
import styled from 'styled-components';
import Header from './components/Header/Header.component';
import Main from './components/Main/Main.component';
import Footer from './components/Footer/Footer.component';

const Container = styled.div`
  padding: 0
  `

function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <Main />
        <Footer />

      </Container>

    </div>
  );
}

export default App;
