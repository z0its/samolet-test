import React from "react";
import { Input, Button, Space } from "antd";
import { FilterDropdownProps } from "antd/lib/table/interface";
import { SearchOutlined } from "@ant-design/icons";
import styles from "./styles.module.scss";

const ColumnFilter: React.FC<FilterDropdownProps> = ({
   setSelectedKeys,
   selectedKeys,
   confirm,
   clearFilters,
}) => {
   return (
      <div className={styles.columnFilter}>
         <div className={styles.columnFilter__field}>
            <Input
               value={selectedKeys[0]}
               onChange={(e) =>
                  setSelectedKeys(e.target.value ? [e.target.value] : [])
               }
               onPressEnter={() => confirm()}
            />
         </div>
         <Space className={styles.columnFilter__controls}>
            <Button
               type="primary"
               onClick={() => confirm()}
               icon={<SearchOutlined />}
            >
               Найти
            </Button>
            <Button onClick={() => clearFilters()}>Сбросить</Button>
         </Space>
      </div>
   );
};

export default ColumnFilter;
