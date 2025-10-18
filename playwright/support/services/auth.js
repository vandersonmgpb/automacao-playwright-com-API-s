
export const authService = (request) => {

    const login = async (user) => {
        return await request.post('http://localhost:3333/api/auth/login', {
            data: {
                email: user.email,
                password: user.password
            }
        })
    }

    const createUser = async (user) => {
        return await request.post('http://localhost:3333/api/auth/register', {
            data: user
        })
    }

    return {
        createUser,
        login
    }
}