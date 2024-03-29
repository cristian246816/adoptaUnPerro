import Header from './Components/header/Header.jsx';
import Grilla from './Components/grilla/Grilla.jsx'
import Footer from './Components/footer/Footer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'

const App= () => {
  return (
    <>
      <Header titulo="Adopta un perrito!!!"/>
      <Grilla />
      <Footer />
    </>
    
  );
}

export default App;
