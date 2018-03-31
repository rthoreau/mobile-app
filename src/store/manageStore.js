const state = {
  currentMusic: 'ze7857586',
  waitingLine:[],
  musics:[
    {id:'ze7857586', url: 'https://www.youtube.com/watch?v=rVeMiVU77wo', title: 'alt-J (∆) Breezeblocks', author: 'alt-J', date: '2012-03-23', duration: '226', thumbnail: 'http://www.konbini.com/wp-content/blogs.dir/3/files/2012/06/Alt-j-Breezeblocks-480x279.jpg', plateform: 'lo', favorite:true},
    {id:'z7281z6', url: 'https://www.youtube.com/watch?v=mEBrRSa7BaM', title: 'Klangnomad - Promo 2013', author: 'Klangnomad Music', date: '2013-08-09', duration: '2916', thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2uL93WD0W8J_S1aLlE_cZVBxJ89RGQD4JvB8zZotXE7XvvW7v', plateform: 'yt', favorite:true},
     {id:'5er84t568e', url: 'https://www.youtube.com/watch?v=pliDsyfUXcg', title: 'Indie Indie Folk - Summer 2015 Tracklist Included', author: 'Fernando Bueno', date: '2015-07-18', duration: '6949', thumbnail: 'https://i9.ytimg.com/sb/ZwBkXgWNs_M/storyboard3_L2/M0.jpg?sigh=rs%24AOn4CLBUyfI7x8IRqXF_2NdPeIb3UX8tKw', plateform: 'yt', favorite:true},
    {id:'ert54e', url: 'https://www.youtube.com/watch?v=umjMGZw6vtw', title: 'Yann Tiersen - "La valse de Monstres" (full Album)', author: 'srtanada08', date: '2013-08-18', duration: '2642', thumbnail: 'http://www.kaltblut-magazine.com/wp-content/uploads/2014/08/yann-tiersen-4df4cdfab01e1-720x385.jpg', plateform: 'yt', favorite:true},
    {id:'ze5750785z6', url: 'https://www.youtube.com/watch?v=D6TawVna7PQ', title: 'ESCAPE - A Beautiful Chill Mix', author: 'Pulse8', date: '2017-12-14', duration: '6183', thumbnail: 'https://i9.ytimg.com/sb/D6TawVna7PQ/storyboard3_L1/M2.jpg?sigh=rs%24AOn4CLDmljK3QQnUIad1F1p0KD8x3zZL_w', plateform: 'sp', favorite:false},
    {id:'a65468e468v4', url: 'https://www.youtube.com/watch?v=wYNAZz86DVo', title: 'C418 - One [full album] (2012)', author: '2nMusic', date: '2013-02-12', duration: '5743', thumbnail: 'https://f4.bcbits.com/img/a1911559443_10.jpg', plateform: 'yt', favorite:false},
    {id:'ert5784ert', url: 'https://www.youtube.com/watch?v=pliDsyfUXcg', title: 'Indie Indie Folk - Summer 2015 Tracklist Included', author: 'Fernando Bueno', date: '2015-07-18', duration: '6949', thumbnail: 'https://i9.ytimg.com/sb/ZwBkXgWNs_M/storyboard3_L2/M0.jpg?sigh=rs%24AOn4CLBUyfI7x8IRqXF_2NdPeIb3UX8tKw', plateform: 'yt', favorite:true},
    {id:'bertertb', url: 'https://www.youtube.com/watch?v=umjMGZw6vtw', title: 'Yann Tiersen - "La valse de Monstres" (full Album)', author: 'srtanada08', date: '2013-08-18', duration: '2642', thumbnail: 'http://www.kaltblut-magazine.com/wp-content/uploads/2014/08/yann-tiersen-4df4cdfab01e1-720x385.jpg', plateform: 'yt', favorite:true},
    {id:'8ea4zv168', url: 'https://www.youtube.com/watch?v=D6TawVna7PQ', title: 'ESCAPE - A Beautiful Chill Mix', author: 'Pulse8', date: '2017-12-14', duration: '6183', thumbnail: 'https://i9.ytimg.com/sb/D6TawVna7PQ/storyboard3_L1/M2.jpg?sigh=rs%24AOn4CLDmljK3QQnUIad1F1p0KD8x3zZL_w', plateform: 'yt', favorite:true},
    {id:'zertert6', url: 'https://www.youtube.com/watch?v=umjMGZw6vtw', title: 'Yann Tiersen - "La valse de Monstres" (full Album)', author: 'srtanada08', date: '2013-08-18', duration: '2642', thumbnail: 'http://www.kaltblut-magazine.com/wp-content/uploads/2014/08/yann-tiersen-4df4cdfab01e1-720x385.jpg', plateform: 'yt', favorite:true},
    {id:'azdedbgyu', url: 'https://www.youtube.com/watch?v=D6TawVna7PQ', title: 'ESCAPE - A Beautiful Chill Mix', author: 'Pulse8', date: '2017-12-14', duration: '6183', thumbnail: 'https://i9.ytimg.com/sb/D6TawVna7PQ/storyboard3_L1/M2.jpg?sigh=rs%24AOn4CLDmljK3QQnUIad1F1p0KD8x3zZL_w', plateform: 'sp', favorite:false}
  ],
  playlists:[
    {id:'14', name:'Sleep', musics:["5er84t568e","azdedbgyu"]},
    {id:'22', name:'Test', musics:["bertertb","zertert6"]}
  ],
  searchResult:[
    {id:'ert54e', url: 'https://www.youtube.com/watch?v=umjMGZw6vtw', title: 'Yann Tiersen - "La valse de Monstres" (full Album)', author: 'srtanada08', date: '2013-08-18', duration: '2642', thumbnail: 'http://www.kaltblut-magazine.com/wp-content/uploads/2014/08/yann-tiersen-4df4cdfab01e1-720x385.jpg', plateform: 'yt', favorite:true},
    {id:'ze5750785z6', url: 'https://www.youtube.com/watch?v=D6TawVna7PQ', title: 'ESCAPE - A Beautiful Chill Mix', author: 'Pulse8', date: '2017-12-14', duration: '6183', thumbnail: 'https://i9.ytimg.com/sb/D6TawVna7PQ/storyboard3_L1/M2.jpg?sigh=rs%24AOn4CLDmljK3QQnUIad1F1p0KD8x3zZL_w', plateform: 'sp', favorite:false},
    {id:'a65468e468v4', url: 'https://www.youtube.com/watch?v=wYNAZz86DVo', title: 'C418 - One [full album] (2012)', author: '2nMusic', date: '2013-02-12', duration: '5743', thumbnail: 'https://f4.bcbits.com/img/a1911559443_10.jpg', plateform: 'yt', favorite:false},
    {id:'ert5784ert', url: 'https://www.youtube.com/watch?v=pliDsyfUXcg', title: 'Indie Indie Folk - Summer 2015 Tracklist Included', author: 'Fernando Bueno', date: '2015-07-18', duration: '6949', thumbnail: 'https://i9.ytimg.com/sb/ZwBkXgWNs_M/storyboard3_L2/M0.jpg?sigh=rs%24AOn4CLBUyfI7x8IRqXF_2NdPeIb3UX8tKw', plateform: 'yt', favorite:true}
  ]
}

const getters = {
  getCurrentMusic: state => state.musics.filter(music => music.id === state.currentMusic)[0],
  getMusics: state => state.musics,
  getMusic: function (state){ 
    return function (id) {
      return state.musics.filter(music => music.id === id)[0];
    };
  },
  getPlaylists: state => state.playlists,
  getPlaylist: function (state){ 
    return function (id) {
      var playlist = state.playlists.filter(playlist => playlist.id === id);
      return playlist.length ? playlist[0] : {id:id, name:'', musics:[]};
    };
  },
  getFavorites:state => state.musics,
  getSearchResult: state => state.searchResult,
  getWaitingLine:state => state.waitingLine
}

const mutations = {
  mutateCurrentMusic: (state, currentMusic) => {
    state.currentMusic = currentMusic;
  },
  mutateMusics: (state, musics) => {
    state.musics = musics;
  },
  mutatePlaylists: (state, playlists) => {
    state.playlists = playlists;
  },
  mutateWaitingLing: (state, waitingLine) => {
    state.waitingLine = waitingLine;
  },
  mutateDeletePlaylist: (state, playlistId) => {
    state.playlists = state.playlists.filter(playlist => playlist.id !== playlistId);
  },
  mutateAddMusic: (state, params) => {
    state.playlists.map(function (playlist){      
      if (params.playlistIds.indexOf(playlist.id) !== -1){
        playlist.musics.push(params.musicId);
      }
      return playlist;
    });
  }
}

const actions = {
  setCurrentMusic (context, currentMusic) {
    context.commit('mutateCurrentMusic', currentMusic)
  },
  setMusics (context, musics) {
    context.commit('mutateMusics', musics)
  },
  setPlaylists (context, playlists) {
    context.commit('mutatePlaylists', playlists)
  },
  setWaitingLine (context, waitingLine) {
    context.commit('mutateWaitingLine', waitingLine)
  },
  deletePlaylist (context, playlistId) {
    context.commit('mutateDeletePlaylist', playlistId)
  },
  addMusic(context, params){
    context.commit('mutateAddMusic', params)
  }
  
}

export default {namespaced: true, state, getters, mutations, actions}