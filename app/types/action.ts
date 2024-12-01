import { FileProps } from "./file";

export type Action = {
    id: number;
    title: string;
    slug: string;
    coordinator: string;
    place: string;
    year: string;
    primary_color: string;
    secondary_color: string;
    content: string;
    description: string;
    image: FileProps;
    files: FileProps[];
};
