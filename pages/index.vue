<template>
  <section
    id="home"
    class="overflow-x-hidden pt-40 lg:pt-20 w-full flex flex-col items-center justify-center gap-14"
  >
    <div
      class="font-graphik text-center flex flex-col items-center justify-center gap-4 max-w-[80%] lg:max-w-[40%]"
    >
      <h1
        class="text-[52px] lg:text-[80px] leading-[62px] lg:leading-[88px] text-light-text"
      >
        Work at the speed of thought.
      </h1>
      <p class="text-light-text text-xl font-normal">
        Most calendars are designed for teams. Slate is designed for freelancers
        who want a simple way to plan their schedule.
      </p>
    </div>
    <div class="flex flex-col items-center justify-center gap-5 lg:flex-row">
      <ButtonComponent button-text="Try For Free " />
      <ButtonComponent button-text="Learn more" button-type="secondary" />
    </div>
    <div class="w-[140vw] relative flex items-center justify-center">
      <NuxtImg
        src="/img/hero.png"
        alt="Hero image"
        quality="100"
        format="webp"
        sizes="lg:550px lg:760px lg:1552px"
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
      <h2 class="text-[52px] leading-[62px] lg:leading-[88px] text-light-text">
        FEATURES
      </h2>
      <p class="text-light-text text-xl font-normal lg:max-w-[600px]">
        Most calendars are designed for teams. Slate is designed for freelancers
        who want a simple way to plan their schedule.
      </p>
    </div>

    <div class="flex flex-col items-center justify-center gap-12 lg:flex-row">
      <NuxtImg
        src="/img/charts.png"
        alt="Features image"
        quality="100"
        format="webp"
        sizes="lg:376px lg:750px"
      />
      <div
        class="flex flex-col items-center justify-center lg:max-w-[270px] gap-6"
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
      <h2 class="text-[52px] leading-[62px] lg:leading-[88px] text-light-text">
        Contents
      </h2>
      <p class="text-light-text text-xl font-normal lg:max-w-[600px]">
        We focus on ergonomics and meeting you where you work. It's only a
        keystroke away.
      </p>
    </div>
    <div
      class="flex flex-col lg:flex-row items-center justify-center gap-[33px]"
    >
      <article
        class="bg-bg-light flex flex-col items-center justify-center py-10 px-6 gap-[57px] lg:w-[476px] lg:h-[620px] rounded-[10px]"
      >
        <div class="flex flex-col items-center justify-center gap-[10px]">
          <h3 class="text-xl font-medium text-bg-dark text-center">Title</h3>
          <p class="text-base text-secondary-text text-center">
            Ever wondered if you're too reliant on a client for work? Slate
            helps you identify .
          </p>
        </div>
        <ButtonComponent button-text="Sign Up" />
        <NuxtImg alt="Mac image" src="/img/macbook.png" />
      </article>
      <article
        class="bg-bg-light flex flex-col items-center justify-center py-10 px-6 gap-[30px] lg:w-[476px] lg:h-[620px] rounded-[10px]"
      >
        <div class="flex flex-col items-center justify-center gap-[10px]">
          <h3 class="text-xl font-medium text-bg-dark text-center">
            Design with real data
          </h3>
          <p class="text-base text-secondary-text text-center">
            Ever wondered if you're too reliant on a client for work? Slate
            helps you identify .
          </p>
        </div>
        <ButtonComponent button-text="Try For Free" />
        <NuxtImg alt="Dashboard image" src="/img/dashboard.png" />
      </article>
    </div>
  </section>
  <section
    id="gallery"
    class="lg:w-full px-[50px] py-[62px] flex flex-col items-center justify-center gap-20"
  >
    <div
      class="font-graphik text-center flex flex-col items-center justify-center gap-4"
    >
      <h2 class="text-[52px] leading-[62px] lg:leading-[88px] text-light-text">
        Gallery
      </h2>
      <p class="text-light-text text-xl font-normal lg:max-w-[600px]">
        We focus on ergonomics and meeting you where you work. It's only a
        keystroke away.
      </p>
    </div>
    <div
      class="w-full lg:max-w-[100%] flex flex-col justify-center items-center gap-8 lg:flex-row lg:flex-wrap"
    >
      <NuxtImg
        class="rounded-xl h-72 object-cover lg:w-[20%] hover:brightness-110 transition-all"
        src="https://cdn.pixabay.com/photo/2019/07/14/16/29/pen-4337524_1280.jpg"
      />
      <NuxtImg
        class="rounded-xl h-72 object-cover lg:w-[20%] hover:brightness-110 transition-all"
        src="https://cdn.pixabay.com/photo/2017/09/13/17/03/technology-2746212_1280.jpg"
      />
      <NuxtImg
        class="rounded-xl h-72 object-cover lg:w-[20%] hover:brightness-110 transition-all"
        src="https://cdn.pixabay.com/photo/2016/11/23/14/45/coding-1853305_1280.jpg"
      />
      <NuxtImg
        class="rounded-xl h-72 object-cover lg:w-[20%] hover:brightness-110 transition-all"
        src="https://cdn.pixabay.com/photo/2016/11/23/14/45/coding-1853305_1280.jpg"
      />
      <NuxtImg
        class="rounded-xl h-72 object-cover lg:w-[35%] hover:brightness-110 transition-all"
        src="https://cdn.pixabay.com/photo/2019/07/14/16/29/pen-4337524_1280.jpg"
      />
      <NuxtImg
        class="rounded-xl h-72 object-cover lg:w-[15%] hover:brightness-110 transition-all"
        src="https://cdn.pixabay.com/photo/2017/09/13/17/03/technology-2746212_1280.jpg"
      />
      <NuxtImg
        class="rounded-xl h-72 object-cover lg:w-[35%] hover:brightness-110 transition-all"
        src="https://cdn.pixabay.com/photo/2016/11/23/14/45/coding-1853305_1280.jpg"
      />
    </div>
    <ButtonComponent button-type="secondary" button-text="See more" />
  </section>
  <section
    class="lg:w-full px-[50px] py-[62px] flex flex-col items-center justify-center gap-20"
  >
    <div
      class="font-graphik text-center flex flex-col items-center justify-center gap-4"
    >
      <h2 class="text-[52px] leading-[62px] lg:leading-[88px] text-light-text">
        Partners
      </h2>
      <p class="text-light-text text-xl font-normal lg:max-w-[600px]">
        We focus on ergonomics and meeting you where you work. It's only a
        keystroke away.
      </p>
    </div>
    <div class="flex items-center justify-center gap-12 flex-wrap">
      <NuxtImg src="/img/logos_apple-app-store.png" />
      <NuxtImg src="/img/logos_apiary.png" />
      <NuxtImg src="/img/logos_android-icon.png" />
      <NuxtImg src="/img/logos_basecamp.png" />
      <NuxtImg src="/img/logos_airbnb.png" />
      <NuxtImg src="/img/logos_ibm.png" />
    </div>
    <ButtonComponent button-type="secondary" button-text="All Partners" />
  </section>
  <section
    class="lg:w-full px-[50px] py-[62px] flex flex-col items-center justify-center gap-20"
  >
    <div
      class="font-graphik text-center flex flex-col items-center justify-center gap-4"
    >
      <h2 class="text-[52px] leading-[62px] lg:leading-[88px] text-light-text">
        Testimonials
      </h2>
    </div>

    <div class="flex flex-col items-start gap-5 lg:flex-row">
      <div class="flex flex-col items-center gap-5">
        <article
          class="max-w-[430px] flex flex-col items-start gap-8 p-10 border-[#DEDEDE] border rounded-xl hover:scale-105 transition-transform"
        >
          <div class="flex items-start gap-6">
            <NuxtImg
              width="50px"
              class="rounded-full max-w-[50px] max-h-[50px] object-cover"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            />
            <div class="flex flex-col items-start justify-center">
              <h3 class="text-light-text text-base font-medium">John Doe</h3>
              <p class="text-secondary-text text-base">Designer</p>
            </div>
          </div>
          <p class="text-light-text tracking-[0.2px]">
            Slate helps you see how many more days you need to work to reach
            your financial goal for the month and year. Slate helps you see how
            many more days you need to work to reach your financial goal for the
            month and year.your financial goal for the month and year.
          </p>
        </article>
        <article
          class="max-w-[430px] flex flex-col items-start gap-8 p-10 border-[#DEDEDE] border rounded-xl hover:scale-105 transition-transform"
        >
          <div class="flex items-start gap-6">
            <NuxtImg
              width="50px"
              class="rounded-full max-w-[50px] max-h-[50px] object-cover"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            />
            <div class="flex flex-col items-start justify-center">
              <h3 class="text-light-text text-base font-medium">John Doe</h3>
              <p class="text-secondary-text text-base">Designer</p>
            </div>
          </div>
          <p class="text-light-text tracking-[0.2px]">
            Slate helps you see how many more days you need to work to reach
            your financial goal for the month and year. Slate helps you see how
            many more days you need to work to reach your financial goal for the
            month and year.your financial goal for the month and year.
          </p>
        </article>
      </div>
      <div class="flex flex-col items-center gap-5">
        <article
          class="max-w-[430px] flex flex-col items-start gap-8 p-10 border-[#DEDEDE] border rounded-xl hover:scale-105 transition-transform"
        >
          <div class="flex items-start gap-6">
            <NuxtImg
              width="50px"
              class="rounded-full max-w-[50px] max-h-[50px] object-cover"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            />
            <div class="flex flex-col items-start justify-center">
              <h3 class="text-light-text text-base font-medium">John Doe</h3>
              <p class="text-secondary-text text-base">Designer</p>
            </div>
          </div>
          <p class="text-light-text tracking-[0.2px]">
            Slate helps you see how many more days you need to work to reach
            your financial goal for the month and year. Slate helps you see how
            many more days you need to work to reach your financial goal for the
            month and year.
          </p>
        </article>
        <article
          class="max-w-[430px] flex flex-col items-start gap-8 p-10 border-[#DEDEDE] border rounded-xl hover:scale-105 transition-transform"
        >
          <div class="flex items-start gap-6">
            <NuxtImg
              width="50px"
              class="rounded-full max-w-[50px] max-h-[50px] object-cover"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            />
            <div class="flex flex-col items-start justify-center">
              <h3 class="text-light-text text-base font-medium">John Doe</h3>
              <p class="text-secondary-text text-base">Designer</p>
            </div>
          </div>
          <p class="text-light-text tracking-[0.2px]">
            Slate helps you see how many more days you need to work to reach
            your financial goal for the month and year. Slate helps you see how
            many more days you need to work to reach your financial goal for the
            month and year.your financial goal for the month and year.
          </p>
        </article>
      </div>
    </div>
  </section>
  <footer
    class="flex flex-col gap-[75px] lg:flex-row justify-around items-start py-[107px] px-[80px] w-full"
  >
    <div class="flex flex-col items-start lg:flex-row gap-[70px]">
      <div class="flex flex-col items-start gap-10">
        <strong class="text-light-text font-semibold text-lg"
          >Fingertipe</strong
        >
        <nav>
          <ul class="flex flex-col items-start gap-5">
            <li>
              <RouterLink
                class="text-light-text font-semibold hover:text-stone-400 transition-colors"
                to="/"
                >Home</RouterLink
              >
            </li>
            <li>
              <RouterLink
                class="text-light-text font-semibold hover:text-stone-400 transition-colors"
                to="/"
                >Examples</RouterLink
              >
            </li>
            <li>
              <RouterLink
                class="text-light-text font-semibold hover:text-stone-400 transition-colors"
                to="/"
                >Pricing</RouterLink
              >
            </li>
            <li>
              <RouterLink
                class="text-light-text font-semibold hover:text-stone-400 transition-colors"
                to="/"
                >Updates</RouterLink
              >
            </li>
          </ul>
        </nav>
      </div>
      <div class="flex flex-col items-start gap-10">
        <strong class="text-light-text font-semibold text-lg">Resources</strong>
        <nav>
          <ul class="flex flex-col items-start gap-5">
            <li>
              <RouterLink
                class="text-light-text font-semibold hover:text-stone-400 transition-colors"
                to="/"
                >Home</RouterLink
              >
            </li>
            <li>
              <RouterLink
                class="text-light-text font-semibold hover:text-stone-400 transition-colors"
                to="/"
                >Examples</RouterLink
              >
            </li>
            <li>
              <RouterLink
                class="text-light-text font-semibold hover:text-stone-400 transition-colors"
                to="/"
                >Pricing</RouterLink
              >
            </li>
            <li>
              <RouterLink
                class="text-light-text font-semibold hover:text-stone-400 transition-colors"
                to="/"
                >Updates</RouterLink
              >
            </li>
          </ul>
        </nav>
      </div>
      <div class="flex flex-col items-start gap-10">
        <strong class="text-light-text font-semibold text-lg">About</strong>
        <nav>
          <ul class="flex flex-col items-start gap-5">
            <li>
              <RouterLink
                class="text-light-text font-semibold hover:text-stone-400 transition-colors"
                to="/"
                >Home</RouterLink
              >
            </li>
            <li>
              <RouterLink
                class="text-light-text font-semibold hover:text-stone-400 transition-colors"
                to="/"
                >Examples</RouterLink
              >
            </li>
            <li>
              <RouterLink
                class="text-light-text font-semibold hover:text-stone-400 transition-colors"
                to="/"
                >Pricing</RouterLink
              >
            </li>
            <li>
              <RouterLink
                class="text-light-text font-semibold hover:text-stone-400 transition-colors"
                to="/"
                >Updates</RouterLink
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="flex flex-col gap-3">
      <p class="text-light-text">
        <Icon name="bx:bx-map" size="30" />
        7480 Mockingbird Hill undefined
      </p>
      <p class="text-light-text">
        <Icon name="ic:baseline-phone-android" size="30" />
        (239) 555-0108
      </p>
      <p class="py-2 text-light-text flex gap-4">
        <NuxtLink to="/">
          <Icon name="ant-design:twitter-outlined" size="30" />
        </NuxtLink>
        <NuxtLink to="/">
          <Icon name="ant-design:facebook-filled" size="30" />
        </NuxtLink>
        <NuxtLink to="/">
          <Icon name="ant-design:linkedin-filled" size="30" />
        </NuxtLink>
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>
