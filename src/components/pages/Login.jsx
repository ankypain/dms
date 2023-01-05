import React from "react";
import { Form, Button, Input } from "antd";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="authentication">
      <div className="auth-form card p-4">
        <Form layout="vertical">
          <p className="card-title">Login Page</p>
          <Form.Item label="Email" name="email">
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input placeholder="password" />
          </Form.Item>
          <Button className="primary-button mt-3">Sign in</Button>
          <Link to="/Register" className="anchor mt-2">
            Click here to register
          </Link>
        </Form>
      </div>
    </div>
  );
}

export default Login;
