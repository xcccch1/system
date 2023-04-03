import Mock from "mockjs";
import { getmessages } from "./messages";
import { getHeaderMenu } from "@/mock/getHeaderMenu"

// 
Mock.mock(/\/getmessages/, "get", getmessages)

// header
Mock.mock(/\/getHeaderMenuList/, "get", getHeaderMenu)