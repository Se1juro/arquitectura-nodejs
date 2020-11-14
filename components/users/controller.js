const userModel = require('./model');
const userDto = require('./dto');

module.exports={
    async getUsers(req,res){
        const page = parseInt((req.query.page || 1).toString(),10);
        const limit = parseInt((req.query.limit||10).toString(),10);
        const users = await userModel.getUsers(page,limit);
        //console.log(users)
        return res.send(userDto.multiple(users,req.user));
    },
    async getUser(req,res){
        const user = await userModel.getUser(req.params.id);
        if(!user) return res.sendStatus(404);
        return res.send(userDto.single(user,req.user))
    },
    async createUser(req,res){
        if(!req.body.username) return res.sendStatus(400);
        if(!req.body.email) return res.sendStatus(400);
        if(!req.body.password) return res.sendStatus(400);

        const user = await userModel.createUser({
            username:req.body.username,
            email:req.body.email,
            password:req.body.password
        });
        return res.send(userDto.single(user,req.user));
    }
}