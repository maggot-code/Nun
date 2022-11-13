/*
 * @FilePath: /Nun/vite.config.js
 * @Author: maggot-code
 * @Date: 2022-10-30 19:26:27
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-13 23:08:16
 * @Description:
 */
import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import autoImport from "unplugin-auto-import/vite";
import autoComponent from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

const importsLodash = ["isNil", "isObject", "isNumber", "isArray", "toArray", "cloneDeep", "merge"];
const projectRootDir = path.resolve(__dirname);
// https://vitejs.dev/config/
export default defineConfig(() => {
    return {
        clearScreen: true,
        resolve: {
            alias: [
                {
                    find: "genesis",
                    replacement: path.resolve(projectRootDir, 'internal'),
                },
                {
                    find: "@",
                    replacement: path.resolve(projectRootDir, 'src')
                }
            ],
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
    }
});
