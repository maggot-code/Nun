<!--
 * @FilePath: /Nun/src/App.vue
 * @Author: maggot-code
 * @Date: 2022-11-16 00:09:32
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-11 17:04:50
 * @Description: 
-->
<script setup lang='ts'>
import { createField } from "nun/usecase/createField";

const field = createField();
console.log(field);
</script>

<template>
    <input type="text">
</template>

<style scoped lang='scss'>

</style>
