const initialState = {
    auth:{
        isAuthenticated: false
    }
}

export default function auth (state = initialState , action) {
    switch (action.type) {
        case 'LoggedIn': {
            return {
                auth : {
                    isAuthenticated: true,
                    userId: action.userId
                }
            }
        }
        case 'Logout': {
            console.log('hello')
            return {
                auth: {
                    isAuthenticated: false
                }
            }
        }
        default :
            return state;
    }



}
