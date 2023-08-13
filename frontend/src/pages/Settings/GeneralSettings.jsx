import uniqueId from '@/utils/uinqueId';
import { EditOutlined, LockOutlined, PlusOutlined, SyncOutlined } from '@ant-design/icons';
import { Button, Col, Divider, Form, Input, PageHeader, Row, Typography, Upload } from 'antd';
import { Content } from 'antd/lib/layout/layout';

const { Title, Text } = Typography;

function SetingsSection({ title, description, children }) {
  return (
    <Row gutter={24}>
      <Col span={12}>
        <Title level={4}>{title}</Title>
        <Text type="secondary">{description}</Text>
      </Col>

      <Col span={12}>{children}</Col>
      <Divider></Divider>
    </Row>
  );
}
export default function GeneralSettings() {
  return (
    <>
      <PageHeader
        onBack={() => window.history.back()}
        title="General System"
        ghost={false}
        extra={[
          <Button key={`${uniqueId()}`} type="primary" disabled icon={<SyncOutlined />}>
            Update
          </Button>,
        ]}
        style={{
          padding: '20px 0px',
        }}
      ></PageHeader>

      <Divider></Divider>
      <Form>
        <SetingsSection title="Company" description="Update your company name and logo">
          <Form.Item label="Name">
            <Input placeholder="Company Name" />
          </Form.Item>
          <Form.Item label="Upload" valuePropName="fileList">
            <Upload action="/upload.do" listType="picture-card">
              <div>
                <PlusOutlined />
                <div
                  style={{
                    marginTop: 8,
                  }}
                >
                  Upload
                </div>
              </div>
            </Upload>
          </Form.Item>
        </SetingsSection>

        <SetingsSection
          title="information"
          description="Update your company Email, phone and adress"
        >
          <Form.Item label="Email">
            <Input placeholder="Company Email" />
          </Form.Item>
          <Form.Item label="Phone">
            <Input placeholder="Company Phone" />
          </Form.Item>
          <Form.Item label="Adress">
            <Input placeholder="Company Adress" />
          </Form.Item>
          <Form.Item label="Country">
            <Input placeholder="Country" />
          </Form.Item>
        </SetingsSection>

        <SetingsSection title="Other details" description="Add your website and other links">
          <Form.Item label="Wesite">
            <Input placeholder="Company website" />
          </Form.Item>
        </SetingsSection>
      </Form>
    </>
  );
}
