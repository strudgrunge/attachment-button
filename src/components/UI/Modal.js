import React from 'react';
import classes from './Modal.module.css';

/**
 * @author
 * @function Modal
 **/

const Modal = (props) => {
  return (
    <>
      {props.show && (
        <>
          <div className={classes.backdrop} onClick={props.onConfirm}></div>
          <div className={classes.container}>
            <header className={classes.header}>
              <h2>Lista de Archivos</h2>
            </header>
            <div className={classes.modal}>{props.children}</div>
          </div>
        </>
      )}
    </>
  );
};
export default Modal;
