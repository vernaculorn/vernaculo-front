import { FileProps } from "./file";

export type Region = {
    id: number;
    name: string;
    slug: string;
    description: string;
    content: string;
    image: FileProps;
    files: FileProps[];
};