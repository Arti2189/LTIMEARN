var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('Project',['hospital']);

var count = 0;
describe('TestMongoDB',function(){

	before(function (done){
   		db.hospital.find({"Hospital Name":"MONTEFIORE MEDICAL CENTER","Hospital Ownership":"Voluntary non-profit - Private"}, function (err,res){ 
				console.log(res.length); 
				count=res.length;
				done();
			 });
		});

	it('by city count',function(){
		const result = count;
		expect(result).to.equal(1);
	});
}); 