import React, { useEffect, useState } from "react";
import AddForm from "../AddForm/AddForm";
import Input from "../../../utilsComponents/Input/Input";
import useForm from "../../../hooks/useForm";
import { alaivoPost } from "../../../utils/Alaivo";
import { useMyNotifs } from "../../../utilsComponents/Notif/useNotifs";

const ArtisticGender = () => {
  const { formData, handleInputForm } = useForm();
  const { addNotifs, notifs } = useMyNotifs();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    let res = await alaivoPost("apollo/art/genres", JSON.stringify(formData), null, true);
    console.log(res);
    addNotifs(res.status.status, res.status.details, 2000);
  };

  return (
    <AddForm title="Artistic Gender">
      {notifs.map((notif) => notif)}
      <form action="/" method="post" onSubmit={handleSubmit}>
        <Input name="nom" onChange={handleInputForm} title="Name" defaultValue={formData.nom} fullWidth type="text" />
        <button> Validate </button>
      </form>
    </AddForm>
  );
};

export default ArtisticGender;
