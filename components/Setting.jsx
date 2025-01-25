import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { LogIn, LogOut, UserRoundPen } from "lucide-react";

const Setting = () => {
  const menulist = [
    {
      link: "/",
      icon: <UserRoundPen />,
      text: "Profile",
    },
  ];
  return (
    <Command>
      <CommandList>
        <CommandGroup heading="Setting">
          {menulist.map((item, i) => (
            <CommandItem key={i}>
              {item.icon}
              {item.text}
            </CommandItem>
          ))}
          <CommandItem>
            <LogIn />
            Login <LogOut />
            LogOut
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
};

export default Setting;
