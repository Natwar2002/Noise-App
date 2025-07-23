import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@heroui/react";
import { AiOutlineSlackSquare } from "react-icons/ai";
import SwitchButton from "../Switch/SwitchButton";

export default function NavigationBar() {
  return (
    <Navbar>
      <NavbarContent>
        <NavbarBrand>
          <AiOutlineSlackSquare />
          <p className="font-bold text-inherit">NOISE</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
            <Button as={Link} color="primary" href="signin" variant="bordered">
                Log in
            </Button>
        </NavbarItem>
        <NavbarItem>
            <Button as={Link} color="primary" href="/signup" variant="flat">
                Sign up
            </Button>
        </NavbarItem>
        <SwitchButton />
      </NavbarContent>
    </Navbar>
  );
}