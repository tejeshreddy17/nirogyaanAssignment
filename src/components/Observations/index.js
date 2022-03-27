import React, {useState, useEffect} from 'react'

import {useTable} from 'react-table'

import Loader from 'react-loader-spinner'

import Header from '../RequestHeader'

import {
  ObservationTableContainer,
  ObservationPageAppBackground,
  HeadingObservations,
  Styles,
  CellProfileContainer,
  CellProfilePic,
  ReactionIconCountContainer,
  ReactionCount,
  ReactionsIcon,
  Labels,
  LoaderContainer,
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
  const [loading, setLoading] = useState(true)

  const columns = React.useMemo(
    () => [
      {
        Header: 'Title',
        accessor: 'title',
      },

      {
        Header: 'Reported at',
        accessor: 'postedAt',
      },
      {
        Header: 'Reported By',
        accessor: 'postedBy',
        Cell: cell => {
          const {value} = cell
          const {username, profilePic} = value
          return (
            <CellProfileContainer>
              <CellProfilePic src={profilePic} />
              <p>{username}</p>
            </CellProfileContainer>
          )
        },
      },
      {Header: 'Comments Count', accessor: 'commentsCount'},
      {Header: 'Post Content', accessor: 'postContent'},
      {
        Header: 'Reactions',
        accessor: 'reactions.reactionsCount',
        Cell: cell => {
          const {value} = cell
          return (
            <ReactionIconCountContainer>
              <ReactionsIcon src="https://res.cloudinary.com/tejeshreddy17/image/upload/v1648167458/Icon_3x_wfomlz.png" />
              <ReactionCount>{value}</ReactionCount>
            </ReactionIconCountContainer>
          )
        },
      },
      {
        Header: 'Tags',
        accessor: 'tags',
        Cell: cell => {
          const {value} = cell
          return value.map(eachTag => (
            <Labels
              key={eachTag.tagName}
              backgroundColor="#f3fff8"
              color="#2dca73"
            >
              {eachTag.tagName}
            </Labels>
          ))
        },
      },
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
    const formattedData = data.map(eachData => ({
      commentsCount: eachData.comments_count,
      postContent: eachData.post_content,
      postId: eachData.post_id,
      postedAt: eachData.posted_at,
      reactions: {reactionsCount: eachData.reactions.reactions_count},
      title: eachData.title,
      postedBy: {
        profilePic: eachData.posted_by.profile_pic,
        userId: eachData.posted_by.user_id,
        username: eachData.posted_by.username,
      },
      tags: eachData.tags.map(eachTag => ({
        tagId: eachTag.tag_id,
        tagName: eachTag.tag_name,
      })),
    }))
    if (response.ok === true) {
      setData(formattedData)
      setLoading(false)
    }
  }

  useEffect(() => {
    gettingData()
  }, [])

  return (
    <ObservationPageAppBackground>
      <Header logo text="Reporting Portal" />
      <ObservationTableContainer>
        <HeadingObservations>Observations Assigned to me</HeadingObservations>
        {loading ? (
          <LoaderContainer>
            <Loader type="TailSpin" color="#4094EF" height={50} width={50} />
          </LoaderContainer>
        ) : (
          <Styles>
            <Table columns={columns} data={DetailsData} />
          </Styles>
        )}
      </ObservationTableContainer>
    </ObservationPageAppBackground>
  )
}

export default Observations
