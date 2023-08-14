// React and Styles
import React, { useEffect, useState } from "react";

// Plugins and Modules
import { Spin } from "antd";

// Components and Utils
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = ({ nav, children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
      setTimeout(() => {
        setLoading(false);
      }, 499);
    }, 2500 + Math.random() * 1000);
  }, []);

  const GIF =
    "https://i.pinimg.com/originals/c4/cb/9a/c4cb9abc7c69713e7e816e6a624ce7f8.gif";

  return (
    <Spin
      spinning={loading}
      className="spinner"
      indicator={<img alt={""} src={GIF} />}
    >
      <Header nav={nav} />
      {children}
      <Footer />
    </Spin>
  );
};

export default Layout;
