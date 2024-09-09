const { Pessoa } = require('../models');

// cadastro de uma nova pessoa
exports.createPessoa = async (req, res) => {
    try{
        const { Nome, Cpf, Telefone } = req.body;
        const novaPessoa = await Pessoa.create({
            Nome,
            Cpf,
            Telefone,
        });

        res.status(201).json(novaPessoa);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao cadastrar pessoa', details: error.message });
    }
};

// leitura de todas as pessoas cadastradas
exports.getAllPessoas = async (req, res) => {
    try {
        const pessoas = await Pessoa.findAll();
        res.status(200).json(pessoas);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar pessoas', details: error.message});
    }
};

// leitura de uma pessoa por id
exports.getPessoaById = async (req, res) => {
    try {
        const { Id } = req.params;
        const pessoa = await Pessoa.findByPk(Id);
        
        if(!pessoa) {
            return res.status(404).json({ error: 'Pessoa não encontrada' });
        }

        res.status(200).json(pessoa);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar pessoa', details: error.message});
    }
}

// atualizacao de uma pessoa
exports.updatePessoa = async (req, res) => {
    try {
        const { Id } = req.params;
        const { Nome, Cpf, Telefone } = req.body;
        
        const pessoa = await Pessoa.findByPk(Id);

        if (!pessoa) {
            return res.status(404).json({ error: 'Pessoa não encontrado '});
        }

        pessoa.Nome = Nome;
        pessoa.Cpf = Cpf;
        pessoa.Telefone = Telefone;

        await pessoa.save();

        res.status(200).json(pessoa);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar pessoa ', details: error.message });
    }
};

// exclusão de uma pessoa
exports.deletePessoa = async (req, res) => {
    try {
        const { Id } = req.params;

        const pessoa = await Pessoa.findByPk(Id);

        if(!pessoa) {
            return res.status(404).json({ error: 'Pessoa não encontrado '});
        }

        await pessoa.destroy();

        res.status(204).send(); // sem conteudo, pois foi deletado com sucesso
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar pessoa', details: error.message });
    }
};