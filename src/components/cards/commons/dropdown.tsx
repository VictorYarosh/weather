import {
    BurgerContent,
    BurgerContentText,
    Dropdown,
    DropdownInput,
    DropdownList,
    DropdownListLi
} from "../cards-weather.styled";
import React from "react";

const DropdownMemu = () => {
    return (
        <Dropdown>
            <DropdownInput type={"checkbox"} />
            <DropdownList>
                <DropdownListLi></DropdownListLi>
                <DropdownListLi></DropdownListLi>
                <DropdownListLi></DropdownListLi>
            </DropdownList>
            <BurgerContent>
                <BurgerContentText>Home</BurgerContentText>
                <BurgerContentText>About</BurgerContentText>
                <BurgerContentText>Contacts</BurgerContentText>
            </BurgerContent>
        </Dropdown>
    )
}
export default DropdownMemu;
