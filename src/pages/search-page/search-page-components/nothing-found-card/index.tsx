import styles from "./index.module.scss";

import { NothingFoundIcon } from "../../../../components/ui/icons/ nothing-found-icon";

const NothingFoundCard = () => {
  return (
    <section className={styles.section}>
      <NothingFoundIcon />
      <p>Попробуй сделать другой запрос</p>
    </section>
  );
};
export default NothingFoundCard;
