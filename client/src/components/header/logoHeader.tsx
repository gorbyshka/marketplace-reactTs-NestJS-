import React from "react";

import {
    Logo,
    Img
} from "../../assets/styles/header/headerStyle.style";

import { Link } from "react-router-dom";

export const LogoHeader: React.FC = React.memo(() => {

    return (

        <>

            <Logo>

                <Link to='/'>

                    <Img
                        src={require('../../assets/icons/logo.svg').default}
                        alt="Logo"
                    />

                </Link>

            </Logo>

        </>
    );

});
