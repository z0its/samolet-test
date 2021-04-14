import React from "react";
import { Descriptions } from "antd";
import { ILibraryData } from "../../data/librariesData";

interface LibraryFullInfoProps {
   libData: ILibraryData;
}

const LibraryFullInfo: React.FC<LibraryFullInfoProps> = ({ libData }) => {
   return (
      <Descriptions bordered column={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 2 }}>
         {Object.keys(libData).map((libDataKey, idx) => (
            <Descriptions.Item label={libDataKey} key={idx}>
               {libData[libDataKey]}
            </Descriptions.Item>
         ))}
      </Descriptions>
   );
};

export default LibraryFullInfo;
