import React, { useState } from "react";

import "./Filters.css";

const Filters = ({
  genderFilter,
  setGenderFilter,
  domainFilter,
  setDomainFilter,
  availabilityFilter,
  setAvailabilityFilter,
}) => {
  return (
    <div className="filters">
      <div className="gender-domain">
        <div>
          <label>Gender </label>
          <div className="filter fil1">
            <select
              id="gender"
              value={genderFilter}
              onChange={(e) => setGenderFilter(e.target.value)}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Bigender">Bigender</option>
              <option value="Agender">Agender</option>
              <option value="Genderqueer">Genderqueer</option>
              <option value="Non-binary">Non-binary</option>
              <option value="Polygender">Polygender</option>
            </select>
          </div>
        </div>
        <div>
          <label>Availability </label>
          <div className="filter fil3">
            <select
              id="available"
              value={availabilityFilter}
              onChange={(e) => setAvailabilityFilter(e.target.value)}
            >
              <option value="true">True</option>
              <option value="false">False</option>
            </select>
          </div>
        </div>
      </div>
      <div>
        <label>Domain </label>
        <div className="filter fil2">
          <select
            id="domain"
            value={domainFilter}
            onChange={(e) => setDomainFilter(e.target.value)}
          >
            <option value="IT">IT</option>
            <option value="Sales">Sales</option>
            <option value="Finance">Finance</option>
            <option value="Marketing">Marketing</option>
            <option value="Management">Management</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filters;
