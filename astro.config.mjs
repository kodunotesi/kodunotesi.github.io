// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';
import { bookSidebar } from './src/sidebar';

const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';
const isUserOrOrgPagesRepo = repoName.toLowerCase().endsWith('.github.io');
const pagesBase = isGitHubActions && repoName && !isUserOrOrgPagesRepo ? `/${repoName}` : '/';

// https://astro.build/config
export default defineConfig({
	base: pagesBase,
	redirects: {
		'/book/02-grs/': '/book/02-giris/',
		'/book/03-bolum-1-alginin-kokeni-neden-hep-yazilim-ekibi/04-13-gorunmeyen-s-yuku/':
			'/book/03-bolum-1-alginin-kokeni-neden-hep-yazilim-ekibi/04-13-gorunmeyen-is-yuku/',
		'/book/03-bolum-1-alginin-kokeni-neden-hep-yazilim-ekibi/04-13-gorunmeyen-s-yuku/01-131-gorunmeyen-sin-anatomisi/':
			'/book/03-bolum-1-alginin-kokeni-neden-hep-yazilim-ekibi/04-13-gorunmeyen-is-yuku/01-131-gorunmeyen-isin-anatomisi/',
		'/book/03-bolum-1-alginin-kokeni-neden-hep-yazilim-ekibi/04-13-gorunmeyen-s-yuku/02-132-neden-gorunmez/':
			'/book/03-bolum-1-alginin-kokeni-neden-hep-yazilim-ekibi/04-13-gorunmeyen-is-yuku/02-132-neden-gorunmez/',
		'/book/03-bolum-1-alginin-kokeni-neden-hep-yazilim-ekibi/04-13-gorunmeyen-s-yuku/03-133-teknik-borcun-birikimi/':
			'/book/03-bolum-1-alginin-kokeni-neden-hep-yazilim-ekibi/04-13-gorunmeyen-is-yuku/03-133-teknik-borcun-birikimi/',
		'/book/03-bolum-1-alginin-kokeni-neden-hep-yazilim-ekibi/04-13-gorunmeyen-s-yuku/04-134-gorunmeyen-sin-organizasyonel-maliyeti/':
			'/book/03-bolum-1-alginin-kokeni-neden-hep-yazilim-ekibi/04-13-gorunmeyen-is-yuku/04-134-gorunmeyen-isin-organizasyonel-maliyeti/',
		'/book/03-bolum-1-alginin-kokeni-neden-hep-yazilim-ekibi/05-14-letisim-bosluklari/01-141-ki-farkli-dil/':
			'/book/03-bolum-1-alginin-kokeni-neden-hep-yazilim-ekibi/05-14-letisim-bosluklari/01-141-iki-farkli-dil/',
		'/book/03-bolum-1-alginin-kokeni-neden-hep-yazilim-ekibi/06-15-lk-catisma-noktalari/':
			'/book/03-bolum-1-alginin-kokeni-neden-hep-yazilim-ekibi/06-15-ilk-catisma-noktalari/',
		'/book/03-bolum-1-alginin-kokeni-neden-hep-yazilim-ekibi/06-15-lk-catisma-noktalari/01-151-kapsam-degisimi-gorunmez-maliyet/':
			'/book/03-bolum-1-alginin-kokeni-neden-hep-yazilim-ekibi/06-15-ilk-catisma-noktalari/01-151-kapsam-degisimi-gorunmez-maliyet/',
		'/book/03-bolum-1-alginin-kokeni-neden-hep-yazilim-ekibi/06-15-lk-catisma-noktalari/02-152-zaman-baskisi-hizin-gercek-bedeli/':
			'/book/03-bolum-1-alginin-kokeni-neden-hep-yazilim-ekibi/06-15-ilk-catisma-noktalari/02-152-zaman-baskisi-hizin-gercek-bedeli/',
		'/book/03-bolum-1-alginin-kokeni-neden-hep-yazilim-ekibi/06-15-lk-catisma-noktalari/03-153-onceliklendirme-catismalari/':
			'/book/03-bolum-1-alginin-kokeni-neden-hep-yazilim-ekibi/06-15-ilk-catisma-noktalari/03-153-onceliklendirme-catismalari/',
		'/book/03-bolum-1-alginin-kokeni-neden-hep-yazilim-ekibi/06-15-lk-catisma-noktalari/04-154-beklenti-gerceklik-acigi/':
			'/book/03-bolum-1-alginin-kokeni-neden-hep-yazilim-ekibi/06-15-ilk-catisma-noktalari/04-154-beklenti-gerceklik-acigi/',
		'/book/03-bolum-1-alginin-kokeni-neden-hep-yazilim-ekibi/06-15-lk-catisma-noktalari/05-155-catismanin-tirmanma-dongusu/':
			'/book/03-bolum-1-alginin-kokeni-neden-hep-yazilim-ekibi/06-15-ilk-catisma-noktalari/05-155-catismanin-tirmanma-dongusu/',
		'/book/04-bolum-2-gercekler-yazilim-gelistirmenin-dogasi/02-21-belirsizlik-uzerine-nsa-edilen-bir-disiplin/':
			'/book/04-bolum-2-gercekler-yazilim-gelistirmenin-dogasi/02-21-belirsizlik-uzerine-insa-edilen-bir-disiplin/',
		'/book/04-bolum-2-gercekler-yazilim-gelistirmenin-dogasi/02-21-belirsizlik-uzerine-nsa-edilen-bir-disiplin/01-211-belirsizligin-kacinilmazligi/':
			'/book/04-bolum-2-gercekler-yazilim-gelistirmenin-dogasi/02-21-belirsizlik-uzerine-insa-edilen-bir-disiplin/01-211-belirsizligin-kacinilmazligi/',
		'/book/04-bolum-2-gercekler-yazilim-gelistirmenin-dogasi/02-21-belirsizlik-uzerine-nsa-edilen-bir-disiplin/02-212-gereksinimlerin-evrimi-hareketli-hedef/':
			'/book/04-bolum-2-gercekler-yazilim-gelistirmenin-dogasi/02-21-belirsizlik-uzerine-insa-edilen-bir-disiplin/02-212-gereksinimlerin-evrimi-hareketli-hedef/',
		'/book/04-bolum-2-gercekler-yazilim-gelistirmenin-dogasi/02-21-belirsizlik-uzerine-nsa-edilen-bir-disiplin/03-213-bilinmeyen-bilinmeyenler/':
			'/book/04-bolum-2-gercekler-yazilim-gelistirmenin-dogasi/02-21-belirsizlik-uzerine-insa-edilen-bir-disiplin/03-213-bilinmeyen-bilinmeyenler/',
		'/book/04-bolum-2-gercekler-yazilim-gelistirmenin-dogasi/02-21-belirsizlik-uzerine-nsa-edilen-bir-disiplin/04-214-tahmin-paradoksu/':
			'/book/04-bolum-2-gercekler-yazilim-gelistirmenin-dogasi/02-21-belirsizlik-uzerine-insa-edilen-bir-disiplin/04-214-tahmin-paradoksu/',
		'/book/04-bolum-2-gercekler-yazilim-gelistirmenin-dogasi/02-21-belirsizlik-uzerine-nsa-edilen-bir-disiplin/05-215-belirsizligin-organizasyonel-maliyeti/':
			'/book/04-bolum-2-gercekler-yazilim-gelistirmenin-dogasi/02-21-belirsizlik-uzerine-insa-edilen-bir-disiplin/05-215-belirsizligin-organizasyonel-maliyeti/',
		'/book/05-bolum-3-catismanin-anatomisi/03-32-bu-kucuk-bir-sti/':
			'/book/05-bolum-3-catismanin-anatomisi/03-32-bu-kucuk-bir-isti/',
		'/book/05-bolum-3-catismanin-anatomisi/03-32-bu-kucuk-bir-sti/01-321-gorsel-kucukluk-yanilgisi/':
			'/book/05-bolum-3-catismanin-anatomisi/03-32-bu-kucuk-bir-isti/01-321-gorsel-kucukluk-yanilgisi/',
		'/book/05-bolum-3-catismanin-anatomisi/03-32-bu-kucuk-bir-sti/02-322-etki-alani-ile-s-boyutu-arasindaki-fark/':
			'/book/05-bolum-3-catismanin-anatomisi/03-32-bu-kucuk-bir-isti/02-322-etki-alani-ile-is-boyutu-arasindaki-fark/',
		'/book/05-bolum-3-catismanin-anatomisi/03-32-bu-kucuk-bir-sti/03-323-bagimlilik-zinciri-ve-zincirleme-maliyet/':
			'/book/05-bolum-3-catismanin-anatomisi/03-32-bu-kucuk-bir-isti/03-323-bagimlilik-zinciri-ve-zincirleme-maliyet/',
		'/book/05-bolum-3-catismanin-anatomisi/03-32-bu-kucuk-bir-sti/04-324-gizli-s-yuku-dogrulama-geriye-donuk-uyumluluk-operasyon-hazirligi/':
			'/book/05-bolum-3-catismanin-anatomisi/03-32-bu-kucuk-bir-isti/04-324-gizli-is-yuku-dogrulama-geriye-donuk-uyumluluk-operasyon-hazirligi/',
		'/book/05-bolum-3-catismanin-anatomisi/03-32-bu-kucuk-bir-sti/05-325-vaka-alan-guncellemesinden-entegrasyon-arizasina/':
			'/book/05-bolum-3-catismanin-anatomisi/03-32-bu-kucuk-bir-isti/05-325-vaka-alan-guncellemesinden-entegrasyon-arizasina/',
		'/book/06-bolum-4-cozum-daha-saglikli-organizasyonlar-nasil-kurulur/02-41-cozumun-temel-lkesi-nsanlari-degil-sistemi-tasarlamak/':
			'/book/06-bolum-4-cozum-daha-saglikli-organizasyonlar-nasil-kurulur/02-41-cozumun-temel-ilkesi-insanlari-degil-sistemi-tasarlamak/',
		'/book/06-bolum-4-cozum-daha-saglikli-organizasyonlar-nasil-kurulur/05-44-gorunurluk-s-risk-borc-ve-kapasite/':
			'/book/06-bolum-4-cozum-daha-saglikli-organizasyonlar-nasil-kurulur/05-44-gorunurluk-is-risk-borc-ve-kapasite/',
		'/book/06-bolum-4-cozum-daha-saglikli-organizasyonlar-nasil-kurulur/09-48-ogrenen-organizasyon-suclamadan-yilestirmeye/':
			'/book/06-bolum-4-cozum-daha-saglikli-organizasyonlar-nasil-kurulur/09-48-ogrenen-organizasyon-suclamadan-iyilestirmeye/',
		'/book/07-ek-organizasyonel-anti-pattern-seti/01-bolum-1-algi-anti-patternleri/05-gorunmeyen-s-yok-sayilir/':
			'/book/07-ek-organizasyonel-anti-pattern-seti/01-bolum-1-algi-anti-patternleri/05-gorunmeyen-is-yok-sayilir/',
		'/book/07-ek-organizasyonel-anti-pattern-seti/04-bolum-4-cozum-anti-patternleri/06-kpilar-bagimsiz-tanimlanir/':
			'/book/07-ek-organizasyonel-anti-pattern-seti/04-bolum-4-cozum-anti-patternleri/06-kpi-lar-bagimsiz-tanimlanir/',
	},
	integrations: [
		starlight({
			title: 'Kodun Ötesi',
			locales: {
				root: {
					label: 'Türkçe',
					lang: 'tr',
				},
			},
			sidebar: bookSidebar,
			customCss: ['./src/styles/global.css'],
			components: {
				Footer: './src/components/Footer.astro',
			},
		}),
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
