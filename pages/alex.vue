<template>
  <conteiner>
    <header>
      <div class="contenedor">
        <nav class="menu">
          <a href>Inicio</a>
          <a href>Acerca de</a>
          <a href>Portafolio</a>
          <a href>Contacto</a>
        </nav>
        <div class="contenido-header">
          <h1 class="titulo-header">José</h1>
          <span class="linea-header"></span>
          <h2 class="texto-header">
          que Lorem ipson ni que lorem ipsum yo me cgiop el n el inmpusun
            <span class="desaparecer"></span>
          </h2>
          <a href class="action-header">Call to action</a>
        </div>
      </div>
    </header>
    <br />
    <br />
    <main>
      <section class="quienes">
        <div class="contenedor">
          <h3 class="quienes-titulo">Simple & puro diseño</h3>
          <p class="quienes-parrafo">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, quia recusandae dolor cum, eveniet voluptate itaque
            voluptatibus iure perspiciatis sequi quisquam inventore. Necessitatibus quasi voluptatem iusto, ea suscipit blanditiis
            ab architecto, eveniet autem dolore fugiat laborum optio dicta in. Eligendi harum repellendus amet provident placeat quas
            distinctio neque dolores magni!
          </p>
        </div>
      </section>
      <section class="quehacemos">
        <div class="contenedor">
          <div class="contenido-cajas">
            <div class="tarjeta">
              <img src="@/assets/img/icono1.png" alt class="imagen-tarjeta" />
              <div class="contenido-tarjeta">
                <h3 class="titulo-tarjeta">Lorem ipsum dolor sit.</h3>
                <p
                  class="parrafo-tarjeta"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, blanditiis quaerat pariatur minima a veritatis.</p>
              </div>
            </div>
            <div class="tarjeta">
              <img src="@/assets/img/icono2.png" alt class="imagen-tarjeta" />
              <div class="contenido-tarjeta">
                <h3 class="titulo-tarjeta">Lorem ipsum dolor sit.</h3>
                <p
                  class="parrafo-tarjeta"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, blanditiis quaerat pariatur minima a veritatis.</p>
              </div>
            </div>
            <div class="tarjeta">
              <img src="@/assets/img/icono3.png" alt class="imagen-tarjeta" />
              <div class="contenido-tarjeta">
                <h3 class="titulo-tarjeta">Lorem ipsum dolor sit.</h3>
                <p
                  class="parrafo-tarjeta"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, blanditiis quaerat pariatur minima a veritatis.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="portafolio">
        <div class="contenedor">
          <div class="portafolio-textos">
            <h2>Haz de tu trabajo algo extraordinario</h2>
            <p>Contactame si estás preparado</p>
          </div>
          <section class="galeria">
            <div class="fotos">
              <img src="@/assets/img/1.jpg" alt />
            </div>
            <div class="fotos">
              <img src="@/assets/img/2.jpg" alt />
            </div>
            <div class="fotos">
              <img src="@/assets/img/3.jpg" alt />
            </div>
            <div class="fotos">
              <img src="@/assets/img/4.jpg" alt />
            </div>
            <div class="fotos">
              <img src="@/assets/img/5.jpg" alt />
            </div>
            <div class="fotos">
              <img src="@/assets/img/6.jpg" alt />
            </div>
          </section>
        </div>
      </section>
    </main>
    <br />
    <br />
    <footer>
      <section class="contacto">
        <div class="contenedor">
          <div class="footer-textos">
            <h2>Contacta con nosostros</h2>
            <p>Lorem, ipsum dolor.</p>
          </div>
          <form action class="formulario" method="POST">
            <input type="text" placeholder="Nombre" id="nombre" name="nombre" required value />
            <input
              type="email"
              placeholder="Correo"
              id="correo"
              name="correo"
              required
              value
              class="email"
            />
            <textarea name="mensaje" id="mensaje" placeholder="Mensaje:"></textarea>
            <div class="derecha">
              <input class="boton derecha" type="submit" value="Contactar" name="submmit" />
            </div>
          </form>
        </div>
      </section>
    </footer>
  </conteiner>
</template>

<script>
export default {
 
    name: 'alex',
};
</script>

<style>
body {
  background: rgb(46, 40, 40);
  font-family: "lato";
  font-size: 16px;
}

.contenedor {
  width: 90%;
  max-width: 1000px;
  overflow: hidden;
  margin: auto;
}

header {
  background-image: url("../assets/img/portada.png");
  height: 600px;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: cover;
}
header .menu {
  margin: 30px 0;
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
}
header .menu a:hover {
  text-decoration: underline;
}
header .menu a {
  font-size: 18px;
  font-family: "lato";
  font-weight: 300;
  display: inline-block;
  padding: 10px 0;
  margin: 0 15px;
  color: #fff;
  text-decoration: none;
}
header .contenido-header {
  margin: 120px 0;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
}
header .contenido-header .titulo-header {
  font-size: 120px;
  text-align: center;
  color: #fff;
  text-align: center;
}

