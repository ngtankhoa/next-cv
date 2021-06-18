import Head from 'next/head';
import styled from 'styled-components';

const Title = styled.p`
    font-size: 33px;
    font-weight: 500;
    color: red;
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
            <div style={{ minHeight: '100vh' }}>
                <Title>Toi o day</Title>
            </div>
        </div>
    );
}
