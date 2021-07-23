import React from 'react';
import Logo from "./Logo/Logo";
import Menu from "./Menu";
import Checkout from "./Ckeckout/Checkout";

function Header(props) {
    return (
        <div className="header">
            <Logo />
            <Menu />
            <Checkout database={props.database}
                      setBought={props.setBought} />
        </div>
    );
}

export default Header;