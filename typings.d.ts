interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}

interface Image {
    _type: "image";
    asset: {
        _ref: string;
        _type:"reference";        
    };
}

export interface PageInfo extends SanityBody {
    _type: "pageInfo";
    address: string;
    backgroundInformation: string;
    email: string;
    role: string;
    heroImage: Image;
    name: string;
    phoneNumber: string;
    profilePic: Image;
}

export interface Technology extends SanityBody {
    _type: "skill";
    image: Image;
    progress: number;
    title: string;
}

export interface Skill extends SanityBody {
    _type: "skill";
    image: Image;
    progress: number;
    title: string;
}

export interface Experience extends SanityBody {
    _type: "experience";
    company: string;
    companyImage: Image;
    dateStarted: date;
    dateEnded: date;
    isCurrentlyWorkingHere: boolean;
    jobTitle: string;
    points: string[];
    technologies: Technology[];
}
export interface Education extends SanityBody {
    _type: "education";
    title: string;
    institution: string;
    dateStarted: date;
    dateEnded: date;  
    diploma: object; 
    urlDiploma: string; 
    imageDiploma: Image;
}

// export interface Project extends SanityBody {
//     _type: "projec";
//     image: Image;
//     progress: number;
//     title: string;
// }

export interface Social extends SanityBody {
    _type: "social";
    title: string;
    url: string;
}