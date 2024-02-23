import { Form, Input, Button } from "antd";
import React, { useEffect, useState } from "react";
import "./login.css";
import { userLogin } from "../../Store/Axios/login";
import { useNavigate } from "react-router";
import { getUser, setUser } from "../../helpers/helpers";

const Login = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = async (vals) => {
    navigate("/dashboard");
    const res = await userLogin({ URL: "/auth/login", payload: vals });
    if (res.status === 200) {
      setUser(res);
    }
  };

  if (getUser()) {
    console.log("getUser", getUser());
  }

  setInterval(() => {
    if (getUser()) {
      navigate("/dashboard");
    }
  });

  return (
    <main className="login-main-container">
      <section className="login-form-container">
        <section>
          <div style={{ fontSize: "25px" }}>Login</div>
        </section>
        <section className="antd-form">
          <Form form={form} layout="vertical" onFinish={onFinish}>
            <Form.Item label={"Username"} name={"username"}>
              <Input></Input>
            </Form.Item>
            <Form.Item label={"Password"} name={"password"}>
              <Input></Input>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                submit
              </Button>
            </Form.Item>
          </Form>
        </section>
      </section>
    </main>
  );
};

export default Login;
