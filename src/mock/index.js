import Mock from "mockjs";
import { getmessages } from "./messages";

// 
Mock.mock(/\/getmessages/, "get", getmessages)