import styled from 'styled-components'

export const ObservationTableContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 20px 45px 20px 45px;
  align-items: flex-start;
  overflow-y: auto;
  background-color: #fbfbfb;
  flex-grow: 1;
`
export const ObservationPageAppBackground = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
export const HeadingObservations = styled.h1`
  font-family: HK Grotesk;
  font-size: 32px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  color: #0b69ff;
`
export const Styles = styled.div`
  table {
    border-spacing: 0;
    border: 1px solid #d7dfe9;
    background-color: white;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th {
      color: #171f46;
      font-family: HK Grotesk;
      font-size: 14px;
      font-weight: 800;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.33;
      letter-spacing: 0.12px;
      border-bottom: 1px solid #d7dfe9;
      border-right: 1px solid #d7dfe9;
      text-align: center;
      margin: 0;
      padding: 10px;
    }
    :last-child {
      border-right: 0;
    }
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid #d7dfe9;
      border-right: 1px solid #d7dfe9;
      text-align: center;
      font-family: HK Grotesk;
      font-size: 12px;
      font-weight: 600;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.33;
      letter-spacing: normal;
      color: #7e858e;
      padding: 10px;
    }
  }
`
export const CellProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  min-width: 170px;

  align-self: stretch;
`
export const CellProfilePic = styled.img`
  height: 38px;
  width: 38px;
  margin-right: 15px;
  margin-left: 15px;

  border-radius: 19px;
`
export const ReactionIconCountContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const ReactionsIcon = styled.img`
  height: 16px;
`
export const ReactionCount = styled.p`
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: #171f46;
  font-weight: 500;
  margin: 0px 0px 4px 0px;
  background-color: red;
  height: 14px;
  width: 14px;
  border-radius: 6px;
  color: white;
  margin-bottom: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Labels = styled.p`
  padding: 8px 10px 8px 10px;
  color: ${props => props.color};
  background-color: ${props => props.backgroundColor};
  font-family: Rubik;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  margin-right: 10px;
  border-radius: 5px;
`
export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fbfbfb;
  flex-grow: 1;
  align-self: stretch;
  width: 100%;
  height: 100%;
`
