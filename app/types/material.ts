import { FileProps } from "./file";
import { Region } from "./region";

export type Material = {
    id: number;
    name: string;
    slug: string;
    description: string;
    content: string;
    regions: Region[];
    image: FileProps;
    files: FileProps[];
    created_at: string;
    updated_at: string;
};
