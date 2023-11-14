import styles from "./index.module.scss";
import { FC } from "react";
interface IContainerProps {
  children: JSX.Element;
}
const Container: FC<IContainerProps> = ({ children }) => {
  return <section className={styles.section}>{children}</section>;
};
export default Container;
