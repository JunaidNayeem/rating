import "./Form.scss";
import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Checkbox,
  Upload,
  Rate,
} from "antd";
import "antd/dist/antd.css";
import { ClassNames } from "@emotion/react";
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const FormDisabledDemo = () => {
  return (
    <>
      <h1>Movie Form</h1>
      <Form
        className="rightPanel"
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
      >
        <Form.Item label="Input">
          <Input />
        </Form.Item>
        <Form.Item label="Select">
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Rating">
          <Rate />
        </Form.Item>
        <Form.Item label="InputNumber">
          <InputNumber />
        </Form.Item>
        <Form.Item label="TextArea">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Switch" valuePropName="checked">
          <Switch />
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
        <div className="btn">
          <Button>Clear</Button>
          <Button>Save</Button>
        </div>
      </Form>
    </>
  );
};
export default () => <FormDisabledDemo />;
