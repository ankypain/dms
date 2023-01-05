import React from "react";
import { Button, Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

function Register() {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    //console.log(values);
    try {
      const response = await axios.post("/api/user/register", values);

      if (response.data.success) {
        toast.success(response.data.message);
        toast("Navigating to login...");
        navigate("/login");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("something went wrong");
    }
  };

  return (
    <div className="authentication ">
      <div className="auth-form card p-4">
        <p className="card-title">Registration Page</p>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item label="Name" name="name">
            <Input placeholder="name" />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input placeholder="email" />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input placeholder="password" type="password" />
          </Form.Item>
          <Button className="primary-button mt-3" htmlType="submit">
            Register
          </Button>
          <Link to="/login" className="anchor mt-3">
            Click here to login
          </Link>
        </Form>
      </div>
    </div>
  );
}

export default Register;
