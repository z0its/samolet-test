import React from "react";
import { LibrariesStore } from "./librariesStore";

interface IAppContext {
   librariesStore: LibrariesStore;
}

const librariesStore = new LibrariesStore();

const appContext = {
   librariesStore,
} as IAppContext;

const storesContext: React.Context<IAppContext> = React.createContext(
   appContext
);

export const useStore = () => React.useContext(storesContext);
