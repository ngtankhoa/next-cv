import { Title } from './title-session.styled';

interface props {
  children: React.ReactChild;
}
export function TitleSession({ children }: props) {
  return (
    <div>
      <Title>{children}</Title>
      <hr />
    </div>
  );
}
