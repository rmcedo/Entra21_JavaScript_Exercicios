$("#nome").on("submit", (event) =>{
    event.preventDefault()
})


$("#buscar").on("click", ()=> {

    $.ajax({

        url: decodeURI("https://pokeapi.co/api/v2/pokemon/" + $("#pokemon").val()),
        type: "get",
        success: (retorno)=> {
            
            console.log(retorno);
            $("#resultado").empty();
            $("#resultado").append($("<h1>", { text: retorno.name ,
            class:"fonte1"}));
        
            $("#result_img").empty().append(
                $('<img>',{
                    src: retorno.sprites.other.home.front_default,
                    style:"width: 225px; height: 225px"
                })
            )
        }
    })

})