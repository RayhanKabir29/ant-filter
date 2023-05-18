import { useState } from "react";
import "./App.css";
import { Input, Table } from "antd";
import { SearchOutlined } from "@ant-design/icons";

function App() {
  const [dataSource, setDataSource] = useState([
    {
      name: "Rayhan",
      email: "rayhan@gmail.com",
      age: 23,
      address: "Adabar",
    },

    {
      name: "Kabir",
      email: "Kabir@gmail.com",
      age: 24,
      address: "Banani",
    },
    {
      name: "Rayhana",
      email: "rayhana@gmail.com",
      age: 29,
      address: "Adabar12",
    },
    {
      name: "Jhon",
      email: "jhon@gmail.com",
      age: 27,
      address: "DOHS",
    },
  ]);
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm }) => {
        return (
          <Input
            autoFocus
            placeholder="Search Address Here"
            value={selectedKeys[0]}
            onChange={(e) => {
              setSelectedKeys(e.target.value ? [e.target.value] : []);
              confirm({ closeDropdown: false });
            }}
            onPressEnter={() => {
              confirm();
            }}
            onBlur={() => {
              confirm();
            }}
          ></Input>
        );
      },

      onFilter: (value, record) => {
        return record.name.toLowerCase().includes(value.toLowerCase());
      },

      filterIcon: () => {
        return <SearchOutlined />;
      },
    },
    {
      title: "Email",
      dataIndex: "email",
      filterDropdown: () => {
        return <Input placeholder="Type Email"></Input>;
      },
      filterIcon: () => {
        return <SearchOutlined />;
      },
    },
    {
      title: "Age",
      dataIndex: "age",
    },
    {
      title: "Address",
      dataIndex: "address",

      filterIcon: () => {
        return <SearchOutlined />;
      },
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm }) => {
        return (
          <Input
            autoFocus
            placeholder="Search Address Here"
            value={selectedKeys[0]}
            onChange={(e) => {
              setSelectedKeys(e.target.value ? [e.target.value] : []);
              confirm({ closeDropdown: false });
            }}
            onPressEnter={() => {
              confirm();
            }}
            onBlur={() => {
              confirm();
            }}
          ></Input>
        );
      },

      onFilter: (value, record) => {
        return record.address.toLowerCase().includes(value.toLowerCase());
      },
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <Table columns={columns} dataSource={dataSource}></Table>
      </header>
    </div>
  );
}

export default App;
