import React, { useEffect } from "react";
import { observer } from "mobx-react";
import { PageHeader } from "antd";
import { useStore } from "../../stores";
import LibrariesTable from "../../components/LibrariesTable";

const LibrariesList: React.FC = () => {
   const { librariesStore } = useStore();

   useEffect(() => {
      librariesStore.init();
   }, []);

   return (
      <>
         <PageHeader title="Список регионов" />
         <LibrariesTable tableData={librariesStore.librariesData} />
      </>
   );
};

export default observer(LibrariesList);
