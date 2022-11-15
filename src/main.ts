/*
 * @FilePath: /Nun/src/main.ts
 * @Author: maggot-code
 * @Date: 2022-11-16 00:09:32
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-16 00:40:23
 * @Description:
 */
import type { App } from 'vue';

import { createApp } from 'vue';
import AppView from '@/App.vue';

import "normalize.css";
import "@/style/index.scss";

function bootstrap(app: App): void {
    app.mount("#app", true);
}

void bootstrap(createApp(AppView));
