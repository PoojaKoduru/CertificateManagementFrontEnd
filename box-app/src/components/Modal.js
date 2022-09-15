import styles from './Modal.module.css'
function Modal(props){
    function cancelHandler(){
        props.onCancel();
    }
    function confirmHandler(){
        console.log("Box "+props.boxNumber+"will be removed later..");
    }
    return(
        <div className={styles.modal}>
            <p>Are you Sure?</p>
            <button className={styles.btn} onClick={cancelHandler}>Cancel</button>
            <button className={styles.btn} onClick={confirmHandler}>Confirm</button>
        </div>
    )
}

export default Modal;