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
import { useLocation, useNavigate } from 'react-router-dom';

export default function NavigationBar() {
  const user = useAuth(state => state.user);
  const navigate = useNavigate();
  const location = useLocation();

  const handleBrandClick = () => {
    // Normalize trailing slash
    const currentPath = location.pathname.replace(/\/+$/, '');
    if (currentPath !== '/home') {
      navigate('/home');
    }
  };

  return (
    <Navbar>
      <NavbarContent>
        <NavbarBrand onClick={handleBrandClick} className="cursor-pointer flex items-center gap-2">
          <AiOutlineSlackSquare className="size-10" />
          <p className="font-bold text-inherit">NOISE</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        {user ? (
          <Avatar
            isBordered
            color="secondary"
            className="bg-slate-600"
            src={user?.avatar}
          />
        ) : (
          <>
            <NavbarItem>
              <Button as={Link} color="danger" href="/signin" variant="bordered">
                Log in
              </Button>
            </NavbarItem>
            <NavbarItem>
              <Button as={Link} color="danger" href="/signup" variant="flat">
                Sign up
              </Button>
            </NavbarItem>
          </>
        )}
        <SwitchButton />
      </NavbarContent>
    </Navbar>
  );
}