"use client";

import { toast } from "sonner";
import { Button } from "./ui/button";

const Text = () => {
  const handleClick = (mode) => {
    mode ? toast.success("Test success") : toast.error("Text Error");
  };
  return <Button onClick={() => handleClick(false)}>Text Toast</Button>;
};

export default Text;
