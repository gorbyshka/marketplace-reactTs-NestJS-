import React from "react";

import {
    ThirdList,
    Ul,
    Li,
    FooterLink,
    Text,
    Title
} from "../../assets/styles/footer/footerStyle.style";

import {
    InputBlock,
    JoinInput,
    JoinButton
} from "../../assets/styles/main/joinOurWeeklyStyle.style";

import { thirdListItems } from "../../constants/footer/thirdListItems";

import { AiOutlineMail } from "react-icons/ai";

export const ThirdColumn: React.FC =  React.memo(() => {

    return (

        <ThirdList>

            <Ul>

                {thirdListItems.map((item, index) => (

                        <Li
                            key={index}
                        >

                            <FooterLink
                                to={item.link || ""}
                            >

                                {item.title && <Title>{item.title}</Title>}

                                {item.text && <Text>{item.text}</Text>}

                                {item.inputPlaceholder && (

                                    <InputBlock>

                                        <JoinInput
                                            placeholder={item.inputPlaceholder}
                                            type="text"
                                        />

                                        <JoinButton>

                                            <AiOutlineMail />

                                            {item.buttonText}

                                        </JoinButton>

                                    </InputBlock>

                                )}

                            </FooterLink>

                        </Li>

                    ))}

            </Ul>

        </ThirdList>

    );

});
