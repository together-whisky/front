import {atom} from "recoil";
import { Whisky } from './types/whisky';

export const searchQueryState = atom<string>({
    key: "searchQuery",
    default: "",
});

export const selectedWhiskyState = atom<Whisky | null>({
    key: "selectedWhisky",
    default: null,
});