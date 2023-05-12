import React, { useEffect, useState } from "react";
import { FcPrevious, FcNext } from "react-icons/fc";

import Search from "../../components/Search/Search";
import Filters from "../../components/Filters/Filters";
import Card from "../../components/Card/Card";

import "./Home.css";

const Home = ({
  state,
  lastPostIndex,
  firstPostIndex,

  postPerPage,
  currentPage,
  setCurrentPage,
}) => {
  const [search, setSearch] = useState("");
  const [searchFilter, setSearchFilter] = useState([]);

  const [genderFilter, setGenderFilter] = useState("");
  const [domainFilter, setDomainFilter] = useState("");
  const [availabilityFilter, setAvailabilityFilter] = useState("");

  useEffect(() => {
    console.log(genderFilter);
    const timeoutId = setTimeout(() => {
      const filtered = state.filter((user) => {
        return search
          ? user.first_name.toLowerCase().includes(search.toLowerCase()) ||
              user.last_name.toLowerCase().includes(search.toLowerCase())
          : true;
      });
      const genderFiltered = genderFilter
        ? filtered.filter((user) => user.gender === genderFilter)
        : filtered;
      const domainFiltered = domainFilter
        ? genderFiltered.filter((user) => user.domain === domainFilter)
        : genderFiltered;
      const availabilityFiltered = availabilityFilter
        ? domainFiltered.filter(
            (user) =>
              user.available.toString() === availabilityFilter.toString()
          )
        : domainFiltered;
      setSearchFilter(availabilityFiltered);
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [search, state, genderFilter, domainFilter, availabilityFilter]);

  const currentPosts = searchFilter.slice(firstPostIndex, lastPostIndex);

  const pages = [];
  const totalPosts = searchFilter.length;
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pages.push(i);
  }
  return (
    <>
      <div className="home">
        <div className="home-content">
          <Search search={search} setSearch={setSearch} />
          <Filters
            domainFilter={domainFilter}
            setDomainFilter={setDomainFilter}
            genderFilter={genderFilter}
            setGenderFilter={setGenderFilter}
            availabilityFilter={availabilityFilter}
            setAvailabilityFilter={setAvailabilityFilter}
          />
        </div>
        <div className="user-card">
          <Card data={currentPosts} />
          <div className="prev-next-btn">
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              className="btn"
              disabled={currentPage === 1}
            >
              <FcPrevious size={20} color="white" />
            </button>
            <p> {currentPage}</p>
            <button
              onClick={() =>
                setCurrentPage(
                  currentPage < pages.length ? currentPage + 1 : currentPage
                )
              }
              className="btn"
            >
              <FcNext size={20} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
