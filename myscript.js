let base_a;
let base_b;
let height;
let areatrapezoid;
function myFunction1() {
  base_a=document.getElementById("a").value;
  base_a= +base_a;
  base_b=document.getElementById("b").value;
  base_b= +base_b;
  height=document.getElementById("height").value;
  areatrapezoid=((base_a+base_b)*height)/2;
  alert('The area of the trapezoid is: ' + areatrapezoid);
}
document.getElementById("calculate").addEventListener("click", myFunction1);