import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { CircleDollarSign, ClipboardPlus, User } from "lucide-react";

const MenuItem = () => {
  const menulist = [
    {
      group: "General",
      items: [
        {
          link: "/",
          icon: <User />,
          text: "Employee",
        },
        {
          link: "/",
          icon: <CircleDollarSign />,
          text: "Salary",
        },
        {
          link: "/",
          icon: <ClipboardPlus />,
          text: "Report",
        },
      ],
    },
  ];
  return (
    <Command>
      <CommandList>
        {menulist.map((menu, index) => (
          <CommandGroup key={index} heading={menu.group}>
            {menu.items.map((item, i) => (
              <CommandItem key={i}>
                {item.icon}
                {item.text}
              </CommandItem>
            ))}
          </CommandGroup>
        ))}
      </CommandList>
    </Command>
  );
};

export default MenuItem;
