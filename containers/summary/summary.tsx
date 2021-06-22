import { TitleSession, InformationContainer } from 'components';
import { Card, Typography } from 'antd';

export function Summary() {
  return (
    <div>
      <InformationContainer>
        <TitleSession>Summary</TitleSession>
        <Card hoverable bordered={false}>
          <Typography.Paragraph>
            I&apos;m a Mid-Level Web Developer specializing in Front-end web and Mobile development.
            <br />
            In a normal work flow, I receive design from Figma, split them into reusable parts and
            make components base on that.
          </Typography.Paragraph>
        </Card>
      </InformationContainer>
    </div>
  );
}
