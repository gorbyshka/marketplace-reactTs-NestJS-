import React from "react";

import {
    Menu,
    List,
    Item,
    HeaderLink 
} from "../../assets/styles/header/headerStyle.style";

import { Items } from "../../constants/header/Items";

export const NavHeader: React.FC = React.memo(() => {

    return (

        <Menu>

            <List>

                {Items.map((item) => (

                    <Item key={item.nameItem}>

                        <HeaderLink 
                            to={item.link}

                        >
                            {item.nameItem}

                        </HeaderLink >

                    </Item>

                ))}

            </List>

        </Menu >

    );

});
