import React from "react";

import "./Team.css";
import TeamMembers from "../../components/TeamMembers/TeamMembers";

const Team = () => {
  return (
    <div className="team">
      <div className="team-content">
        <h1>Team Members</h1>
      </div>
      <div className="team-card">
        <TeamMembers />
      </div>
    </div>
  );
};

export default Team;
