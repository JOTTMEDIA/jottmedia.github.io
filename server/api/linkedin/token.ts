import {defineEventHandler, readBody} from 'h3';

export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event);


        console.log(body)

        return {success: true};
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        return {success: false, error: errorMessage};
    }
});