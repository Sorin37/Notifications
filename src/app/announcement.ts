import { Categories } from "./categories";

export interface Announcement {
    title: string;
    description: string;
    author: string;
    category: Categories;
}
