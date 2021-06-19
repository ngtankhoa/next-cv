import { TitleSession, InformationContainer } from 'components';
import { Typography } from 'antd';

const { Paragraph } = Typography;
export function Hobby() {
    return (
        <InformationContainer>
            <TitleSession>Hobby</TitleSession>
            <Paragraph>Gaming, Walking, Music, Distro Hopper</Paragraph>
        </InformationContainer>
    );
}
