import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'


export default function FilterBar ({onFilterChange}) {

const [filtersAreVisible, setFiltersAreVisible] = useState(false)

function handleFilterClick() {
  setFiltersAreVisible(!filtersAreVisible)
}

const [selectedFilter, setSelectedFilter] = useState([]
)

useEffect(() => {

  onFilterChange(selectedFilter)
}, [selectedFilter])

function handleInputChange(event) {
  event.target.checked
  ? setSelectedFilter([...selectedFilter, event.target.value])
  : setSelectedFilter([
    ...selectedFilter.slice(0, selectedFilter.indexOf(event.target.value)),
    ...selectedFilter.slice(selectedFilter.indexOf(event.target.value) + 1)
  ])
}


  return (
    <>
    <FilterBarStyled>
      <h3 onClick={handleFilterClick}>Add filter ... </h3>
      <h3>Sort by ... </h3>
    </FilterBarStyled>
    {filtersAreVisible && 
   <FilterStyled>
      <StyledLabel>Rock<input name="Genre" value="Rock" type="checkbox" onChange={handleInputChange}></input></StyledLabel>
        <StyledLabel>Pop<input name="Genre" value="Pop" type="checkbox" onChange={handleInputChange}></input></StyledLabel>
        <StyledLabel>Indie<input  name="Genre" value="Indie" type="checkbox" onChange={handleInputChange}></input></StyledLabel>
        <StyledLabel>Metall<input  name="Genre" value="Metall" type="checkbox" onChange={handleInputChange}></input></StyledLabel>
        <StyledLabel>Folk<input  name="Genre" value="Folk" type="checkbox" onChange={handleInputChange}></input></StyledLabel>
        <StyledLabel>Rap<input name="Genre" value="Rap" type="checkbox" onChange={handleInputChange}></input></StyledLabel>
 </FilterStyled>
}
</>
  )
}

const FilterBarStyled = styled.section`
display: flex;
justify-content: space-around;
background-color: white;
`
const FilterStyled = styled.section`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
background-color: white;
width: 100%;
`

const StyledLabel = styled.label`
padding: 10px;
`