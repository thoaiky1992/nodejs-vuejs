let db = require('../connectDB/index');

const TABLE_NAME = 'users';

class User {
	constructor(object){
		let { 
			name = '' , 
			email = '' , 
			password = '' , 
			address = '' , 
		} =  object  ? object : {};

		this.name = name ;
		this.email = email ;
		this.password = password;
		this.address = address ;
		this.created_at = Date.now() ;
		this.updated_at = '' ;
		this.deleted_at = '' ;
	}
	save(){
		return new Promise((resolve,reject) => {
			db.query(`Insert into ${TABLE_NAME} (name,email,password,address,created_at,updated_at,deleted_at) values(?,?,?,?,?,?,?)`,
				[this.name,this.email,this.password,this.address,this.created_at,this.updated_at,this.deleted_at],(err,data)=>{
				if(err) return reject(err)
				resolve(data);
			});
		})
	}
	static getUserByEmail(email){
		return new Promise((resolve,reject) => {
			db.query(`select * from ${TABLE_NAME } where email = ?`,
				[email],(err,results, fields)=>{
				if(err) return reject(err)
				resolve(results);
			});
		})
	}
}

module.exports = User;