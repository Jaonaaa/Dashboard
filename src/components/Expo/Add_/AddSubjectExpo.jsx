import React from "react";
import useForm from "../../../hooks/useForm";
import Input from "../../../utilsComponents/Input/Input";
import AddForm from "../../Add/AddForm/AddForm";
import { useMyNotifs } from "../../../utilsComponents/Notif/useNotifs";
import { alaivoPost } from "../../../utils/Alaivo";
import "./style.sass";

const AddSubjectExpo = () => {
  const { formData, handleInputForm } = useForm();
  const { addNotifs, notifs } = useMyNotifs();
  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await alaivoPost("apollo/art/sujetExpo", JSON.stringify(formData), null, false);
    addNotifs(res.status.status, res.status.details, 2000);
  };

  return (
    <AddForm title="Subject Exposition">
      {notifs.map((notif) => notif)}
      <form action="/" method="post" onSubmit={handleSubmit}>
        <Input
          name="theme"
          onChange={handleInputForm}
          title="Name of theme"
          defaultValue={formData.theme}
          fullWidth
          type="text"
        />
        <button> Validate </button>
      </form>
    </AddForm>
  );
};

export default AddSubjectExpo;
