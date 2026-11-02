---
title: "3.2 \"Bu Küçük Bir İşti\""
slug: book/05-bolum-3-catismanin-anatomisi/03-32-bu-kucuk-bir-isti
---

Bu cümle, yazılım organizasyonlarında çatışmayı en hızlı tetikleyen ifadelerdendir. Bu cümlenin sorun üretmesi için küçümseme niyeti taşıması gerekmez; çoğu zaman farklı ölçüm sistemlerinin doğal sonucudur.

İş tarafı görünür değişikliği değerlendirir. Teknik taraf etki alanını değerlendirir. Bu iki değerlendirme çakışmadığında "küçük iş" ifadesi bir kapsam tartışmasına dönüşür.

---

### 3.2.1 Görsel Küçüklük Yanılgısı

Kullanıcı arayüzünde küçük görünen değişiklikler, sistemin iç katmanlarında büyük sonuçlar doğurabilir. Bir alan adı değişikliği veya filtre ekleme talebi, görünürde birkaç dakika konuşulacak kadar küçük olabilir.

Ancak yazılım sistemi bu görünür yüzeyin arkasında veri akışı, iş kuralları, entegrasyon sözleşmeleri ve doğrulama süreçleriyle çalışır. Görsel küçüklük, teknik küçüklük anlamına gelmez.

Bu yanılgı açıkça konuşulmadığında, teslimat süresi uzadıkça teknik ekip "aşırı detaycı" olarak etiketlenir.

---

### 3.2.2 Etki Alanı ile İş Boyutu Arasındaki Fark

Yazılımda iş boyutu, yapılan değişikliğin satır sayısıyla değil; etkilediği davranış alanıyla ölçülür. Tek bir değişiklik birden çok modülde aynı anda doğrulama ihtiyacı doğurabilir.

Bu nedenle "küçük" tanımı yalnızca geliştirme eforuyla değil, doğrulama ve güvenli yayın eforuyla birlikte değerlendirilmelidir. Aksi halde planlama gerçekçi olmayan varsayımlar üzerine kurulur.

Yanlış beklenti tam bu noktada üretilir: değişiklik küçük kabul edilir, ancak etkisi büyük çıktığında taraflar birbirini hatalı planlama ile suçlar.

---

### 3.2.3 Bağımlılık Zinciri ve Zincirleme Maliyet

Modern yazılım sistemleri yoğun bağımlılıklar içerir. Bir bileşendeki değişiklik, doğrudan bağlı bileşenleri; onlar da kendi bağımlılıklarını etkiler. Bu zincirleme etki, değişiklik maliyetini görünenden daha yüksek hale getirir <span class="bkz-ref" title="2. Yourdon, E. (1989). Modern Structured Analysis.">(Bkz: 2)</span>.

Çatışma açısından kritik nokta şudur: zincirleme maliyet çoğu zaman geliştirme başlamadan tam görünmez. Bu nedenle ilk değerlendirmeler iyimser kalabilir.

İlk iyimser değerlendirme ile gerçek etki alanı arasındaki fark büyüdükçe, "küçük iş" cümlesi teknik bir tespitten ziyade ekipler arasındaki ilişkileri yıpratıcı bir argümana dönüşür.

---

### 3.2.4 Gizli İş Yükü: Doğrulama, Geriye Dönük Uyumluluk, Operasyon Hazırlığı

Yazılım değişikliklerinin önemli bir kısmı kod yazımı dışında geçer. Doğrulama senaryoları, geriye dönük uyumluluk kontrolleri, izleme güncellemeleri, destek ekibi bilgilendirmesi ve yayına hazırlık süreçleri üzerinden emek harcanması gereken zorunlu aktivitelerdir.

Bu emek görünür hale getirilmediğinde, dışarıdan yalnızca "gecikme" görünür. Ekip içinde ise "riskten kaçınma için gerekli iş" görünür.

