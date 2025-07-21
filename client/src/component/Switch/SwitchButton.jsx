import { Switch } from "@heroui/react";
import { SunIcon } from "../../assets/svgs/Sun";
import { MoonIcon } from "../../assets/svgs/Moon";
import { useEffect, useState } from "react";
import { useTheme } from 'next-themes';

export default function SwitchButton() {
  const [currentTheme, setCurrentTheme] = useState(localStorage.getItem('theme')=="dark")
  const { setTheme } = useTheme();

  useEffect(()=>{
    if(currentTheme){
      localStorage.setItem('theme','dark')
    }else{
      localStorage.setItem('theme','light')
    }
  },[currentTheme, setTheme]);

  useEffect(()=>{
    const getTheme = localStorage.getItem('theme');
    setTheme(getTheme)
  },[currentTheme, setTheme])

  return (
    <Switch
      defaultSelected={currentTheme}
      onChange={() => setCurrentTheme(!currentTheme)}
      size="sm"
      color="primary"
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <MoonIcon className={className} />
        ) : (
          <SunIcon className={className} />
        )
      }
    />
  );
}