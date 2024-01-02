import React from "react";

import {
    FirstList,
    Logo,
    Ul,
    Text,
    Li,
    FooterLink,
    SocialNetworks
} from "../../assets/styles/footer/footerStyle.style";

import { firstListItems } from "../../constants/footer/firstListItems";

export const FirstColumn: React.FC = React.memo(() => {

    return (

        <FirstList>

            <Ul>

                {firstListItems.map((item, index) => (

                    <Li
                        key={index}
                    >

                        <FooterLink
                            to={item.link || ""}
                        >

                            {item.logoSrc && <Logo src={item.logoSrc} />}

                            {item.text && <Text>{item.text}</Text>}

                            {item.socialNetworks && (

                                <SocialNetworks>

                                    {item.socialNetworks.map((socialItem, socialIndex) => (

                                        <FooterLink
                                            key={socialIndex}
                                            to={socialItem.link}
                                        >

                                            {socialItem.icon}

                                        </FooterLink>

                                    ))}

                                </SocialNetworks>

                            )}

                        </FooterLink>

                    </Li>

                ))}

            </Ul>

        </FirstList>

    );

});
