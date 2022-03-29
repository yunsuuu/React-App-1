import { useParams } from "react-router-dom";

function Detail() {
  const {id} = useParams();
  console.log({id});
  return <h2>Detail</h2>
}

export default Detail;