import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity("files")
export class Files {
    @PrimaryColumn({ name: "id" })
    id: string;

    @Column({ name: "name" })
    name: string;

    @Column({ name: "mimetype" })
    mimeType: string;

    @Column({ name: "url" })
    url: string;

    @Column({ name: "created_by" })
    createdBy: string;

    @Column({ name: "created_on" })
    createdOn: Date;

    @Column({ name: "updated_by" })
    updatedBy: string;

    @Column({ name: "updated_on" })
    updatedOn: Date;
}
