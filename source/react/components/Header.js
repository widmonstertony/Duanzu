import React from 'react';

import {Link} from 'react-router-dom';
import {Navbar, NavItem} from 'react-materialize';

class Header extends React.Component {
    render() {
        return (<Navbar brand='UCSD CSSA 短租平台' right="right">
            <NavItem href='/#/login'>登陆</NavItem>
            <NavItem href='/#/register'>注册</NavItem>
            <NavItem href='/#/aboutus'>关于我们</NavItem>
            <NavItem href='/#/publish'>发布</NavItem>
            <NavItem href='/#/CheckInfo'>查看短租信息</NavItem>
            <NavItem href='/#/ChangePassword'>修改密码</NavItem>
            <NavItem href='/#/ChangeProfile'>修改信息</NavItem>
        </Navbar>);
    }
};

export default Header;
