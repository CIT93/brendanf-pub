class FP {
    constructor(first, last, houseMembers, houseSize, foodChoice, foodConvenience) {
        this.first = first
        this.last = last
        this.houseMembers = houseMembers
        this.houseSize = houseSize
        this.foodChoice = foodChoice
        this.foodConvenience = foodConvenience
        this.houseHoldPoints();
        this.houseSizePoints();
        this.foodChoicePoints();
        this.foodConveniencePoints();
        this.total();
    };
    houseHoldPoints() {
        console.log(this.houseMembers);
        if (this.houseMembers === 1) {
            this.houseHoldPoints = 14;
          } else if (this.houseMembers === 2) {
            this.houseHoldPoints = 12;
          } else if (this.houseMembers === 3) {
            this.houseHoldPoints = 10;
          } else if (this.houseMembers === 4) {
            this.houseHoldPoints = 8;
          } else if (this.houseMembers === 5) {
            this.houseHoldPoints = 6;
          } else if (this.houseMembers === 6) {
            this.houseHoldPoints = 4;
          } else if (this.houseMembers > 6) {
            this.houseHoldPoints = 2;
          };
          console.log(this.houseHoldPoints);
        };
    houseSizePoints() {
        console.log(this.houseSize);
        if (this.houseSize === "large") {
            this.houseSizePoints = 10;
          } else if (this.houseSize === "medium") {
            this.houseSizePoints = 7;
          } else if (this.houseSize === "small") {
            this.houseSizePoints = 4;
          } else if (this.houseSize === "apartment") {
            this.houseSizePoints = 2;
          };
          console.log(this.houseSizePoints);
    };
    foodChoicePoints() {
      console.log(this.foodChoice);
      if (this.foodChoice === "dailydomesticmeat") {
          this.foodChoicePoints = 10;
        } else if (this.foodChoice === "somedomesticmeat") {
          this.foodChoicePoints = 8;
        } else if (this.foodChoice === "vegetarian") {
          this.foodChoicePoints = 4;
        } else if (this.foodChoice === "veganorwildmeat") {
          this.foodChoicePoints = 2;
        };
        console.log(this.foodChoicePoints);
  };
  foodConveniencePoints() {
      console.log(this.foodConvenience);
      if (this.foodConvenience === "prepackagedfood") {
          this.foodConveniencePoints = 12;
        } else if (this.foodConvenience === "mixedprepackagedandfresh") {
          this.foodConveniencePoints = 6;
        } else if (this.foodConvenience === "fresh") {
          this.foodConveniencePoints = 2;
        };
        console.log(this.foodConveniencePoints);
  };
    total() {
        this.total = this.houseHoldPoints + this.houseSizePoints + this.foodChoicePoints + this.foodConveniencePoints;
        console.log(this.total);
    };
};


export {FP};