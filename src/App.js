import './App.css';
import styled from 'styled-components';
import Header from './components/Header/Header.component';
import Main from './components/Main/Main.component';

const Container = styled.div`
  padding: 0 3rem`

function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <Main />

      </Container>

    </div>
  );
}

export default App;
