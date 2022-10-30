/*
 * @FilePath: /Nun/src/server/matter/defineMatter.js
 * @Author: maggot-code
 * @Date: 2022-10-30 20:37:12
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-30 20:37:27
 * @Description: 
 */
import { v4 as uuid } from "uuid";

function Matter() {
    const id = uuid();

    return {
        id
    }
}

export function defineMatter() {
    return {}
}

export default defineMatter;
