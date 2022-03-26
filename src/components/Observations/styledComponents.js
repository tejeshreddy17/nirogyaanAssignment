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
