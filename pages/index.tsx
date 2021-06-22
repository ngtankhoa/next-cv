import Head from 'next/head';
import Image from 'next/image';
import {
  Summary,
  Hobby,
  Skills,
  Education,
  Experience,
  Certificates,
} from 'containers';
import { Typography, List, Row, Col } from 'antd';
import {
  MailOutlined,
  PhoneOutlined,
  GithubOutlined,
  GitlabOutlined,
} from '@ant-design/icons';
import { Location } from 'components';
import { Wrapper } from 'styles/pages.styled';

const { Item } = List;
const { Meta } = Item;

export default function Home() {
  return (
    <>
      <Head>
        <title>Nguyen Tan Khoa</title>
        <meta name="description" content="My next CV, using next also ;)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <Row gutter={10} className="row-wrapper">
          <Col span={24} lg={5}>
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
                style={{ display: 'flex', justifyContent: 'center' }}>
                <Image
                  src="/ava.jpg"
                  alt="Picture of me."
                  width={400}
                  height={400}
                />
              </Col>
              <Col xs={24} sm={12} lg={24}>
                <List>
                  <Item>
                    <Meta
                      avatar={<Location />}
                      title="217/22B Street 11, Town 4, Linh Xuan Ward, Thu Duc City"
                    />
                  </Item>
                  <Item>
                    <Meta
                      avatar={<MailOutlined />}
                      title="khoant.uit@gmail.com"
                    />
                  </Item>
                  <Item>
                    <Meta avatar={<PhoneOutlined />} title="+84 8 4415 0000" />
                  </Item>
                  <Item>
                    <Meta
                      avatar={<GithubOutlined />}
                      title={
                        <a
                          href="https://github.com/ngtankhoa"
                          rel="noreferrer"
                          target="_blank">
                          github.com/ngtankhoa
                        </a>
                      }
                    />
                  </Item>
                  <Item>
                    <Meta
                      avatar={<GitlabOutlined />}
                      title={
                        <a
                          href="https://gitlab.com/khoant.uit"
                          rel="noreferrer"
                          target="_blank">
                          gitlab.com/khoant.uit
                        </a>
                      }
                    />
                  </Item>
                </List>
              </Col>
            </Row>
          </Col>
          <Col span={24} lg={19}>
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
