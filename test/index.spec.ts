// Import the dependencies for testing
import chai from "chai";
import chaiHttp from "chai-http";
import app from "../src/app";
import request from "request";


// Configure chai
chai.use(chaiHttp);
chai.should();

describe("localhost:3000", () => {

    it("green", (done)=>{ done()});

    it("good status", (done) => {
        chai.request(app)
             .get('/')
             .end((err, res) => {
                res.should.have.status(200);
                done();
              });
     });

    it('Bad page status', (done) => {
        chai.request(app)
             .get('/lalala')
             .end((err, res) => {
                res.should.have.status(404);
                done();
              });
    });

    it('Main page content', (done) => {
        request('http://localhost:3000' , (error, response, body)=> {
            chai.expect(body).to.equal('Hello world!');
            done();
        });
    });

    it('Main page status', (done) => {
        request('http://localhost:3000' , (error, response, body)=> {
            chai.expect(response.statusCode).to.equal(200);
            done();
        });
    });

    it('About page content', (done) => {
        request('http://localhost:30000/about' , (error, response, body)=> {
            chai.expect(response).to.equal(undefined);
            done();
        });
    });

  });
