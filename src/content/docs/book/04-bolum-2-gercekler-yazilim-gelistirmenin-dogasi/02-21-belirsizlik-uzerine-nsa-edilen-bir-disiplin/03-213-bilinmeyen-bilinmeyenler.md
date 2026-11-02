---
title: "2.1.3 Bilinmeyen Bilinmeyenler"
slug: book/04-bolum-2-gercekler-yazilim-gelistirmenin-dogasi/02-21-belirsizlik-uzerine-insa-edilen-bir-disiplin/03-213-bilinmeyen-bilinmeyenler
sidebar:
  hidden: true
---

Donald Rumsfeld'in "known unknowns" (bilinen bilinmeyenler) ve "unknown unknowns" (bilinmeyen bilinmeyenler) ayrımı, yazılım geliştirme için olduğu kadar az sayıda alana bu kadar doğrudan uygulanabilir. Proje başlangıcında ekip, bazı risklerin farkındadır: entegrasyon güçlükleri, performans gereksinimleri, belirli teknoloji seçimlerinin kısıtları. Bunlar yönetilebilir belirsizliklerdir.

Asıl tehlike ise bilinmeyen bilinmeyenlerden gelir: önceden fark edilemeyen, yalnızca geliştirme süreci ilerledikçe ortaya çıkan sorunlar. Eski bir sistemdeki belgelenmemiş bir davranış, üçüncü parti bir API'nin beklenmedik bir kısıtı, iki farklı iş kuralının belirli bir edge case'de çelişmesi. Bunların hiçbirini proje planına dahil etmek mümkün değildir; çünkü henüz bilinmemektedirler.

Taleb'in **siyah kuğu kavramı** bu dinamiği iyi açıklar: düşük olasılıklı ama yüksek etkili olaylar, hesaba katılamadıkları için hesaplara katılmaz; ama gerçekleştiklerinde belirleyici olurlar <span class="bkz-ref" title="3. Taleb, N. N. (2007). The Black Swan.">(Bkz: 3)</span>. Yazılım projelerinde bu tür sürprizler sistematiktir; onları tamamen önlemek değil, onlarla başa çıkabilecek bir süreç tasarlamak mümkündür.

**Örnek:** Bir kargo şirketi için geliştirilen müşteri takip sistemi, test sürecini başarıyla tamamladı ve yayına alındı. İlk iki haftada sistem sorunsuz çalıştı. Ancak üçüncü haftada, belirli posta kodlarına yapılan teslimat güncellemelerinin veritabanında çoğaldığı fark edildi. İnceleme sonucunda, sistemin entegre olduğu adres doğrulama servisinin bazı posta kodlarını birden fazla kez yanıtladığı ortaya çıktı. Bu davranış ne dokümante edilmişti ne de test ortamında gözlemlenmişti. Bilinmediği için test edilemezdi; ama gerçekleştiğinde tüm veri bütünlüğünü tehdit etti. Düzeltme süreci 1 haftayı aştı. Kimse sabotaj yapmamıştı; bilinmeyen bir şey gerçekleşmişti.

---



