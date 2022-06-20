import React from "react";
import instance from "@/utils/axios";
import styles from "./RegisterForm.module.css";

import { useNavigate } from "react-router-dom";
import { Button, Form, Input } from "antd";

export const RegisterForm: React.FC = React.memo(() => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      await instance.post("/auth/register", {
        email: values.username,
        password: values.password,
        confirmPassword: values.confirm,
      });
      alert("注册成功");
      navigate("/signIn");
    } catch (error) {
      alert("注册失败");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className={styles["register-form"]}
    >
      <Form.Item
        label="用户名"
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="密码"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        label="确认密码"
        name="confirm"
        dependencies={["password"]}
        rules={[
          {
            required: true,
            message: "请再次输入密码！",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error("两次输入的密码不匹配！"));
            },
          }),
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          注册
        </Button>
      </Form.Item>
    </Form>
  );
});
