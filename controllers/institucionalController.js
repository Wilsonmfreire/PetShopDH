const institucionalController ={
    index: (req, res)=>{
        return res.render('index', {titulo: 'Home'});
    },
    sobre:(req, res)=> {
        return res.render('sobre', {titulo: 'Sobre'});
    },
    servicos:(req, res)=> {
        return res.render('servicos', {titulo: 'Serviços'})
    }, 
    contato:(req, res)=> {
        return res.render('contato', {titulo: 'Contato'})
    },
    login:(req, res)=> {
        return res.render('login', {titulo: 'Login'})
    },
}

module.exports = institucionalController;