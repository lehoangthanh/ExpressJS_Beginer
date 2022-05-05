// During the test the env variable is set to test
process.env.NODE_ENV = 'test'

// Require the dev-dependencies
const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../bin/www')

chai.use(chaiHttp)
// Our parent block
describe('Devices', () => {
  beforeEach((done) => {
    // Before each test we empty the database in your case
    done()
  })

  /*
   * Test the /GET route
   */
  describe('/GET Devices', () => {
    it('it should GET all the device', (done) => {
      chai
        .request(server)
        .get('/v1/api/devices')
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.a('object')
          res.body.should.have.property('date')
          done()
        })
    })
  })
})
