<template>
  <template v-for="tt in getNextThought()" :key="tt.text">
    <div class="mv-quote-card gradient-card animate-fade-in">
      <div class="mv-quote-icon">â</div>
      <div class="mv-quote-body">
        <img
          src="/photos/Logo_horizontal_small.jpg"
          class="mv-quote-logo d-none d-lg-block"
          alt="MyVet Logo"
        />
        <h5 class="mv-quote-heading">ÐœÑ‹ÑÐ»Ð¸ Ð¾ Ð¶Ð¸Ð²Ð¾Ñ‚Ð½Ñ‹Ñ…</h5>
        <p class="mv-quote-text">
          {{ tt.text }}
        </p>
        <div class="mv-quote-author">
          <span class="mv-quote-dash">â€”</span>
          <a :href="tt.authorLink" target="_blank" rel="noopener noreferrer" class="mv-author-link">
            {{ tt.author }}
          </a>
        </div>
      </div>
      <div class="mv-quote-cta mt-4">
        <a href="tel:+998994425080" class="cta-button">
          ðŸ“ž Ð—Ð²Ð¾Ð½Ð¸Ñ‚Ðµ: (99) 442 50 80
        </a>
      </div>
    </div>
  </template>
</template>

<script setup lang="ts">
interface thought {
  text: string;
  author: string;
  authorLink?: string;
}

const thoughtsOfTheGreats: thought[][] = [
  [
    {
      text: "Ð–Ð¸Ð²Ð¾Ñ‚Ð½Ñ‹Ðµ ÑÑƒÑ‚ÑŒ Ð½Ðµ Ñ‡Ñ‚Ð¾ Ð¸Ð½Ð¾Ðµ, ÐºÐ°Ðº Ð¿Ñ€Ð¾Ð¾Ð±Ñ€Ð°Ð·Ñ‹ Ð½Ð°ÑˆÐ¸Ñ… Ð´Ð¾Ð±Ñ€Ð¾Ð´ÐµÑ‚ÐµÐ»ÐµÐ¹ Ð¸ Ð¿Ð¾Ñ€Ð¾ÐºÐ¾Ð², Ð±Ð»ÑƒÐ¶Ð´Ð°ÑŽÑ‰Ð¸Ñ… Ð¿Ñ€ÐµÐ´ Ð½Ð°ÑˆÐ¸Ð¼ Ð²Ð·Ð¾Ñ€Ð¾Ð¼, Ð¿Ñ€Ð¸Ð·Ñ€Ð°ÐºÐ¸ Ð½Ð°ÑˆÐ¸Ñ… Ð´ÑƒÑˆ...",
      author: "Â© Ð’. Ð“ÑŽÐ³Ð¾",
      authorLink:
        "https://ru.wikipedia.org/wiki/%D0%93%D1%8E%D0%B3%D0%BE,_%D0%92%D0%B8%D0%BA%D1%82%D0%BE%D1%80",
    },
  ],
  [
    {
      text: "ÐœÐ¾Ñ€Ð°Ð»ÑŒÐ½Ñ‹Ð¹ Ð¿Ñ€Ð¾Ð³Ñ€ÐµÑÑ Ð½Ð°Ñ†Ð¸Ð¸ Ð¼Ð¾Ð¶Ð½Ð¾ Ð¸Ð·Ð¼ÐµÑ€Ð¸Ñ‚ÑŒ Ñ‚ÐµÐ¼, ÐºÐ°Ðº ÑÑ‚Ð° Ð½Ð°Ñ†Ð¸Ñ Ð¾Ñ‚Ð½Ð¾ÑÐ¸Ñ‚ÑÑ Ðº Ð¶Ð¸Ð²Ð¾Ñ‚Ð½Ñ‹Ð¼.",
      author: "Â© ÐœÐ°Ñ…Ð°Ñ‚Ð¼Ð° Ð“Ð°Ð½Ð´Ð¸",
      authorLink: "https://citaty.su/zhivotnye-citaty-i-aforizmy-o-zhivotnyx",
    },
  ],
  [
    {
      text: "Ð¡Ð»ÐµÐ´ÑƒÐµÑ‚ ÑÐ¿Ñ€Ð°ÑˆÐ¸Ð²Ð°Ñ‚ÑŒ Ð½Ðµ Ð¾ Ñ‚Ð¾Ð¼, Ð¼Ð¾Ð³ÑƒÑ‚ Ð»Ð¸ Ð¶Ð¸Ð²Ð¾Ñ‚Ð½Ñ‹Ðµ Ð¼Ñ‹ÑÐ»Ð¸Ñ‚ÑŒ Ð¸Ð»Ð¸ Ð³Ð¾Ð²Ð¾Ñ€Ð¸Ñ‚ÑŒ, Ð° Ð¾ Ñ‚Ð¾Ð¼, Ð¼Ð¾Ð³ÑƒÑ‚ Ð»Ð¸ Ð¾Ð½Ð¸ ÑÑ‚Ñ€Ð°Ð´Ð°Ñ‚ÑŒ.",
      author: "Â© Ð˜ÐµÑ€ÐµÐ¼Ð¸Ñ Ð‘ÐµÐ½Ñ‚Ð°Ð¼",
      authorLink: "https://citaty.su/zhivotnye-citaty-i-aforizmy-o-zhivotnyx",
    },
  ],
  [
    {
      text: "Ð—Ð²ÐµÑ€Ð¸ â€” Ð½Ðµ Ð±Ñ€Ð°Ñ‚ÑŒÑ Ð¸ Ð½Ðµ ÑÐ»ÑƒÐ³Ð¸. Ð­Ñ‚Ð¾ Ð´Ñ€ÑƒÐ³Ð¸Ðµ Ñ€Ð°ÑÑ‹, Ð²Ð¼ÐµÑÑ‚Ðµ Ñ Ð½Ð°Ð¼Ð¸ Ð¿Ð¾Ð¹Ð¼Ð°Ð½Ð½Ñ‹Ðµ Ð² ÑÐµÑ‚ÑŒ Ð·ÐµÐ¼Ð½Ð¾Ð³Ð¾ ÑÑƒÑ‰ÐµÑÑ‚Ð²Ð¾Ð²Ð°Ð½Ð¸Ñ.",
      author: "Â© Ð“ÐµÐ½Ñ€Ð¸ Ð‘ÐµÑÑ‚Ð¾Ð½",
      authorLink: "https://citaty.su/zhivotnye-citaty-i-aforizmy-o-zhivotnyx",
    },
  ],
  [
    {
      text: "Ðž Ð½Ð°Ñ†Ð¸Ð¸ Ð¼Ð¾Ð¶Ð½Ð¾ ÑÑƒÐ´Ð¸Ñ‚ÑŒ Ð¿Ð¾ ÐµÑ‘ Ð²ÐµÐ»Ð¸Ñ‡Ð¸ÑŽ Ð¸ Ð¼Ð¾Ñ€Ð°Ð»ÑŒÐ½Ð¾Ð¼Ñƒ Ð¿Ñ€Ð¾Ð³Ñ€ÐµÑÑÑƒ Ð¿Ð¾ Ñ‚Ð¾Ð¼Ñƒ, ÐºÐ°Ðº Ð¾Ð½Ð° Ð¾Ð±Ñ€Ð°Ñ‰Ð°ÐµÑ‚ÑÑ Ñ Ð¶Ð¸Ð²Ð¾Ñ‚Ð½Ñ‹Ð¼Ð¸",
      author: "Â© ÐœÐ°Ñ…Ð°Ñ‚Ð¼Ð° Ð“Ð°Ð½Ð´Ð¸",
      authorLink: "https://ru.citaty.net/tsitaty/630300-makhatma-gandi-o-velichii-natsii-i-ee-moralnom-progresse-mozhno-sud/",
    },
  ],
];

