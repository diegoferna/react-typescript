import React from "react";
import style from "./Botao.module.scss";

interface IProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}
// STATELESS USANDO FUNCTION COMPONENT
function Botao({ children, type, onClick }: IProps) {
  return (
    <button onClick={onClick} type={type} className={style.botao}>
      {children}
    </button>
  );
}

// STATE FULL COMPONENT USANDO CLASS COMPONENT
// class Botao extends React.Component<IProps> {
//   render() {
//     const { type = "button", onClick } = this.props;
//     return (
//       <button onClick={onClick} type={type} className={style.botao}>
//         {this.props.children}
//       </button>
//     );
//   }
// }

export default Botao;
