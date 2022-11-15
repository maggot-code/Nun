/*
 * @FilePath: /Nun/src/ui/index.ts
 * @Author: maggot-code
 * @Date: 2022-11-16 01:30:45
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-16 01:37:08
 * @Description: 
 */
export const FormContainer = defineAsyncComponent(() => import("./Container.vue"));
export const FormField = defineAsyncComponent(() => import("./Field.vue"));
