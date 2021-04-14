import { IHttpServiceResp } from "./";

type fetchParams = {
   method: string;
   headers?: { [key: string]: string };
   body?: BodyInit;
};

export const httpRequest = async (
   url: string,
   params: fetchParams
): Promise<IHttpServiceResp<any>> => {
   try {
      const response = await fetch(url, params);
      const data = await response.json();
      return {
         success: true,
         data,
      };
   } catch (error) {
      return {
         success: false,
         data: null,
         errorMessage: error.messsage,
      };
   }
};
