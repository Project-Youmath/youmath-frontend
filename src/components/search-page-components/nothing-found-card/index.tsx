// import styles from "./card.mudule.scss";

import { NothingFoundIcon } from "../../ui/icons/ nothing-found-icon";

const NothingFoundCard = () => {
  return (
    <section
      style={{
        margin: 50,
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <NothingFoundIcon />
      <p>Попробуй сделать другой запрос</p>
    </section>
  );
};
export default NothingFoundCard;
