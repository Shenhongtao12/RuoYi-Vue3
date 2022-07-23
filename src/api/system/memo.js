import request from '@/utils/request'

// 查询备忘录列表
export function listMemo(query) {
  return request({
    url: '/system/memo/list',
    method: 'get',
    params: query
  })
}

// 查询备忘录详细
export function getMemo(noticeId) {
  return request({
    url: '/system/memo/' + noticeId,
    method: 'get'
  })
}

// 新增备忘录
export function addMemo(data) {
  return request({
    url: '/system/memo',
    method: 'post',
    data: data
  })
}

// 修改备忘录
export function updateMemo(data) {
  return request({
    url: '/system/memo',
    method: 'put',
    data: data
  })
}

// 删除备忘录
export function delMemo(noticeId) {
  return request({
    url: '/system/memo/' + noticeId,
    method: 'delete'
  })
}
