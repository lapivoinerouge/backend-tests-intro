const formatFullname = require('../formatFullname.js')
const expect = require('chai').expect;

describe('FormatFullname', () => {

    it('should return error if fullName is not defined', () => {
        expect(formatFullname()).to.equal('Error');
    });

    it('should return error if fullName is not a String', () => {
        expect(formatFullname(123)).to.equal('Error');
        expect(formatFullname([])).to.equal('Error');
        expect(formatFullname({})).to.equal('Error');
    });

    it('should return error if fullName has incorrect format', () => {
        expect(formatFullname("Edgar Allan Poe")).to.equal('Error');
        expect(formatFullname("Alfred")).to.equal('Error');
        expect(formatFullname("O")).to.equal('Error');
    });

    it('should return correctly formatted full name', () => {
        expect(formatFullname("frodo baggins")).to.equal('Frodo Baggins');
        expect(formatFullname("JaSon x")).to.equal('Jason X');
    });

});