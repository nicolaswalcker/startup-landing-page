<template>
  <section
    id="home"
    class="overflow-x-hidden pt-40 md:pt-20 w-full flex flex-col items-center justify-center gap-14"
  >
    <div
      class="font-graphik text-center flex flex-col items-center justify-center gap-4 max-w-[80%] md:max-w-[40%]"
    >
      <h1
        class="text-[52px] md:text-[80px] leading-[62px] md:leading-[88px] text-light-text"
      >
        Work at the speed of thought.
      </h1>
      <p class="text-light-text text-xl font-normal">
        Most calendars are designed for teams. Slate is designed for freelancers
        who want a simple way to plan their schedule.
      </p>
    </div>
    <div class="flex flex-col items-center justify-center gap-5 md:flex-row">
      <ButtonComponent button-text="Try For Free " />
      <ButtonComponent button-text="Learn more" button-type="secondary" />
    </div>
    <div class="w-[140vw] relative flex items-center justify-center">
      <NuxtImg
        src="/img/hero.png"
        alt="Hero image"
        quality="100"
        format="webp"
        sizes="sm:550px md:760px lg:1552px"
      />
      <div
        class="absolute top-0 h-full w-full bg-gradient-to-t from-black"
      ></div>
    </div>
  </section>
  <section
    id="features"
    class="w-full px-[50px] py-[62px] flex flex-col items-center justify-center gap-20"
  >
    <div
      class="font-graphik text-center flex flex-col items-center justify-center gap-4"
    >
      <h1 class="text-[52px] leading-[62px] md:leading-[88px] text-light-text">
        FEATURES
      </h1>
      <p class="text-light-text text-xl font-normal md:max-w-[600px]">
        Most calendars are designed for teams. Slate is designed for freelancers
        who want a simple way to plan their schedule.
      </p>
    </div>

    <div class="flex flex-col items-center justify-center gap-12 md:flex-row">
      <NuxtImg
        src="/img/charts.png"
        alt="Features image"
        quality="100"
        format="webp"
        sizes="sm:376px lg:750px"
      />
      <div
        class="flex flex-col items-center justify-center md:max-w-[270px] gap-6"
      >
        <article class="flex flex-col items-start gap-4">
          <h2
            class="text-sm text-light-text font-medium flex items-center justify-start gap-2"
          >
            <Icon name="ic:round-restaurant-menu" color="#02E4C0" size="25" />
            A single source of truth
          </h2>
          <p class="text-base text-light-text">
            When you add work to your Slate calendar we automatically calculate
            useful insights
          </p>
        </article>
        <article class="flex flex-col items-start gap-4">
          <h2
            class="text-sm text-light-text font-medium flex items-center justify-start gap-2"
          >
            <Icon name="mdi:alien-outline" color="#02E4C0" size="25" />
            Intuitive interface
          </h2>
          <p class="text-base text-light-text">
            When you add work to your Slate calendar we automatically calculate
            useful insights
          </p>
        </article>
        <article class="flex flex-col items-start gap-4">
          <h2
            class="text-sm text-light-text font-medium flex items-center justify-start gap-2"
          >
            <Icon name="mdi:all-inclusive" color="#02E4C0" size="25" />
            Or with rules
          </h2>
          <p class="text-base text-light-text">
            When you add work to your Slate calendar we automatically calculate
            useful insights
          </p>
        </article>
      </div>
    </div>
  </section>
  <section
    id="contents"
    class="w-full max-w-[389px] px-[50px] py-[62px] flex flex-col items-center justify-center gap-20"
  >
    <div
      class="font-graphik text-center flex flex-col items-center justify-center gap-4"
    >
      <h1 class="text-[52px] leading-[62px] md:leading-[88px] text-light-text">
        Contents
      </h1>
      <p class="text-light-text text-xl font-normal md:max-w-[600px]">
        We focus on ergonomics and meeting you where you work. It's only a
        keystroke away.
      </p>
    </div>
    <div
      class="flex flex-col md:flex-row items-center justify-center gap-[33px]"
    >
      <article
        class="bg-bg-light flex flex-col items-center justify-center py-10 px-6 gap-[57px] md:w-[476px] md:h-[620px] rounded-[10px]"
      >
        <div class="flex flex-col items-center justify-center gap-[10px]">
          <h4 class="text-xl font-medium text-bg-dark text-center">Title</h4>
          <p class="text-base text-secondary-text text-center">
            Ever wondered if you're too reliant on a client for work? Slate
            helps you identify .
          </p>
        </div>
        <ButtonComponent button-text="Sign Up" />
        <NuxtImg src="/img/macbook.png" />
      </article>
      <article
        class="bg-bg-light flex flex-col items-center justify-center py-10 px-6 gap-[30px] md:w-[476px] md:h-[620px] rounded-[10px]"
      >
        <div class="flex flex-col items-center justify-center gap-[10px]">
          <h4 class="text-xl font-medium text-bg-dark text-center">
            Design with real data
          </h4>
          <p class="text-base text-secondary-text text-center">
            Ever wondered if you're too reliant on a client for work? Slate
            helps you identify .
          </p>
        </div>
        <ButtonComponent button-text="Try For Free" />
        <NuxtImg src="/img/dashboard.png" />
      </article>
    </div>
  </section>
</template>

<script setup lang="ts"></script>
