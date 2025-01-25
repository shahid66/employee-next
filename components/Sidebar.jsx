import MenuItem from "./MenuItem";
import Setting from "./Setting";
import UserItem from "./UserItem";

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-2 w-[300px] border-r min-h-screen p-4 min-w-[300px]">
      <div>
        <UserItem />
      </div>
      <div className="grow">
        <MenuItem />
      </div>
      <div>
        <Setting />
      </div>
    </div>
  );
};

export default Sidebar;
