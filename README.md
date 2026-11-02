# Kodun Otesi

`Kodun Otesi: Yazilim Takimlari ve Organizasyonel Gerilim` kitabinin Astro + Starlight tabanli cevrimici surumu.

## Proje Ozeti

- Ana icerik `src/content/docs/` altinda yer alir.
- Sol menu yapisi `src/sidebar.ts` dosyasindan yonetilir.
- Ozel footer bileseni `src/components/Footer.astro` dosyasindadir.
- PDF dosyasi `public/downloads/kodun-otesi.pdf` yolundan yayinlanir.

## Gelistirme Komutlari

Tum komutlar proje kok dizininde calistirilir:

| Komut | Aciklama |
| :-- | :-- |
| `pnpm install` | Bagimliliklari kurar |
| `pnpm dev` | Yerelde gelistirme sunucusunu baslatir (`localhost:4321`) |
| `pnpm build` | Uretim ciktisini `dist/` altina olusturur |
| `pnpm preview` | Build sonrasi yerel onizleme acilir |

## GitHub Pages Yayin Akisi

Bu repoda yayin icin iki workflow kullanilir:

- `.github/workflows/ci.yml`: Her push/PR icin build dogrulamasi
- `.github/workflows/deploy-pages.yml`: `main` branch push sonrasinda GitHub Pages deploy

GitHub tarafinda asagidaki ayarin acik oldugundan emin olun:

- `Settings -> Pages -> Source = GitHub Actions`

## Notlar

- `astro.config.mjs` icinde GitHub Actions icin dinamik `base` ayari vardir.
- Yalnizca gerekli workflow dosyalari tutulur; repo template'inden gelen diger automation dosyalari kaldirilmistir.
