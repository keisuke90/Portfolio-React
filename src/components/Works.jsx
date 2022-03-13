import React, { useState } from "react";
import { Modal } from "./Modal";
import Pic from "../images/macrorecipe.jpeg"


export const Works = () => {
  const [show, setShow] = useState(false)
  const openModal = () => {
    setShow(true)
  }
  return (
    <>
      <div className="works-content">
        <ul>
          <li>
            <div className="work" onClick={openModal}>
              <h3>MacroRecipe</h3>
              <img className="workimage" src={Pic} alt="workimage" />
              <p>マクロ栄養素（タンパク質、脂質、炭水化物）の量がひとめでわかるレシピサイト</p>
            </div>
            <Modal
              show={show}
              setShow={setShow}
              title={"MacroRecipe"}
              img={Pic}
              text={"MacroRecipeはマクロ栄養素（タンパク質、脂質、炭水化物）の量がひとめでわかるレシピサイトです。筋トレにハマり栄養管理の必要性を感じるも、クックパッド等のレシピサイトでは栄養素量まではわからず、自分で計算するのも面倒だと感じた経験からこのアプリケーションを作成しました。レシピ作成時に食材を選択することで、自動でマクロ栄養素量が計算されます。"}
              url={"https://www.macrorecipe.com/"}  
            />
          </li>
        </ul>
      </div>
    </>
  );
};

