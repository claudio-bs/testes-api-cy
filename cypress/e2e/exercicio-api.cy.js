/// <reference types="cypress" />
import contrato from '..//contracts/usuarios.contract'

describe('Testes da Funcionalidade Usuários', () => {

     it('Deve validar contrato de usuários', () => {
          cy.request('usuarios').then(response => {
               return contrato.validateAsync(response.body)
          })
     });

     it.only('Deve listar usuários cadastrados', () => {
          cy.request({
               method: 'GET',
               url: 'usuarios'
           }).then((response) => {
               expect(response.status).to.equal(200)
               expect(response.body).to.have.property('usuarios')
               expect(response.duration).to.be.lessThan(10)
           })
     });

     it('Deve cadastrar um usuário com sucesso', () => {
          //TODO: 
     });

     it('Deve validar um usuário com email inválido', () => {
          //TODO: 
     });

     it('Deve editar um usuário previamente cadastrado', () => {
          //TODO: 
     });

     it('Deve deletar um usuário previamente cadastrado', () => {
          //TODO: 
     });


});
