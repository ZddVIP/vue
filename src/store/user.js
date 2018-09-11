import {fetchUserInfo} from '@/api/userApi'

const user = {
  id: 0,
  name: 'test',
  loginName: '',
  loadUserInfo: function () {
    fetchUserInfo().then(response => {
      if (response) {
        var userInfo = response.data
        console.log(userInfo)
        if (userInfo) {
          debugger
          this.id = userInfo.id
          this.name = userInfo.name
          this.loginName = userInfo.loginname
        }
      }
    })
  }
}

export default user
