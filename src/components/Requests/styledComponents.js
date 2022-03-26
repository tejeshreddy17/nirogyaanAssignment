import styled from 'styled-components'

export const RequestPageAppBackground = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100vh;
`

export const RequestCardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 20px;
  flex-wrap: wrap;
  align-items: flex-start;
  overflow-y: auto;
  background-color: #fbfbfb;
`
export const RequestsAndHeaderContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex-grow: 1;
  background-color: #fbfbfb;
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
export const HeadingRequestsPage = styled.h1`
  font-family: HK Grotesk;
  font-size: 32px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  color: #171f46;
  margin-left: 35px;
  margin-bottom: 0px;
`
