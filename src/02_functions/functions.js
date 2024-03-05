(function () {
    var hero = "Flash";
    function returnName() {
        return hero;
    }
    var activateBatisignal = function () {
        return "Batiseñal activada!";
    };
    console.log(typeof activateBatisignal);
    var heroName = returnName();
    console.log(heroName);
})();
