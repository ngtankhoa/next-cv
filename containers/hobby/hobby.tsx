import { TitleSession, InformationContainer } from 'components';
import { Typography, Card } from 'antd';

const { Paragraph } = Typography;
export function Hobby() {
  return (
    <InformationContainer>
      <TitleSession>Hobby</TitleSession>
      <Card hoverable bordered={false}>
        <Paragraph>Walking, Traveling, Listening to Music</Paragraph>
      </Card>
    </InformationContainer>
  );
}
