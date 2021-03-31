<template>
  <b-navbar toggleable="lg" type="light" variant="Primary" fixed="top">
    <b-navbar-brand href="#">NavBar</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
        <b-nav-item href="#">Processos</b-nav-item>
        <!-- <b-nav-item href="#" disabled>disabled</b-nav-item> -->
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Núm. do processo"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Novo</b-button>
        </b-nav-form>
    </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Buscar"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">buscar</b-button>
        </b-nav-form>

        <b-nav-item-dropdown  right>
          <template #button-content>
            <!-- Custom <strong>Content</strong> with <em>HTML</em> via Slot -->
            <!-- <div style="font-size: 1.5rem;"> -->
              <b-icon icon="bell-fill" scale="8.0" class="border rounded p-2"></b-icon>
            <!-- </div> -->
          </template>
          <b-dropdown-item href="#">Processo 5021663.69.8.13.45 na pasta recurso há 20 dias</b-dropdown-item>
          <!-- <b-dropdown-item href="#">ES</b-dropdown-item> -->
          <!-- <b-dropdown-item href="#">RU</b-dropdown-item> -->
          <!-- <b-dropdown-item href="#">FA</b-dropdown-item> -->
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
    </b-navbar>
</template>
