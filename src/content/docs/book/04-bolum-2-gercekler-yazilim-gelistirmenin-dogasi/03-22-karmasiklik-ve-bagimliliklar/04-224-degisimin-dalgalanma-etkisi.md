---
title: "2.2.4 Değişimin Dalgalanma Etkisi"
sidebar:
  hidden: true
---

Bağımlılıklar, bir sistemde yapılan değişikliklerin öngörülemeyen biçimlerde yayılmasına neden olur. Buna yazılım mühendisliğinde "dalgalanma etkisi" (ripple effect) denir: küçük bir taşın suya düşmesiyle oluşan dalgalar gibi, bir noktadaki değişiklik çevresine yayılır ve zaman zaman çok uzaktaki noktalara ulaşır.

Bu etki, değişiklik kararlarını karmaşık hale getirir. Bir bileşeni değiştirmek, onunla doğrudan ilişkili bileşenleri etkiler. O bileşenler de başkalarını etkiler. Değişikliğin gerçek kapsamı ancak bu zincirleme etki haritalandırıldığında görünür hale gelir; bu haritalama ise değişikliği gerçekleştirme süresinden daha uzun sürebilir.

Yazılım ekiplerinin bazı değişiklik taleplerine "bu basit değil" yanıtını vermesinin temel nedeni bu dinamiktir. Değiştirilen şeyin kendisi basit olabilir; ama değişikliğin etki alanını güvenli biçimde yönetmek basit değildir.

**Örnek:** Bir üretim tesisinde kullanılan MES sisteminde, operatörlerin üretim başlangıcında seçtiği "vardiya tipi" alanına yeni bir seçenek eklendi. Değişiklik yalnızca operatör ekranındaki bir açılır listeyi ilgilendiriyor gibi görünüyordu. Arayüz güncellendi, test edildi ve canlı ortama alındı.

Bir hafta sonra, bazı üretim raporlarında toplam üretim miktarlarının eksik hesaplandığı fark edildi. İncelemede, raporlama servisinin vardiya tiplerini sabit bir liste üzerinden değerlendirdiği ve yeni eklenen seçeneği tanımadığı ortaya çıktı. Bu nedenle ilgili kayıtlar raporlara dahil edilmemişti. Daha sonra, aynı veriyi kullanan performans analiz ekranlarında da hatalı OEE hesaplamaları oluştuğu görüldü.

Başlangıçta yalnızca kullanıcı arayüzünde küçük bir alan güncellemesi gibi görünen değişiklik, üretim raporlama ve performans analiz süreçlerine kadar yayılan bir dalgalanma etkisi oluşturdu.

---


