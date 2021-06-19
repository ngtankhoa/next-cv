import { TitleSession, InformationContainer } from 'components';
import { Progress } from 'antd';

export function Skills() {
    return (
        <InformationContainer>
            <TitleSession>Skills</TitleSession>
            <span>HTML,CSS,Javascript</span>
            <Progress percent={75} />
            <span>Typescript</span>
            <Progress percent={70} />
            <span>React / NextJS</span>
            <Progress percent={75} />
            <span>React Native</span>
            <Progress percent={50} />
            <span>Linux</span>
            <Progress percent={60} />
            <span>English</span>
            <Progress percent={65} />
            <span>Collaborate</span>
            <Progress percent={70} />
            <span> * using Git Flow, Figma, Asana, Scrum Methodology.</span>
        </InformationContainer>
    );
}
