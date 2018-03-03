const state = {
  test: 'coucou'
}

const getters = {
  getTest: function (state) { return state.test }
}

const mutations = {
  mutateTest: (state, test) => {
    state.test = test
  }
}

const actions = {
  setTest (context, test) {
    console.log(test)
    context.commit('mutateTest', test)
  }
}

export default {namespaced: true, state, getters, mutations, actions}