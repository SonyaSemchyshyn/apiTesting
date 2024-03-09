import { expect } from 'expect';
import chai from 'chai';
import chaiHttp from 'chai-http';

chai.use(chaiHttp);


describe('Array', async function () {
    it('GET reguest', function () {
        let res = chai.request('https://fakerestapi.azurewebsites.net')
        .get('/api/v1/Activities');
         expect(res).to.have.status(200);
    });
  });