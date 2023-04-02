import Mock from "mockjs";
import { getmessages } from "./messages";
import { getMenu } from "@/mock/getMenu"

// 
Mock.mock(/\/getmessages/, "get", getmessages)

// header
Mock.mock(/\/getMenuList/, "get", getMenu)