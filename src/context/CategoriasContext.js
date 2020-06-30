import React, { createContext, useState, useEffect } from 'react';

//CREAR EL CONTEXT
export const CategoriasContext = createContext(); 

//CREAR EL PROVAIDER, ES DONDE SE ENCUENTRAN LAS FUNCIONES Y STATE 
const CategoriasProvider = (props) => {

  //Creando un state para este CONTEXT
  const [categorias, setCategorias] = useState([]); 

  //tambien se podria crear un useEffect u otra estructura, e implementarla aqui
  useEffect(() => {

    const ConsultarApi = async () => {
      
      const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
      const res = await fetch(url); 
      const data = await res.json();
      setCategorias(data.drinks);
      
    }

    ConsultarApi();
  }, [])

  return (
    <CategoriasContext.Provider
      value={{
        categorias   //lo que este dentro de este value es lo que estará disponible en todos los componentes
      }}
    >
      {props.children}
    </CategoriasContext.Provider>
  )
} 

export default CategoriasProvider;