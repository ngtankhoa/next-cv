import Head from 'next/head';
import styled from 'styled-components';
import Image from 'next/image';
import avatar from 'public/ava.jpeg';
import { Summary, Hobby, Skills, Education, Experience } from 'containers';

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
            <div
                style={{
                    minHeight: '100vh',
                    display: 'flex',
                    flexWrap: 'wrap',
                }}
            >
                <div style={{ flex: 2 }}>
                    <Name>Nguyễn Tấn Khoa</Name>
                    <Image src={avatar} alt='Picture of me.' />
                </div>
                <div style={{ flex: 8 }}>
                    <Summary />
                    <Skills />
                    <Experience />
                    <Education />
                    <Hobby />
                    <p>Git Flow, Ant Design, Styled-component, Figma, Scrum</p>
                </div>
            </div>
        </div>
    );
}
