import { FileProps } from "./file";
import { Region } from "./region";

export type Craftsman = {
    id: number;
    name: string;
    region: Region;
    slug: string;
    description: string;
    content: string;
    image: FileProps;
    files: FileProps[];
    created_at: string;
    updated_at: string;
};
