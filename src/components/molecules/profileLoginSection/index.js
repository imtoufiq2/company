import React from 'react'
import Profile from '../../organism/Profile'
import Button from '../../atoms/button'
import { useNavigate } from 'react-router-dom';
import { RxCross2, RxHamburgerMenu } from 'react-icons/rx';

const ProfileLoginSection = ({isMenuOpen, toggleMenu , userLogedIn}) => {
    const navigate = useNavigate();
  return (
    <div id="profileAndLogin" className="flex items-center gap-2">
    <span className="md:hidden cursor-pointer" onClick={toggleMenu}>
      {isMenuOpen ? (
        <RxCross2 size={25} />
      ) : (
        <RxHamburgerMenu size={25} />
      )}
    </span>
    {!userLogedIn ? (
      <Button
        label="Login"
        onClick={() => navigate("/login")}
        className="font-semibold border px-5 py-[10px] my-auto text-[#55D976] h-[46px] text-[16px]"
      />
    ) : (
      <Profile />
    )}
  </div>
  )
}

export default ProfileLoginSection
