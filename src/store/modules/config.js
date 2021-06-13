

const state = {
  errorMessage: '',
  pageLoading: false,
  breadcrumbs: []
};

const getters = {
  pageLoading: state => state.pageLoading,
  breadcrumbs: state => state.breadcrumbs
};

const actions = {

  pageLoading({ commit }, status) {
    commit('setPageLoading', status);
  },
  breadcrumbs({ commit }, status) {
    commit('setBreadcrumbs', status);
  },
};

const mutations = {
  setPageLoading(state, status) {
    state.pageLoading = status;
  },
  setBreadcrumbs(state, status) {
    state.breadcrumbs = status;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
