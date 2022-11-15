import { defineSchema } from "@/domain/Schema";
import { defineData } from "@/domain/Data";
import { defineForm } from "@/domain/Form";

export function useForm() {
    const schema = defineSchema();
    const data = defineData();
    const form = defineForm();

    return {
        schema,
        data,
        form,
    }
}
