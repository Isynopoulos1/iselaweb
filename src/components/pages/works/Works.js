import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getTranslate } from "r1-localize";

//IMPORT COMPONENTS
import BtnFilter from "@elements/filters/BtnFilter";
import Card from "@elements/card/Card";
import SearchBar from "@elements/searchBar/SearchBar"

//IMPORT STYLES
import { WorkContainer, Filters, Covers, SearchProjects } from "./Works.styles";

// IMPORT DATA
import { projects, labels } from "@assets/data";

// Split on explicit delimiters instead of a \b regex: \b is ASCII-only, so accents and ñ
// would create false word boundaries inside tags like "Diseño" or "Animación".
const SEPARATORS = /[\s\-–—_/\\|.,;:!?¿¡()[\]{}'"“”‘’«»&+*@#]+/;
const SHORT_QUERY_LENGTH = 3;

const tokenize = text => {
  return text.toLowerCase().split(SEPARATORS).filter(Boolean);
};

const Works = () => {
  // HOOKS
  const translate = useSelector(state => getTranslate(state.localize));
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");

  // HANDLE FUNCTIONS
  const handleFilter = label => {
    return filter === label ? setFilter("") : setFilter(label);
  };

  const handleSearch = e => {
    setSearch(e.target?.value?.trim().toLowerCase());
  };

  const matchesTitle = title => {
    return search.length < SHORT_QUERY_LENGTH ? tokenize(title).includes(search) : title.toLowerCase().includes(search);
  };

  const matchesTags = tags => {
    return tags.filter(tag => labels.includes(tag)).some(tag => tokenize(translate(tag)).includes(search));
  };

  const matchesSearch = project => {
    return !search ? true : matchesTitle(project.title) || matchesTags(project.tags);
  };

  // RENDER FUNCTIONS
  const renderProjects = () => {
    return projects
      .filter(card => {
        return !filter ? card : card.tags.includes(filter);
      })
      .filter(matchesSearch)
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
