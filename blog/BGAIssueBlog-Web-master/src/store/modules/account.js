/**
 * Created by bingoogolapple on 2017/5/31.
 */
import { makeAction } from '../util'

const SET_GITHUB_USER = 'SET_GITHUB_USER'

const state = {
  gitHubUser: null,  // 这个不要修改，这个不要修改，这个不要修改
  gitHubUsername: 'Terence95',  // 修改成你自己的 GitHub 账号
  showQQGroup: true,  // 如果要显示你自己的 QQ 群二维码图片的话这里配置成 true 并且替换「BGAIssueBlog-Web/static/img/qq-group.png」为你自己的 QQ 群二维码图片，否则配置成 false 即可
  thirdPartySite: [  // 配置你想在左上角展示的第三方站点信息
    {
      img: '/static/img/github.png',  // 第三方站点图标，存放在「BGAIssueBlog-Web/static/img」目录中
      url: 'https://github.com/Terence95'  // 第三方站点的 url
    },
    {
      img: '/static/img/weibo.png',
      url: 'http://weibo.com/1977033185/profile?rightmod=1&wvr=6&mod=personinfo&is_all=1'
    },
    {
      img: '/static/img/git.png',
      url: 'https://github.com/Terence95'
    }
    // 如果还有其他站点需要显示，继续在这里追加
  ]
}

const mutations = {
  [SET_GITHUB_USER] (state, gitHubUser) {
    state.gitHubUser = gitHubUser
  }
}

const actions = {
  setGitHubUser: makeAction(SET_GITHUB_USER)
}

const getters = {
  gitHubUsername: (state) => {
    return state.gitHubUsername
  },
  context: (state) => {
    return `${state.gitHubUsername}/${state.gitHubUsername}.github.io`
  },
  gitHubUser: (state) => {
    return state.gitHubUser
  },
  showQQGroup: (state) => {
    return state.showQQGroup
  },
  thirdPartySite: (state) => {
    return state.thirdPartySite
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}
