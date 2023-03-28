import { TitleSession, InformationContainer } from 'components';
import { Tag, Card, Typography } from 'antd';
import { tagColor } from 'styles/theme';
import { Skill } from 'interfaces';

const data: Skill[] = [
  {
    title: 'Collaborate',
    tags: ['VS Code', 'Yarn', 'Husky', 'lint-staged', 'Prettier', 'Git Flow', 'Figma', 'Asana', 'Scrum Methodology'],
    moreInfo:
      "I receive the design from the designer's Figma, analyze and split the project into tasks that follow Scrum Methodology and divide it to team's members using Asana/Trello/Jira. Then I create a codebase with plugins like Yarn, Husky, lint-staged, Prettier, Git Flow to ensure teamwork.",
  },
  {
    title: 'English',
    tags: ['Excellent Listening & Reading skills', 'Good at Speaking & Writing'],
    moreInfo:
      "I have Excellent Listening & Reading skills with the TOEIC certificate score of 835/990. My speaking and writing skill is good enough for verbal communication. In summary, I'm able to satisfy most requirements with acceptable and effective language.",
  },
  {
    title: 'Styling',
    tags: ['Flex', 'Grid', 'Tailwind CSS', 'Ant Design', 'Material-UI', 'styled components', 'React Native Element'],
    moreInfo: 'I can create beautiful responsive designs with the help of various UI libraries.',
  },
  {
    title: 'React / Next',
    tags: [
      'Typescript',
      'Next.js',
      'React',
      'React Native',
      'PWA Studio',
      'Format.JS',
      'Apollo Client',
      'Redux Toolkit',
      'Vercel',
      'React Hook Form',
      'React Navigation',
      'IE11 compatible',
      'PWA Studio',
      'React Hook Form',
    ],
    moreInfo:
      'I developed many websites using NextJS/React + Typescript, use Redux Toolkit for state management, communicate with GraphQL server using Apollo Client and deploy it to Vercel or VPS. I also have experience in Mobile Development using React Native.',
  },
  {
    title: 'Linux',
    tags: ['Ubuntu', 'Pop!_OS', 'Arch Wiki', 'ZSH', 'nvm', 'Shell Script', 'Cron job'],
    moreInfo: "It's my hobby. I usually develop on Linux Environment and have a fond of working with the terminal.",
  },
  {
    title: 'Other stuff',
    tags: ['RabbitMQ', 'Pusher', 'Arduino'],
  },
];
export function Skills() {
  const colorLength = tagColor.length;
  let colorIndex = -1;

  return (
    <InformationContainer>
      <TitleSession>Skills</TitleSession>
      {data.map((item, index) => (
        <Card key={index} bordered={false} bodyStyle={{ paddingBottom: 12 }}>
          <Typography.Text style={{ fontWeight: 'normal' }}>{item.title}: </Typography.Text>
          {item.tags.map((tech, index) => {
            colorIndex++;
            if (colorIndex === colorLength) colorIndex = 0;
            return (
              <Tag key={index} color={tagColor[colorIndex]} style={{ marginBottom: 3 }}>
                {tech}
              </Tag>
            );
          })}
          <Typography.Paragraph style={{ marginTop: '0.5rem' }}>{item.moreInfo}</Typography.Paragraph>
        </Card>
      ))}
    </InformationContainer>
  );
}
