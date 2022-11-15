<!--
 * @FilePath: /Nun/src/App.vue
 * @Author: maggot-code
 * @Date: 2022-11-16 00:09:32
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-16 01:42:41
 * @Description: 
-->
<script setup lang='ts'>
import { FormContainer, FormField } from '@/ui';
import { useForm } from "@/usecase/useForm";

const form = useForm();
console.log(form);
</script>

<template>
    <FormContainer>
        <FormField />
    </FormContainer>
</template>

<style scoped lang='scss'>

</style>
