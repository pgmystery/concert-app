import React from 'react'
import Concert from './Concert'
import styled from 'styled-components/macro'

export default function ConcertList({ filteredConcerts }) {
  console.log(filteredConcerts)
  return (
    <ConcertListStyled>
      {filteredConcerts.map(concert => (
        <Concert {...concert}/>
        ))}
    </ConcertListStyled>
  )
}


const ConcertListStyled = styled.main`
  padding: 20px;
  display: grid;
  align-content: flex-start;
  gap: 20px;
  background-color: #dbdfec;
`