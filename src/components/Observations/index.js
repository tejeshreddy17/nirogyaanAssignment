import React, {useState, useEffect} from 'react'

import {useTable} from 'react-table'

import Header from '../RequestHeader'

import {
  ObservationTableContainer,
  ObservationPageAppBackground,
  HeadingObservations,
  Styles,
} from './styledComponents'

function Table({columns, data}) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  })

  // Render the UI for your table
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>

      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => (
                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              ))}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

const Observations = () => {
  const [DetailsData, setData] = useState([])
  const columns = React.useMemo(
    () => [
      {
        Header: 'Title',
        accessor: 'title',
      },

      {
        Header: 'Reported at',
        accessor: 'posted_at',
      },
      {
        Header: 'Reported By',
        accessor: 'posted_by.profile_pic',
      },
      {Header: 'Comments Count', accessor: 'comments_count'},
      {Header: 'Post Content', accessor: 'post_content'},
    ],
    [],
  )
  const gettingData = async () => {
    const apiUrl =
      'https://y5764x56r9.execute-api.ap-south-1.amazonaws.com/mockAPI/posts'
    const options = {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)

    const data = await response.json()
    setData(data)
    console.log(data)
  }

  useEffect(() => {
    gettingData()
  }, [])

  return (
    <ObservationPageAppBackground>
      <Header logo text="Reporting Portal" />
      <ObservationTableContainer>
        <HeadingObservations>Observations Assigned to me</HeadingObservations>
        <Styles>
          <Table columns={columns} data={DetailsData} />
        </Styles>
      </ObservationTableContainer>
    </ObservationPageAppBackground>
  )
}

export default Observations
