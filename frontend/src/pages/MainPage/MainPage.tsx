import {FC, useState} from "react";
import {Space, Typography, Button, List} from 'antd';
import {UndoOutlined} from '@ant-design/icons';
import {postAPI} from "../../services/StoryService";

import {Post} from "../../components/Post/Post";
import {Spinner} from "../../components/Spin/Spin";
import {Error} from "../../components/Error/Error";

import styles from './MainPage.module.css';


const { Title } = Typography;

const MainPage: FC = () => {
  const [limit, setLimit] = useState(100);
  const {data: posts, error, isFetching, isLoading, refetch} = postAPI.useFetchAllPostsQuery(limit, {
    pollingInterval: 60000
  });

  const handleUpdate = () => {
    refetch();
  }

  return (
    <>
      <Space className={styles.mainTitle}>
        <Title className={styles.titleText}>Hacker News Info</Title>
      </Space>

      <Space className={styles.btn} align={"center"}>
        <Button
          type="primary"
          shape="round"
          size="large"
          icon={<UndoOutlined />}
          onClick={handleUpdate}
        >
          Update list
        </Button>
      </Space>

      {(isLoading || isFetching) && <Spinner fz={48}/>}

      <List
        itemLayout="vertical"
        size="large"
        className={isFetching ? `${styles.list} ${styles.noneList}` : `${styles.list}`}
      >
        {error && <Error />}
        {posts && posts.map(item => {
          return <Post key={item} id={item} />
        })}
      </List>
    </>
  );
}

export {MainPage};
