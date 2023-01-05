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
            Hi, I&apos;m Nguyen Tan Khoa, a two-year experience Developer specializing in Front-end web and Mobile
            development.
            <br />
            In a normal workflow, I receive Figma designs, split them into reusable parts, and make components based on
            them.
          </Typography.Paragraph>
        </Card>
      </InformationContainer>
    </div>
  );
}
