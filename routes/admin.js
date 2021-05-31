const express = require('express');// chama o modulo express
const multer = require('multer') // chama modulo multer (trabalha com  upload)
const path = require('path')// chamar modulo path (sempre que precisar pegar o caminho do arquivos)
const router = express.Router();// chama o metodo que gerencia rotas
const servicosController = require('../controllers/servicosController');

/**configurando o multer, quando estamos usando o disktorage estamos configurando o caminho do multer */
const storage = multer.diskStorage();({
    /**destino do upload */
    destination:(req, file, cd)=> {
        /**null sempre padrao e depois o caminho da pasta */
        cd(null, path, join('uploads'));
    },
    /**nome do upload*/
    filename:(req, file, cd)=> {
        cd(null, file.fildname + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({storage});

/*http://localhost:3000/admin */
router.get('/', (req, res)=> {
    res.render('admin', {titulo: 'Painel Administrativo' });
});

/*http://localhost:3000/admin/servicos */
router.get('/servicos', servicosController.index);


/*http://localhost:3000/admin/servicos/cadastro */
router.get('/servicos/cadastro', servicosController.cadastro);

/*http://localhost:3000/admin/servicos/cadastro */
router.post('/servicos/cadastro', upload.single('ilustracao'),servicosController.salvar);

module.exports = router;