import { action, observable, runInAction, makeObservable } from "mobx";
import FetchService from "../services/fetchService";
import { ILibraryData } from "../data/librariesData";
import { arrToMap } from "../helpers";

const fetchService = new FetchService();

export class LibrariesStore {
   @observable librariesData: ILibraryData[] = [];
   librariesMap = {};
   @observable dataLoadingInProgress: boolean = false;
   @observable libraryItemData: ILibraryData = null as ILibraryData;
   private isInitialized: boolean = false;

   constructor() {
      makeObservable(this);
   }

   async init() {
      if (this.isInitialized) return;
      this.dataLoadingInProgress = true;
      const result = await fetchService.getLibrariesList();

      runInAction(() => {
         if (result.success) {
            this.librariesData = result.data.map((record: ILibraryData) => ({
               ...record,
               key: record.order,
            }));
            this.librariesMap = arrToMap<ILibraryData>(result.data, "order");
            this.isInitialized = true;
         } else console.log(result.errorMessage); //todo error notifications
         this.dataLoadingInProgress = false;
      });
   }

   async getLibraryItemData(libId: number) {
      if (!this.isInitialized) await this.init();
      runInAction(() => {
         this.libraryItemData = this.librariesMap[libId];
      });
   }
}
