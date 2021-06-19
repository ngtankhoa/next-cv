import Head from 'next/head';
import styled from 'styled-components';
import { Summary, Hobby, Skills, Education, Experience } from 'containers';
import { Main, Sidebar, Content } from 'styles/pages.styled';

const Name = styled.p`
    font-size: 20px;
    font-weight: 500;
    text-align: center;
`;

export default function Home() {
    return (
        <div>
            <Head>
                <title>Nguyen Tan Khoa</title>
                <meta
                    name='description'
                    content='My next CV, using next also ;)'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Main>
                <Sidebar>
                    <Name>Nguyễn Tấn Khoa</Name>
                    <img
                        src='ava.jpeg'
                        alt='Picture of me.'
                        style={{
                            display: 'block',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                        }}
                    />
                </Sidebar>
                <Content>
                    <Summary />
                    <Skills />
                    <Experience />
                    <Education />
                    <Hobby />
                    <p>Git Flow, Ant Design, Styled-component, Figma, Scrum</p>
                </Content>
            </Main>
        </div>
    );
}
