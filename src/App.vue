<!--
 * @FilePath: /Nun/src/App.vue
 * @Author: maggot-code
 * @Date: 2022-10-30 19:26:27
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-31 00:24:32
 * @Description: 
-->
<script setup>
import { serviceGateway } from "./server/gateway";

const gateway = serviceGateway();
</script>

<template>
    <main class="app">
        <section class="app-layout app-client">
            <el-tag>应用</el-tag>
        </section>
        <section class="app-layout">
            <p>物料</p>
        </section>
        <section class="app-layout">
            <p>模板</p>
        </section>
        <section class="app-layout">
            <p>业务</p>
        </section>
        <section class="app-layout">
            <p>系统</p>
        </section>
        <section class="app-layout">
            <p>编排</p>
        </section>
        <section class="app-layout">
            <p>网关</p>
        </section>
    </main>
</template>

<style scoped>
.app {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    padding: 12px;
    box-sizing: border-box;
    overflow: hidden;
}

.app-layout {
    width: 33%;
    height: calc(33% - 6px);
    padding: 6px;
    border-radius: 6px;
    border: 2px dashed #666;
    box-sizing: border-box;
    overflow: hidden;
}

.app-client {
    width: 100%;
}
</style>
