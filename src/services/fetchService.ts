export default class FetchService {
   getLibrariesList = async () => {
      try {
         const response = await fetch(
            "https://data.gov.ru/sites/default/files/opendata/7705851331-stat_library/data-2016-11-10T00-00-00-structure-2016-09-12T00-00-00.json"
         );
         const data = await response.json();
         return {
            success: true,
            data,
         };
      } catch (error) {
         return {
            success: false,
            data: error.messsage,
         };
      }
   };
}
