/* modulo instalado para manipulacao de arquivos*/
const { json } = require('express');
const fs = require('fs');
/* modulo nativo para manipulacao de arquivos*/
const path = require('path');
/* modulo instalado para gerar id*/
const {uui}= require('uuidv4');
/*caminho do arquivo */
const servicosPaths = path.join('sercicos.json');
/**ler o conteudo do arquivo json */
let servicos =  fs.readFileSync(servicosPaths, {encoding: 'utf-8'});
/**converte o json em array  */
servicos = JSON.parse(servicos);

const servicosController = {
    index: (req, res) => {
        return res.render('adminServicos', {titulo: 'Serviços', servicos: []});
    },
    cadastro:(req, res)=>{
        return res.render('servicosCadastro', {titulo: 'Cadastrar Servicos'});
    },  
    salvar:(req, res)=>{
        let {nome, descricao, preco} = req.body;

        /**pegando o nome do arquivo (upload) */
        let ilustracao = req.files[0].originalname;
        /** adcionando novo arquivo  no array */
        servicos.push( {id: uuid(),nome, descricao, preco, ilustracao });
        /**convertendo array para json */
        let dadosJson = JSON.stringify(servicos);
        /**salvando json atualizado no arquivo */
        fs.writeFileSync(servicosPaths, dadosJson);

        /* redirecionar para lista de servicos*/
        return res.redirect('/admin/servicos');
    },
    show: (req, res) => {
        //console.log(req.params);
        // pegando parametro nome da rota /pets/:nome
        const{nome} = req.params;

        return res.send(`exibindo detalhes do pet ${nome}`);
    }
}

module.exports = servicosController;