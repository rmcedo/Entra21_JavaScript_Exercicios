$("#atualizar").hide()

function obterInfo() {

    let tec = $("#tec").val();
    let qtd= $("#qtd").val();
    let professor = $("#professor").val();

    return {
        tec: tec,
        qtd: qtd,
        professor: professor
    }
}

let tecs = []
let atualizar = null
$('form').on("submit", function (event){

    event.preventDefault()
    let info = obterInfo()
    console.log("Pronto: ",info);

    if ($("#add").is(":visible")) {

        tecs.push(info)
        console.log("Adicionado");
        
    } else {
        tecs[tecs.indexOf(atualizar)]= info
        console.log("Atualizado");
        
    }
    reEscreverTab();
    $("#clean").click()


}
)

$("#clean").on("click", function () {
    $("#add").show()
    $("#atualizar").hide()
}
)

function reEscreverTab() {

    $("tbody").empty()

    tecs.forEach(tec => {
        $("tbody").append(
            $("<tr>").append(
                $("<td>", { text: tec.tec }),
                $("<td>", { text: tec.qtd }),
                $("<td>", { text: tec.professor }),
                $("<td>").append(
                    $('<button>', {
                        class: "btn btn-sm btn-primary me-2",
                        text: "Editar",
                        click: function () {
                            atualizar = tec
                            $("#tec").val(tec.tec)
                            $("#qtd").val(tec.qtd)
                            $("#professor").val(tec.professor)
                            $("#add").hide()
                            $("#atualizar").show()
                        }
                    }),
                    $('<button>', {
                        class: "btn btn-sm btn-danger me-2",
                        text: "Deletar",
                        click: function () {

                            tecs.splice(tecs.indexOf(tec)) // SPLICE = REMOVER
                            console.log("REMOVED");
                            reEscreverTab() 

                        }
                    })
                )
            )
        )

    });
}