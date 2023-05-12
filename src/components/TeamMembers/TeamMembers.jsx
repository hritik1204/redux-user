import React from "react";
import { useDispatch, useSelector } from "react-redux";

import "./TeamMembers.css";
import { teamAction } from "../../store/slice/teamSlice";

const TeamMembers = () => {
  const members = useSelector((state) => state.team.members);
  const dispatch = useDispatch();

  const handleRemoveToTeam = (id) => {
    dispatch(teamAction.removeToTeam(id));
  };

  return (
    <div className="team-wrapper">
      {members &&
        members.map((member) => (
          <div key={member.id} className="team-box">
            <div className="team-header">
              <img src={member.avatar} alt="avatar" />
              <p>
                {member.firstName} {member.lastName}
              </p>
            </div>
            <div className="team-details">
              <div className="team-gender">
                <p className="gender-label">Gender:</p>
                <p className="gender">{member.gender}</p>
              </div>
              <div className="team-domain">
                <p className="domain-label">Domain</p>
                <p className="domain">{member.domain}</p>
              </div>

              <div className="team-email">
                <p className="email-label">Email:</p>
                <p className="email">{member.email}</p>
              </div>
              <button className="remove-btn">
                <p onClick={() => handleRemoveToTeam(member.id)}>Remove</p>
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default TeamMembers;
