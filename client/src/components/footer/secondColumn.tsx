import React from "react";

import {
    SecondList,
    Ul,
    Li,
    Text,
    Title,
    FooterLink
} from "../../assets/styles/footer/footerStyle.style";

import { secondListItems } from "../../constants/footer/secondListItems";

export const SecondColumn: React.FC =  React.memo(() => {

    return (

        <SecondList>

            <Ul>

                {secondListItems.map((item, index) => (

                    <Li
                        key={index}
                    >

                        <FooterLink
                            to={item.link}
                        >

                            {item.text && <Text>{item.text}</Text>}
                            {item.title && <Title>{item.title}</Title>}

                        </FooterLink>

                    </Li>

                ))}

            </Ul>

        </SecondList>

    );

});
