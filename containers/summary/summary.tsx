import { TitleSession, InformationContainer } from 'components';
import { Card, Typography } from 'antd';
import { GithubOutlined } from '@ant-design/icons';

export function Summary() {
  return (
    <div>
      <InformationContainer>
        <TitleSession
          rightContent={
            <a href='https://github.com/ngtankhoa/next-cv' target='_blank' rel='noreferrer'>
              View my source code on <GithubOutlined /> Github
            </a>
          }>
          Summary
        </TitleSession>
        <Card hoverable bordered={false}>
          <Typography.Paragraph>
            <ul>
              <li>
                Hi, I&apos;m Nguyen Tan Khoa, a Developer with 6 years of experience specializing in Front-end web
                development and mobile development.
              </li>
              <li>
                I typically start by receiving Figma designs, breaking them down into reusable components, and building
                the necessary parts. I have extensive experience in developing high-performance eCommerce websites using
                PWA Studio, creating fast, reliable, and scalable Progressive Web Apps.
              </li>
              <li>
                For the past 3 years, I have been working remotely on PWA Studio projects, adapting effectively to
                remote work culture. I am proficient with collaboration tools and have honed strong self-management and
                communication skills to ensure effective teamwork and productivity in remote environments.
              </li>
            </ul>
          </Typography.Paragraph>
        </Card>
      </InformationContainer>
    </div>
  );
}
