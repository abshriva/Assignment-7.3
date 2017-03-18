function counter()
{
    var count=0;
    return function(){
        return ++count;
    };
};

var incrementcounter = counter();

function onButtonClick()
{
    var count = incrementcounter();
    document.getElementById('ClickCount').innerHTML = "You Clicked " +count+ " times..!!";
}
