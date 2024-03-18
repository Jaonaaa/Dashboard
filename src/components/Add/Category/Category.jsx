import React from "react";
import useForm from "../../../hooks/useForm";
import Input from "../../../utilsComponents/Input/Input";
import AddForm from "../AddForm/AddForm";
import "./style.sass";
import { useMyNotifs } from "../../../utilsComponents/Notif/useNotifs";
import { alaivoPost } from "../../../utils/Alaivo";

const Category = () => {
  const { formData, handleInputForm } = useForm();
  const { addNotifs, notifs } = useMyNotifs();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData);
    let res = await alaivoPost("apollo/art/categories", JSON.stringify(formData), null, true);
    console.log(res);
    addNotifs(res.status.status, res.status.details, 2000);
  };

  return (
    <AddForm title="Category">
      {notifs.map((notif) => notif)}
      <form action="/" method="post" onSubmit={handleSubmit}>
        <Input name="nom" onChange={handleInputForm} title="Name" defaultValue={formData.nom} fullWidth type="text" />
        <button> Validate </button>
      </form>
    </AddForm>
  );
};

export default Category;
