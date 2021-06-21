import { InformationContainer, TitleSession } from 'components';
import { List, Typography, Card } from 'antd';

const { Paragraph } = Typography;
const { Item } = List;
const { Meta } = Item;
export function Education() {
    return (
        <InformationContainer>
            <TitleSession>Education</TitleSession>
            <Card hoverable bordered={false}>
                <List>
                    <Item>
                        <Meta
                            title='University of Information Technology - UIT'
                            description={
                                <Paragraph>
                                    2015 - 2020 <br />
                                    Major: Computer Network & Communication.{' '}
                                    <br />
                                    GPA: 7.18.
                                </Paragraph>
                            }
                        />
                    </Item>
                </List>
            </Card>
        </InformationContainer>
    );
}
