$('#dodajForm').submit(function(){
    event.preventDefault();
    console.log("Dodavanje");
    const $form = $(this);
    const $input = $form.find('input, select, button, textarea');

    const serijalizacija = $form.serialize();
    console.log(serijalizacija);

    $input.prop('disabled',true);

    request = $.ajax({
        url: 'handler/add.php',
        type: 'post',
        data: serijalizacija
    });

    request.done(function(response, textStatus, jqXHR){
        if(response=="Success"){
            alert("Kolokvijum uspjesno zakazan");
            console.log("Dodat kolokvijum");
            location.reload(true);
        }else{
            console.log("Kolokvijum nije dodat"+response);
        }
    });

    request.fail(function(jqXHR, textStatus, errorThrown){
        console.error('Sledeca greska se desila>' + textStatus, errorThrown);
    })

})

$('#btn-obrisi').click(function(){
    event.preventDefault();
    console.log("Brisanje");
    
    const checked = $('input[name=checked-donut]:checked');

    request = $.ajax({
        url: 'handler/delete.php',
        type: 'post',
        data: {'id':checked.val()}
    });

    request.done(function(response, textStatus, jqXHR){
        if(response=="Success"){
            checked.closest('tr').remove();
            alert('Obrisan kolokvijum');
            console.log("Obrisan");
        }else{
            console.log("Kolokvijum nije obrisan"+response);
            alert('Kolokvijum nije obrisan');
        }
    });

    request.fail(function(jqXHR, textStatus, errorThrown){
        console.error('Sledeca greska se desila>' + textStatus, errorThrown);
    })

})