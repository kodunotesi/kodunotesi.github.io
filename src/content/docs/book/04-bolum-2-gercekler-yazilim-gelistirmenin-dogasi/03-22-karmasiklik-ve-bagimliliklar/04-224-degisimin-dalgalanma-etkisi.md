---
title: "2.2.4 Değişimin Dalgalanma Etkisi"
sidebar:
  hidden: true
---

Bağımlılıklar, bir sistemde yapılan değişikliklerin öngörülemeyen biçimlerde yayılmasına neden olur. Buna yazılım mühendisliğinde "dalgalanma etkisi" (ripple effect) denir: küçük bir taşın suya düşmesiyle oluşan dalgalar gibi, bir noktadaki değişiklik çevresine yayılır ve zaman zaman çok uzaktaki noktalara ulaşır.

Bu etki, değişiklik kararlarını karmaşık hale getirir. Bir bileşeni değiştirmek, onunla doğrudan ilişkili bileşenleri etkiler. O bileşenler de başkalarını etkiler. Değişikliğin gerçek kapsamı ancak bu zincirleme etki haritalandırıldığında görünür hale gelir; bu haritalama ise değişikliği gerçekleştirme süresinden daha uzun sürebilir.

Yazılım ekiplerinin bazı değişiklik taleplerine "bu basit değil" yanıtını vermesinin temel nedeni bu dinamiktir. Değiştirilen şeyin kendisi basit olabilir; ama değişikliğin etki alanını güvenli biçimde yönetmek basit değildir.

**Örnek:** Bir perakende şirketinin satış sisteminde, kasiyerlerin işlem sırasında seçtiği "ödeme tipi" alanına yeni bir seçenek eklendi. Değişiklik yalnızca kasa ekranındaki bir açılır listeyi ilgilendiriyor gibi görünüyordu. Arayüz güncellendi, test edildi ve canlı ortama alındı.

Bir hafta sonra, bazı satış raporlarında günlük ciro toplamlarının eksik hesaplandığı fark edildi. İncelemede, raporlama servisinin ödeme tiplerini sabit bir liste üzerinden değerlendirdiği ve yeni eklenen seçeneği tanımadığı ortaya çıktı. Bu nedenle ilgili kayıtlar raporlara dahil edilmemişti. Daha sonra, aynı veriyi kullanan finansal mutabakat ekranlarında da hatalı sonuçlar oluştuğu görüldü.

Başlangıçta yalnızca kullanıcı arayüzünde küçük bir alan güncellemesi gibi görünen değişiklik, satış raporlama ve finansal mutabakat süreçlerine kadar yayılan bir dalgalanma etkisi oluşturdu.

---


