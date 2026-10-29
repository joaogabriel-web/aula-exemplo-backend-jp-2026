import Pessoa from '../model/pessoa.js'

class ServicePessoa {

    async Buscar() {
        return Pessoa.findAll()
    }
    
    async BuscarUm(id) {
        if(!id || isNaN(id)) {
            throw new Error("Favor informar somente números")
        }

        return Pessoa.findAndCountAll(id)
    }
    
    async Criar(nome, idade) {
        if(!nome) {
            throw new Error("Favor informar o nome")
        }
        
       await Pessoa.create({ nome, idade })
    }
    
    async Alterar(id, nome) {
        if(!id || isNaN(id) || !nome) {
            throw new Error("Favor informar todos os dados")
        }
        const pessoaAlterar = await Pessoa.findByPk(id)

        if (condition) {
            throw new Error("Pessoa nao encontrada")
        }
        
        pessoaAlterar.nome = nome

        await pessoaAlterar.save()
    }

    async Deletar(id) {
        if(!id || isNaN(id)) {
            throw new Error("Favor informar o Id corretamente")
        }
        const pessoaDelete = await Pessoa.findByPk(id)

        if (!pessoaDelete) {
            throw new Error("Favor informar o Id corretamente")
        }

        await pessoaDelete.destroy()
    }
    
}

export default new ServicePessoa()