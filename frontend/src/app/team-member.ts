export interface TeamMember {
  id: number;
  name: string;
  last_name: string;
  full_name: string;
  occupation: string;
  avatar: string;
  email: string;
  /* Links for members, Social or Portfolio */
  links: {
    title: string,
    url: string,
    icons: {
      type: string, /* Wethear its fontAwesome (fas-fab-etc..) or link to an icon */
      url: string,
      color: string
    }
  }[];
}
