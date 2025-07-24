import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Avatar,
} from "@heroui/react";
import { AiOutlineSlackSquare } from "react-icons/ai";
import useAuth from '../../store/authStore';
import SwitchButton from "../Switch/SwitchButton";

export default function NavigationBar() {

  const user = useAuth(state => state.user);

  return (
    <Navbar>
      <NavbarContent>
        <NavbarBrand>
          <AiOutlineSlackSquare className="size-10" />
          <p className="font-bold text-inherit">NOISE</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        {
          user? (<Avatar isBordered color="danger" className="bg-slate-600" src={user?.avatar} />) : (<>
            <NavbarItem>
              <Button as={Link} color="danger" href="signin" variant="bordered">
                Log in
              </Button>
            </NavbarItem>
            <NavbarItem>
              <Button as={Link} color="danger" href="/signup" variant="flat">
                Sign up
              </Button>
            </NavbarItem>
          </>)
        }
        <SwitchButton />
      </NavbarContent>
    </Navbar>
  );
}