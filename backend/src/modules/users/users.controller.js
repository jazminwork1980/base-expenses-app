export function getUsers(req, res){
    const user = {
        name: "Jazmin",
        lastName: "Mendez"
    }

    return res.status(200).json(user);
}

/*const UsersController = {
    getUsers
}

export default UsersController;*/