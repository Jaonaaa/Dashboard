import React, { useEffect, useState } from "react";
import AddForm from "../../Add/AddForm/AddForm";
import useForm from "../../../hooks/useForm";
import Input from "../../../utilsComponents/Input/Input";
import Select from "../../../utilsComponents/Select/Select";
import { alaivoGet, alaivoPost } from "../../../utils/Alaivo";
import { resizeFile } from "../../../utils/Files";
import { useMyNotifs } from "../../../utilsComponents/Notif/useNotifs";
import "./style.sass";

const AddExpo = () => {
  const { formData, handleInputForm } = useForm();
  const { addNotifs, notifs } = useMyNotifs();

  const { subject, categories, types } = useGetData();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.photo === undefined) addNotifs("error", "Please add a photo");
    if (formData.photo.length === 0) addNotifs("error", "Please add a photo");
    if (formData.date === undefined) {
      addNotifs("error", "Please add a date");
      return null;
    }

    let data = { ...formData };
    data.photo = await resizeFile(formData.photo[0]);
    console.log(formData);
    let res = await alaivoPost("apollo/art/expo", JSON.stringify(data), null, true);
    console.log(res);
    addNotifs(res.status.status, res.status.details, 2000);
  };

  return (
    <AddForm title="Add Exposition">
      {notifs.map((notif) => notif)}
      <form className="add_expo" action="/" method="post" onSubmit={handleSubmit}>
        <div className="row" style={{ display: "flex", alignItems: "space-between", gap: "1rem" }}>
          <Input name="nom" onChange={handleInputForm} title="Name" defaultValue={formData.nom} fullWidth type="text" />
          <Input name="date" onChange={handleInputForm} title="Date" defaultValue={formData.date} fullWidth type="date" />
        </div>

        <Select name={"sujetExpo"} fullWidth onChange={handleInputForm} title={"Subject exposition"} optionsType={subject} />
        <Select name={"type"} fullWidth onChange={handleInputForm} title={"Type"} optionsType={types} />
        <Select name={"categorie"} fullWidth onChange={handleInputForm} title={"Category"} optionsType={categories} />

        <Input name="photo" type="file" defaultValue={formData.photo && formData.photo.length > 0 ? formData.photo[0] : undefined} onChange={handleInputForm} title="Picture Event" />
        <button> Validate </button>
      </form>
    </AddForm>
  );
};

const useGetData = () => {
  const [subject, setSubject] = useState([]);
  const [types, setTypes] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getSubjects();
    getTypes();
    getCategories();
  }, []);

  const getSubjects = async () => {
    let res = await alaivoGet("apollo/art/sujetExpo", null, true);
    console.log(res);
    res = res.data.map((row) => {
      return {
        value: row,
        label: row.theme,
      };
    });
    setSubject(res);
  };

  const getTypes = async () => {
    let res = await alaivoGet("apollo/art/types", null, true);
    console.log(res);
    res = res.data.map((row) => {
      return {
        value: row,
        label: row.nom,
      };
    });
    setTypes(res);
  };

  const getCategories = async () => {
    let res = await alaivoGet("apollo/art/categories", null, true);
    console.log(res);
    res = res.data.map((row) => {
      return {
        value: row,
        label: row.nom,
      };
    });
    setCategories(res);
  };

  return { subject, types, categories };
};

export default AddExpo;
