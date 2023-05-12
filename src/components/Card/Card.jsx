import React, { useState } from "react";
import { BiMessageSquareAdd } from "react-icons/bi";

import "./Card.css";
import { useDispatch, useSelector } from "react-redux";
import { teamAction } from "../../store/slice/teamSlice";

const Card = ({ data }) => {
  const [color, setColor] = useState("");
  const dispatch = useDispatch();

  const members = useSelector((state) => state.team.members);
  const handleAddToTeam = (
    id,
    firstName,
    lastName,
    available,
    domain,
    email,
    avatar,
    gender
  ) => {
    dispatch(
      teamAction.addToTeam({
        id,
        firstName,
        lastName,
        available,
        domain,
        email,
        avatar,
        gender,
      })
    );
  };

  const isMemberSelected = (id) => {
    const member = members.find((member) => member.id === id);
    return member && member.selected;
  };
  return (
    <div className="card-wrapper">
      {data &&
        data.map((user) => (
          <div key={user.id} className="card-box">
            <div className="card-header">
              <img src={user.avatar} alt="avatar" />
              <p>
                {user.first_name} {user.last_name}
              </p>
            </div>
            <div className="card-details">
              <div className="card-gender">
                <p className="gender-label">Gender:</p>
                <p className="gender">{user.gender}</p>
              </div>
              <div className="card-domain">
                <p className="domain-label">Domain</p>
                <p className="domain">{user.domain}</p>
              </div>
              <div className="card-available">
                <p className="available-label">Available:</p>
                <p className="available">
                  {user.available === true ? "Yes" : "No"}
                </p>
              </div>
              <div className="card-email">
                <p className="email-label">Email:</p>
                <p className="email">{user.email}</p>
              </div>
              <button className="add-btn">
                <p
                  onClick={() =>
                    handleAddToTeam(
                      user.id,
                      user.first_name,
                      user.last_name,
                      user.available,
                      user.domain,
                      user.email,
                      user.avatar,
                      user.gender
                    )
                  }
                >
                  {isMemberSelected(user.id) ? "Added" : "Add to team"}
                </p>
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Card;
