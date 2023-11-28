import React from "react";
import Modal from "../Modal";
import Box from "../../Box/Box";

import "./ValidationModal.sass";

const ValidationModal = ({ title = "Title", content = "Lorem", closer, callBack, icon }) => {
  return (
    <>
      <Modal>
        <Box>
          <div className="validation-container">
            {icon ? (
              <div className="status_container">
                <div className="icon"></div>
              </div>
            ) : (
              ""
            )}

            <div className="details_container">
              <div className="title"> {title} </div>
              <div className="content">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit e. Ipsum rerum voluptates nihil ullam non
                doloribus quia laudantium voluptatibus.
              </div>
              <div className="buttons">
                <button onClick={closer} className="cancel">
                  Cancel
                </button>
                <button onClick={callBack} className="confirm">
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default ValidationModal;
