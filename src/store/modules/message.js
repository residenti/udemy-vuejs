const state = {
  message: ''
}

const getters = {
  message: state => state.message
}

// データ(state)の変更を行う処理は必ず mutations に定義する.
const mutations = {
  updateMessage(state, newMessage) {
    state.message = newMessage
  }
}

// mutations とは異なり非同期な処理が可能.
//
// コンポーネントから state を変更する方法として次の2通りがある.
// ・commit して mutation を呼び出す
// ・dispatch して action を呼び出す
// どちらを使っても良いが、どちらかに統一するべき.
const actions = {
  // { commit } は ES6 の書き方で、context の内利用するもののみを指定できる.
  // こちらの方が処理が追いやすいのでおすすめ.
  updateMessage({ commit }, newMessage) {
    commit('updateMessage', newMessage)
  }
}

export default {
  namespaced: true,

  state,
  getters,
  mutations,
  actions
}
