import React, { useEffect } from "react";
import { observer } from "mobx-react";
import { useParams } from "react-router-dom";
import { PageHeader, Empty } from "antd";
import { useStore } from "../../stores";
import LibraryFullInfo from "../../components/LibraryFullInfo";

const LibraryItem: React.FC = () => {
   const { librariesStore } = useStore();
   const { id } = useParams<{ id: string }>();

   useEffect(() => {
      librariesStore.getLibraryItemData(Number(id));
   }, []);

   return (
      <>
         {!librariesStore.libraryItemData && (
            <Empty description="Библиотека не найдена" />
         )}
         {librariesStore.libraryItemData && (
            <div>
               <PageHeader title="Библиотека" />
               <LibraryFullInfo libData={librariesStore.libraryItemData} />
            </div>
         )}
      </>
   );
};

export default observer(LibraryItem);
