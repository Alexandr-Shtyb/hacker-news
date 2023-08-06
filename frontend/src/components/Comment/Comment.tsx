import {FC, useState} from "react";
import {Button, Card} from 'antd';
import {MessageOutlined} from "@ant-design/icons";

import {Spinner} from "../Spin/Spin";
import {ListComments} from "../ListComments/ListComments";
import {Error} from "../Error/Error";

import {commentAPI} from "../../services/CommentService";
import {countingDates} from "../../utils/countingDates";
import parse from 'html-react-parser';

import styles from "./Comment.module.css";


interface IComment {
  id: number;
}

const Comment: FC<IComment> = ({id}) => {
  const {data: comment, isFetching, isLoading, error} = commentAPI.useFetchRootCommentsQuery(Number(id));
  const [visibleList, setVisibleList] = useState(false);

  const handleShowListComments = () => {
    setVisibleList(visibleList => !visibleList);
  }

  return (
    <>
      <div>
        {error && <Error />}
        {(isLoading || isFetching) ? <Spinner fz={24}/> : null}
        {
          comment
          ?
            <div className={styles.blockComment}>
              <Card title={comment.by} cover>
                <div className={styles.textComment}>{parse(`${comment.text}`)}</div>
                <div className={styles.footerComment}>
                  <div className={styles.timeComment}>{countingDates(comment.time)}</div>
                  <div>
                    <Button
                      type="primary"
                      icon={<MessageOutlined />}
                      onClick={handleShowListComments}
                    >
                      {comment.kids ? `${comment.kids.length}` : "0"}
                    </Button>
                  </div>
                </div>
              </Card>
              {visibleList ? <ListComments kids={comment.kids} /> : null}
            </div>
          :
          null
        }
      </div>
    </>
  );
}

export {Comment};
