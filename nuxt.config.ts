// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	modules: [
		[
			"@nuxtjs/i18n",
			{
				vueI18n: "./locales/i18n.config.ts",
				defaultLocale: "ar",
				strategy: "prefix_and_default",
				detectBrowserLanguage: {
					useCookie: true,
				},
				locales: [
					{
						code: "en",
						iso: "en-US",
						name: "English",
						file: "./locales/en.json",
						direction: "ltr",
					},
					{
						code: "ar",
						iso: "ar",
						name: "Arabic",
						file: "./locales/ar.json",
						direction: "rtl",
					},
				],
			},
		],
	],
	imports: { dirs: ["./composables"] },
	css: ["./assets/css/style.css"],
});
