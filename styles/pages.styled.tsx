import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100vw;
  padding: 10px;
  .avt {
    border-radius: 50%;
  }
  @media (min-width: 768px) {
    padding: 15px;
  }
  @media (min-width: 992px) {
    height: 100vh;
    .row-wrapper {
      height: 100%;
    }
    .main-content {
      max-height: 100%;
      overflow-y: scroll;
    }
  }
`;

export { Wrapper };
