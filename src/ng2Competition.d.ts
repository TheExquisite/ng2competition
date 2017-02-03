declare module 'ng2Competition'{

    export interface SchoolBase {
        name: string;
        contactName: string;
        contactPhone: string;
        contactEmail: string;
    }

    export interface School extends SchoolBase {
        _id: string;
    }
}