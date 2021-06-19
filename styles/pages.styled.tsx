import styled from 'styled-components';

const Main = styled.div`
    min-height: 100vh;
    display: flex;
    flex-wrap: nowrap;
    gap: 15px;
    padding: 15px;
`;
const Sidebar = styled.div`
    flex: 2;
`;
const Content = styled.div`
    flex: 8;
`;

export { Main, Sidebar, Content };
