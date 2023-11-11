en esta app de vestidos de bano usando responsive designen el perfil sobretodo se adapta a todos los celulares, tablets, y laptops este es un ejemplo y explicacion voy a mostrar como lo hice y en que consistio, EN ESTE PROYECTO NO USE LOS PROPS ESTO FUE UNA PRACTICA DE APRENDISAJE DE FIREBASE Y TYPESCRIPT,EN OTRO PROYECTO SI USE EN TODO MOMENTO LOS PROPS:

-aqui use esta @media en el pefil que es parte para usar responsive design y haci hice que cuando llegara a 600px se adaptara a tablet, y despues en los 400px se adaptara a celular:

.contenedorPerfil {
display: flex;
align-items: center;
gap: 100px;
width: 100%;
// margin: 10px;
max-width: 700px;
color: #575757;
padding: 10px;
margin: 0 auto;
box-shadow: 8px 7px 12px;
border-radius: 10px;
background-color: #bebbbb;
}

@media (max-width: 400px) {
.contenedorPerfil {
flex-direction: column;
gap: 35px;
}
}
@media (max-width: 600px) {
.contenedorPerfil {
flex-direction: column;
gap: 35px;
}
}

-   aqui use display grid y width 100%, para que se adaptara en diferentes tamanos, en grid-template- columns dije que queria que tuviera un tamano de 200px y que se divida en 4 partes:

.contenedorGrid {
display: grid;
grid-template-columns: repeat(auto-fill, minmax(200px, 4fr));
gap: 40px;
// height: 100px;
margin-top: 30px;
}
.contenedorDelete {
border-radius: 10px;
width: 100%;
border: #323232 solid 1px;
color: #323232;
&:hover {
box-shadow: 10px 10px 9px;
transition: 0.3s;

}}
