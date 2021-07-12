import { TitleSession, InformationContainer } from 'components';
import { Tag, Card, Typography } from 'antd';
import { tagColor } from 'styles/theme';
import { Skill } from 'interfaces';

const data: Skill[] = [
  {
    title: 'Collaborate',
    tags: ['VS Code', 'Yarn', 'Husky', 'lint-staged', 'Prettier', 'Git Flow', 'Figma', 'Asana', 'Scrum Methodology'],
  },
  {
    title: 'English',
    tags: ['Excellent Listening & Reading skills', 'Good at Speaking & Writing'],
  },
  {
    title: 'HTML, CSS',
    tags: ['Flex', 'Grid', 'CSS Variable', 'Ant Design', 'Material-UI', 'styled components'],
  },
  {
    title: 'Javascript',
    tags: ['ES6 and above', 'Typescript', 'Ramda', 'IE11 compatible'],
  },
  {
    title: 'React / Next',
    tags: [
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
    tags: ['React Native Element', 'React Native SVG', 'React Navigation', 'Async Storage'],
  },
  {
    title: 'Linux',
    tags: ['Ubuntu', 'Pop!_OS', 'Arch Wiki', 'ZSH', 'nvm', 'Shell Script', 'Cron job'],
  },
  {
    title: 'Other stuff',
    tags: ['SailsJS', 'RabbitMQ', 'Arduino'],
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
          <Typography.Text>{item.title}: </Typography.Text>
          {item.tags.map((tech, index) => {
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
