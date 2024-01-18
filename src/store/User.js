export const UserModule = {
    namespace: true,

    state: {
        user: null
    },

    mutations: {
        SET_USER(state, user) {
            state.user = user
        }
    },

    actions: {
        setUser({ commit }, user) {
            commit('SET_USER', user)
        }
    },
}