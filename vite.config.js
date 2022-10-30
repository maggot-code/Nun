/*
 * @FilePath: /Nun/vite.config.js
 * @Author: maggot-code
 * @Date: 2022-10-30 19:26:27
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-31 00:24:12
 * @Description:
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import autoImport from "unplugin-auto-import/vite";
import autoComponent from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

const importsLodash = ["isNil", "isObject", "isNumber", "isArray", "toArray", "cloneDeep", "merge"];

// https://vitejs.dev/config/
export default defineConfig({
    clearScreen: true,
    resolve: {
        extensions: [".mjs", ".js", ".jsx", ".ts", ".tsx", ".json", ".proto"],
        dedupe: ["vue"],
        preserveSymlinks: false,
    },
    plugins: [
        vue({
            reactivityTransform: true,
        }),
        autoComponent({
            resolvers: [ElementPlusResolver()],
            dts: true
        }),
        autoImport({
            imports: [
                "vue",
                {
                    "lodash-es": importsLodash,
                },
            ],
            dts: true,
        }),
    ],
});
