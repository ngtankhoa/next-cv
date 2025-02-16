import { List, Card } from 'antd';
import {
  MailOutlined,
  PhoneOutlined,
  GithubOutlined,
  GitlabOutlined,
  GlobalOutlined,
  DownloadOutlined,
} from '@ant-design/icons';
import { Location } from 'components';

const { Item } = List;
const { Meta } = Item;

export function MyInfo() {
  return (
    <Card hoverable bordered={false}>
      <List
        dataSource={data}
        renderItem={(item) => (
          <Item>
            <Meta avatar={item.icon} title={item.content} />
          </Item>
        )}
      />
    </Card>
  );
}

const data: { icon: React.ReactNode; content: string | React.ReactNode }[] = [
  { icon: <Location />, content: '217/22B Street 11, Town 4, Linh Xuan Ward, Thu Duc City' },
  { icon: <MailOutlined />, content: <a href='mailto:khoant.uit@gmail.com'>khoant.uit@gmail.com</a> },
  { icon: <PhoneOutlined />, content: '+84 8 4415 0000' },
  {
    icon: <GithubOutlined />,
    content: (
      <a href='https://github.com/ngtankhoa' rel='noreferrer' target='_blank'>
        github.com/ngtankhoa
      </a>
    ),
  },
  // {
  //   icon: <GitlabOutlined />,
  //   content: (
  //     <a href='https://gitlab.com/khoant.uit' rel='noreferrer' target='_blank'>
  //       gitlab.com/khoant.uit
  //     </a>
  //   ),
  // },
  {
    icon: <GlobalOutlined />,
    content: (
      <a href='https://nguyentankhoa.vercel.app/' rel='noreferrer' target='_blank'>
        nguyentankhoa.vercel.app
      </a>
    ),
  },
  {
    icon: <DownloadOutlined />,
    content: (
      <a href='https://nguyentankhoa.vercel.app/CV_NguyenTanKhoa.pdf' rel='noreferrer' target='_blank'>
        Download as PDF
      </a>
    ),
  },
];
