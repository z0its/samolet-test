import { action, observable, runInAction, makeObservable } from "mobx";
import FetchService from "../services/fetchService";
import { ILibraryData } from "../data/librariesData";

const fetchService = new FetchService();

export class LibrariesStore {
   @observable librariesData: ILibraryData[] = [];

   constructor() {
      makeObservable(this);
   }

   @action async init() {
      const result = await fetchService.getLibrariesList();

      console.log("result", result);

      runInAction(() => {
         if (result.success)
            this.librariesData = result.data.map((record: ILibraryData) => ({
               ...record,
               key: record.order,
            }));
         else console.log(result.data);
      });
   }
}