headera .contenido-header .linea-header {
  width: 700px;
  margin: auto;
  height: 2px;
  background: #15a4fa;
  margin-bottom: 30px;
  text-align: center;
}

headera .contenido-header .texto-header {
  color: #fff;
  font-weight: 300;
  margin-bottom: 30px;
  font-size: 20px;
  text-align: center;
}

headera .contenido-header .action-header {
  display: inline-block;
  margin: auto;
  color: #fff;
  text-decoration: none;
  border: 1px solid #15a4fa;
  padding: 10px 20px;
  border-radius: 5px;
}

headera .contenido-headera .action-headera:hover {
  background: #15a4fa;
  color: #fff;
}

main .quienes {
  background: #f0f3f5;
  padding: 60px 0;
}

main .quienes .quienes-titulo {
  color: #000;
  font-size: 25px;
  text-align: center;
  margin-bottom: 20px;
}

main .quienes .quienes-parrafo {
  text-align: center;
  color: #999999;
  font-weight: 600;
}

main .quehacemos {
  margin: 60px 0;
}
main .contenido-cajas {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

main .quehacemos .contenido-cajas .tarjeta {
  width: 30%;
  text-align: center;
}

main .quehacemos .contenido-cajas .tarjeta .contenido-tarjeta .titulo-tarjeta {
  margin: 10px 0;
}

main .portafolio {
  background: #f0f3f5;
  padding: 60px 0;
}

main .portafolio .portafolio-textos {
  text-align: center;
  margin-bottom: 60px;
  color: #2d3950;
  font-size: 20px;
}

main .portafolio .portafolio-textos p {
  color: #909090;
  font-size: 15px;
  margin: 20px 0 0 0;
}

main .portafolio .galeria {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

main .portafolio .galeria .fotos {
  width: 30%;
  margin-bottom: 20px;
}

main .portafolio .galeria .fotos img {
  width: 100%;
  height: 210px;
  border-radius: 5px;
}
main .portafolio .galeria .fotos img:hover {
  opacity: 0.6;
  cursor: pointer;
}

footer .contacto {
  height: 600px;
  background-image: url("../assets/img/footer.png");
  background-position: center;
  padding: 60px 0;
}

footer .footer-textos {
  text-align: center;
  color: #fff;
  font-size: 25px;
}

footer .footer-textos p {
  font-size: 14px;
  margin: 15px 0 30px 0;
  color: #999999;
}
form {
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 70%;
}
footer .contacto input[type="text"],
footer .contacto input[type="email"],
footer .contacto textarea {
  width: 100%;
  margin: 5px 0;
  padding: 15px 20px;
  background: none;
  border-radius: 5px;
  color: rgb(204, 204, 204);
  border: 2px solid rgba(204, 204, 204, 0.383);
  font-family: "lato";
  font-weight: 300;
}

footer .contacto textarea {
  height: 150px;
  max-height: 150px;
  max-width: 100%;
  min-width: 100%;
  min-height: 150px;
}
.derecha {
  display: flex;
  justify-content: flex-end;
}
footer .contacto input[type="submit"] {
  display: block;
  width: 100px;
  margin: 10px 0;
  padding: 10px 15px;
  background: none;
  border: 1px solid #15a4fa;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  float: right;
}
footer .contacto input[type="submit"]:hover {
  background: #15a4fa;
  color: #fff;
}

.footer {
  height: 200px;
  background: #000;
}

@media screen and (max-width: 760px) {
  header .menu {
    justify-content: center;
  }
  header .contenido-header .texto-header {
    font-size: 18px;
  }
  header .contenido-header .texto-header .desaparecer {
    display: none;
  }
}

@media screen and (max-width: 630px) {
  header .contenido-header .titulo-header {
    font-size: 80px;
  }
  header .contenido-header .linea-header {
    width: 400px;
  }
  main .portafolio .galeria .fotos {
    width: 49%;
  }
}

@media screen and (max-width: 500px) {
  header .contenido-header .titulo-header {
    font-size: 40px;
  }
  main .quehacemos .contenido-cajas .tarjeta {
    width: 48%;
  }
  main .contenido-cajas {
    justify-content: center;
  }
  main .quehacemos .contenido-cajas .tarjeta {
    margin: 20px 0;
  }
}

@media screen and (max-width: 350px) {
  main .quehacemos .contenido-cajas .tarjeta {
    width: 98%;
  }
  header .contenido-header .texto-header {
    font-size: 15px;
  }
}
</style>