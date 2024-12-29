import { useEffect, useState } from "react";
import CardDetails from "./CardDetails";
import LoadSkeleton from "../LoadSkeleton";

const TeamCard = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await fetch(
          "https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=English%20Premier%20League"
        );
        const data = await response.json();
        setTeams(data.teams);
        console.log(data.teams);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTeams();
  }, []);

  return (
    <div className="container">
      <div className="row my-5">
        {teams.length > 0 ? (
          teams.map((team) => 
          <CardDetails team={team} key={team.idTeam} />
        )
        ) : (
          <div className="d-flex">
              <LoadSkeleton />
              <LoadSkeleton />
              <LoadSkeleton />
              <LoadSkeleton />
            
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamCard;
