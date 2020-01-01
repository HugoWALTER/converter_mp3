export const state = () => ({
  user: null
})

export const mutations = {
  setUser(state, value) {
    state.user = value
  }
}

export const actions = {
  login({ commit }, form) {
    return this.$axios.post(`${process.env.apiUrl}/authenticate`, {
      email: form.email,
      password: form.password
    }).then((res) => {
      localStorage.setItem('token', res.data.token)
      commit('setUser', res.data.token)
      $nuxt.$router.push('/')
    }).catch((err) => {
      if (err.response && err.response.data.response) {
        throw new Error(err.response.data.response)
      }
      throw new Error('Unknown server error')
    })
  },
  forgotPassword({ dispatch }, form) {
    return this.$axios.post(`${process.env.apiUrl}/resetRequest`, {
      email: form.email
    }).then((res) => {
      $nuxt.$router.push('/login')
    }).catch((err) => {
      if (err.response && err.response.data.response) {
        throw new Error(err.response.data.response)
      }
      throw new Error('Unknown server error')
    })
  },
  resetPassword({ dispatch }, { form, query }) {
    return this.$axios.put(`${process.env.apiUrl}/resetPassword`, {
      password: form.password,
      code: query.code
    }).then((res) => {
      $nuxt.$router.push('/login')
    }).catch((err) => {
      if (err.response && err.response.data.response) {
        throw new Error(err.response.data.response)
      }
      throw new Error('Unknown server error')
    })
  },
  getUser({ commit }, token) {
    commit('setUser', { user_id: 'USER_ID', token })
  },
  logout({ commit }) {
    localStorage.removeItem('token')
    commit('setUser', null)
    const to = $nuxt.$router.app.$route
    const routeNeedAuth = !to.meta || to.meta.auth === undefined || to.meta.auth
    if (routeNeedAuth) {
      $nuxt.$router.push('/login')
    }
  }
}

export const getters = {
  isUserLoggedIn: state => !!state.user,
  getToken: () => localStorage.getItem('token')
}
