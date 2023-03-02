const seededRandomLocal = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

const fetchAPILocal = function(date) {
    let result = [];
    let random = seededRandomLocal(date.getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};

const submitAPILocal = function(formData) {
    return true;
};

function fetchLocalAPI(date) {
    return fetchAPILocal(new Date(date));
}

function submitLocalAPI(data) {
    return submitAPILocal(data);
}