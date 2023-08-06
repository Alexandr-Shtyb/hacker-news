import {FC} from "react";
import {Link} from "react-router-dom";

import {ListItem} from "../ListItem/ListItem";

interface IPostProps {
  id: number;
}

const Post: FC<IPostProps> = ({id}) => {

  return (
    <Link to={`/story/${id}`}>
      <ListItem id={id}/>
    </Link>
  );
}

export {Post};
