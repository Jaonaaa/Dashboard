import React, { useEffect, useState } from "react";
import ArrowRight from "../../../assets/svg/ArrowRight";
import LineSlide from "../../../utilsComponents/Container/LineSlide/LineSlide";
import { URL, alaivoGet } from "../../../utils/Alaivo";
import "./ActuSwiper.sass";
import Loader from "../../../utilsComponents/Hider/Loader/Loader";

const ActuSwiper = () => {
  const { expo, loading } = useGetData();
  const [percent, setPercent] = useState(0);

  const next = () => {
    const next = percent + 100;
    if (next >= 100 * expo.length) return;
    setPercent(next);
  };

  const back = () => {
    const back = percent - 100;
    if (back < 0) return;
    setPercent(percent - 100);
  };

  return (
    <div className="actu_swiper_container">
      <div className="counter_part">
        {expo.map((c, key) => (
          <div
            className={`round ${key === percent / 100 ? "on" : ""}`}
            onClick={() => {
              setPercent(key * 100);
            }}
            key={key}
          ></div>
        ))}
      </div>
      {loading && (
        <div className="loader_swiper">
          <Loader size="3.55rem" white />
        </div>
      )}
      <div className="switcher_part">
        <div className="go_left" onClick={back}>
          <ArrowRight />
        </div>
        <div className="go_right" onClick={next}>
          <ArrowRight />
        </div>
      </div>

      {expo.map((c, key) => (
        <div className="block_actu" key={key} style={{ transform: `translateX(-${percent}%)` }}>
          <div className="actu_pic">
            <img src={URL + c.picture} />
          </div>
          <div className="about">
            <LineSlide>
              <div className="categorie">{c.type}</div>
            </LineSlide>
            <LineSlide>
              <div className="title_about">{c.title}</div>
            </LineSlide>
            <LineSlide>
              <div className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis et vero quibusdam explicabo ab consectetur facilis. Soluta impedit nostrum libero, commodi quo voluptatem porro
                fugiat! Assumenda asperiores saepe facere maxime.
              </div>
            </LineSlide>
          </div>
          <div className="overlay"></div>
        </div>
      ))}
    </div>
  );
};

const useGetData = () => {
  const [expo, setExpo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getExpo();
  }, []);

  const getExpo = async () => {
    setLoading(true);
    let res = await alaivoGet("apollo/art/expo/prochain", null, true);
    res = res.data.map((row) => ({
      date: row.date ? row.date.replace("/-/g", "/") : "Unknow",
      picture: row.photo,
      title: row.nom,
      type: row.type.nom,
      category: row.sujetExpo.theme,
    }));

    console.log(res);
    setLoading(false);
    setExpo(res);
  };

  return { expo, loading };
};

export default ActuSwiper;
