import React from 'react';

//Components
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListaResetas from './components/ListaResetas';


//Contexts
import CategoriasProvider from './context/CategoriasContext';
import RecetasProvider from './context/ResetasContext';
import ModalProvider from './context/ModalContext';

function App() {
  return (
    <CategoriasProvider> {/* Todo lo que este dentro de este CONTEXT tendra acceso al provaider del mismo */}
      <RecetasProvider>
        <ModalProvider>
          <Header />
          <div className="container mt-5">
            <div className="row">
              <Formulario />
            </div>
            <div className="row mt-3">
              <ListaResetas />
            </div>
          </div>
        </ModalProvider>
      </RecetasProvider>
    </CategoriasProvider>
  );
}

export default App;
