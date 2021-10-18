import { Affix, Col, Layout, Row, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import { nav } from "../router/index";

function Header() {
    let { pathname } = useLocation();
    let activeIndex = nav.findIndex((navData) => {
        return navData.to === pathname;
    });

    return (
        <Affix offsetTop={0}>
            <Layout.Header>
                <div className="wrap">
                    <Row>
                        <Col xs={6} sm={4} md={2}>
                            <Link to="/">CNode</Link>
                        </Col>
                        <Col xs={18} sm={20} md={22}>
                            <Menu
                                mode="horizontal"
                                theme="dark"
                                selectedKeys={[activeIndex + ""]}
                            >
                                {nav.map((item, index) => {
                                    return (
                                        <Menu.Item key={index}>
                                            <Link to={item.to}>{item.txt}</Link>
                                        </Menu.Item>
                                    );
                                })}
                            </Menu>
                        </Col>
                    </Row>
                </div>
            </Layout.Header>
        </Affix>
    );
}

export default Header;