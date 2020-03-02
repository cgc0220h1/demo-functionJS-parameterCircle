function circleCal() {
    let num = document.getElementById('num-input').value;
    document.getElementById('result').innerHTML =
        "Chu vi của hình tròn là: " + parameterCircle(num) + " cm2";

}

function parameterCircle(radius) {
    return radius * 2 * Math.PI;
}