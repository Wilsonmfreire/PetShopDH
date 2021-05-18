const servicosController = {
    index: (req, res) => {
        return res.send('');
    },
    show: (req, res) => {
        //console.log(req.params);
        // pegando parametro nome da rota /pets/:nome
        const{nome} = req.params;

        return res.send(`exibindo detalhes do pet ${nome}`);
    }
}

module.exports = petsController;