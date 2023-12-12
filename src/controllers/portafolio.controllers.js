//importar el modelo
const Portfolio = require('../models/portafolio.js')



//Metodo para listar los portafolios
const renderAllPortafolios = async (req,res)=>{
    //Listar todos los portafolios
    const portfolios = await Portfolio.find().lean()
    //
    res.render("portafolio/allPortfolios",{portfolios})
}
//Metodo para listar el detale de un portafolio
const renderPortafolio = (req,res)=>{
    res.send('Mostrar el detalle de un portafolio')
}
//Metodo para mostrar el formulario 
const renderPortafolioForm = (req,res)=>{
    res.render('portafolio/newFormPortafolio')
}
//Metodo para guardar en la base de datos
const createNewPortafolio = async (req,res)=>{
    const {title, category,description} = req.body
    const newPortfolio = new Portfolio({title,category,description})
    await newPortfolio.save()
    res.json({newPortfolio})
}
//Metodo para actualizar el portafolios
const renderEditPortafolioForm = (req,res)=>{
    res.send('Formulario para editar un portafolio')
}
//Metodo para actualizar en la BD
const updatePortafolio = (req,res)=>{
    res.send('Editar un portafolio')
}
//Metodo para eliminar los portafolios
const deletePortafolio = (req,res)=>{
    res.send('Eliminar un nuevo portafolio')
}


module.exports ={
    renderAllPortafolios,
    renderPortafolio,
    renderPortafolioForm,
    createNewPortafolio,
    renderEditPortafolioForm,
    updatePortafolio,
    deletePortafolio
}