import { useEffect, useRef, useState } from 'react';
import './App.css';
import Footer from './View/footer/footer';
import SuccessModal from './View/footer/successModal/successModal';
import Header from './View/header/header';
import SingIn from './components/singIn/singIn';
import ModalMenu from './components/modalMenu/modalMenu';
import LoaderSpinner from './components/loader/loader';
import Main from './View/main/main';
import Layout from './View/layout/layout';

function App() {

  const [modalActiveM, setModalActivM] = useState(false);
  const [activeSing, setActiveSing] = useState(false);

  const [modalActive, setModalActiv] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setIsLoading(true)
    }, 1500)
  }, [])

  const footerRef = useRef();

  return (
    <div className="App">

      {
        !isLoading ? <LoaderSpinner /> :
          <>
            <ModalMenu active1={modalActiveM} setActive1={setModalActivM} />

            <SuccessModal active={modalActive} setActive={setModalActiv} />
            <SingIn activeSing={activeSing} setActiveSing={setActiveSing} />
            <Header
              active1={modalActiveM} setActive1={setModalActivM}
              activeSing={activeSing} setActiveSing={setActiveSing}
            />
            <Layout footerRef={footerRef} />
            {/* <Main /> */}

            <Footer
              
              active={modalActive} setActive={setModalActiv} />
          </>
      }

    </div>
  );
}

export default App;
