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
          // label='06/2020 - Current'
          >
            <Text strong>
              06/2020 - Current:
              <br />
              TGL Solutions
            </Text>
            <br />
            Role: Front-end, Mobile developer.
            <br />
            Knowledge achievement: React/Next, Typescript, React Native, Pusher.
            <br />
            Project:
            <ul>
              <li>
                Chubu/ Tokyo/ Chushikoku/ Tohoku Mirai Ichi: 4 E-commerce websites for Chubu, Tokyo, Chushikoku, Tohoku
                regions in Japan, build with IE11 browser compatible in mind.
              </li>
              <li>Direct Mail Service: a mail management website for teacher, student use in a University in Japan.</li>
              <li>Mirai Event Management: a website uses to manage events in Hokkaido</li>
              <li>
                Tool for Concert: a mobile app uses for sharing concert information, views and calculate ranking follow
                the ShinMasuzawa method.
              </li>
              <li>1on1-demo: an online booking system use for an aquarirum and a ghost house.</li>
            </ul>
          </Timeline.Item>
          <Timeline.Item
          // label='09/2018 - 09 2019'
          >
            <Text strong>
              09/2018 - 09 2019
              <br />
              First Interactive Technology
            </Text>
            <br />
            Role: Interns, Back-end web developer.
            <br />
            Knowledge achievement: HTML, CSS, JavaScript, SailsJS, Arduino, RabbitMQ.
            <br />
            Project:
            <ul>
              <li>Power Management system: a system for manually/automatic power on/off the equipment in an office.</li>
              <li>Lucky Draw: a lucky draw game for 8/3 holiday in Gigamall Phạm Văn Đồng.</li>
            </ul>
          </Timeline.Item>
        </Timeline>
      </Card>
    </InformationContainer>
  );
}
