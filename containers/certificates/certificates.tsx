import { TitleSession, InformationContainer } from 'components';
import { List, Typography, Progress, Card } from 'antd';

const { Item } = List;
const { Meta } = Item;
export function Certificates() {
    return (
        <InformationContainer>
            <TitleSession>Certificates</TitleSession>
            <Card
                hoverable
                bodyStyle={{
                    display: 'flex',
                    alignItems: 'center',
                }}
                bordered={false}
            >
                <Progress
                    percent={(835 / 990) * 100}
                    format={() => '835'}
                    type='dashboard'
                />
                <Typography.Paragraph style={{ marginLeft: 10 }}>
                    <Typography.Text strong>TOEIC</Typography.Text>
                    <br />
                    Skills: Reading, Listening <br />
                    Score: 835 / 990
                </Typography.Paragraph>
            </Card>
            {/* <List>
                <Meta
                    avatar={
                        <Progress
                            percent={(835 / 990) * 100}
                            format={() => '835'}
                            type='dashboard'
                        />
                    }
                    title='TOEIC'
                    description={
                        <Typography.Paragraph>
                            Skills: Reading, Listening <br />
                            Score: 835 / 990
                        </Typography.Paragraph>
                    }
                />
            </List> */}
        </InformationContainer>
    );
}
