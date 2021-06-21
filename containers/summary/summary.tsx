import { TitleSession, InformationContainer } from 'components';
import { Card } from 'antd';

export function Summary() {
    return (
        <div>
            <InformationContainer>
                <TitleSession>Summary</TitleSession>
                <Card hoverable bordered={false}>
                    <p>
                        I'm a Mid-Level Web Developer specializing in Front-end
                        web and Mobile development.
                    </p>
                    <p>
                        In a normal work flow, I receive design from Figma,
                        split them into reusable parts and make components base
                        on that.
                    </p>
                </Card>
            </InformationContainer>
        </div>
    );
}
