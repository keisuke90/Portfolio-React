import React from "react";
import Pic from "../images/picture.JPG"

export const Home = () => {
  return (
    <>
        <div className="main-content">
            <div className="introduce-wrapper">
                <img className="image" src={Pic} alt="Image" />
                <div className="introduce-content">
                    <p>桑原 佳佑（くわはら けいすけ）</p>
                    <p>年齢:29歳</p>
                    <p>経歴：立命館大学 政策科学部<br></br>伊藤忠建材株式会社（現在）</p>
                    <p>趣味:パワーリフティング、ゴルフ</p>
                    <p>このホームページはSPAの学習のためReactでつくりました。
                    </p>
                </div>
            </div>
        </div>
    </>
  );
};