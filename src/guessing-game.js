class GuessingGame {
    constructor() {
    	this.setMax = null;
    	this.setMin = null;
    }

    setRange(min, max) {
    	this.setMax = max;
    	this.setMin = min;

    	return this;
    }

    guess() {
    	let result = this.setMax + this.setMin;
    	result /= 2;
    	result = Math.round(result);

    	return result;
    }

    lower() {
    	this.setMax = this.guess();

    	return this;
    }

    greater() {
    	this.setMin = this.guess();

    	return this;
    }
}

module.exports = GuessingGame;
