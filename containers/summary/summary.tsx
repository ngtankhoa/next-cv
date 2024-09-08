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
            Hi, I&apos;m Nguyen Tan Khoa, a 6-year experienced Developer specializing in Front-end web and Mobile
            development.
            <br />
            In my typical workflow, I receive Figma designs, break them down into reusable components, and build the
            necessary parts based on these designs.
            <br />I have extensive experience in developing high-performance eCommerce websites using PWA Studio, which
            allows for creating fast, reliable, and scalable Progressive Web Apps.
          </Typography.Paragraph>
        </Card>
      </InformationContainer>
    </div>
  );
}
