<!--
 * @FilePath: /Nun/src/ui/Container.vue
 * @Author: maggot-code
 * @Date: 2022-11-16 00:44:23
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-16 01:36:41
 * @Description: 
-->
<script setup lang='ts'>
const formRefs = ref(null);
// clearValidate(nameList)
// resetFields(nameList)
// scrollToField(name)
// validate(nameList)
// validateFields(nameList)

const formData = ref({
    name: ""
});

function onFinish(values) { }
function onFinishFailed({ values, errorFields, outOfDate }) { }
function onSubmit(e) { }
function onValidate(name, status, errorMessage) { }
</script>

<template>
    <a-form
        class="num-form-container"
        ref="formRefs"
        :model="formData"
        :rules="{}"
        name="nun"
        layout="horizontal"
        labelAlign="left"
        :labelWrap="false"
        :colon="true"
        :hideRequiredMark="false"
        :noStyle="false"
        :scrollToFirstError="true"
        :validateOnRuleChange="true"
        :validateTrigger="[]"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
        @submit="onSubmit"
        @validate="onValidate"
    >
        <a-form-item
            :rules="[]"
            :validateFirst="true"
            :validateTrigger="['change']"
            validateStatus="validating"
            name="name"
            extra="111"
            help="222"
            htmlFor="nun"
            label="输入框"
            labelAlign="left"
            :required="false"
            :autoLink="true"
            :colon="true"
            :hasFeedback="false"
        >
            <a-input v-model:value="formData.name" />
        </a-form-item>
        <slot></slot>
    </a-form>
</template>

<style scoped lang='scss'>
.num-form-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
}
</style>
