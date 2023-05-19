import React, { useState } from "react";

//IMPORT COMPONENTS
import BtnFilter from "@elements/filters/BtnFilter";
import Card from "@elements/card/Card";
import SearchBar from "@elements/searchBar/SearchBar"

//IMPORT STYLES
import { WorkContainer, Filters, Covers, SearchProjects } from "./Works.styles";

// IMPORT DATA
import { projects, labels } from "@assets/data";

const Works = () => {
  // HOOKS
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");

  // HANDLE FUNCTIONS
  const handleFilter = label => {
    return filter === label ? setFilter("") : setFilter(label);
  };

  const handleSearch = e => {
    setSearch(e.target?.value?.toLowerCase());
  };

  // RENDER FUNCTIONS
  const renderProjects = () => {
    return projects
      .filter(card => {
        return !filter ? card : card.tags.includes(filter);
      })
      .filter(project => project.title.toLowerCase().includes(search))
      .map((card, i) => {
        return <Card key={i} cover={card.cover} title={card.title} href={card.href} />;
      });
  };
  

  // MAIN RENDER
  return (
    <WorkContainer>
      <Filters>
        {labels?.map((label, i) => {
          return <BtnFilter key={i} label={label} onClick={() => handleFilter(label)} filter={filter} />;
        })}
      </Filters>
      <SearchProjects>
        <SearchBar handleSearch={handleSearch} />
      </SearchProjects>

      <Covers>{renderProjects()}</Covers>
    </WorkContainer>
  );
};

export default Works;
