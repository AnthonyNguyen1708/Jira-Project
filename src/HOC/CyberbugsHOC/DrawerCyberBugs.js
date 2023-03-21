import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  DatePicker,
  Drawer,
  Form,
  Input,
  Row,
  Select,
  Space,
} from "antd";
import { useSelector, useDispatch } from "react-redux";

export default function DrawerCyberBugs(props) {
  const { visible, ComponentContentDrawer, callBackSubmit, title } =
    useSelector((state) => state.drawerReducer);
  const dispatch = useDispatch();

  const onClose = () => {
    dispatch({ type: "CLOSE_DRAWER" });
  };

  return (
    <div>
      <Drawer
        title={title}
        width={720}
        onClose={onClose}
        open={visible}
        bodyStyle={{
          paddingBottom: 80,
        }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>

            <Button onClick={callBackSubmit} type="primary">
              Submit
            </Button>
          </Space>
        }
      >
        {/* Nội dung thay đổi của Drawer */}
        {ComponentContentDrawer}
      </Drawer>
    </div>
  );
}
