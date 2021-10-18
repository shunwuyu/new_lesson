// 1. 导航
// 2. 路由规则 switch  route 
import { Layout } from "antd";
import React from "react";
import { Switch, Route } from "react-router-dom";
import { route } from "./router/index";
import Header from "./component/header";
// import Footer from "./component/footer";

function App() {
    return (
        <Layout className="page">
            <Header />
            <Layout.Content>
                <div className="wrap">
                    <Switch>
                        {route.map((itemData, index) => {
                            return (
                                <Route
                                    key={index}
                                    path={itemData.path}
                                    exact={itemData.exact}
                                    render={(props) => {
                                        return itemData.render(props);
                                    }}
                                ></Route>
                            );
                        })}
                    </Switch>
                </div>
            </Layout.Content>
            {/* <Footer /> */}
        </Layout>
    );
}

export default App;