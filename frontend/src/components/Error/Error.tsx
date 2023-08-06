import {FC} from "react";

import styles from "./Error.module.css";

const Error: FC = () => {
  return (
    <div className={styles.errorBlock}>
      <h2 className={styles.errorText}>Произошла ошибка при загрузке</h2>
    </div>

  );
}

export {Error};
