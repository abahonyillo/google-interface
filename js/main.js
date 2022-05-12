const sForm = document.getElementById("searchForm");
sForm.addEventListener('submit',function(e){
    e.preventDefault();

    let searchText = document.getElementById("searchText").value;
    if (searchText.length < 1){
        alert("search field is required");
    } else{
        window.location = `https://google.com/search?q=${searchText}`;
    }
});