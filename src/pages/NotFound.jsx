import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
export default function NotFound() {
  return (
    <div>
      <h1>404 Not Found</h1>
      <Link to={"/"}>Go Home <HomeIcon /></Link>
    </div>
  );
}
