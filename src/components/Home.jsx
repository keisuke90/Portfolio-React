import React from "react";
import Pic from "../images/picture.jpeg"

export const Home = () => {
  return (
    <>
        <div className="main-content">
            <div className="introduce-wrapper">
                <img className="homeimage" src={Pic} alt="homeimage" />
                <div className="introduce-content">
                    <p>桑原 佳佑（くわはら けいすけ）</p>
                    <p>年齢:29歳</p>
                    <p>経歴：立命館大学 政策科学部<br></br>伊藤忠建材株式会社（現在）</p>
                    <p>趣味:パワーリフティング、ゴルフ</p>
                    <p>このホームページはSPAの学習のためReactでつくりました（制作途中）。
                    </p>
                </div>
            </div>
        </div>
        <div className="skill">
            <div className="skill-wrapper">
                <h3>SKILLS</h3>
                <ul className="skill-box">
                    <li>HTML（基礎）</li>
                    <li>CSS（基礎）</li>
                    <li>Bootstrap（基礎）</li>
                    <li>JavaScript（基礎）</li>
                    <li>jQuery（基礎）</li>
                    <li>React（基礎）</li>
                    <li>Ruby（基礎）</li>
                    <li>Ruby on Rails（基礎）</li>
                    <li>Python（基礎）</li>
                    <li>Django（基礎）</li>
                    <li>Docker（基礎）</li>
                </ul>
            </div>
        </div>
    </>
  );
};