import {FC} from "react";
import {Comment} from "../Comment/Comment";

import styles from "./ListComments.module.css";

interface IListComments {
  kids: number[];
}

const ListComments: FC<IListComments> = ({kids}) => {

  return (
    <div className={styles.listComments}>
      {
        (kids && kids.length > 0)
          ?
          kids.map(item => {
            return <Comment id={item} key={item} />
          })
          :
          null
      }
    </div>
  );
}

export {ListComments};
