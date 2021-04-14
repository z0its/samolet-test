import React from "react";
import { Link } from "react-router-dom";
import { Table, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { ColumnsType } from "antd/es/table";
import { ILibraryData } from "../../data/librariesData";
import ColumnFilter from "../ColumnFilter";

interface LibrariesTableProps {
   tableData: ILibraryData[];
   loading: boolean;
}

const LibrariesTable: React.FC<LibrariesTableProps> = ({
   tableData,
   loading,
}) => {
   const tableColumns: ColumnsType<ILibraryData> = [
      {
         dataIndex: "territory",
         key: "territory",
         title: "Регион",
         sorter: (a, b) => a.territory.localeCompare(b.territory, "ru"),
         filterDropdown: (props) => <ColumnFilter {...props} />,
         filterIcon: <SearchOutlined />,
         onFilter: (value, record) =>
            record.territory
               .toLowerCase()
               .includes((value as string).toLowerCase()),
      },
      {
         dataIndex: "libraries",
         key: "libraries",
         title: "Количество библиотек",
         sorter: (a, b) => a.libraries - b.libraries,
      },
      {
         dataIndex: "actions",
         key: "actions",
         title: "",
         fixed: "right",
         width: 60,
         render: (text, record) => (
            <Link to={`/library/${record.order}`}>
               <Button icon={<SearchOutlined />}></Button>
            </Link>
         ),
      },
   ];

   return (
      <Table<ILibraryData>
         dataSource={tableData}
         columns={tableColumns}
         loading={loading}
         locale={{ emptyText: " " }}
      />
   );
};

export default LibrariesTable;
