import {firebaseAuth} from "../../Firebase";

const state = {
    currentUser: '',
};
const getters = {
    currentUser: state => state.currentUser
};
const mutations = {
    userStatus: (state, user) => {
        user === null
            ? state.currentUser = null
            : state.currentUser = user.email
    }
};
const actions = {


    signIn: async ({commit}, user) => {
            try {
                const userData = await firebaseAuth.signInWithEmailAndPassword(user.email, user.password);
                commit('userStatus', userData.user);
                alert('log ok')
            } catch (error) {
                const errorCode = error.code;
                const errorMess = error.message;
                if (errorCode === 'auth/wrong-password') {
                    alert('wrong password')
                } else {
                    alert(errorMess)
                    console.log(this.form.email, this.form.password)
                }
            }
    },
    signOut: async ({commit}) => {
        try {
            await firebaseAuth.signOut()
            alert('sign out ok ')
        } catch (error) {
            alert('error signing out , ${error}')
        }
        commit('userStatus', null)
    }
};
export default {
    state, mutations, getters, actions
}
