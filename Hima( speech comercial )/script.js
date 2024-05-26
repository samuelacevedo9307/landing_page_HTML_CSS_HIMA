//Modal para registrarnos en el navbar
const $menuButton = document.querySelector(".menuToggle");
const $menu = document.getElementById("navMenu");
const ARIA_EXPANDED = "aria-expanded";
$menu.addEventListener("click", () => {
      const isMenuOpened = $menu.getAttribute(ARIA_EXPANDED) === "true"; // -> 'true' 'false'
      isMenuOpened ? closeMenu($menu) : openMenu($menu);
});

function openMenu() {
    $menu.setAttribute(ARIA_EXPANDED, "true");
}

function closeMenu() {
    $menu.setAttribute(ARIA_EXPANDED, "false");
}

//Modal Login
const $miCuenta = document.getElementById("miCuenta");

$miCuenta.onclick = function () {
      const modal = document.createElement("div");
      modal.classList.add("modalLogin");
      modal.innerHTML = `
                <div class="modalContent">
                  <h3 class="modalLogin_tittle">Ingresa tus datos</h3>
                  <span class="close" id="close" >&times;</span>
                  <input type="email" placeholder="Ingrese su correo" class="modalLogin_input"></input>
                  <input type="text" placeholder="Ingrese la contraseña" class="modalLogin_input"></input>
                  <button id="modal_login_btn" class="modal_login_btn" type="submit">Ingresar</button>
                  <h4 class="modalLogin_tittle"><a href="#">Recuperar contraseña</a></h4>
                </div>
            `;

      document.body.appendChild(modal);

      modal.style.display = "block";

      const closeBtn = modal.querySelector(".close");

      closeBtn.onclick = function () {
        modal.style.display = "none";
        document.body.removeChild(modal);
      };

      window.onclick = function (event) {
        if (event.target === modal) {
          modal.style.display = "none";
          document.body.removeChild(modal);
        }
      };
      const $testiar = document.getElementById("modal_login_btn");

      $testiar.onclick = function () {
        alert("Acceso concedido");
      };
    };

//Modal registrarse
const $registrarse = document.getElementById("registrarse");

$registrarse.onclick = () => {
      const modal = document.createElement("DIV");
      modal.classList.add("modalRegistrarse");
      modal.innerHTML = `
                <div class="modalContent">
                  <h3 class="modalRegister_tittle">Registra tus datos</h3>
                  <span class="close" id="close">&times;</span>
                  <form method="POST"class="modal_register_form">
                    <input type="email" placeholder="Ingrese su correo" class="modalLogin_input"></input>
                    <input type="text" placeholder="Ingrese la contraseña" class="modalLogin_input"></input>
                    <h4 class="select_profile">Seleccione su perfil:</h4>
                    <div class="modal_register_form_div">
                      <label class="modal_register_form_label">
                        Turista
                        <input type="radio" id="tourist" name="profile" value="tourist" class="modalRegistrarse"></input>
                      </label>
                      <label class="modal_register_form_label">
                        Guía
                        <input type="radio" id="guide" name="profile" value="guide" class="modalRegistrarse">
                      </label>
                    </div>
                  </form>
                  <button id="login" class="modal_register_btn" type="submit">Registrarme</button>
                </div>
            `;

      document.body.appendChild(modal);

      modal.style.display = "block";

      const closeBtn = modal.querySelector(".close");

      closeBtn.onclick = function () {
        modal.style.display = "none";
        document.body.removeChild(modal);
      };

      window.onclick = function (event) {
        if (event.target === modal) {
          modal.style.display = "none";
          document.body.removeChild(modal);
        }
    };
};


// script destacados 
document.addEventListener('DOMContentLoaded', function () {
    const mainCards = document.querySelectorAll('.cards_highlights');
    /**En el primer forEach se esta iterando sobre todas las cartas principales
     * y se les esta asignando un escuchador de eventos
     */
    mainCards.forEach((card) => {
      // asignando el evento de click
      card.addEventListener('click', () => {
        //Vuelve y recorre el forEach de card es decir en las que no se hicieron click
        // y luego compara si la en las cards que no se hicieron click es diferente de la que hizo click
        // y si es diferente las oculta
        mainCards.forEach((e) => {
          if (e !== card) {
            e.querySelector('.more_information').style.display = 'none';
          }
        });
        const moreInformation = card.querySelector('.more_information');
        // Se esta verificando si el estilo de elemento actual es estrictamente igual ah bloque,
        // si esta condicion se cumple oculta todas las cards
        if (moreInformation.style.display === 'block') {
          moreInformation.style.display = 'none';
        }
        // Si los estilos de moreInformation en css estan actulmente ocultos (none) se cambia el estilo de visualizacion ah bloque
        else {
          moreInformation.style.display = 'block';
        }
      });
    });
  });