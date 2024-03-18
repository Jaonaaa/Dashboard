import React from "react";
import ContentContainer from "../../ContentContainer/ContentContainer";
import Box from "../../../utilsComponents/Box/Box";
import "./style.sass";

const AddForm = ({ children, title = "" }) => {
  return (
    <ContentContainer>
      <div className="inner add_form">
        <div className="title_form">{title}</div>
        <Box className="form_add_container">{children}</Box>;
      </div>
    </ContentContainer>
  );
};

export default AddForm;
