import React, { useContext, useState } from "react";
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

//PARA INTALAR NAERIAL-UI UTILICE --> npm install @material-ui/core@next 

//Context
import {ModalContext} from '../context/ModalContext';

function getModalStyle() {
  const top = 50 ;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const CardBebida = ({ reseta }) => {

  //Configuracion del modal
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const classes = useStyles();
  
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  

  const {info, setIdReseta, setInfo} = useContext(ModalContext);

  //muestra los ingredientes
  const mostrarIngredientes = (infomacion) => {
    
    let ingrediente = [];
    let tempIndex = '';
    
    for (let i = 1; i < 16; i++) {
      tempIndex = 'strIngredient'+i;

      ingrediente.push(tempIndex); 
    }

    console.log(ingrediente);
    
  }

  return (
    <div className="col col-md-6 col-sm-12 col-lg-4 my-2">
      <div className="card" >
        <img src={reseta.strDrinkThumb} className="card-img-top" alt={reseta.strDrink} />
        <div className="card-body">
          <h5 className="card-title">{reseta.strDrink}</h5>
          <button 
            type="button" 
            className="btn btn-primary btn-block"
            onClick={() => {
              setIdReseta(reseta.idDrink);
              handleOpen();
            } }
            >Ver reseta
          </button>
          <Modal
            open={open}
            onClose={() => {
              handleClose();
              setIdReseta(null);
              setInfo({});
            }}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            <div style={modalStyle} className={classes.paper}>
              <h2>{info.strDrink}</h2>
              <h3 className="mt-4">Instrucciones</h3>
              <p> {info.strInstructions} </p>
              <img className="img-fluid my-4" src={info.strDrinkThumb}></img>
              <h3>Ingredientes y cantidades</h3>
              <ul>
                {mostrarIngredientes(info)}
              </ul>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default CardBebida;
