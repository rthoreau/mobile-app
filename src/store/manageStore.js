const state = {
  currentMusic: {url: 'https://www.youtube.com/watch?v=pliDsyfUXcg', title: 'Indie Indie Folk - Summer 2015 Tracklist Included', author: 'Fernando Bueno', date: '2015-07-18', duration: '6949', thumbnail: 'https://i9.ytimg.com/sb/ZwBkXgWNs_M/storyboard3_L2/M0.jpg?sigh=rs%24AOn4CLBUyfI7x8IRqXF_2NdPeIb3UX8tKw', plateform: 'yt'}
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