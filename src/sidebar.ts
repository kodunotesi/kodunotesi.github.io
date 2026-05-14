import type { StarlightUserConfig } from '@astrojs/starlight/types';

export const bookSidebar: StarlightUserConfig['sidebar'] = [
  {
    label: 'İçindekiler',
    items: [
      { label: 'ÖNSÖZ', slug: 'book/01-onsoz' },
      { label: 'GİRİŞ', slug: 'book/02-giris' },
      {
        label: 'BÖLÜM 1: Algının Kökeni – Neden Hep Yazılım Ekibi?',
        items: [
          { label: 'Giriş', slug: 'book/03-bolum-1-alginin-kokeni-neden-hep-yazilim-ekibi/01-giris' },
          { label: '1.1 Yazılım Takımına Yönelik Klişeler', slug: 'book/03-bolum-1-alginin-kokeni-neden-hep-yazilim-ekibi/02-11-yazilim-takimina-yonelik-kliseler' },
          { label: '1.2 Ürün, Proje ve Implementasyon Perspektifleri', slug: 'book/03-bolum-1-alginin-kokeni-neden-hep-yazilim-ekibi/03-12-urun-proje-ve-implementasyon-perspektifleri' },
          { label: '1.3 Görünmeyen İş Yükü', slug: 'book/03-bolum-1-alginin-kokeni-neden-hep-yazilim-ekibi/04-13-gorunmeyen-is-yuku' },
          { label: '1.4 İletişim Boşlukları', slug: 'book/03-bolum-1-alginin-kokeni-neden-hep-yazilim-ekibi/05-14-letisim-bosluklari' },
          { label: '1.5 İlk Çatışma Noktaları', slug: 'book/03-bolum-1-alginin-kokeni-neden-hep-yazilim-ekibi/06-15-ilk-catisma-noktalari' },
          { label: 'Sonuç', slug: 'book/03-bolum-1-alginin-kokeni-neden-hep-yazilim-ekibi/07-sonuc' },
          { label: 'Referanslar', slug: 'book/03-bolum-1-alginin-kokeni-neden-hep-yazilim-ekibi/08-referanslar' },
        ],
      },
      {
        label: 'BÖLÜM 2: Gerçekler – Yazılım Geliştirmenin Doğası',
        items: [
          { label: 'Giriş', slug: 'book/04-bolum-2-gercekler-yazilim-gelistirmenin-dogasi/01-giris' },
          { label: '2.1 Belirsizlik Üzerine İnşa Edilen Bir Disiplin', slug: 'book/04-bolum-2-gercekler-yazilim-gelistirmenin-dogasi/02-21-belirsizlik-uzerine-insa-edilen-bir-disiplin' },
          { label: '2.2 Karmaşıklık ve Bağımlılıklar', slug: 'book/04-bolum-2-gercekler-yazilim-gelistirmenin-dogasi/03-22-karmasiklik-ve-bagimliliklar' },
          { label: '2.3 Kalite vs Hız İkilemi', slug: 'book/04-bolum-2-gercekler-yazilim-gelistirmenin-dogasi/04-23-kalite-vs-hiz-kilemi' },
          { label: '2.4 Teknik Borç ve Uzun Vadeli Maliyet', slug: 'book/04-bolum-2-gercekler-yazilim-gelistirmenin-dogasi/05-24-teknik-borc-ve-uzun-vadeli-maliyet' },
          { label: '2.5 Görünmeyen Riskler', slug: 'book/04-bolum-2-gercekler-yazilim-gelistirmenin-dogasi/06-25-gorunmeyen-riskler' },
          { label: 'Sonuç', slug: 'book/04-bolum-2-gercekler-yazilim-gelistirmenin-dogasi/07-sonuc' },
          { label: 'Referanslar', slug: 'book/04-bolum-2-gercekler-yazilim-gelistirmenin-dogasi/08-referanslar' },
        ],
      },
      {
        label: 'BÖLÜM 3: Çatışmanın Anatomisi',
        items: [
          { label: 'Giriş', slug: 'book/05-bolum-3-catismanin-anatomisi/01-giris' },
          { label: '3.1 "Neden Bu Kadar Uzun Sürüyor?"', slug: 'book/05-bolum-3-catismanin-anatomisi/02-31-neden-bu-kadar-uzun-suruyor' },
          { label: '3.2 "Bu Küçük Bir İşti"', slug: 'book/05-bolum-3-catismanin-anatomisi/03-32-bu-kucuk-bir-isti' },
          { label: '3.3 "Neden Değişiklik Yapamıyoruz?"', slug: 'book/05-bolum-3-catismanin-anatomisi/04-33-neden-degisiklik-yapamiyoruz' },
          { label: '3.4 “Yazılım Ekibi Direnç Gösteriyor”', slug: 'book/05-bolum-3-catismanin-anatomisi/05-34-yazilim-ekibi-direnc-gosteriyor' },
          { label: '3.5 Suçlama Döngüsü', slug: 'book/05-bolum-3-catismanin-anatomisi/06-35-suclama-dongusu' },
          { label: 'Sonuç', slug: 'book/05-bolum-3-catismanin-anatomisi/07-sonuc' },
          { label: 'Referanslar', slug: 'book/05-bolum-3-catismanin-anatomisi/08-referanslar' },
        ],
      },
      {
        label: 'BÖLÜM 4: Çözüm - Daha Sağlıklı Organizasyonlar Nasıl Kurulur?',
        items: [
          { label: 'Giriş', slug: 'book/06-bolum-4-cozum-daha-saglikli-organizasyonlar-nasil-kurulur/01-giris' },
          { label: '4.1 Çözümün Temel İlkesi: İnsanları Değil Sistemi Tasarlamak', slug: 'book/06-bolum-4-cozum-daha-saglikli-organizasyonlar-nasil-kurulur/02-41-cozumun-temel-ilkesi-insanlari-degil-sistemi-tasarlamak' },
          { label: '4.2 Ortak Gerçeklik ve Çeviri Mekanizmaları', slug: 'book/06-bolum-4-cozum-daha-saglikli-organizasyonlar-nasil-kurulur/03-42-ortak-gerceklik-ve-ceviri-mekanizmalari' },
          { label: '4.3 Beklenti Yönetimi ve Taahhüt Disiplini', slug: 'book/06-bolum-4-cozum-daha-saglikli-organizasyonlar-nasil-kurulur/04-43-beklenti-yonetimi-ve-taahhut-disiplini' },
          { label: '4.4 Görünürlük: İş, Risk, Borç ve Kapasite', slug: 'book/06-bolum-4-cozum-daha-saglikli-organizasyonlar-nasil-kurulur/05-44-gorunurluk-is-risk-borc-ve-kapasite' },
          { label: '4.5 Karar Alma ve Önceliklendirme Sistemi', slug: 'book/06-bolum-4-cozum-daha-saglikli-organizasyonlar-nasil-kurulur/06-45-karar-alma-ve-onceliklendirme-sistemi' },
          { label: '4.6 Sorumluluk, Sahiplik ve Organizasyonel Arayüzler', slug: 'book/06-bolum-4-cozum-daha-saglikli-organizasyonlar-nasil-kurulur/07-46-sorumluluk-sahiplik-ve-organizasyonel-arayuzler' },
          { label: '4.7 Ürün Disiplini, Standartlaşma ve Değişiklik Yönetimi', slug: 'book/06-bolum-4-cozum-daha-saglikli-organizasyonlar-nasil-kurulur/08-47-urun-disiplini-standartlasma-ve-degisiklik-yonetimi' },
          { label: '4.8 Öğrenen Organizasyon: Suçlamadan İyileştirmeye', slug: 'book/06-bolum-4-cozum-daha-saglikli-organizasyonlar-nasil-kurulur/09-48-ogrenen-organizasyon-suclamadan-iyilestirmeye' },
          { label: '4.9 Uygulama Yol Haritası: Nereden Başlamalı?', slug: 'book/06-bolum-4-cozum-daha-saglikli-organizasyonlar-nasil-kurulur/10-49-uygulama-yol-haritasi-nereden-baslamali' },
          { label: 'Sonuç', slug: 'book/06-bolum-4-cozum-daha-saglikli-organizasyonlar-nasil-kurulur/11-sonuc' },
          { label: 'Referanslar', slug: 'book/06-bolum-4-cozum-daha-saglikli-organizasyonlar-nasil-kurulur/12-referanslar' },
        ],
      },
      {
        label: 'EK: Organizasyonel Anti-Pattern Seti',
        items: [
          { label: 'Bölüm 1: Algı Anti-Patternleri', slug: 'book/07-ek-organizasyonel-anti-pattern-seti/01-bolum-1-algi-anti-patternleri' },
          { label: 'Bölüm 2: Gerçeklik Anti-Patternleri', slug: 'book/07-ek-organizasyonel-anti-pattern-seti/02-bolum-2-gerceklik-anti-patternleri' },
          { label: 'Bölüm 3: Çatışma Anti-Patternleri', slug: 'book/07-ek-organizasyonel-anti-pattern-seti/03-bolum-3-catisma-anti-patternleri' },
          { label: 'Bölüm 4: Çözüm Anti-Patternleri', slug: 'book/07-ek-organizasyonel-anti-pattern-seti/04-bolum-4-cozum-anti-patternleri' },
          { label: 'Nasıl Kullanılır?', slug: 'book/07-ek-organizasyonel-anti-pattern-seti/05-nasil-kullanilir' },
          { label: 'Sonuç', slug: 'book/07-ek-organizasyonel-anti-pattern-seti/06-sonuc' },
        ],
      },
      {
        label: 'KAPANIŞ',
        items: [
          { label: 'Asıl Mesele', slug: 'book/08-kapanis/01-asil-mesele' },
          { label: 'Ne Değişmeli?', slug: 'book/08-kapanis/02-ne-degismeli' },
          { label: 'Ne Değişmezse?', slug: 'book/08-kapanis/03-ne-degismezse' },
          { label: 'Okuyucuya Not', slug: 'book/08-kapanis/04-okuyucuya-not' },
          { label: 'Son Söz', slug: 'book/08-kapanis/05-son-soz' },
        ],
      },
    ],
  },
];






