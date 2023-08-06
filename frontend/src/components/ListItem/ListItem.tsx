import {FC} from "react";
import {StarOutlined} from "@ant-design/icons";

import {countingDates} from "../../utils/countingDates";
import {postAPI} from "../../services/StoryService";

import styles from "./ListItem.module.css";

interface IListItem {
  id: number;
}

const ListItem: FC<IListItem> = ({id}) => {
  const {data: post} = postAPI.useFetchPostQuery(id);

  return (
    <div className={styles.listItem}>
      {
        post
          ?
          <>
            <div className={styles.title}>{post.title}</div>
            <div className={styles.score}>{<StarOutlined />} {post.score}</div>
            <div>{countingDates(post.time)} {"by " + post.by}</div>
          </>
          :
          null
      }
    </div>
  );
}

export {ListItem};
