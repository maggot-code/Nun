/*
 * @FilePath: /Nun/vite.config.ts
 * @Author: maggot-code
 * @Date: 2022-11-16 00:09:32
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-11 15:53:57
 * @Description:
 */
import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import autoImport from "unplugin-auto-import/vite";
import autoComponent from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";

const alias = {
    "@": resolve(__dirname, "src"),
    "nun": resolve(__dirname, "packages"),
};
const importsLodash = ["isNil", "isObject", "isNumber", "isArray", "toArray", "cloneDeep", "merge"];

// https://vitejs.dev/config/
export default defineConfig(() => {
    return {
        plugins: [
            vue({
                reactivityTransform: true
            }),
            autoImport({
                imports: [
                    "vue",
                    {
                        "lodash-es": importsLodash,
                    },
                ],
                dts: true
            }),
            autoComponent({
                version: 3,
                resolvers: [AntDesignVueResolver()],
                transformer: "vue3",
                dts: true,
                deep: true
            })
        ],
        base: '/',
        publicDir: 'public',
        cacheDir: "node_modules/.vite",
        logLevel: "info",
        envDir: "root",
        clearScreen: true,
        server: {
            hmr: true
        },
        esbuild: {
            jsxFactory: "h",
            jsxFragment: "Fragment",
        },
        optimizeDeps: {
            include: [],
            keepNames: false
        },
        resolve: {
            extensions: [".mjs", ".js", ".jsx", ".ts", ".tsx", ".json", ".proto"],
            dedupe: ["vue"],
            alias,
            preserveSymlinks: false,
        },
        json: {
            namedExports: true,
            stringify: false,
        },
    };
});
