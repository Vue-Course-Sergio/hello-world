const { createApp, ref } = Vue;

const app = createApp({
  setup() {
    const message = ref("I'm Batman");
    const author = ref("Bruce Wayne");

    const changeQuote = () => {
      message.value = "Hola, soy Goku";
      author.value = "Kakaroto";
    };

    return { message, author, changeQuote };
  },
});

app.mount("#myApp");
