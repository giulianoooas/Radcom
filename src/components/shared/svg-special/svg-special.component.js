import style from "./svg-special.component.css";

export const SvgSpecial = (props) => {
  const { color1, color2, width1, width2 } = props.colors;
  console.log(props);

  return (
    <div className="svg-special-container" style={style}>
      <div
        className="svg-special-border1"
        style={{
          backgroundColor: color1,
          width: width1 + "%",
        }}
      ></div>
      <div
        className="svg-special-border2"
        style={{
          backgroundColor: color2,
          borderBottom: `5rem solid ${color1}`,
          width: width2 + "%",
          borderRight: `${width2}vw solid transparent`,
        }}
      ></div>
      <div
        className="svg-special-border3"
        style={{
          backgroundColor: color1,
          borderTop: `5rem solid ${color2}`,
          width: width2 + "%",
          borderRight: `${width2}vw solid transparent`,
        }}
      ></div>
      <div
        className="svg-special-border1"
        style={{
          backgroundColor: color1,
          width: width1 + "%",
        }}
      ></div>
    </div>
  );
};
