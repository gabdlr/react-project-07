import { Fragment, useState, useEffect } from 'react'
import Header from "./components/Header";
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';

function App() {

  //Definir la categoria y noticias
  const [ categoria, guardarCategoria ] = useState('');
  //State de noticia
  const [ noticias, guardarNoticias ] = useState([]);

  useEffect(() => {
   const consultarAPI = async () => {
     const url = 
     `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=yourAPIKey`;
     const respuesta = await fetch(url);
     const noticias = await respuesta.json();
     guardarNoticias(noticias.articles);
   }
   consultarAPI();
  }, [categoria])
  return (
    <Fragment>
      <Header
      titulo="Buscador De Noticias"
      />
      <div className="container white">
        <Formulario
          guardarCategoria={guardarCategoria}
        />
          <ListadoNoticias
          noticias={noticias}
          />
      </div>
    </Fragment>
  );
}

export default App;
