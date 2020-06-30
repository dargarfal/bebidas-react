import React, {createContext, useEffect, useState} from 'react';

export const ModalContext = createContext();

const ModalProvider = (props) => {

  //state
  const [idreseta, setIdReseta] = useState(null);
  const [info, setInfo] = useState({});

  useEffect(() => {

    
      const getInfoReseta = async () => {
        if(!idreseta) return;

        const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='+idreseta;
        const res = await fetch(url);
        const data = await res.json();  
                
        setInfo(data.drinks[0]);
      }

      getInfoReseta();
      
      
        
  }, [idreseta])

  return ( 
    <ModalContext.Provider
      value={{
        info,
        setIdReseta,
        setInfo
      }}
    >
      {props.children}
    </ModalContext.Provider>

   );
}
 
export default ModalProvider;