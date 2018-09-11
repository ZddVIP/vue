import request from '@/utils/request'

export function fetchUserInfo () {
  return request({url: '/getCurrentUserInfo', method: 'get'})
}
