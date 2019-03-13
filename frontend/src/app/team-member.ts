export interface TeamMember {
  id: number;
  name: string;
  lastName: string;
  fullName: string;
  occupation: string;
  avatar: string;
  email: string;
  /* Links for members, Social or Portfolio */
  links: {
    title: string,
    url: string,
    icon: {
      type: string, /* Wethear its fontAwesome (fas-fab-etc..) or link to an icon */
      url: string,
      color: string
    }
  }[];
}
