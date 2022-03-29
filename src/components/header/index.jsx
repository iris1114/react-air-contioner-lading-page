import { useEffect, useState } from "react";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";


const Header = () => {
    const [isDesktop,setIsDesktop] = useState(false);

    useEffect(() => {
        if(window.innerWidth >= 1024){
            setIsDesktop(true);
        }
        else{
            setIsDesktop(false);
        }
    },[])

    return(
        <>
        {
            isDesktop ? (<DesktopHeader />) : (<MobileHeader />)
        }
        </>
    
    );
}

export default Header;