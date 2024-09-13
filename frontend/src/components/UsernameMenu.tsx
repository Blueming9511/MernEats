import { useAuth0 } from "@auth0/auth0-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Separator,
} from "@radix-ui/react-dropdown-menu";
import { CircleUserRound } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export default function UsernameMenu() {
  const { user, logout } = useAuth0();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center px-3 font-bold hover:text-orange-500 gap-2">
        <CircleUserRound className="text-orange-500" />
        {user?.given_name}
      </DropdownMenuTrigger>

      <DropdownMenuContent className="bg-white flex flex-center flex-col rounded-md drop-shadow-md mt-2 pb-2 -pt-1 px-2">
        <DropdownMenuItem className="py-3">
          <Link to="/user-profile" className="font-bold hover:text-orange-500">
            User profile
          </Link>
        </DropdownMenuItem>

        <Separator />

        <DropdownMenuItem className="flex flex-center">
          
            <Button
              onClick={() => logout()}
              className="flex flex-1 font-bold bg-orange-500"
              ref="/"
            >
              Log out
            </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
