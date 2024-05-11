import styled from "styled-components"

export const Tabs = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 24px 0px;
    gap: 8px;
`

export const Tab = styled.span<{ isActive: boolean }>`
    text-align: center;
    text-transform: uppercase;
    font-size: 12px;
    color: ${props => props.isActive ? props.theme.background : props.theme.primary};
    background-color: ${props => props.isActive ? props.theme.secondary : props.theme.background};
    padding: 8px 0px;
    border-radius: 8px;

    a {
        display: block;
    }
`