import React, { useEffect, useState, useRef } from 'react';
import classes from './Attachment.module.css';
import { attachment, trash } from '../shared/helpers/icons';
import Modal from './UI/Modal';
// import SVG from 'react-inlinesvg';
/**
 * @author
 * @function Attachment
 **/

const Attachment = (props) => {
  const [attachmentFiles, setAttachmentFiles] = useState([]);
  const [modal, setModal] = useState(false);
  const [list, setList] = useState([]);

  const handleFiles = (e) => {
    setAttachmentFiles([...attachmentFiles, e.target.files[0]]);
  };

  console.log('files', attachmentFiles);

  const hiddenFileInput = useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  const Toggle = () => setModal(!modal);

//   console.log(attachmentFiles.length);
  function handleRemove(index) {
    const newList = list.splice(index, 1);

    setList(newList);
  }
  return (
    <div className={classes.Attachment}>
      <div className={classes.attachmentInput}>
        <button onClick={handleClick} className={classes.attachmentBtn}>
          {attachmentFiles.length > 0 && (
            <div className={classes.ball}>
              <span>{attachmentFiles.length}</span>
            </div>
          )}
          <img src={attachment} alt="clip" />
        </button>
        <input
          type="file"
          name="attachmentFiles"
          style={{ display: 'none' }}
          ref={hiddenFileInput}
          onChange={handleFiles}
        />
        <button className={classes.filesButton} onClick={Toggle}>
          Ver archivos
        </button>
        <Modal show={modal} onConfirm={Toggle}>
          <ul className={classes.filesList}>
            {attachmentFiles.length > 0
              ? attachmentFiles.map((file, index) => (
                  <li key={index}>
                    {file.name}
                    {console.log(index)}
                    <span onClick={() => handleRemove(index)}>
                      <img src={trash} alt="clip" />
                    </span>
                  </li>
                ))
              : null}
          </ul>
        </Modal>
      </div>
    </div>
  );
};
export default Attachment;
