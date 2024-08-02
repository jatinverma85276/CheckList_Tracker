import "./component.css";
import logo from "../assets/far-away-text-on-black-260nw-2387170439-removebg-preview.png";
import breif from "../assets/breif case.webp";
import coco from "../assets/coco-removebg-preview.png";

export const Header = () => {
  return (
    <>
      <div className="header">
        <img className="brief" src={breif} alt="" />
        <img src={logo} alt="" />
        <img className="coco" src={coco} alt="" />
      </div>
    </>
  );
};
