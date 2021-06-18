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
                <div style={{ flexGrow: 0, flexShrink: 0, flexBasis: '20%' }}>
                    <Name>Nguyễn Tấn Khoa</Name>
                    <Image src={avatar} alt='Picture of me.' />
                </div>
                <div style={{ flexGrow: 0, flexShrink: 0, flexBasis: '80%' }}>
                    <Summary />
                    <Skills />
                    <Experience />
                    <Education />
                    <Hobby />
                </div>
            </div>
        </div>
    );
}
