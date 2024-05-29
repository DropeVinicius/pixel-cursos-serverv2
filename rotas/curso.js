const {Router} = require("express")
const {getCursos, getCurso, postCurso, patchCurso, deleteCurso} = require("../controladores/curso")

const router = Router()

router.get('/', getCursos)

router.get('/:id', getCurso)

router.post('/', postCurso) 

router.patch('/:id', patchCurso)

router.delete('/:id', deleteCurso)


module.exports = router