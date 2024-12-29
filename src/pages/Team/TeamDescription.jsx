import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';

const TeamDescription = () => {
    const {team} = useParams()
    const [teamDetails, setTeamDetails] = useState({})
    
    useEffect(() => {
        const fetchTeams = async () => {
          try {
            const response = await fetch(
              `https://www.thesportsdb.com/api/v1/json/3/searchteams.php?t=${team}`
            );
            const data = await response.json();
            setTeamDetails(data.teams[0]);
            console.log(data.teams[0]);
          } catch (error) {
            console.error(error);
          }
        };
        fetchTeams();
      }, [team]);

    return (
        <div className="container">
            <Link to={"/"} className="mx-auto d-block text-center"><HomeIcon /></Link>
            <img src={teamDetails.strFanart1} alt="" className="img-fluid my-5" />
            {/* <img src={teamDetails.strFanart2} alt="" className="img-fluid" /> */}
            <h2>{teamDetails.strTeam}</h2>
            <p>{teamDetails.strDescriptionEN}</p>
            <img src={teamDetails.strEquipment} alt="" className="img-fluid" />
            <h5>{teamDetails.strLeague}</h5>
            <h5>{teamDetails.strLocation}</h5>
            <img src={teamDetails.strLogo} alt="" className="mx-auto d-block img-fluid" />
            <h5>{teamDetails.strTeamAlternate}</h5>
            <img src={teamDetails.strBanner} alt="" className="mx-auto d-block img-fluid" />
            
        </div>
    );
};

export default TeamDescription;