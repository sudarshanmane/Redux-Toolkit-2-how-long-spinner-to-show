import { Form, Input, Button } from "antd";
import React, { startTransition, useEffect } from "react";
import "./login.css";
import { useNavigate } from "react-router";
import { getUser, setUser } from "../../helpers/helpers";
import { useDispatch, useSelector } from "react-redux";
import { postLogin, setLoginFalse } from "./loginSlice";

const Login = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginSelector = useSelector((state) => state?.login);
  const onFinish = (values) => {
    dispatch(postLogin({ url: "/auth/login", values }));
  };

  useEffect(() => {
    let id;
    id = setInterval(() => {
      if (getUser() !== "undefined") {
        startTransition(() => {
          navigate("/dashboard/products");
          clearInterval(id);
        });
      }
    });

    if (loginSelector?.loginRes)
      dispatch(setLoginFalse({ type: "login/setLoginFalse" }));

    return () => {
      clearInterval(id);
    };
  }, []);

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
              <Button
                type="primary"
                htmlType="submit"
                loading={loginSelector?.loading}
              >
                {loginSelector?.loading ? "" : "submit"}
              </Button>
            </Form.Item>
          </Form>
        </section>
      </section>
    </main>
  );
};

export default Login;
