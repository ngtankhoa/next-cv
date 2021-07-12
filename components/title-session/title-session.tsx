import { Wrapper } from './title-session.styled';
import { Typography } from 'antd';
interface props {
  children: React.ReactChild;
}
export function TitleSession({ children }: props) {
  return (
    <Wrapper>
      <Typography.Title level={5}>{children}</Typography.Title>
      <hr />
    </Wrapper>
  );
}
