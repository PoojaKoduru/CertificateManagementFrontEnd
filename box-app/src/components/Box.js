import { useState } from 'react'
import styles from './Box.module.css'
import Modal from './Modal'
import Backdrop from './Backdrop';

function Box(props){
  const [modalIsOpen,setModalIsOpen] = useState(false);

  function clickHandler(){
    setModalIsOpen(true);
  }

  function closeModalHandler(){
    setModalIsOpen(false);
  }
    return(
        <div className={styles.box}>
        <h2>Box {props.number}</h2>
        <button className={styles.btn} onClick={clickHandler}>Delete</button>
        {modalIsOpen ? <Modal onCancel={closeModalHandler} boxNumber={props.number}/>:null}
        {modalIsOpen ? <Backdrop onCancel ={closeModalHandler}/>:null}
      </div>
    )
}

export default Box