import { FC } from "react";
interface IContainerProps {
  children: JSX.Element;
}
const Container: FC<IContainerProps> = ({ children }) => {
  return <section style={{ width: "80%", margin: "auto" }}>{children}</section>;
};
export default Container;
