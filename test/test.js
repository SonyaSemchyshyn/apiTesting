import { expect } from 'expect';
import chai from "chai";
import chaiHttp from 'chai-http';
chai.use(chaiHttp);

describe('', async function () {
    it('GET reguest', function () {
      let token = 'dxyo1YtXgQIAHA6FWjTXom7tdkwST4JJ4LfhP0DZtNgh';
      let res = chai.request('https://rbaskets.in').get('/firstMethod').set({ "Authorization": `Bearer ${token}` })
      expect(res).to.have.status(200);    
    });
  });