export interface ITeamMember {
    name: string;
    description: string;
    photo: string;
    social: ILinks[]
}

export interface ILinks {
    icon: string;
    url: string;
}