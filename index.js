const i2c = require('i2c-bus');
const ina219 = require('node-ina219');

i2c.openSync(1);

ina219.init(rpio);
ina219.enableLogging(true);

setInterval(() => {
  
  ina219.calibrate32V1A(function () {
    
    ina219.getBusVoltage_V(function (volts) {
      
      console.log("Voltage: " + volts);
      ina219.getCurrent_mA(function (current){
  			
        console.log("Current (mA): " + current );
      });	
    });
  });

}, 6000)

