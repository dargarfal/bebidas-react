import React, { useContext } from "react";
import {ResetasContext} from '../context/ResetasContext';

//Componets
import CardBebida from './CardBebida';

const ListaResetas = () => {

const {resetas} = useContext(ResetasContext);

  return (
    <div className="container">
      <div className="row">
        {resetas.map(reseta => (
          <CardBebida 
            reseta={reseta}
            key={reseta.idDrink}
          />
        ))}
        
      </div>
    </div>
  );
};

export default ListaResetas;
