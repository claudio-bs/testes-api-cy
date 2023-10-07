/// <reference types="cypress" />
import contrato from '..//contracts/usuarios.contract'

describe('Testes da Funcionalidade Usuários', () => {
     let token
     before(() => {
          cy.token('claudio-bs_qa@ebac.com.br', 'teste').then(tkn => { token = tkn })
     });

     it('Deve validar contrato de usuários', () => {
          cy.request('usuarios').then(response => {
               return contrato.validateAsync(response.body)
          })
     });

     it('Deve listar usuários cadastrados', () => {
          cy.request({
               method: 'GET',
               url: 'usuarios'
          }).then((response) => {
               expect(response.status).to.equal(200)
               expect(response.body).to.have.property('usuarios')
               expect(response.duration).to.be.lessThan(20)
          })
     });

     it('Deve cadastrar um usuário com sucesso', () => {
          let usuario = `usuario` + `${Math.floor(Math.random() * 100000000)}`
          let email = `${usuario}@ebac.com.br`
          cy.request({
               method: 'POST',
               url: 'usuarios',
               headers: { authorization: token },
               body: {
                    "nome": usuario,
                    "email": email,
                    "password": "teste",
                    "administrador": "false"
               }
          }).then((response) => {
               expect(response.status).to.equal(201)
               expect(response.body.message).to.equal('Cadastro realizado com sucesso')
          })
     });

     it.only('Deve validar um usuário com email inválido', () => {
          cy.cadastrarUsuario(token, "Ciclano de Fulano", "beltrano@qa.com.br", "teste", "false")
               .then((response) => {
                    expect(response.status).to.equal(400)
                    expect(response.body.message).to.equal("Este email já está sendo usado")
               })
     })

     it('Deve editar um usuário previamente cadastrado', () => {
          //TODO: 
     });
     
     it('Deve deletar um usuário previamente cadastrado', () => {
          //TODO: 
     });
});

     