function getNextThought(): thought[] {
  return thoughtsOfTheGreats[
    Math.floor(Math.random() * thoughtsOfTheGreats.length)
  ];
}
</script>

<style scoped>
.mv-quote-card {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.mv-quote-icon {
  font-size: 3rem;
  line-height: 1;
  color: var(--mv-accent);
  opacity: 0.5;
  margin-bottom: 0.5rem;
  font-family: Georgia, serif;
}

.mv-quote-logo {
  width: 120px;
  height: auto;
  border-radius: var(--mv-radius-sm);
  margin: 0 auto 1rem;
  box-shadow: var(--mv-shadow-sm);
}

.mv-quote-heading {
  font-family: 'Outfit', sans-serif;
  font-weight: 600;
  font-size: 1.3rem;
  color: var(--mv-blue-pale);
  margin-bottom: 1rem;
}

.mv-quote-text {
  font-size: 1.15rem;
  font-style: italic;
  line-height: 1.8;
  color: var(--mv-text-on-dark);
  max-width: 650px;
  margin: 0 auto;
}

.mv-quote-author {
  margin-top: 1.25rem;
  font-size: 0.95rem;
}

.mv-quote-dash {
  color: var(--mv-accent);
  margin-right: 0.5rem;
}

.mv-author-link {
  color: var(--mv-accent) !important;
  font-weight: 500;
  text-decoration: none;
  transition: var(--mv-transition);
}

.mv-author-link:hover {
  color: var(--mv-blue-pale) !important;
  text-decoration: underline;
}

.mv-quote-cta {
  display: flex;
  justify-content: center;
}
</style>

