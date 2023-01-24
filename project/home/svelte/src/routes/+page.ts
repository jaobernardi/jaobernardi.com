// @ts-nocheck
import { error } from '@sveltejs/kit';

export function load({ params }) {
    throw error(403, "Forbidden");
}