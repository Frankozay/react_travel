import React from "react";
import styles from "./SignInForm.module.css";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Form, Input } from "antd";
import { useSelector } from "@/redux/hooks";
import { signIn } from "@/redux/user/slice";

export const SignInForm: React.FC = React.memo(() => {
  const loading = useSelector((s) => s.user.loading);
  const jwt = useSelector((s) => s.user.token);

  const dispath = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (jwt !== null) {
      navigate("/");
    }
  }, [jwt, navigate]);

  const onFinish = (values) => {
    dispath(
      signIn({
        email: values.username,
        password: values.password,
      })
    );
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
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: "请输入用户名",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "请输入密码",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>记住我</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit" loading={loading}>
          登录
        </Button>
      </Form.Item>
    </Form>
  );
});
