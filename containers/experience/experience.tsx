import { TitleSession, InformationContainer } from 'components';
import { Timeline, Card } from 'antd';

export function Experience() {
    return (
        <InformationContainer>
            <TitleSession>Experience</TitleSession>
            <Card hoverable bordered={false}>
                <Timeline>
                    <Timeline.Item
                    // label='09/2018 - 09 2019'
                    >
                        09/2018 - 09 2019
                        <br />
                        Role: Interns, Back-end web developer
                        <br />
                        Knowledge achievement: HTML, CSS, JavaScript, SailsJS,
                        Arduino, RabbitMQ
                    </Timeline.Item>
                    <Timeline.Item
                    // label='06/2020 - Current'
                    >
                        06/2020 - Current
                        <br />
                        Role: Front-end, Mobile developer <br />
                        Knowledge achievement: React/Next, Typescript, React
                        Native
                    </Timeline.Item>
                </Timeline>
            </Card>
        </InformationContainer>
    );
}
