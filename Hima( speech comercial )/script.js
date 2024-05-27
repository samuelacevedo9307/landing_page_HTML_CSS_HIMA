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
                  <h4 class="modalregister_tittle"><a href="">Si aun no tienes cuenta has clic aquí</a></h4>
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

//dashboard admin

const $testiar = document.getElementById("modal_login_btn");

$testiar.onclick = function () {
  const dashboardSection = document.createElement("section");
  dashboardSection.className = "section_dashboard_admin";
  dashboardSection.innerHTML = `
    <!-- Aquí va el HTML de la sección dashboard admin -->
   
        <div class="menu_dash_admin">
            <div class="">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                </svg>
                <h3>Hola Usuario</h3>
            </div>
            <h3>Menu Tours</h3>
            <button class="button_create_tour">Create</button>
            <button class="button_edit_tour">Edit / Remove</button>
            <button class="button_remove_tour">Home</button>
            <h3>Users Administrator</h3>
            <button class="button_ascend_admin">User Ascend</button>
            <button class="button_edit_admin">Edit / Remove</button>
            <button class="button_remove_admin">Home</button>
            <h3>Menu Guide</h3>
            <button class="button_create_tour">Create</button>
            <button class="button_edit_tour">Edit / Remove</button>
            <button class="button_remove_tour">Home</button>
            <h3>Menu User</h3>
            <button class="button_see_tours">See Tours</button>
            <button class="button_my_tours">My Tours</button>
            <button class="button_remove_tour">Home</button>
        </div>
        <div class="place_dashboard_contain">
            <div class="section_description_targets">
                <div class="table_stadistics">
                </div>
                <button class="button_table_stadistics">See More</button>
                <article class="target_description_dash">
                    <div class="img_target_description">
                        <img src="" alt="">
                    </div>
                    <div class="contain_text_description">
                        <div class="title_tour_description">
                            <h3>Titulo tour</h3>
                        </div>
                        <div class="contain_text_description_target">
                            <div class="text_description_target">
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae labore id sit corrupti cumque in repudiandae minima laboriosam optio voluptates. Molestias mollitia possimus ipsum architecto quaerat tenetur eum ipsa porro!</p>
                            </div>
                        </div>
                        <div class="contain_characteristic_target">
                            <p class="border_target_char">Duracion: <span>5 hora</span> </p>
                            <p class="border_target_char">Fecha de inicio: <span>31/12/2024</span></p>
                            <p class="border_target_char">Cupos: <span>10</span></p>
                            <p>Categoria <span>soleado</span></p>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    
  `;

  document.body.appendChild(dashboardSection);

  // Ocultar el modal de login
  const modal = document.querySelector(".modalLogin");
  modal.style.display = "none";
  document.body.removeChild(modal);
};