Aynı çalışmanın iki farklı adla anılması, çatışmanın kurumsallaşmasına zemin hazırlar.

---

### 3.2.5 Vaka: Alan Güncellemesinden Entegrasyon Arızasına

Bir sigorta şirketinin poliçe yönetim sisteminde belirli bir alanın etiket ve değer formatı güncellendi. Talep, arayüz odaklı küçük bir değişiklik olarak planlandı ve kısa sürede tamamlandı.

Canlıya alımdan sonra dış entegrasyon servislerinden biri yeni formatı okuyamadı; acentelere poliçe aktarımında kesinti oluştu. İnceleme, değişikliğin entegrasyon sözleşmesine dolaylı etkisini ortaya çıkardı.

Teknik ekip, bu riski baştan geniş kapsamlı değerlendirmek istediğini belirtti. İş tarafı ise ilk planın neden bu kadar dar kurulduğunu sorguladı. Tartışma hızla "kim yanlış plan yaptı" düzeyine taşındı.

Bu vaka, küçüklük tartışmasının çoğu zaman kapsam bilgisinin eksik görünürlüğünden kaynaklandığını gösterir.

---
### 3.2.6 Demo ile Ürün Arasındaki Uçurum: Vibe Coding ve Prototip Yanılgısı

YZ çağında "bu küçük bir işti" yargısının en güçlü yeni kaynağı çalışan prototiptir. Ürün yöneticileri, satış ekipleri, hatta yöneticiler artık YZ araçlarıyla, yazılım ekibine ihtiyaç duymadan çalışan bir demo üretebilir. Kodun ayrıntısıyla ilgilenmeden, yalnızca istenen sonucu tarif ederek ve ortaya çıkanı deneyerek ilerleyen bu yaklaşım "vibe coding" olarak adlandırılır <span class="bkz-ref" title="6. Karpathy, A. (2025). &quot;Vibe coding&quot; (X gönderisi, Şubat 2025).">(Bkz: 6)</span>. Keşif ve fikir doğrulama için son derece değerli bir yöntemdir.

Sorun, prototipin ürün sanılmasıyla başlar. Bir demo yalnızca "mutlu yolu" gösterir: temiz veri, tek kullanıcı, öngörülen senaryo. Ürün ise yetkilendirmeyi, hatalı veriyi, eşzamanlı kullanımı, mevcut sistemlerle entegrasyonu, geriye dönük uyumluluğu, izlenebilirliği ve bakımı da kapsamak zorundadır. 3.2.4'te ele alınan gizli iş yükü prototipte hiç yer almaz; çünkü prototipin amacı tam da bu soruları ertelemektir.

Bu nedenle çalışan bir demo, "geriye yalnızca canlıya almak kaldı" algısını güçlendirir. Prototipi iki günde gören organizasyon, ürünleştirme için verilen üç aylık tahmini bir direnç ya da verimsizlik işareti olarak okuyabilir. Sağlıklı bir yaklaşım için basit bir ilke yeterlidir: keşif için hızlı ve sezgisel üretim, ürün için mühendislik. Prototip bir soruyu yanıtlamak için yapılır; ürün ise sürdürülebilir bir taahhüt için.

**Örnek:** Bir B2B yazılım şirketinde satış direktörü, büyük bir müşteri adayına göstermek üzere YZ destekli bir araçla iki gün içinde bir müşteri portalı demosu hazırladı. Toplantı başarılı geçti ve müşteri portalın bir ay içinde kullanıma açılmasını istedi. Yazılım ekibi demoyu incelediğinde uygulamanın sabit veriyle çalıştığını, kullanıcı yetkilendirmesi içermediğini ve mevcut müşteri sistemiyle hiçbir bağlantısı olmadığını gördü. Ekibin üç aylık tahmini, satış tarafında "iki günde yapılan işi neden üç ayda yapıyorsunuz?" sorusuyla karşılandı. Demo bir fikri doğrulamıştı; ancak ürün henüz başlamamıştı.

---


