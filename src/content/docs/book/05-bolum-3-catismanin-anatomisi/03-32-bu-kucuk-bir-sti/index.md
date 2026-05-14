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

Kurumsal bir ERP ürününde belirli bir alanın etiket ve değer formatı güncellendi. Talep, arayüz odaklı küçük bir değişiklik olarak planlandı ve kısa sürede tamamlandı.

Canlıya alımdan sonra dış entegrasyon servislerinden biri yeni formatı okuyamadı; sipariş akışında kesinti oluştu. İnceleme, değişikliğin entegrasyon sözleşmesine dolaylı etkisini ortaya çıkardı.

Teknik ekip, bu riski baştan geniş kapsamlı değerlendirmek istediğini belirtti. İş tarafı ise ilk planın neden bu kadar dar kurulduğunu sorguladı. Tartışma hızla "kim yanlış plan yaptı" düzeyine taşındı.

Bu vaka, küçüklük tartışmasının çoğu zaman kapsam bilgisinin eksik görünürlüğünden kaynaklandığını gösterir.

---


