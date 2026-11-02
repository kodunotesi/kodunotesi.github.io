---
title: "1.3.3 Teknik Borcun Birikimi"
slug: book/03-bolum-1-alginin-kokeni-neden-hep-yazilim-ekibi/04-13-gorunmeyen-is-yuku/03-133-teknik-borcun-birikimi
sidebar:
  hidden: true
---

Teknik borç kavramı, ilk olarak Ward Cunningham tarafından 1992 yılında tanımlandı. Cunningham, yazılım sistemlerinde bilinçli olarak alınan kısa vadeli kararların uzun vadede maliyete dönüştüğünü bir finansal metafor üzerinden açıkladı: tıpkı borç gibi, teknik borç da faiz öder. Her yeni geliştirme, birikmiş teknik borç üzerine inşa edildiğinde daha maliyetli hale gelir <span class="bkz-ref" title="3. Cunningham, W. (1992). The WyCash Portfolio Management System.">(Bkz: 3)</span>.

Bu birikimin somut sonuçları şöyle gözlemlenir:

- Yeni bir özellik eklemek giderek daha uzun sürer.
- Küçük değişiklikler beklenmedik hatalara yol açar.
- Test yazmak zorlaşır, çünkü bileşenler birbirine sıkı sıkıya bağlıdır.
- Yeni geliştiriciler sistemi anlamakta giderek daha çok zorlanır.
- Belirli bir noktadan sonra "her şeyi yeniden yazalım" tartışması başlar.

Bu sürecin kritik özelliği, dışarıdan görünmemesidir. Sistem çalışmaya devam eder; ancak her geliştirme adımı biraz daha pahalıya gelir. Organizasyon "yazılım ekibi neden yavaşladı?" diye sorar; oysa asıl soru "hangi kararlar bu yavaşlamayı kaçınılmaz kıldı?" olmalıdır.

**Örnek:** Beş yıl önce kurulan bir e-ticaret platformunda, başlangıçta "hızlı çıkalım" kararıyla alınan mimari tercihler zaman içinde birikti. Her yeni geliştirme bu birikimin üzerine inşa edildi. Beşinci yılda aynı türde bir özelliği geliştirmek, birinci yıla göre üç kat daha uzun sürüyordu. Ekip değişmişti, teknoloji değişmişti; ama birikmiş borç yerli yerinde duruyordu.



