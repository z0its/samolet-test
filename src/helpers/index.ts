export const arrToMap = <T>(array: T[], key: string) => {
   return array.reduce((acc, item) => {
      acc[item[key]] = item;
      return acc;
   }, {});
};
