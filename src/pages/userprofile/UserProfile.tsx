import { useParams } from "react-router-dom";
function UserProfile() {
  const {id} = useParams();
  return <div>User ID: {id}</div>;
}

export  default  UserProfile;
