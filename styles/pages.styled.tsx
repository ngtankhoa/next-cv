import styled from 'styled-components';

const Wrapper = styled.div`
  .row-wrapper {
    padding: 10px;
  }
  @media (min-width: 768px) {
    .row-wrapper {
      padding: 15px;
    }
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
