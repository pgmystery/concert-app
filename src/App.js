import React, {useState} from 'react';
import styled from 'styled-components/macro'
import ConcertList from './ConcertList';
import FilterBar from './FilterBar'
import mumford from './images/mumford.jpg'
import bishop from './images/bishop.webp'
import okkid from './images/okkid.jpg'
import frittenbude from './images/frittenbude.png'


export default function App() {

  const concerts= [
    {
      image: mumford ,
      artist: 'Mumford and sons',
      place: 'Mojo',
      date: '14.10.2019',
      date_data: '2019-10-14',
      styles: ['Rock', 'Indie', 'Folk']
    },
    {
  image: bishop,
      artist: 'Bishop briggs',
      place: 'Große Freiheit',
      date: '14.10.2020',
      date_data: '2020-10-14',
      styles: ['Rock', 'Indie']
    },
    {
  image: okkid,
      artist: 'Ok kid',
      place: 'Große Freiheit',
      date: '03.11.2019',
      date_data: '2019-11-03',
      styles: ['Rap', 'Indie', 'Folk']
    },
    {
  image: frittenbude,
      artist: 'Frittenbude',
      place: 'Mojo',
      date: '12.05.2019',
      date_data: '2019-05-12',
      styles: ['Rap', 'Pop', 'Rock']
    }
  ]

  const [filteredConcerts, setFilteredConcerts] = useState(concerts)

  function handleFilterChange(selectedFilter) {
setFilteredConcerts(concerts.filter(concert => {
      let isInFilter = false
      selectedFilter.forEach(filter => {
        concert.styles.includes(filter) && (isInFilter = true)
      })
      return isInFilter
    })
    )
  }


  return (
    <AppStyled>
      <FilterBar onFilterChange={handleFilterChange} tags={
        Array.from(concerts.reduce((pre, acc) => {
          acc.styles.forEach(tag => {
            pre.add(tag)
          })
          return pre
        }, new Set()))
      }></FilterBar>
      <ConcertList filteredConcerts={filteredConcerts}/>
    </AppStyled>
  );
}
const AppStyled = styled.div`
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  height: 100%;
`



