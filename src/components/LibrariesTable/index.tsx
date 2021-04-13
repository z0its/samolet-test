import React from "react";
import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { ILibraryData } from "../../data/librariesData";

interface LibrariesTableProps {
   tableData: ILibraryData[];
}

const LibrariesTable: React.FC<LibrariesTableProps> = ({ tableData }) => {
   const tableColumns: ColumnsType<ILibraryData> = [
      {
         dataIndex: "territory",
         key: "territory",
         title: "Регион",
      },
      {
         dataIndex: "libraries",
         key: "libraries",
         title: "Библиотек",
      },
   ];

   return <Table<ILibraryData> dataSource={tableData} columns={tableColumns} />;
};

export default LibrariesTable;
