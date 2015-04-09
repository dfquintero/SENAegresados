<?php

$host= "mysql.hostinger.co";
$user= "u732471917_admin";
$pw="SEpass";
$db="u732471917_0sena";

 $con=mysql_connect ($host, $user, $pw)
   or die ("problemas al conectar al Servidor");
   
   mysql_select_db ($db, $con) or die ("problemas con db");
   
   mysql_query ("INSERT INTO Egresados(Nombres,Apellidos,Tipo_Documento,No_Documento,E_Centro,Ficha,Correo_MiSena,Correo_Electronico,Celular,Fijo,Direccion,Barrio,Localidad) VALUES('$_POST[_Nombres]','$_POST[_Apellidos]','$_POST[_Tipo_Documento]','$_POST[_No_Documento]','$_POST[_E_Centro]','$_POST[_Ficha]','$_POST[_Correo_MiSena]','&_POST[_Correo_Electronico]','$_POST[_Celular]','$_POST[_Fijo]','$_POST [_Direccion]','$_POST[_Barrio]','$_POST[_Localidad]')",$con);
   

?>

