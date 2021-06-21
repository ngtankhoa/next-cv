import { TitleSession, InformationContainer } from 'components';
import { Progress, Tag, Card, Typography } from 'antd';
import { tagColor } from 'styles/theme';

const data: { title: string; percent: number; description: string[] }[] = [
    {
        title: 'HTML, CSS',
        percent: 75,
        description: [
            'Flex',
            'Grid',
            'CSS Variable',
            'Ant Design',
            'Material-UI',
            'styled components',
        ],
    },
    {
        title: 'Javascript',
        percent: 75,
        description: [
            'ES6 and above',
            'Typescript',
            'Ramda',
            'IE11 compatible',
        ],
    },
    {
        title: 'React / Next',
        percent: 75,
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
        percent: 50,
        description: [
            'React Native Element',
            'React Native SVG',
            'React Navigation',
            'Async Storage',
        ],
    },
    {
        title: 'Linux',
        percent: 65,
        description: [
            'Ubuntu',
            'Pop!_OS',
            'Arch Wiki',
            'ZSH',
            'nvm',
            'Cron job',
        ],
    },
    {
        title: 'English',
        percent: Math.ceil((835 / 990) * 100),
        description: ['Reading & Listening liscense'],
    },
    {
        title: 'Collaborate',
        percent: 65,
        description: ['Git Flow', 'Figma', 'Asana', 'Scrum Methodology'],
    },
    {
        title: 'Other stuff',
        percent: 50,
        description: ['SailsJS', 'RabbitMQ', 'Arduino'],
    },
];
export function Skills() {
    return (
        <InformationContainer>
            <TitleSession>Skills</TitleSession>
            {data.map((item) => (
                <Card hoverable bordered={false}>
                    <Typography.Text>{item.title}</Typography.Text>
                    <Progress percent={item.percent} />
                    {item.description.map((tech, index) => (
                        <Tag color={tagColor[index]}>{tech}</Tag>
                    ))}
                </Card>
            ))}
        </InformationContainer>
    );
}
