const bus = (busStop) => {


    let peopleOnBus = busStop.map(bus => (bus[0])).reduce((a,b) => a + b);


   let peopleOffBus = busStop.map(bus => (bus[1])).reduce((a,b) => a + b);

    const SleepyPassengers = peopleOnBus - peopleOffBus;

    return SleepyPassengers


};


module.exports = bus;
