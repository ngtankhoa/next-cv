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
              08/2021 - 10/2024:
              <br />
              Legato Technologies Limited
            </Text>
            <br />
            Role: Front-end developer / Team Lead.
            <br />
            Technologies: React, Next.js, TypeScript, PWA Studio, working with Magento APIs, E-Commerce backend.
            <br />
            Key Responsibilities & Achievements:
            <ul>
              <li>
                Led the development of high-performance eCommerce solutions using PWA Studio, ensuring scalability,
                reliability, and efficiency across projects.
              </li>
              <li>
                Collaborated closely with multiple stakeholders, including Magento CMS, Android app, iOS app, Design
                teams, Project Managers, and other key stakeholders in both Vietnam and Hong Kong to ensure seamless
                integration and alignment across platforms.
              </li>
              <li>
                Managed a team of front-end developers, providing mentorship and technical guidance, conducting code
                reviews, and ensuring the delivery of high-quality, reusable components.
              </li>
              <li>
                Developed strong research skills, exploring new technologies and ensuring the application of best
                practices throughout the development lifecycle.
              </li>
              <li>
                Improved presentation and communication skills, enabling clear and effective collaboration with
                stakeholders and team members across different teams and roles in Vietnam and Hong Kong.
              </li>
            </ul>
            Project:
            <ul>
              <li>
                Kowloon Dairy: E-commerce websites and App for Kowloon Dairy, a milk brand in Hong Kong. Built using
                PWA-Studio.
              </li>
              <li>Green Common: Online Plant-based Grocery Store in Hong Kong. Built using PWA-Studio.</li>
              <li>
                Nefful: An eCommerce application with a membership system for Nefful company. Built using PWA-Studio.
              </li>
              <li>MRR: A front-end mobile application for MRR - Mobile Repair & Recycle.</li>
              <li>TOA-OMS: An Order Management System for Taste of Asia Group </li>
            </ul>
            References: <strong>Mr. Thanh Vo</strong>
            <br />
            <ul style={{ listStyleType: 'none' }}>
              <li>Assistant Software Manager</li>
              <li>Email: thanh.vo@legato.co</li>
              <li>Phone: +84 9 0405 4241</li>
            </ul>
          </Timeline.Item>
          <Timeline.Item
          // label='06/2020 - Current'
          >
            <Text strong>
              06/2020 - 08/2021:
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
              09/2018 - 09/2019
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
