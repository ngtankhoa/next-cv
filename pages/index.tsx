import Head from 'next/head';
import {
    Summary,
    Hobby,
    Skills,
    Education,
    Experience,
    Certificates,
} from 'containers';
import { Main, Sidebar, Content, SidebarItem } from 'styles/pages.styled';
import { Typography, List } from 'antd';
import {
    MailOutlined,
    PhoneOutlined,
    GithubOutlined,
    GitlabOutlined,
} from '@ant-design/icons';

const { Item } = List;
const { Meta } = Item;
// const Name = styled.p`
//     font-size: 25px;
//     font-weight: 500;
//     text-align: center;
//     margin-bottom: 0;
// `;

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
                    <SidebarItem>
                        <Typography.Title
                            level={2}
                            style={{ textAlign: 'center' }}
                        >
                            Nguyễn Tấn Khoa
                        </Typography.Title>
                        <img
                            src='ava.jpg'
                            alt='Picture of me.'
                            style={{
                                display: 'block',
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                maxWidth: '100%',
                                height: 'auto',
                            }}
                        />
                    </SidebarItem>
                    <SidebarItem>
                        <List>
                            <Item>
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
                                    title='github.com/ngtankhoa'
                                />
                            </Item>
                            <Item>
                                <Meta
                                    avatar={<GitlabOutlined />}
                                    title='gitlab.com/khoant.uit'
                                />
                            </Item>
                        </List>
                    </SidebarItem>
                </Sidebar>
                <Content>
                    <Summary />
                    <Skills />
                    <Experience />
                    <Education />
                    <Certificates />
                    <Hobby />
                </Content>
            </Main>
        </div>
    );
}
