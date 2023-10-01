import PocketBase from 'pocketbase';
import { POCKETBASE_URI } from '$env/dynamic/private';

export const pb = new PocketBase(POCKETBASE_URI);