import React, { Suspense } from "react";
import AppLayout from "./AppLayout";
import { ConfigProvider } from "antd";

const PrivateRoute = () => {
  return (
    <div>
      <ConfigProvider
        theme={{
          components: {
            Layout: {
              headerBg: "#bae0ff",
            },
          },
        }}
      >
        <AppLayout></AppLayout>
      </ConfigProvider>
    </div>
  );
};

export default PrivateRoute;
