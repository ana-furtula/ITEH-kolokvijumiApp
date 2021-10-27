<?php
require "../dbBroker.php";
require "../model/prijava.php";

if(isset($_POST["idBefore"]) && isset($_POST["predmet"]) && isset($_POST["katedra"]) && isset($_POST["sala"]) && isset($_POST["datum"])){
    $prijava = new Prijava(null,$_POST["predmet"],$_POST["katedra"],$_POST["sala"],$_POST["datum"]);
    $status = $prijava->update($_POST["idBefore"], $conn);

    if($status){
        echo "Success";
    } else{
        echo $status;
        echo "Failed";
    }
}

?>