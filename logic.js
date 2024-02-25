function search()
{
    let fsearch = prompt("Please write your search down below:","");
    if(fsearch!=null && fsearch!="")
    window.confirm("Thank you for searching!");
    else
    window.confirm("Sorry, but you didn't searched for anything.");
}