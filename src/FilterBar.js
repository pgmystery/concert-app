import React, { useState } from 'react'
import styled from 'styled-components/macro'

export default function FilterBar () {

const [filtersAreVisible, setFiltersAreVisible] = useState(false)

function handleFilterClick() {
  setFiltersAreVisible(!filtersAreVisible)
}

  return (
    <>
    <FilterBarStyled>
      <h3 onClick={handleFilterClick}>Add filter ... </h3>
      <h3>Sort by ... </h3>
    </FilterBarStyled>
    {filtersAreVisible && 
    <FilterStyled>
      <StyledLabel>Rock<input type="checkbox"></input></StyledLabel>
      <StyledLabel>Pop<input type="checkbox"></input></StyledLabel>
      <StyledLabel>Indie<input type="checkbox"></input></StyledLabel>
      <StyledLabel>Metall<input type="checkbox"></input></StyledLabel>
      <StyledLabel>Folk<input type="checkbox"></input></StyledLabel>
      <StyledLabel>Rap<input type="checkbox"></input></StyledLabel>
    </FilterStyled>}
    </>


  )
}

const FilterBarStyled = styled.section`
display: flex;
justify-content: space-around;
background-color: white;
`
const FilterStyled = styled.form`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
background-color: white;
width: 100%;
`

const StyledLabel = styled.label`
padding: 10px;
`