<template>
  <header
    :class="{ 'header-fixed': scrolledNav }"
    class="fixed z-[999] w-full bg-slate-50 py-2 transition-all duration-200 ease-in-out md:py-5 border-b border-slate-200 lg:py-4"
  >
    <div class="container mx-auto">
      <div class="navbar">
        <RouterLink to="/" class="logo cursor-pointer">
          <i class="bx bx-cube-alt icon text-3xl"></i>
        </RouterLink>
        <nav
          :class="{ active: click.setNavbar }"
          class="navigation md:shadow-none md:p-0 md:bg-transparent md:static fixed top-11 right-3 bg-white shadow rounded-lg py-7 px-14 md:translate-x-0 translate-x-52 transition-all ease-in-out duration-200"
        >
          <ul
            class="flex md:flex-row md:gap-x-7 lg:gap-x-8 items-center gap-y-5 flex-col"
          >
            <RouterLink to="/about" class="cursor-pointer"> About </RouterLink>
            <RouterLink to="/profile" class="cursor-pointer">
              Profile
            </RouterLink>
            <RouterLink to="/services" class="relative cursor-pointer">
              <div
                class="badge absolute -top-3 -right-5 rounded-full bg-blue-600 px-3 py-[.15rem] text-center text-[10px] font-medium uppercase text-white"
              >
                New
              </div>
              Services
            </RouterLink>
            <RouterLink :to="{ name: 'Portfolio' }" class="cursor-pointer">
              Portfolio
            </RouterLink>
            <a
              href="https://github.com/JfeStudio"
              class="bg-hover rounded-full lg:ml-8 md:ml-6 flex justify-center items-center bg-dark-scy w-7 h-7 font-medium text-white"
            >
              <i class="bx bxl-github text-xl"></i>
            </a>
          </ul>
        </nav>
        <div
          @click="click.setNavbar = !click.setNavbar"
          class="toggle cursor-pointer md:hidden block z-[555]"
        >
          <i
            :class="{ 'bx-x': click.setNavbar }"
            class="bx leading-none bx-menu-alt-right text-3xl text-dark"
          ></i>
        </div>
      </div>
    </div>
  </header>
</template>
<script setup>
import { RouterLink } from "vue-router";
import { reactive } from "vue";
const click = reactive({
  setNavbar: false,
});
</script>
<style lang=""></style>
