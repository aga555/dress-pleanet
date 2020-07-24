import {firebaseAuth} from "@/Firebase";

export const signIn = async ({commit}, user) => {
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
}
export const signOut = async ({commit}) => {
    try {
        await firebaseAuth.signOut()
        alert('sign out ok ')
    } catch (error) {
        alert('error signing out , ${error}')
    }
    commit('userStatus', null)
}
