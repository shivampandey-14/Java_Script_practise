// example 1;
let hold = document.getElementById('btn1').addEventListener('click', function()
{
    let para = document.getElementById('para1');
    console.log(para);
    para.textContent = " i am changed now";
});


// example 2;
document.getElementById('btn2').addEventListener('click', function () {
    let citilist = document.getElementById('items');
    citilist.firstElementChild.classList.add('highlight');
    // console.log(citilist.classList);
});

// emaple 3;
document.getElementById('btn3').addEventListener('click', function () {
    const para = document.getElementById('para2');
    para.textContent = "esspresso";
    para.style.color = 'red';
    para.style.fontSize = '20px';
    para.style.fontWeight = 'bold';
    para.style.backgroundColor = 'skyblue';
})

//example 4;
document.getElementById("btn4").addEventListener('click', function(){
    let newfruit = document.createElement('li');
    newfruit.textContent = "banana";
    document.getElementById('fruits').appendChild(newfruit);    

})

//example 5;
document.getElementById('btn5').addEventListener('click', function () {
    document.getElementById('fruits2').lastElementChild.remove();
})

// example 6;
document.getElementById('fruits2').addEventListener('click', function (event) {
    if(event.target && event.target.matches('.fruits_item')) {
        alert('item clicked '+event.target.textContent);
    }
})

// example 7;
document.getElementById('feedbackForm').addEventListener('submit', function (event) {
    // alert(event.target.feedbackInput.value);
    event.preventDefault();
    let feedback = document.getElementById('feedbackInput').value;//take the input value id.
    console.log(feedback);
    document.getElementById('feedbackDisplay').textContent = feedback;
    // let para=document.getElementById('feedbackDisplay');
    document.getElementById('feedbackDisplay').addEventListener('mousedown', function ()
    {
        // para.style.backgroundColor = 'red';
        this.style.backgroundColor = 'red';
        this.style.color = 'white';
        this.style.fontSize = '20px';
        this.style.fontWeight = 'bold';
    });
});
//example 8;
document.addEventListener('DOMContentLoaded', function ()
{
    document.getElementById('domStaus').textContent = "Dom Loaded fully";
});
//example 9;
document.getElementById('btn6').addEventListener('click', function () {
    let para = document.getElementById('para3');
    para.classList.toggle('highlight');
});