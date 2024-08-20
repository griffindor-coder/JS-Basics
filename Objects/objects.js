// create an Object using the Object Literals

const matn = "S7898A";
const materialMaster = {
  //   Object Properties
  materialStats: true,
  materialType: "ROH",
  materialGrp: "Plastics",
  materialExt: [
    {
      plant: "2390",
      sloc: "MICR",
    },
    {
      plant: "2390",
      sloc: "STOR",
    },
    {
      plant: "2390",
      sloc: "CONS",
    },
  ],

  //   object method
  getPlant: function (index) {
    // using this
    console.log(this.materialExt[index].plant);
  },

  //   object method
  getSloc: function (index) {
    //  using this
    console.log(this.materialExt[index].sloc);
  },
};

// access the object properties amd methods

const stats1 = materialMaster.materialStats;
console.log(stats1);
const typo = materialMaster["materialType"];
console.log(typo);

console.log(typeof materialMaster.materialStats);
console.log(typeof materialMaster["materialStats"]);

console.log(typeof materialMaster.getPlant);
console.log(typeof materialMaster.getSloc);

const getterPlant = materialMaster.getPlant;
console.log(getterPlant);

const getterSloc = materialMaster["getSloc"];
console.log(getterSloc);

// Invoking the methods of the object

materialMaster.getPlant(0);
materialMaster["getSloc"](0);

// Create Object using Constructor

const matMas = new Object();
matMas.configurable = true;
// this doesn't work for =>(fat arrow) function
matMas.isConfigurable = function (param1) {
  console.log(
    `The Configurability of Material Number - ${matn} is` +
      " " +
      this.configurable
  );
};
matMas.isConfigurable(matn);
console.log(matMas["configurable"]);
console.log(matMas.isConfigurable);
console.log(typeof matMas["configurable"]);