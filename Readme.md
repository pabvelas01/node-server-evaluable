# Entrega Prueba Técnica - Pablo Velásquez 
## Parte 1 Código Fuente de Repositorios y Despliegue
#### Github back-end 
##### Codigo Fuente 
<a href="https://github.com/pabvelas01/node-server-evaluable" target="_blank"> GitHub nodeJs express.js </a> 

#

#### Github front-end Angular
##### Codigo Fuente 
<a href="https://github.com/pabvelas01/front-evaluable" target="_blank"> GitHub angular </a> 

##### Git hub Page
* https://pabvelas01.github.io/front-evaluable/
* <a href="https://pabvelas01.github.io/front-evaluable/" target="_blank">Ir a despliegue front- github page</a>

#### Servidor base de datos desplegado
* mongoDB

#

#### Instancia Desplegada AWS EC2, del repositorio actual

* https://ec2-44-212-20-191.compute-1.amazonaws.com:4000/

#
## Parte 2 Invocaciones Curl

### Usuario Administrador (autentificado en github)

##### get 
```
curl -k https://ec2-44-212-20-191.compute-1.amazonaws.com:4000/api/user
```

##### post 
```
curl -k -X POST -H "Content-Type: application/json" -d '{"email": "pablo@gmail.com", "password": "123456"}' https://ec2-44-212-20-191.compute-1.amazonaws.com:4000/api/user
```

##### delete
```
curl -k -X DELETE https://ec2-44-212-20-191.compute-1.amazonaws.com:4000/api/user/63c23fcd9e84f46b0aa20e0a
```

### Autentificar Usuario a Sistema (login Curl)
##### post
```
curl -k -X POST -H "Content-Type: application/json" -d '{"email": "pablo@gmail.com", "password": "12345"}' https://ec2-44-212-20-191.compute-1.amazonaws.com:4000/api/autentificacion
```
### Alumno (CURL)
##### post 

```
curl -k -X POST -H "Content-Type: application/json" -d '{
    "nombre" : "pablo",
    "primer_apellido" : "velasquez",
    "segundo_apellido": "gonzalez",
    "sexo":"Masculino",
    "carrera": "ingenieria civil en informatica"
}' https://ec2-44-212-20-191.compute-1.amazonaws.com:4000/api/alumno
```
##### get  
```
curl -k https://ec2-44-212-20-191.compute-1.amazonaws.com:4000/api/alumno
```

##### put  
```
curl -k -X PUT -H "Content-Type: application/json" -d '{
    "nombre" : "pablo",
    "primer_apellido" : "velasquez",
    "segundo_apellido": "gonzalez",
    "sexo":"Masculino",
    "carrera": "ingenieria civil en informatica"
}' https://ec2-44-212-20-191.compute-1.amazonaws.com:4000/api/alumno/63c772c29b90afd3efd40ef5
```

##### delete
```
curl -k -X DELETE https://ec2-44-212-20-191.compute-1.amazonaws.com:4000/api/alumno/63c772c29b90afd3efd40ef5
```

### Carrera (CURL)
##### post 

```
curl -k -X POST -H "Content-Type: application/json" -d '{
    "nombre" : "Carrera Nueva",
    "nomenclatura" : "nw"
}' https://ec2-44-212-20-191.compute-1.amazonaws.com:4000/api/carrera
```
##### get (todos los alumno)  
```
curl -k https://ec2-44-212-20-191.compute-1.amazonaws.com:4000/api/carrera
```
##### get (alumno específico)  
```
curl -k https://ec2-44-212-20-191.compute-1.amazonaws.com:4000/api/carrera/63c71d800e7eb4d67e6e7d2a
```

##### put  
```
curl -k -X PUT -H "Content-Type: application/json" -d '{
    "nombre" : "Ingenieria Sistemas",
    "nomenclatura" : "Sist" 
}' https://ec2-44-212-20-191.compute-1.amazonaws.com:4000/api/carrera/63c71d800e7eb4d67e6e7d2a
```

##### delete
```
curl -k -X DELETE https://ec2-44-212-20-191.compute-1.amazonaws.com:4000/api/alumno/63c772c29b90afd3efd40ef5
```

## Parte 3 Prueba de stress sobre user sistema
![Alt text](img/1-%20prueba%20de%20stress%20jmetter.jpg)

* Fichero testeo jmetter sobre api/user
[label](img/Modulo%20Ingreso.jmx)

## Parte 4 Enunciado Análisis de Base de Datos

* 1- ¿Cuantas inasistencias tiene un alumno X en el semestre en curso?  
 R: Falta una tabla que una asignatura con alumno, puede ser asistencia, para determinar
 las clases efectivas dictadas (pueden haber feriados o suspension de clases, lo que no aplicaria como
 inasistencia del alumno)  

* 2- Listado de justificaciones por certamen o test para la asignatura Y de la carrera Z, en el semestre.  
R: Se debe saber cuando es el certamen y test (Evaluacion->tipificada en tipo Evaluacion y su respectiva fecha de aplicacion) con ello se podria hacer el mach con las fechas de inicio y termino del reg_justificacion 
para responder a la query solicitada

* 3- ¿Cuál es la asignatura con más inasistencia por carrera para el semestre e histórico?  
R: Es inasistencias y no justificaciones, por lo que debemos realizar la tabla faltante (asistencia_asignatura o algo parecido). Ademas debemos ver el indicador de asistencia ¿Es lo mismo que falten 2/4 para una asignatura (50% inasistencia) que falten 2/40 (5% inasistencia)?

* 4- Listado de justificaciones por carrera, clasificados por razones: medicas,extraprogrampaticas, defunciones, etc.    
R: Falta la clasificacion en reg_justificacion. Motivo_just podria estar haciendo referencia a un campo libre, y estado podría estar haciendo referencia a un borrado lógico

* 5- Historial de inasistencias por alumno   
R: Si existiera la tabla asistencia_asignatura se podria tener el historico por alumno, ( la justificacion no corre, asumo que es para quedar presente )

* 6- Número de dias de inasistencia de un alumno al semestre.  
R: Si existiera la tabla asistencia_asignatura se podria calcular la cantidad de dias de inasistencia.



