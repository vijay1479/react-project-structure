import request from "./request";

/**
 * @description GET Method
 * @param url API URL | Required
 * @returns Response or Error
 */
export function get(url:any,params?:any){
    return request({
        url: url,
        method: 'GET',
        params:params,
        headers:{}
      });
}

/**
 * @description PUT Method
 * @param url API URL | Required
 * @param body Body  | Required
 * @param onUploadProgress Used for progress bar | Not Required
 * @returns Response or Error
 */
export function put(url:any, body:any, onUploadProgress?:any){
    return request({
        url:   url,
        method: 'PUT',
        data:  body,
        headers: {},
        onUploadProgress
      });

}

/**
 * @description PATCH Method
 * @param url API URL | Required
 * @param body Body  | Required
 * @returns Response or Error
 */
export function patch(url:any, body:any){
    return request({
        url:    url,
        method: 'PATCH',
        data:  body,
        headers:{}
      });
    
}

/**
 * @description POST Method
 * @param url API URL | Required
 * @param body Body  | Required
 * @returns Response or Error
 */
export function post(url:any, body:any){
    return request({
        url:    url,
        method: 'POST',
        data: body,
        headers: {},
      });
}

/**
 * @description DELETE Method
 * @param url API URL | Required
 * @returns Response or Error
 */
export function _delete(url:any){
    return request({
        url:    url,
        method: 'DELETE',
        headers: {},
      });
}