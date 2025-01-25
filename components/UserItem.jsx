import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const UserItem = () => {
  return (
    <div className="flex gap-2 items-center justify-center">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <div>
        <p className="text-xl font-bold">KK.Shahid</p>
        <p className="text-[12px]">kk.shahid@gmail.com</p>
      </div>
    </div>
  );
};

export default UserItem;
