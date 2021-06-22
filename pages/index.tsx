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
import { Main, Sidebar, Content, SidebarItem } from 'styles/pages.styled';
import { Typography, List } from 'antd';
import {
    MailOutlined,
    PhoneOutlined,
    GithubOutlined,
    GitlabOutlined,
} from '@ant-design/icons';
import { Location } from 'components';

const { Item } = List;
const { Meta } = Item;

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
                        <Image
                            src='/ava.jpg'
                            alt='Picture of me.'
                            width={400}
                            height={400}
                        />
                    </SidebarItem>
                    <SidebarItem>
                        <List>
                            <Item>
                                <Meta avatar={<Location />} title='217/22B Street 11, Town 4, Linh Xuan Ward, Thu Duc City' />
                            </Item>
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
                                    title={
                                        <a
                                            href='https://github.com/ngtankhoa'
                                            rel='noreferrer'
                                            target='_blank'
                                        >
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
                                            href='https://gitlab.com/khoant.uit'
                                            rel='noreferrer'
                                            target='_blank'
                                        >
                                            gitlab.com/khoant.uit
                                        </a>
                                    }
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
