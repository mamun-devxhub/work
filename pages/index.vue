<script setup lang="ts">
import { NuxtFacebookChatOptions } from "nuxt-facebook-chat";
const options: NuxtFacebookChatOptions = {
  pageId: "106014354867607", // Your Facebook Page ID
  locale: "th_TH", // Set the locale for the chat
  themeColor: "#E04040", // Customize the chat theme color
};
</script>

<template>
  <div>
    <div class="text-black">This is the home page</div>
    <!-- Ensure the chat is rendered client-side -->
    <div class="w-16 h-16">
      <client-only>
        <nuxt-facebook-chat :options="options" />
      </client-only>
    </div>
  </div>
</template>

<style scoped></style>
