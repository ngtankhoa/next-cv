import { Wrapper } from './title-session.styled';
import { Typography } from 'antd';
interface props {
  children: React.ReactChild;
  rightContent?: React.ReactChild;
}
export function TitleSession({ children, rightContent }: props) {
  return (
    <Wrapper>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography.Title level={5} style={{ marginBottom: '0.29rem' }}>
          {children}
        </Typography.Title>
        {rightContent}
      </div>
      <hr />
    </Wrapper>
  );
}
