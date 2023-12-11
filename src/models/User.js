//importar schema y model

const { Schema, model } = require("mongoose");

//importar bcrypt
const bvrypt = require('bcryptjs')

const userSchema = new Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password :{
        type:String,
        require:true
    }
},{
    timestamps:true
})

// Método para cifrar el password del usuario
userSchema.methods.encrypPassword = async (password)=>{
    //Establecer los saltos para encriptar el password
    const salt = await bcrypt.genSalt(10)
    //Encriptar el password
    const passwordEncryp = await bcrypt.hash(password,salt)
    //retornar el password encriptado
    return passwordEncryp
}

// Método para verificar si el password ingresado es el mismo de la BDD
userSchema.methods.matchPassword = async function(password){
    //Utilizar el metodo compare
    const response = await bcrypt.compare(password,this.password)
    //retornar el booleano 
    return response
}


model.export = model('user',userSchema)
