import { TitleSession, InformationContainer } from 'components';
import { Tag, Card, Typography } from 'antd';
import { tagColor } from 'styles/theme';
import { Skill } from 'interfaces';

const data: Skill[] = [
  {
    title: 'Collaborate',
    tags: ['VS Code', 'Yarn', 'pnpm', 'Husky', 'lint-staged', 'Prettier', 'Git Flow', 'Figma', 'Scrum Methodology'],
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
    tags: ['Flex', 'Grid', 'Tailwind CSS', 'shadcn/ui'],
    moreInfo: 'I can create beautiful responsive designs with the help of various UI libraries.',
  },
  {
    title: 'Frontend Libraries / Frameworks',
    tags: [
      'Astro',
      'Typescript',
      'Next.js',
      'React',
      'PWA Studio',
      'GraphQL',
      'React Context',
      'Firebase',
      'Workbox',
      'Progressive Web Applications (PWAs)',
      'JSON Web Tokens',
    ],
    moreInfo:
      'I have developed many websites using Next.js/React + TypeScript, communicating with GraphQL servers via Apollo Client and deploying them to Vercel or VPS. I also have experience in mobile development using React Native and have used Astro to build high-performance websites.',
  },
  {
    title: 'Linux',
    tags: ['Ubuntu', 'ZSH', 'Shell Script', 'Cron job'],
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
