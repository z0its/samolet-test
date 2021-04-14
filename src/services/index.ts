export interface IHttpServiceResp<T> {
   success: boolean;
   errorMessage?: string;
   data: T;
}
