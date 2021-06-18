import { TitleSession, InformationContainer } from 'components';
import { List } from 'antd';

const { Item } = List;
const { Meta } = Item;
export function Experience() {
    return (
        <InformationContainer>
            <TitleSession>Experience</TitleSession>
            <List>
                <Item>
                    <Meta title='06/2020 - Current: TGL Solutions' />
                </Item>
                <Item>
                    <Meta title='09/2018 - 09/2019: First Interactive Technology' />
                </Item>
            </List>
        </InformationContainer>
    );
}
