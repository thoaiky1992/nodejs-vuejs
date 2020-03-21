const UserModel = require('./../models/UserModel');


let login = (req,res) => {
	const token = jwt.sign({username : req.body.username},process.env.JWT_TOKEN_KEY);
    res.json(token);
}
let register = async (req,res) => {
	let payload = req.body;
	let user = await UserModel.getUserByEmail(payload.email);
	if(user.length){
		return res.json({message : 'Email đã tồn tại !!!' , status : 'success'})
	}
	user = await new UserModel(payload);
	let userSaved = await user.save();
	res.json({message : 'Đăng kí thành công!!!' , status : 'success'});
}
module.exports = {
	login,
	register
}