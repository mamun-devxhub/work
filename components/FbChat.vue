<template>
  <div id="fb-root"></div>
  <div id="fb-customer-chat" class="fb-customerchat"></div>
</template>

<script>
export default {
  props: {
    pageId: {
      type: String,
      required: true,
    },
    apiVersion: {
      type: String,
      default: "v10.0",
    },
  },
  mounted() {
    setTimeout(() => {
      this.initFbSdk();
      this.initFbChat();
    }, 1000);
  },
  methods: {
    initFbSdk() {
      window.fbAsyncInit = () => {
        FB.init({
          xfbml: true,
          version: this.apiVersion,
        });
      };
      const script = document.createElement("script");
      script.id = "facebook-jssdk";
      script.src =
        "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
      document.body.appendChild(script);
    },
    initFbChat() {
      const chatbox = document.getElementById("fb-customer-chat");
      chatbox.setAttribute("page_id", this.pageId);
      chatbox.setAttribute("attribution", "biz_inbox");
    },
  },
};
</script>
