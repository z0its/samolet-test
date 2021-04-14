import { IHttpServiceResp } from "./";
import { ILibraryData } from "../data/librariesData";
import { httpRequest } from "./httpService";

export default class FetchService {
   getLibrariesList = async (): Promise<IHttpServiceResp<ILibraryData[]>> => {
      return httpRequest(
         "https://data.gov.ru/sites/default/files/opendata/7705851331-stat_library/data-2016-11-10T00-00-00-structure-2016-09-12T00-00-00.json",
         {
            method: "GET",
         }
      );
   };
}
