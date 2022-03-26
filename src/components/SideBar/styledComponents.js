import styled from 'styled-components'

export const SidebarContainer = styled.div`
  width: 250px;
  height: 100vh;
  flex-shrink: 0;
  border-right: 1px solid #d7dfe9;
  display: flex;
  padding-left: 24px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 15px;
`
export const SideBarLogo = styled.img`
  height: 48px;
`
export const SideBarHeadings = styled.h1`
  font-family: HK Grotesk;
  font-size: 12px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: 0.12px;
  color: ${props => props.color};
  margin-top: 20px;
`
export const SideBarLabels = styled.p`
  font-family: HK Grotesk;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: normal;
  color: #171f46;
  margin-top: 5px;
  margin-bottom: 5px;
  background-color: ${props => props.backgroundColor};
`
