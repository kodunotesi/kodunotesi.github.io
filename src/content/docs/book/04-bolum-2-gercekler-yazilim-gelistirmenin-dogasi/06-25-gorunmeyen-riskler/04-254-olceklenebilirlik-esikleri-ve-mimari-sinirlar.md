---
title: "2.5.4 Ölçeklenebilirlik Eşikleri ve Mimari Sınırlar"
sidebar:
  hidden: true
---

Her yazılım sistemi, tasarımı sırasında belirli bir kullanım ölçeğini üstü kapalı veya açık biçimde varsayar. Bu varsayımlar; beklenen kullanıcı sayısını, eş zamanlı işlem hacmini, veri büyüklüğünü ve dış bağımlılıkları kapsar. Sistem bu varsayımlar dahilinde çalıştığı sürece sorunsuz davranır. Varsayımlar aşıldığında ise sistemin mimari sınırları belirgin hale gelir.

Ölçeklenebilirlik sınırlarını özellikle sinsi yapan, bu sınırların aşılana kadar hiçbir belirti vermemesidir. Lehman'ın yazılım evrimi yasaları bu noktada açıklayıcıdır: yazılım sistemleri, değişen kullanım ve çevre koşullarına uyum sağlamazsa giderek daha az kullanışlı hale gelir <span class="bkz-ref" title="10. Lehman, M. M. (1980). Programs, Life Cycles, and Laws of Software Evolution.">(Bkz: 10)</span>. Büyüyen bir organizasyonun sistemleri o büyümeyle birlikte evrimleşemezse ciddi bir operasyonel kriz riski oluşturur.

Mimari sınırlar genellikle şu biçimlerde ortaya çıkar: tek bir bileşenin aşırı yük altında darboğaza dönüşmesi, veri tabanı şemasının yeni kullanım senaryolarını taşıyamaması, sistem bileşenlerinin bağımsız biçimde ölçeklendirilememesi ya da bileşenler arası veri akışının yeni hacmi karşılayamaması. Bu sorunların tamamı tasarım aşamasında öngörülemez; ancak sistemin ölçeğini bilinçli biçimde yönetmeyen ekiplerde büyüme krizlerine dönüşür.

**Örnek:** Bir B2B yazılım şirketinin müşteri yönetim platformu, küçük ve orta ölçekli müşterilere yönelik geliştirilmişti. Sistem, tek bir veritabanı sunucusu üzerinde çalışıyor ve tüm müşterilerin verilerini ortak bir şemada kayıt altında tutuyordu. Bu mimari, on ila yüz müşteri için verimli çalışıyordu. Şirketin büyük kurumsal müşteriler kazanmasıyla birlikte tek bir müşterinin veri hacmi ve işlem yoğunluğu, sistemin toplam kapasitesinin önemli bir bölümünü işgal etmeye başladı. Yüksek hacimli müşterilerin işlemleri, tüm platform kullanıcıları için yanıt sürelerini olumsuz etkiledi. Sorunun çözümü, mimari yapının müşteri bazlı izolasyonu destekleyecek şekilde yeniden tasarlanmasını gerektirdi. Bu dönüşüm hem uzun bir süreye yayıldı hem de sistemin bu geçiş döneminde kararsız biçimde çalışmasına yol açtı.

---



