const state = {
  currentMusic: {url: 'https://www.youtube.com/watch?v=mEBrRSa7BaM', title: 'Klangnomad - Promo 2013', author: 'Klangnomad Music', date: '2013-08-09', duration: '2916', thumbnail: 'https://i9.ytimg.com/sb/mEBrRSa7BaM/storyboard3_L2/M2.jpg', plateform: 'yt'}
}

const getters = {
  getCurrentMusic: state => state.currentMusic
}

const mutations = {
  mutateCurrentMusic: (state, currentMusic) => {
    state.currentMusic = currentMusic;
  }
}

const actions = {
  setCurrentMusic (context, currentMusic) {
    context.commit('mutateCurrentMusic', currentMusic)
    console.log(currentMusic);
  }
}

export default {namespaced: true, state, getters, mutations, actions}