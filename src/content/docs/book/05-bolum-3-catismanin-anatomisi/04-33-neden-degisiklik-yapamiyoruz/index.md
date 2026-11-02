---
title: "3.3 \"Neden Değişiklik Yapamıyoruz?\""
---

Bu soru, organizasyonun esneklik beklentisi ile sistemin mimari gerçekliği arasındaki uyumsuzluğu görünür kılar. Çatışma, değişiklik isteğinin meşruiyetinden değil, değişiklik türünün yanlış sınıflandırılmasından doğar.

---

### 3.3.1 Esneklik Varsayımı ve Mimari Gerçeklik

İş birimleri yazılımı doğal olarak değiştirilebilir bir araç olarak görür. Bu beklenti doğrudur; ancak her sistem belirli mimari varsayımlarla kurulur ve bu varsayımlar bazı değişiklikleri maliyetli hale getirir.

Mimari sınırlar erken dönemde görünmez olabilir. Talep geldiğinde görünür hale gelince "neden şimdi ortaya çıktı?" sorusu oluşur. Oysa sınır yeni oluşmamıştır; yalnızca bu taleple tetiklenmiştir <span class="bkz-ref" title="3. Bass, L., Clements, P., Kazman, R. (2012). Software Architecture in Practice.">(Bkz: 3)</span>.

---

### 3.3.2 Değişiklik Talebinin Türü: Ekleme mi, Dönüşüm mü?

Bir talebin özellik ekleme mi yoksa mimari dönüşüm mü olduğu netleştirilmediğinde planlama gerçeği bozulur. Özellik ekleme dili, kısa döngü ve düşük risk varsayar. Mimari dönüşüm dili ise yüksek etki ve kademeli geçiş varsayar.

Taraflar bu ayrımı açık yapmadığında aynı talep iki farklı proje gibi yönetilir. Bu da karar toplantılarında kronik kilitlenme üretir. Bu kilitlenme dışarıdan teknik anlaşmazlık gibi görünse de özünde bir problem tanımı anlaşmazlığıdır.

---

### 3.3.3 Teknik Borç ve Değişim Direnci

Biriken teknik borç, sistemin değişime verdiği direnci artırır. Bu direnç dışarıdan kapasite yetersizliği gibi okunabilir; içeride ise değişiklik maliyetinin katlanması olarak yaşanır.

Özellikle çekirdek modüller için geçmişte alınan kestirme düzenleme/değişiklik kararlarının sayısı arttığında, yeni taleplerin maliyeti öngörülemeyen biçimde yükselir. Ekipler bu yüzden daha uzun analiz ve daha fazla güvence talep eder.

Sonuçta "değişiklik yapamıyoruz" cümlesi, isteksizlik göstergesine değil, yapısal sürtünmenin semptomuna dönüşür.

---

### 3.3.4 Karar Gecikmesi ve Kapsam Kilitlenmesi

Mimari etkisi yüksek taleplerde organizasyonlar karar vermeyi erteleyebilir. Erteleme kısa vadede esneklik gibi görünür; orta vadede kapsam kilitlenmesine dönüşür.

Karar geciktikçe alternatiflerin maliyeti artar, çünkü sistem bu sırada mevcut varsayımla büyümeye devam eder. Böylece sonraki kararlar daha pahalı ve daha riskli hale gelir.

Bu döngü çatışmayı derinleştirir: iş tarafı "neden ilerlemiyoruz" derken teknik taraf "yanlış yönde ilerlemeyi durduruyoruz" der.

---

### 3.3.5 Vaka: Süreç Motoru Talebinin Mimari Dönüşüme Evrilmesi

Bir bankanın kredi başvuru sürecini yöneten platformda iş tarafı, onay akışına yeni bir adım eklenmesini istedi. Talep başlangıçta küçük süreç iyileştirmesi olarak değerlendirildi.

Teknik inceleme derinleştikçe sistemin sabit akış varsayımıyla tasarlandığı ve dinamik adım desteği için çekirdek yürütme motorunda değişiklik gerektiği ortaya çıktı. Bu durum, talebi özellik işinden mimari dönüşüm işine çevirdi.

Toplantılarda iş tarafı değişikliği "ekleme", teknik taraf "dönüşüm" olarak adlandırdığı için ortak karar dili kurulamadı. Teslimat planı birkaç kez revize edildi ve tartışma değerden çok sorumluluk eksenine kaydı.

Bu vaka, değişiklik türünün erken sınıflandırılamamasının çatışmayı nasıl büyüttüğünü gösterir.

---


