import "core-js/features/map";
import "core-js/features/set";
import React from "react";
import ReactDOM from "react-dom";
//import connect from "@vkontakte/vk-connect";
import App from "./App";
import { View, Panel, PanelHeader, Header, Group, Cell } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import Icon24Cancel from '@vkontakte/icons/dist/24/cancel';
import bridge from '@vkontakte/vk-bridge-mock';


// Init VK  Mini App
bridge.send("VKWebAppInit");
bridge.send("VKWebAppGetUserInfo");
bridge.send("VKWebAppGetGeodata");
bridge.send('VKWebAppGetUserInfo', {});
bridge.send("VKWebAppAllowNotifications");

ReactDOM.render(<App />, document.getElementById("root"));
if (process.env.NODE_ENV === "development") {
  import("./eruda").then(({ default: eruda }) => {}); //runtime download
}
