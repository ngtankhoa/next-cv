import Head from 'next/head';
import Image from 'next/image';
import { Summary, Hobby, Skills, Education, Experience, Certificates, MyInfo } from 'containers';
import { Typography, Row, Col } from 'antd';
import { Wrapper } from 'styles/pages.styled';

export default function Home() {
  return (
    <>
      <Head>
        <title>Nguyen Tan Khoa</title>
        <meta name='description' content='My next CV, using next also ;)' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Wrapper>
        <Row gutter={{ xs: 10, md: 15 }} className='row-wrapper'>
          <Col span={24} lg={5} className='main-content'>
            <Row gutter={10}>
              <Col xs={24}>
                <Typography.Title level={2} style={{ textAlign: 'center' }}>
                  Nguyễn Tấn Khoa
                </Typography.Title>
              </Col>
              <Col
                xs={24}
                sm={12}
                lg={24}
                style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
                <Image src='/ava.jpg' alt='Picture of me.' width={400} height={400} />
              </Col>
              <Col xs={24} sm={12} lg={24}>
                <MyInfo />
              </Col>
            </Row>
          </Col>
          <Col span={24} lg={19} className='main-content'>
            <Summary />
            <Skills />
            <Experience />
            <Education />
            <Certificates />
            <Hobby />
          </Col>
        </Row>
      </Wrapper>
    </>
  );
}
