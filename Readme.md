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

* http://ec2-44-212-20-191.compute-1.amazonaws.com:4000/

#
## Parte 2 Invocaciones Curl

### Listar Users
```
curl http://ec2-44-212-20-191.compute-1.amazonaws.com:4000/api/user
```

### Ingresar Usuario a Sistema
```
curl -X POST -H "Content-Type: application/json" -d '{"email": "pablo@gmail.com", "password": "123456"}' http://ec2-44-212-20-191.compute-1.amazonaws.com:4000/api/user
```

## Parte 3 Prueba de stress sobre user sistema
![Alt text](img/1-%20prueba%20de%20stress%20jmetter.jpg)

* Fichero testeo jmetter sobre api/user
[label](img/Modulo%20Ingreso.jmx)



