import {FC} from "react";
import {useNavigate, useParams} from "react-router";
import {Link} from "react-router-dom";
import {postAPI} from "../../services/StoryService";
import {Button, List, Typography} from "antd";
import {
  LeftOutlined,
  SelectOutlined,
  UndoOutlined
} from "@ant-design/icons";

import {Comment} from "../../components/Comment/Comment";
import {ListItem} from "../../components/ListItem/ListItem";
import {Spinner} from "../../components/Spin/Spin";
import {Error} from "../../components/Error/Error";

import styles from "./StoryPage.module.css";

const StoryPage: FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const {data: post, error, isFetching, isLoading, refetch} = postAPI.useFetchPostQuery(Number(id));
  const { Title } = Typography;

  const handleUpdateComments = () => {
    refetch();
  }

  return (
    <div className={styles.mainBlock}>
      <Button
        className={styles.btnBack}
        type="primary"
        icon={<LeftOutlined /> }
        onClick={() => navigate(-1)}
      >
        Back
      </Button>

      {error && <Error />}

      <div className={styles.itemBlock}>
        <ListItem id={Number(id)} />
      </div>


      {
        (post && post.url)
            ?
          <Link to={`${post.url}`}>
            <Button
              className={styles.btnMore}
              type="default"
              icon={<SelectOutlined />}
            >
              Read more:
            </Button>
          </Link>
          :
          <div className={styles.noCommentsBlock}>
            <Title className={styles.noCommentsText} level={3}>There is no link to the source...</Title>
          </div>
      }

      <div className={styles.blockComments}>
        <Title className={styles.blockCommentsText} level={2}>Comments: {post ? post.descendants : "0"}</Title>
      </div>

      <div className={styles.btnUpdateCommentsBlock}>
        {(isLoading || isFetching) ? <Spinner fz={24}/> : null}
        <Button
          className={styles.btnUpdateComments}
          type="primary"
          icon={<UndoOutlined /> }
          onClick={handleUpdateComments}
        >
        </Button>
      </div>

      <List>
        {
          (post && post.kids)
          ?
            post.kids.map(id => {
              return <Comment id={id} key={id} />
            })
          :
            <div className={styles.noCommentsBlock}>
              <Title className={styles.noCommentsText} level={3}>No Comments</Title>
            </div>
        }
      </List>
    </div>
  );
}

export {StoryPage};
