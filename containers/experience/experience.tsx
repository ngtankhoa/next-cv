import { TitleSession, InformationContainer } from 'components';
import { Timeline, Card, Typography } from 'antd';

const { Text } = Typography;
export function Experience() {
  return (
    <InformationContainer>
      <TitleSession>Experience</TitleSession>
      <Card hoverable bordered={false}>
        <Timeline>
          <Timeline.Item
          // label='09/2018 - 09 2019'
          >
            <Text strong>09/2018 - 09 2019</Text>
            <br />
            Role: Interns, Back-end web developer
            <br />
            Knowledge achievement: HTML, CSS, JavaScript, SailsJS, Arduino, RabbitMQ
          </Timeline.Item>
          <Timeline.Item
          // label='06/2020 - Current'
          >
            <Text strong>06/2020 - Current</Text>
            <br />
            Role: Front-end, Mobile developer <br />
            Knowledge achievement: React/Next, Typescript, React Native
          </Timeline.Item>
        </Timeline>
      </Card>
    </InformationContainer>
  );
}
