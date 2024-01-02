import React, {
  useEffect,
  useState
} from "react";

import {
  HeaderWrapper,
  UserBlock,
  UserIcon,
  UserItems,
  UserName,
  Avatar,
  Name
} from "../../assets/styles/header/headerStyle.style";

import { LogoHeader } from "./logoHeader";

import { NavHeader } from "./navHeader";

import { useAuth } from "../../providers/AuthProvider";

import { UploadImage } from "./uploadImage";

import { ButtonHeader } from "./buttonHeader";

import { AiOutlineUser } from "react-icons/ai";

import { Auth } from "../../pages/auth/auth";

export const Header: React.FC = React.memo(() => {

  const { user } = useAuth();

  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const [userImage, setUserImage] = useState<string | null>(null);
  const [isAuthVisible, setIsAuthVisible] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      setIsHeaderFixed(window.scrollY > 50);
      setIsAuthVisible(false)

    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (

    <HeaderWrapper
      fixed={isHeaderFixed}
    >

      <LogoHeader />

      <NavHeader />

      {user ? (

        <UserBlock>

          <UserItems>

            <UserIcon>

              {userImage ? (

                <Avatar
                  src={userImage}
                  alt="Avatar"
                />

              ) : (

                <AiOutlineUser
                  style={{ width: '44px', height: '44px' }}
                />

              )}

            </UserIcon>

            <UploadImage
              onImageUpload={(file) => setUserImage(URL.createObjectURL(file))}
            />

            <UserName>

              <Name>

                {user.email.split('.')[0]}

              </Name>

            </UserName>

          </UserItems>

        </UserBlock>

      ) : (

        <ButtonHeader onOpenAuth={() => setIsAuthVisible(true)} />
        
      )}

      {isAuthVisible && <Auth />}

    </HeaderWrapper>

  );

});
