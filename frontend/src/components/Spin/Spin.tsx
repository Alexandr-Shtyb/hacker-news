import {FC} from "react";
import {LoadingOutlined} from '@ant-design/icons';
import { Spin } from 'antd';

import styles from "./Spin.module.css";

interface ISpinner {
  fz: number;
}

const Spinner: FC<ISpinner> = ({fz}) => {
  const antIcon = <LoadingOutlined style={{ fontSize: fz }} spin />;

  return (
    <Spin className={styles.spin} indicator={antIcon} />
  );
}

export {Spinner};
