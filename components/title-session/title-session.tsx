import { Title } from './title-session.styled';

type props = {
  children: React.ReactChild;
};
export function TitleSession({ children }: props) {
  return (
    <div>
      <Title>{children}</Title>
      <hr />
    </div>
  );
}
