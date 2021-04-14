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
         <PageHeader title="Библиотеки по регионам" />
         <LibrariesTable
            tableData={librariesStore.librariesData}
            loading={librariesStore.dataLoadingInProgress}
         />
      </>
   );
};

export default observer(LibrariesList);
