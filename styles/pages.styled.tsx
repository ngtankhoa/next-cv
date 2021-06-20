import styled from 'styled-components';

const Main = styled.div`
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    padding: 15px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;
const Sidebar = styled.div`
    flex: 2;
`;
const Content = styled.div`
    flex: 8;
    overflow-y: auto;
`;

export { Main, Sidebar, Content };
