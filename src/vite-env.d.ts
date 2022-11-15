/*
 * @FilePath: /Nun/src/vite-env.d.ts
 * @Author: maggot-code
 * @Date: 2022-11-16 00:09:32
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-16 00:24:24
 * @Description:
 */
/// <reference types="vite/client" />

declare module "*.vue" {
    import type { DefineComponent } from "vue";
    const component: DefineComponent<{}, {}, any>;
    export default component;
}
