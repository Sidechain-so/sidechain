import React from "react";
import Layout from "./Layout";

const withLayout = (Component, additionalProps) => {
  return (props) => (
    <Layout>
      <Component {...props} {...additionalProps} />
    </Layout>
  );
};

export default withLayout;
