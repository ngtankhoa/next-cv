import { TitleSession, InformationContainer } from 'components';
import { List, Typography } from 'antd';

const { Paragraph } = Typography;
const { Item } = List;
const { Meta } = Item;
export function Experience() {
    return (
        <InformationContainer>
            <TitleSession>Experience</TitleSession>
            <List>
                <Item>
                    <Meta
                        title='06/2020 - Current: TGL Solutions'
                        description={
                            <Paragraph>
                                Role: Front-end, Mobile developer <br />
                                Knowledge achievement: React/Next, Typescript,
                                React Native
                            </Paragraph>
                        }
                    />
                </Item>
                <Item>
                    <Meta
                        title='09/2018 - 09/2019: First Interactive Technology'
                        description={
                            <>
                                <Paragraph>
                                    Role: Interns, Back-end web developer
                                    <br />
                                    Knowledge achievement: HTML, CSS,
                                    JavaScript, SailsJS, Arduino, RabbitMQ
                                </Paragraph>
                            </>
                        }
                    />
                </Item>
            </List>
        </InformationContainer>
    );
}
