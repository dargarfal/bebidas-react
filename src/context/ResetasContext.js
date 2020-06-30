import React, {createContext, useState, useEffect} from 'react';

export const ResetasContext = createContext();

const RecetasProvider = (props) => {
  
  const [busqueda, buscarResetas] = useState({
    nombre : '',
    categoria : ''
  });

  const [resetas, setResetas] = useState([]);
  const [control, setControl] = useState(false);

  useEffect(() => {

    if(control){
    const obtenerResetas = async () => {

      const url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i='+ busqueda.nombre +'&c='+ busqueda.categoria;

      const res = await fetch(url);
      const data = await res.json();
      setResetas(data.drinks);

    }

    obtenerResetas();
  }

  }, [busqueda])

  return (  
    <ResetasContext.Provider
      value={{
        buscarResetas,
        resetas,
        setControl
      }}
    >
      {props.children}
    </ResetasContext.Provider>
   );
}
 
export default RecetasProvider;