let request = require('supertest')
let app = require('./../app')
let expect = require('chai').expect;

describe('Test users', function(){
  it('#Test if GET /users return correct number of objects', function(done){
    request(app)
        .get('/users/7')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, res){
          expect(res.body.length).to.equal(7)
          done();
        })
  })

  it('#Test for name check', function(done){
    request(app)
        .get('/users/check/not7')
        .expect(200, done)
  })

  it("#Test for name check return false", function(done){
    request(app)
        .get('/users/check/seventh')
        .expect(200, done)
  })


  it("#Test index", function(done){
    request(app)
        .get('/')
        .expect(200, done)
  })

  it('#Test failing route', function(done){
    request(app)
        .get('/doesntExists')
        .expect(404, done)
  })

  /**
   *  Tests for added functionalities
   * **/
  it.skip('#Test the new feature', function(done){
    request(app)
        .post('/users/newfeature')
        .send({user:"huy"})
        .expect(200)
        .end(function(err, res){
          console.log("item res", res.data)

          done();
        })
  })


})