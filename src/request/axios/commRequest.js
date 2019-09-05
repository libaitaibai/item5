import request from '@/request/request'

// 搜索获取列表数据
export function fetchLists (url, params) {
  return request({
    url,
    method: 'GET',
    params
  })
}

export function createItem (url, data) {
  return  request ({
    url,
    method: 'POST',
    data
  })
}
// 创建用户
export function httpRequest (url, method = 'GET', params = [], data = []) {
  return  request ({
    url,
    method,
    params,
    data
  })
}
