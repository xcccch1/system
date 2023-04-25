import Mock from "mockjs";
import { getmessages } from "./messages";
import { getHeaderMenu } from "./getHeaderMenu"
import getTabList from "./tablist";

// 
Mock.mock(/\/getmessages/, "get", getmessages)

// header
Mock.mock(/\/getHeaderMenuList/, "get", getHeaderMenu)

Mock.mock(/\/getTabList/,"get",getTabList)