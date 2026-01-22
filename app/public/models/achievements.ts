export interface Badge {
    name: string;
    badge: string;
    link: string;
}

export interface Certificate {
    title: string;
    issuedBy: string;
    instructor: string;
}

export interface Hackathon {
    title: string;
    issuedBy: string;
    company: string;
    award: string;
    project: string;
    link?: string;
}