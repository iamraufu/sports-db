import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { Link } from "react-router-dom";

export default function CardDetails({ team }) {
  return (
    <div className="col-md-3 my-3">
      <Card sx={{ maxWidth: 240 }} className="mx-auto d-block">
        <Link to={`${team.strTeam}`}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={team.strBadge}
              alt={team.strTeam}
              className="mx-auto d-block p-3"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className="text-center text-muted"
              >
                {team.strTeam}
              </Typography>
              {/* <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {team.strDescriptionEN}
          </Typography> */}
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>
    </div>
  );
}
