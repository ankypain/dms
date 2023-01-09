import React from "react";
import { Form, Button, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    //console.log(values);
    try {
      const response = await axios.post("/api/user/login", values);

      if (response.data.success) {
        toast.success(response.data.message);
        toast("Navigating to home...");
        localStorage.setItem("token", response.data.data);
        navigate("/");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("something went wrong");
    }
  };
  return (
    <div className="authentication">
      <div className="auth-form card p-4">
        <Form layout="vertical" onFinish={onFinish}>
          <p className="card-title">Login Page</p>
          <Form.Item label="Email" name="email">
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input placeholder="password" type="password" />
          </Form.Item>
          <Button className="primary-button mt-3" htmlType="submit">
            Sign in
          </Button>
          <Link to="/Register" className="anchor mt-2">
            Click here to register
          </Link>
        </Form>
      </div>
    </div>
  );
}

export default Login;
