import { LucideProps, MessageSquareText } from 'lucide-react';
import { User } from 'lucide-react';
import { ForwardRefExoticComponent, RefAttributes } from 'react';

interface NavbarListI {
  name: string;
  link: string;
  image: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
}
export const navbarList: NavbarListI[] = [
  {
    name: "Messages",
    link: "/",
    image: MessageSquareText,
  },
  {
    name: "Profile",
    link: "/profile",
    image: User,
  },
];