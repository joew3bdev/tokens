/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { Table } from "antd";
const HomePage = ({ actions, commonReducer }) => {
  useEffect(() => {
    actions.fetchTokens();
  }, []);
  const columns = [
    {
      title: "Logo",
      dataIndex: "logoURI",
      render: (a) => {
        return (
          <>
            <img width="30" alt="logo" src={a} />
          </>
        );
      },
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "symbol",
      dataIndex: "symbol",
    },
    {
      title: "decimals",
      dataIndex: "decimals",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.decimals - b.decimals,
    },
    {
      title: "Address",
      dataIndex: "address",
    },
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  return (
    <div>
      <Table
        columns={columns}
        dataSource={commonReducer.tokenArray}
        onChange={onChange}
      />
    </div>
  );
};

export default HomePage;
