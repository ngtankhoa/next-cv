import { TitleSession, InformationContainer } from 'components';
import { Tag, Card, Typography } from 'antd';
import { tagColor } from 'styles/theme';
import { Skill } from 'interfaces';

const data: Skill[] = [
  {
    title: 'Collaborate',
    description: [
      'VS Code',
      'Yarn',
      'Husky',
      'lint-staged',
      'Prettier',
      'Git Flow',
      'Figma',
      'Asana',
      'Scrum Methodology',
    ],
  },
  {
    title: 'English',
    description: ['Excellent Listening & Reading skills', 'Good at Speaking & Writing'],
  },
  {
    title: 'HTML, CSS',
    description: ['Flex', 'Grid', 'CSS Variable', 'Ant Design', 'Material-UI', 'styled components'],
  },
  {
    title: 'Javascript',
    description: ['ES6 and above', 'Typescript', 'Ramda', 'IE11 compatible'],
  },
  {
    title: 'React / Next',
    description: [
      'Functional component',
      'Hook',
      'Context',
      'React Hook Form',
      'Apollo Client',
      'GraphQL Code Generator',
      'Vercel',
      'Dynamic page',
    ],
  },
  {
    title: 'React Native',
    description: ['React Native Element', 'React Native SVG', 'React Navigation', 'Async Storage'],
  },
  {
    title: 'Linux',
    description: ['Ubuntu', 'Pop!_OS', 'Arch Wiki', 'ZSH', 'nvm', 'Shell Script', 'Cron job'],
  },
  {
    title: 'Other stuff',
    description: ['SailsJS', 'RabbitMQ', 'Arduino'],
  },
];
export function Skills() {
  const colorLength = tagColor.length;
  let colorIndex = -1;

  return (
    <InformationContainer>
      <TitleSession>Skills</TitleSession>
      {data.map((item, index) => (
        <Card key={index} hoverable bordered={false}>
          <Typography.Text>{item.title}</Typography.Text>
          {item.description.map((tech, index) => {
            colorIndex++;
            if (colorIndex === colorLength) colorIndex = 0;
            return (
              <Tag key={index} color={tagColor[colorIndex]}>
                {tech}
              </Tag>
            );
          })}
        </Card>
      ))}
    </InformationContainer>
  );
}
