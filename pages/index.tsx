import Head from 'next/head';
import styled from 'styled-components';
import { Summary, Hobby, Skills, Education, Experience } from 'containers';
import { Main, Sidebar, Content } from 'styles/pages.styled';
import { Typography, List } from 'antd';
import {
    MailOutlined,
    PhoneOutlined,
    GithubOutlined,
    GitlabOutlined,
} from '@ant-design/icons';

const { Paragraph, Text } = Typography;
const { Item } = List;
const { Meta } = Item;
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
                    <List>
                        <Item>
                            {/* <MailOutlined />
                            khoant.uit@gmail.com */}
                            <Meta
                                avatar={<MailOutlined />}
                                title='khoant.uit@gmail.com'
                            />
                        </Item>
                        <Item>
                            <Meta
                                avatar={<PhoneOutlined />}
                                title='+84 8 4415 0000'
                            />
                        </Item>
                        <Item>
                            <Meta
                                avatar={<GithubOutlined />}
                                title='github.com/ngtankhoa/'
                            />
                        </Item>
                        <Item>
                            <Meta
                                avatar={<GitlabOutlined />}
                                title='gitlab.com/khoant.uit'
                            />
                        </Item>
                    </List>
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
