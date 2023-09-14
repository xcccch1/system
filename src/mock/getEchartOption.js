const Mock = require("mockjs")


const data = Mock.mock([
  { value: ()=>Mock.Random.integer(0, 500), name: '衣服' },
  { value: ()=>Mock.Random.integer(0, 500), name: '裤子' },
  { value: ()=>Mock.Random.integer(0, 500), name: '鞋子' },
  { value: ()=>Mock.Random.integer(0, 500), name: 'rose4' },
  { value: ()=>Mock.Random.integer(0, 500), name: 'rose5' },
  { value: ()=>Mock.Random.integer(0, 500), name: 'rose6' }
])

export function getEchartOption(){
  return data
}