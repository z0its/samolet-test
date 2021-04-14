import React, { useEffect } from "react";
import { observer } from "mobx-react";
import { useParams } from "react-router-dom";
import { PageHeader, Empty, Spin } from "antd";
import { useStore } from "../../stores";
import LibraryFullInfo from "../../components/LibraryFullInfo";

const LibraryItem: React.FC = () => {
   const { librariesStore } = useStore();
   const { id } = useParams<{ id: string }>();

   useEffect(() => {
      librariesStore.getLibraryItemData(Number(id));
   }, []);

   return (
      <Spin spinning={librariesStore.dataLoadingInProgress}>
         {!librariesStore.libraryItemData &&
            !librariesStore.dataLoadingInProgress && (
               <Empty description="Библиотека не найдена" />
            )}
         {librariesStore.libraryItemData && (
            <div>
               <PageHeader
                  title={`Библиотека №${librariesStore.libraryItemData.order}`}
                  onBack={() => window.history.back()}
               />
               <LibraryFullInfo libData={librariesStore.libraryItemData} />
            </div>
         )}
      </Spin>
   );
};

export default observer(LibraryItem);
