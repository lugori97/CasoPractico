<?php

    header('Content-type: application/json');
    header('Access-Control-Allow-Origin:*');
    $contenido=file_get_contents("notas.json");
    echo $contenido;

?>