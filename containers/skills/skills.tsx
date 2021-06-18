import { TitleSession, InformationContainer } from 'components';
import { Progress } from 'antd';

export function Skills() {
    return (
        <InformationContainer>
            <TitleSession>Skills</TitleSession>
            <span>HTML,CSS,Javascript</span>
            <Progress percent={70} />
            <span>Typescript</span>
            <Progress percent={65} />
            <span>React / NextJS</span>
            <Progress percent={70} />
            <span>React Native</span>
            <Progress percent={45} />
            <span>Linux</span>
            <Progress percent={55} />
            <span>English</span>
            <Progress percent={65} />
        </InformationContainer>
    );
}
