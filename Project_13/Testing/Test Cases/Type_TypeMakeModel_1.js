var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('PRO',['bike']);
var type;
describe('Test Type Type Make Model',function(){
    before(function (done){
		db.bike.find({Type:"Standard",Make:"BMW",Model:"R-Series"},function (err,res){ 
			type=typeof res[0].Price;
			done();
		});
	});
	it('Type of Type Make Model',function(){
        expect(type).to.equal("number");
    });
});