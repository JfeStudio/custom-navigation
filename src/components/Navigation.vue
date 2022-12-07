<template>
  <header
    :class="{ 'header-fixed': scrolledNav }"
    class="fixed z-[999] w-full bg-slate-50 py-2 transition-all duration-200 ease-in-out md:py-5 lg:py-5"
  >
    <div class="container mx-auto">
      <div class="navbar">
        <RouterLink to="/" class="logo cursor-pointer">
          <i class="bx bx-cube-alt icon text-3xl"></i>
        </RouterLink>
        <nav v-show="!mobile">
          <ul class="menu flex items-center gap-x-8">
            <RouterLink to="/about" class="relative max-w-max cursor-pointer">
              About
            </RouterLink>
            <RouterLink to="/profile" class="relative max-w-max cursor-pointer">
              Profile
            </RouterLink>
            <RouterLink
              to="/services"
              class="relative max-w-max cursor-pointer"
            >
              <div
                class="badge absolute -top-3 -right-5 rounded-full bg-blue-600 px-3 py-[.15rem] text-center text-[10px] font-medium uppercase text-white"
              >
                New
              </div>
              Services
            </RouterLink>
            <RouterLink
              :to="{ name: 'Portfolio' }"
              class="relative max-w-max cursor-pointer"
            >
              Portfolio
            </RouterLink>
            <a
              href="https://github.com/JfeStudio"
              class="bg-hover rounded-full flex justify-center items-center bg-dark-scy w-7 h-7 font-medium text-white"
            >
              <i class="bx bxl-github text-xl"></i>
            </a>
          </ul>
        </nav>
        <div class="menu-hamburger cursor-pointer md:hidden">
          <i
            @click="toggleMobileNav"
            v-show="mobile"
            :class="{ 'bx-x': mobileNav }"
            class="bx bx-menu-alt-right icon text-3xl text-dark"
          ></i>
        </div>
        <!-- menu navbar mobile -->
        <transition name="mobile-nav">
          <nav
            v-show="mobileNav"
            id="navigation"
            class="absolute translate-y-10 right-1 w-52 rounded-md bg-white/95 p-7 shadow-xl"
          >
            <ul
              class="menu flex flex-col gap-y-3 md:flex-row md:items-center md:gap-x-8"
            >
              <RouterLink class="cursor-pointer" to="/about">
                <!-- <a class="nav-link" href="./public/challenges.html">Challenges</a> -->
                About
              </RouterLink>
              <RouterLink class="cursor-pointer" to="/profile">
                <!-- <a class="nav-link" href="./public/challenges.html">Challenges</a> -->
                Profile
              </RouterLink>
              <RouterLink
                to="/services"
                class="relative max-w-max cursor-pointer"
              >
                <div
                  class="badge absolute -top-3 -right-5 rounded-full bg-blue-600 px-3 py-[.15rem] text-center text-[10px] font-medium uppercase text-white"
                >
                  New
                </div>
                Services
              </RouterLink>
              <RouterLink class="cursor-pointer" to="/portfolio">
                <!-- <a class="nav-link" href="./public/challenges.html">Challenges</a> -->
                Portfolio
              </RouterLink>
              <a
                href="https://github.com/JfeStudio"
                class="bg-hover rounded-full flex justify-center items-center bg-dark-scy w-7 h-7 font-medium text-white"
              >
                <i class="bx bxl-github text-xl"></i>
              </a>
            </ul>
          </nav>
        </transition>
      </div>
    </div>
  </header>
</template>
<script>
import { RouterLink } from "vue-router";
export default {
  name: "navigation",

  data() {
    return {
      scrolledNav: null,
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
    // this.updateScroll();
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
    updateScroll() {
      const scrollPosition = window.scrollY;
      if (scrollPosition <= 50) {
        this.scrolledNav = false;
        return;
      }
      this.scrolledNav = true;
    },
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
    },
  },
};
</script>
<style lang=""></style>
