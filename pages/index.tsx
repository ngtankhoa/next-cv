import Head from 'next/head';
import { DatePicker, Button } from 'antd';
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
                <DatePicker />
                <Button title='aaa'>aaad</Button>
            </div>
        </div>
    );
}
