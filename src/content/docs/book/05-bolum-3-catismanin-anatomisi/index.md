---
title: "BÖLÜM 3: Çatışmanın Anatomisi"
---

## Giriş

İlk iki bölümde yazılım ekiplerine yönelik algının nasıl üretildiğini ve yazılım geliştirme gerçekliğinin neden doğrusal yönetilemediğini ele aldık. Bu bölümde odağımızı, teknik gerçekliğin kendisinden çok bu gerçekliğin organizasyon içinde nasıl çatışma ürettiğine çeviriyoruz.

Bu nedenle Bölüm-3, bir "teknik açıklama" bölümü değil, bir "süreç anatomisi" bölümüdür. Burada amacımız, çatışmayı tekil bir olay olarak değil; tetikleyici, yorum farkı, davranış kırılması ve güven kaybı adımlarından oluşan tekrar eden bir döngü olarak incelemektir.

Bu çerçeve önemlidir. Çünkü aynı cümlelerin farklı şirketlerde tekrar etmesi, problemin bireysel karakterlerden çok sistem davranışından kaynaklandığını gösterir.

---

## 3.1 "Neden Bu Kadar Uzun Sürüyor?"

Bu soru, yazılım ekiplerinin en sık duyduğu cümlelerden biridir. Cümlenin görünen biçimi basittir; ancak organizasyonel etkisi çoğu zaman güçlüdür. Birçok ortamda bu soru teknik durum tespiti için değil, takvim baskısı altında hesap sorma refleksiyle sorulur.

Bu nedenle soru, içerikten önce ilişki düzeyinde etkisini gösterir. Eğer ekipler arasında önceki dönemlerden gelen bir güven erozyonu varsa, aynı cümle bilgi talebinden çok performans ithamı gibi algılanır.

---

### 3.1.1 Soru mu, Sinyal mi?

"Neden bu kadar uzun sürüyor?" ifadesi dilbilgisel olarak bir sorudur; ancak kurumsal bağlamda sıklıkla bir sinyal işlevi görür. Bu sinyalin alt mesajı çoğu zaman şudur: "Bu gecikmeyi savunmanız gerekecek."

Bu soru merak amacıyla sorulduğunda açıklama üretir; hesap sorma amacıyla sorulduğunda savunma üretir. Aynı cümle, niyete ve ortama bağlı olarak iki farklı psikolojik etki yaratır. Bu ayrımın farkına varılmadan sorulduğunda tarafların birbirinin niyetini yanlış okumasına neden olur.

Yazılım ekipleri bu soruyu geçmiş deneyimlerin etkisiyle tehdit sinyali olarak algılayabilir. İş tarafı ise teknik açıklamanın neden netleşmediğini anlamakta zorlanır. Böylece çatışma, teknik kapsam konuşulmaya başlanmadan iletişim tonunda başlar.

---

### 3.1.2 Zaman Algısı Çatışması

Çatışmanın ikinci katmanı zaman modelidir. İş birimleri zamanı takvim üzerinden yönetir: tarih, taahhüt, kilometre taşı. Yazılım ekipleri zamanı belirsizlik ve risk üzerinden değerlendirir: keşif süresi, etki analizi, doğrulama maliyeti.

Takvim dili kesinlik talep eder. Teknik dil olasılıklar ve belirsizlik içeren aralıklar üretir. Bu iki model birbirine dönüştürülmediğinde, taraflar aynı teslimat meselesini farklı gerçekliklerde tartışır.

Bu nedenle "uzun sürüyor" yargısı çoğu durumda mutlak bir olgu değil, ölçüm çerçevesi farkıdır. Bir taraf için sapma olan şey, diğer taraf için öngörülemeyen kapsamın normal sonucu olabilir.

---

### 3.1.3 Tahminin Taahhüde Dönüşmesi

Çatışmanın kritik kırılma noktası burada oluşur: teknik ekip tarafından belirsizlik aralığı olarak verilen tahmin, yönetim zincirinde süresi belli net tarih dilimlerine dönüşür. Teknik ekiplerin verdiği aralıklar sadeleştirilip takvim üzerinde sabitlendiğinde ise bazı riskler görünmez hale gelir. Katı bir şekilde takvimleştirme, belirsizlik aralığının üretilmesine neden olan bağlamın deforme olmasına hatta kaybolmasına neden olur.

Risk görünmez olduğunda ise teslimat sapması teknik keşif sonucu olarak değil, sözünü tutmama olarak yorumlanır. Bu yorum çoğu zaman niyetle değil, raporlama baskısıyla üretilir. Ancak etkisi niyetten bağımsızdır.

McConnell’ın tahminleme yaklaşımı bu durumu açık biçimde doğrular: erken dönem tahminleri kesin plan değil, belirsizlik altında karar girdisidir <span class="bkz-ref" title="1. McConnell, S. (2006). Software Estimation: Demystifying the Black Art.">(Bkz: 1)</span>. Tahminin statüsü korunmadığında çatışma yapısal olarak kaçınılmaz hale gelir.

---

### 3.1.4 Teknik Açıklama Neden İkna Etmiyor?

Yazılım ekipleri gecikmeyi genellikle teknik bağlamla açıklar: bağımlılık etkisi, veri tutarlılığı riski, test kapsamı, geriye dönük uyumluluk. Bu açıklamalar teknik olarak doğru olabilir; ancak iş kararı üretmek için iletişimi doğru yapılmadığında ikna gücü düşer.

Sorun teknik doğruluk değil, bağlam tercümesidir. İş tarafı "ne zaman" ve "neye mal olur" cevabı ararken, teknik ekip "neden" ve "nasıl" cevabı üretir. Soru-cevap ekseni çakışmadığında karşı taraf açıklamayı "karmaşıklaştırma" olarak algılayabilir.

Bu aşamadan sonra içeriğin doğruluğundan çok iletişimin tonu belirleyici olur. Toplantı, çözüm arayışından pozisyon savunmasına kayar.

---

### 3.1.5 Vaka: Raporlama Talebinin Güven Krizine Dönüşmesi

Kurumsal bir SaaS ürününde satış raporlarına segment bazlı filtre eklenmesi talep edildi. Talep, ilk toplantıda arayüz odaklı küçük bir geliştirme gibi değerlendirildi ve kısa sürecek bir teslimat beklentisi oluştu.

Teknik analiz ilerledikçe talebin yalnızca arayüzü değil, veri toplama akışını, yetki modelini ve sorgu performansını etkilediği görüldü. Ekip süreyi aralık olarak verdi; aralık, yönetim raporunda tek tarihe dönüştürüldü.

Geliştirme sürecinde doğrulama ihtiyacı arttığında iş tarafı bunu hız kaybı olarak yorumladı; teknik ekip ise risk yönetimi olarak gördü. Teslimat gecikince tartışma teknik kapsamdan çıktı ve güven tartışmasına döndü. Sonraki planlamalarda taraflar aynı veriye daha düşük güvenle bakmaya başladı.

Bu vaka, "süre" tartışmasının çoğu durumda teknik zorluktan değil, yorum farkının yönetilememesinden krizleştiğini gösterir.

---

## 3.2 "Bu Küçük Bir İşti"

Bu cümle, yazılım organizasyonlarında çatışmayı en hızlı tetikleyen ifadelerdendir. Bu cümlenin sorun üretmesi için küçümseme niyeti taşıması gerekmez; çoğu zaman farklı ölçüm sistemlerinin doğal sonucudur.

İş tarafı görünür değişikliği değerlendirir. Teknik taraf etki alanını değerlendirir. Bu iki değerlendirme çakışmadığında "küçük iş" ifadesi bir kapsam tartışmasına dönüşür.

---

### 3.2.1 Görsel Küçüklük Yanılgısı

Kullanıcı arayüzünde küçük görünen değişiklikler, sistemin iç katmanlarında büyük sonuçlar doğurabilir. Bir alan adı değişikliği veya filtre ekleme talebi, görünürde birkaç dakika konuşulacak kadar küçük olabilir.

Ancak yazılım sistemi bu görünür yüzeyin arkasında veri akışı, iş kuralları, entegrasyon sözleşmeleri ve doğrulama süreçleriyle çalışır. Görsel küçüklük, teknik küçüklük anlamına gelmez.

Bu yanılgı açıkça konuşulmadığında, teslimat süresi uzadıkça teknik ekip "aşırı detaycı" olarak etketlenir.

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

## 3.3 "Neden Değişiklik Yapamıyoruz?"

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

Üretim operasyonu yöneten bir platformda iş tarafı, akışa yeni bir adım eklenmesini istedi. Talep başlangıçta küçük süreç iyileştirmesi olarak değerlendirildi.

Teknik inceleme derinleştikçe sistemin sabit akış varsayımıyla tasarlandığı ve dinamik adım desteği için çekirdek yürütme motorunda değişiklik gerektiği ortaya çıktı. Bu durum, talebi özellik işinden mimari dönüşüm işine çevirdi.

Toplantılarda iş tarafı değişikliği "ekleme", teknik taraf "dönüşüm" olarak adlandırdığı için ortak karar dili kurulamadı. Teslimat planı birkaç kez revize edildi ve tartışma değerden çok sorumluluk eksenine kaydı.

Bu vaka, değişiklik türünün erken sınıflandırılamamasının çatışmayı nasıl büyüttüğünü gösterir.

---

## 3.4 “Yazılım Ekibi Direnç Gösteriyor”

Yazılım ekiplerinin değişiklik taleplerine temkinli yaklaşması organizasyon içinde çoğu zaman "direnç" olarak yorumlanır. Özellikle teslim baskısının yüksek olduğu ortamlarda, ek doğrulama süresi isteyen, risk vurgulayan veya kontrollü geçiş öneren ekipler; işi yavaşlatan taraf gibi görünmeye başlayabilir.

Ancak burada çoğu zaman önemli bir yorum hatası vardır: yazılım ekiplerinin karşı çıktığı şey genellikle değişikliğin kendisi değil, etkisi öngörülemeyen ve geri dönüş maliyeti yüksek kontrolsüz değişikliklerdir.

Bu fark görünür olmadığında teknik temkin davranışı kolayca isteksizlik, bürokrasi veya değişime kapalılık şeklinde yorumlanır. Böylece teknik risk yönetimi davranışı zamanla kişisel niyet tartışmasına dönüşür.

"Direnç" etiketi bu nedenle organizasyon içinde güçlü etkiye sahiptir. Çünkü teknik tartışmayı davranış tartışmasına çevirir. Problem artık "risk nedir?"" sorusundan uzaklaşır ve "kim neden yavaşlatıyor?"" sorusuna dönüşür.

Bu dönüşüm gerçekleştiğinde güven hızla aşınmaya başlar.

---

### 3.4.1 Temkin Davranışının Yanlış Okunması

Yazılım ekipleri riskli değişikliklerde doğrulama süresi istediğinde, bu talep özellikle operasyon baskısı altında kolayca "engel" gibi algılanabilir. Çünkü iş tarafı çoğu zaman gecikmenin görünür maliyetini yaşar: müşteri şikayetleri artar, satış baskısı yükselir, SLA hedefleri risk altına girer veya yönetsel baskı yoğunlaşır.

Bu ortamda teknik ekibin istediği her ek süre, dışarıdan yalnızca gecikme gibi görünür.

Oysa teknik ekip için aynı süre tamamen farklı bir anlama sahiptir. Bu süre; sistem davranışını doğrulamak, yan etkileri analiz etmek, geri dönüş planı hazırlamak ve değişikliğin üretim ortamında kontrolsüz sonuçlar üretmesini engellemek için gereklidir.

Buradaki temel problem niyet farkı değil, görünürlük farkıdır.

İş tarafı bugünkü gecikmeyi görür.Teknik ekip yarın yaşanabilecek arızayı görür. Bu iki maliyet aynı anda görünür hale getirilmediğinde, taraflar birbirinin davranışını irrasyonel yorumlamaya başlar.

İnsanlar çoğu zaman karşı tarafın davranışını sistem koşullarıyla değil, kişisel niyetlerle açıklama eğilimindedir. Bu nedenle teknik bir temkin davranışı kolayca isteksizlik, sorumluluk almaktan kaçınma veya değişime kapalılık şeklinde yorumlanabilir.

Özellikle yüksek baskı altında çalışan organizasyonlarda bu yorum daha da hızlanır. Çünkü stres ortamlarında insanlar teknik karmaşıklığı değerlendirmek yerine davranışsal açıklamalara yönelme eğilimindedir.

Bu noktadan sonra çatışma teknik olmaktan çıkıp ilişki temelli hale gelir.

---

### 3.4.2 Geçmiş Arıza Hafızası ve Koruma Refleksi

Yazılım ekiplerinin temkinli davranışı çoğu zaman geçmiş arıza deneyimlerinin kurumsal hafızasıdır. Daha önce test edilmeden yapılan bir değişiklik kesinti üretmişse, veri kaybına neden olmuşsa veya geri dönüş süreci saatler sürmüşse; ekipler benzer durumlarda doğal olarak koruma refleksi geliştirir.

Bu refleks dışarıdan bakıldığında gereksiz hassasiyet gibi görünebilir. Ancak teknik ekip için bu davranış geçmişte yaşanmış operasyonel maliyetlerin sonucudur.

Örneğin bir ekip daha önce hızlı biçimde canlıya alınan küçük bir değişiklik nedeniyle sipariş akışının durduğunu, müşterilerin işlem yapamadığını ve operasyon ekiplerinin gece boyunca manuel müdahaleyle sistemi ayakta tuttuğunu yaşamış olabilir.

Bu tür deneyimler ekiplerin risk algısını kalıcı biçimde değiştirir.

Önemli olan nokta şudur: yazılım ekipleri çoğu zaman yalnızca geliştirme sorumluluğu taşımaz. Başarısız değişikliklerin operasyonel sonuçlarını da doğrudan taşırlar. Gece kesintileri, acil rollback süreçleri, veri düzeltmeleri, müşteri eskalasyonları ve canlıya geçiş sonrası müdahaleler çoğu zaman teknik ekiplerin üzerinde kalır.

Buna karşılık hızlı teslim baskısını oluşturan ekipler her zaman bu operasyonel maliyetin doğrudan içinde olmayabilir.

Bu durum zamanla doğal bir risk algısı asimetrisi oluşturur.

Teknik ekip için küçük görünen bir risk bile geçmişte büyük operasyonel maliyet üretmiş olabilir. Bu nedenle ekiplerin geliştirdiği koruma davranışı çoğu zaman teknik değil, tarihsel öğrenmedir.

Kim, Behr ve Spafford’un belirttiği gibi, karmaşık operasyonel sistemlerde ekip davranışları büyük ölçüde geçmiş sistem kırılmalarının oluşturduğu öğrenme mekanizmalarıyla şekillenir <span class="bkz-ref" title="4. Kim, G., Behr, K., Spafford, G. (2013). The Phoenix Project.">(Bkz: 4)</span>.

---

### 3.4.3 Risk Görünürlüğü Asimetrisi

"Direnç" algısının temel nedenlerinden biri, organizasyon içindeki risk görünürlüğünün simetrik olmamasıdır.

İş tarafı gecikmenin bugünkü maliyetini net biçimde görür:

* müşteri baskısı,
* sözleşme riski,
* gelir kaybı,
* satış fırsatlarının kaçması,
* operasyonel aksama,
* yönetsel görünürlük baskısı.

Bu maliyetler somut, ölçülebilir ve anlıktır.

Teknik ekip ise çoğu zaman farklı bir maliyet kümesini görür:

* veri tutarsızlığı,
* canlı sistem kesintisi,
* geri dönüş karmaşıklığı,
* regresyon riski,
* güvenlik açığı,
* itibar kaybı,
* uzun sürecek operasyonel toparlanma maliyeti.

Bu maliyetler genellikle geleceğe dönüktür, olasılıklar üzerinden ele alınır ve görünürlüğü daha düşüktür.

Buradaki kritik problem, organizasyonların çoğunda bu iki risk türünün aynı karar çerçevesinde değerlendirilmemesidir.

İş tarafı teknik ekibi gereğinden fazla temkinli bulabilir.Teknik ekip ise iş tarafını riskleri küçümsemekle suçlayabilir. Oysa çoğu durumda iki taraf da kendi görünür maliyet alanına göre rasyonel davranmaktadır.

Çatışmanın özü genellikle teknik bilgi eksikliğinden çok, asimetrik risk görünürlüğüdür.

Bu nedenle sağlıklı organizasyonlar yalnızca teslim hızını değil, değişiklik riskini de görünür hale getirmeye çalışır. Çünkü görünmeyen riskler zamanla iletişim problemini güven problemine dönüştürür.

---

### 3.4.4 Savunmacı İletişim Döngüsü

"Direnç" etiketi organizasyon içinde yerleştikten sonra iletişim davranışı değişmeye başlar.

Teknik ekip zamanla daha az bağlam paylaşır. Çünkü detaylı açıklamaların teknik değerlendirme yerine niyet sorgusuna dönüşeceğini düşünür. İş tarafı ise teknik ekibin sürekli risk vurgusu yapmasını gecikme üretme davranışı olarak görmeye başlar.

Bu noktadan sonra taraflar problemi birlikte çözmeye değil, kendi pozisyonlarını korumaya odaklanır.

Savunmacı iletişim döngüsü tipik olarak şu davranışları üretir:

* Daha fazla toplantı yapılması.
* Daha fazla onay mekanizması oluşturulması.
* Yazılı kayıt ihtiyacının artması.
* Teknik açıklamaların sadeleşmesi veya yüzeyselleşmesi.
* Karar alma süreçlerinin yavaşlaması.
* İnsanların hata görünürlüğünü azaltmaya çalışması.
* Risk paylaşımı yerine sorumluluk dağıtımı davranışının artması.

Zamanla organizasyon görünürde daha kontrollü hale gelir; ancak gerçekte ortak problem çözme kapasitesi azalır. Toplantılar çözüm üretmekten çok pozisyon savunmaya hizmet etmeye başlar.

Örneğin teknik ekip ileride suçlanmamak için daha uzun risk listeleri üretir. İş tarafı ise ilerleme baskısını artırmak için daha sert teslim tarihleri koyar. Her iki taraf da kendini korumaya çalışırken güven daha da azalır. Bu döngü belirli bir noktadan sonra teknik problem olmaktan çıkar ve ilişki problemine dönüşür. Artık tartışmanın merkezinde sistem davranışı değil, insanların birbirine atfettiği niyetler vardır.

Bu aşamaya gelmiş organizasyonlarda teknik doğruluk tek başına çatışmayı çözmeye yetmez. Çünkü problem bilgi eksikliğinden çok güven eksikliğine dönüşmüştür.

---

### 3.4.5 Vaka: Acil Değişiklik Talebinin Blokaj Algısına Dönüşmesi

Canlı sipariş akışında kritik bir hata görüldü ve operasyon ekibi aynı gün içinde kural değişikliği yapılmasını talep etti. Çünkü hata doğrudan müşteri işlemlerini etkiliyor, çağrı merkezi yükü artıyor ve operasyon baskısı hızla büyüyordu.

Sabah yapılan ilk toplantıda operasyon tarafı değişikliğin "küçük bir kural güncellemesi" olduğunu ifade etti. Teknik ekip ise ilgili modülün geçmişte benzer değişikliklerden etkilendiğini ve canlı veri akışı altında beklenmedik yan etkiler üretebildiğini belirtti.

Yazılım ekibi değişikliğin hızlı test edilmesini, kademeli yayınlanmasını ve geri dönüş planının hazırlanmasını talep etti.

Operasyon tarafı bu yaklaşımı müşteri etkisi sürerken gereksiz bekleme olarak yorumladı. Çünkü onların perspektifinde görünür problem devam ediyordu ve teknik ekip çözümü geciktiriyordu.

Teknik ekip ise farklı bir risk görüyordu. Daha önce benzer bir acil değişiklik doğrudan canlıya alınmış, sistemde ciddi kesinti yaşanmış ve geri dönüş süreci saatler sürmüştü. Aynı durumun tekrar yaşanması halinde operasyonel maliyetin çok daha büyük olacağını düşünüyorlardı.

Toplantının ilerleyen bölümünde tartışma teknik içerikten uzaklaşmaya başladı.

Operasyon tarafı: "Her değişiklikte neden bu kadar bekliyoruz?"" sorusunu sormaya başladı.

Teknik ekip ise: "Geçmişte yaşanan kesintiyi tekrar etmek istemiyoruz." cevabını veriyordu.

Kısa süre içinde taraflar aynı problemi farklı risk çerçeveleri üzerinden tartışmaya başladı. Operasyon tarafı gecikmeyi, teknik ekip ise kontrolsüz değişikliği merkezde görüyordu.

Böylece problem teknik olmaktan çıkıp niyet tartışmasına dönüştü. Operasyon tarafı teknik ekibi blokaj üretmekle suçladı. Teknik ekip ise iş tarafının riskleri görmezden geldiğini düşünmeye başladı.

Bu vaka, "direnç" algısının çoğu zaman bilgi eksikliğinden değil, risk görünürlüğü uyumsuzluğundan ve geçmiş deneyimlerin taraflar arasında eşit paylaşılmamasından doğduğunu gösterir.

---

### 3.4.6 Güven Kaybının Operasyonel Sonuçları

"Direnç" algısı kalıcı hale geldiğinde etkisi yalnızca iletişim düzeyinde kalmaz; organizasyonun operasyonel davranışını da dönüştürür. Güvenin zayıfladığı ortamlarda organizasyonlar görünmez biçimde daha yavaş çalışmaya başlar.

Çünkü insanlar artık yalnızca teknik problemi çözmeye değil, gelecekte oluşabilecek suçlamalara karşı kendilerini korumaya da enerji harcar.

Bu durum zamanla şu sonuçları üretir:

* Yayın süreçlerinde aşırı bürokrasi.
* Gereğinden fazla manuel doğrulama.
* Çok katmanlı onay mekanizmaları.
* Karar almaktan kaçınma davranışı.
* Sorumluluğun dağıtılması.
* İnisiyatif kullanımının azalması.
* Teknik ekiplerin risk almaktan kaçınması.
* Yenilik hızının düşmesi.

Organizasyon dışarıdan bakıldığında hâlâ çalışıyor gibi görünebilir. Ancak içeride sistem davranışı giderek savunmacı hale gelir. Bu noktada en büyük kayıp çoğu zaman teslim hızı değil, ortak güven kapasitesidir. Çünkü güven kaybı yalnızca ilişkileri değil, organizasyonun değişim yapabilme yeteneğini de doğrudan etkiler.

Bir organizasyonun teknik kapasitesi yalnızca mühendislik bilgisiyle değil, ekiplerin birlikte güven içinde hareket edebilme becerisiyle de belirlenir. Önceki vakada görülen şey yalnızca tek bir acil değişiklik tartışması değildi; güven zayıfladığında benzer olaylar zamanla organizasyonun varsayılan çalışma biçimini değiştirir.

Bu noktadan sonra ekipler kararları daha doğru almak için değil, ileride yanlış anlaşılmamak için belgelemeye başlar. Onay mekanizmaları öğrenmeyi desteklemekten çok sorumluluğu dağıtmaya hizmet eder. Risk değerlendirmesi ortak akıl üretmek yerine, tarafların kendi pozisyonunu koruduğu bir savunma aracına dönüşür.

Böyle ortamlarda küçük değişiklikler bile gereğinden ağır süreçlerden geçer. İnsanlar inisiyatif almak yerine beklemeyi, açık öneri sunmak yerine yoruma kapalı cümleler kurmayı, birlikte çözüm üretmek yerine ileride kullanılabilecek kayıtlar bırakmayı tercih eder.

Bu nedenle güven kaybının asıl maliyeti yalnızca yavaşlayan teslimatlar değildir. Daha derindeki kayıp, organizasyonun belirsizlik karşısında birlikte hareket edebilme kapasitesinin azalmasıdır.

---

## 3.5 Suçlama Döngüsü

Suçlama döngüsü, çatışmanın kurumsallaşmış halidir. Bu aşamada sistem, problemi çözmek için değil; sorumluluk dağıtmak için çalışır.

Bu döngü çoğu zaman açık bir kötü niyetle başlamaz. Başlangıçta herkes yalnızca baskı altındaki bir problemi açıklamaya çalışır: gecikme neden oldu, hata nasıl canlıya çıktı, müşteri neden etkilendi, karar neden zamanında alınamadı? Ancak organizasyonda güven düşükse bu sorular hızla öğrenme sorusu olmaktan çıkar ve savunma sorusuna dönüşür.

Suçlama döngüsünün ayırt edici özelliği, problemin kendisinden çok problemin kime ait olduğunun tartışılmasıdır. Böyle ortamlarda "ne oldu" sorusu bile tarafsız bir araştırma daveti gibi duyulmaz; üstü kapalı "bunu kim yaptı" sorusunu taşır. Bu nedenle ekipler olayları açıklarken aynı anda kendilerini korumaya çalışır.

Bir süre sonra organizasyonun enerjisi üç farklı hatta dağılır:

* Problemin teknik veya operasyonel nedenini anlamak.
* Kendi ekibinin hatalı görünmesini engellemek.
* Gelecekte benzer bir durumda suçlanmamak için kayıt üretmek.

İlk hat öğrenmeyi, ikinci ve üçüncü hat savunmayı besler. Savunma baskısı arttıkça öğrenmeye ayrılan dikkat azalır. Bu yüzden suçlama döngüsü yalnızca ilişkileri yıpratan bir iletişim problemi değildir; organizasyonun karar kalitesini, risk görünürlüğünü ve iyileştirme kapasitesini doğrudan düşüren yapısal bir mekanizmadır.

---

### 3.5.1 Döngünün Başlangıcı: Sapma ve Acil Tepki

Döngü genellikle bir sapmayla başlar: teslimat gecikmesi, canlı ortamda bir hata, müşteri eskalasyonu, bütçe aşımı, kritik bir entegrasyonun çalışmaması veya planlanan devreye alma çalışmasının durdurulması. Sapma görünür hale geldiğinde organizasyon doğal olarak açıklama ister. Bu istek tek başına ele alındığında oldukça makul ve sağlıklıdır. Ancak, açıklama ihtiyacının zaman baskısı ve güven eksikliğiyle birleştiğinde hızlı sorumlu belirleme refleksine dönüşmesi ciddi bir problemdir.

Zaman baskısı altında ilk refleks çoğu zaman hızlı kök neden analizi değil, hızlı pozisyon alma olur. Ürün tarafı kapsamın doğru tarif edildiğini göstermek ister. Yazılım ekibi değişikliklerin etkisini ve belirsizlikleri vurgular. Operasyon tarafı müşteri baskısını ve sahadaki aciliyeti öne çıkarır. Yönetim ise "neden daha önce haber verilmedi" sorusuna cevap arar.

Bu aşamada herkes kendi açısından rasyonel davranır. Fakat ortak problem alanı kurulamazsa, her açıklama bir savunma cümlesi gibi duyulur.

Tipik erken belirtiler şunlardır:

* Toplantıların amacı çözüm üretmekten çok olay sıralaması çıkarmaya kayar.
* Ekipler cümlelerine "biz zaten söylemiştik" veya "bizim tarafta sorun yoktu" tonuyla başlar.
* Kararların bağlamı değil, kimin hangi tarihte ne söylediği tartışılır.
* Eksik bilgi doğal görülmek yerine ihmal göstergesi gibi yorumlanır.
* İlk saatlerde alınan kararlar, sonraki günlerde savunma malzemesine dönüşür.

Bu refleks tek seferlik kaldığında yönetilebilir olabilir. Ancak tekrarlandığında organizasyonel davranışa dönüşür ve öğrenme yerine savunma kültürü üretir. Artık sapma ortaya çıktığında insanlar problemi görünür kılmaktan önce, bu görünürlüğün kendilerine nasıl dönebileceğini düşünmeye başlar.

---

### 3.5.2 Pozisyon Savaşları ve Bilgi Savunması

Suçlama ortamında ekipler bilgiyi ortak çözüm için değil, kendi pozisyonunu korumak için üretir. Yazışmalar artar, toplantılar kanıt yarışına dönüşür, karar döngüleri uzar.

Bu noktada bilgi hâlâ üretilir; hatta dışarıdan bakıldığında organizasyon daha disiplinli çalışıyor gibi görünebilir. Daha fazla rapor vardır, daha fazla toplantı yapılır, daha fazla karar kaydı tutulur. Ancak bilginin amacı değişmiştir. Bilgi artık belirsizliği birlikte azaltmak için değil, olası bir eleştiriye karşı korunmak için kullanılır.

Bu değişim dilde de görünür hale gelir:

* "Bu riski paylaşmıştık."
* "Onay sizden gelmişti."
* "Kapsam sonradan değişti."
* "Teknik kısıt zaten belliydi."
* "Operasyonel baskı net iletilmişti."

Bu cümlelerin her biri tek başına yanlış olmak zorunda değildir. Sorun, bu cümlelerin ortak gerçekliği kurmak yerine tarafların kendi haklılığını kanıtlamak için kullanılmasıdır.

Bilginin amacı değiştiğinde şeffaflık da azalır. Aynı veri farklı amaçlarla kullanıldığı için ortak gerçeklik parçalanır.

Parçalanan gerçeklik, bir sonraki krizde daha hızlı suçlama üretir. Çünkü taraflar artık yalnızca mevcut olayı değil, geçmişteki tartışmaların hafızasını da masaya getirir. Bir gecikme yalnızca bir gecikme değildir; "yine aynı şey oldu" duygusunu tetikler. Bir teknik risk yalnızca teknik risk değildir; "yine engel çıkarılıyor" algısını besler. Bir kapsam değişikliği yalnızca yeni ihtiyaç değildir; "yine son dakika değişiklik yapılıyor" savunmasını üretir.

Bu yüzden pozisyon savaşları ilerledikçe organizasyonun karar kalitesi düşer. Çünkü doğru karar, ancak tarafların eksik bilgiyi güvenli biçimde paylaşabildiği ortamlarda üretilebilir. Bilgi savunmaya dönüştüğünde ise herkes yalnızca kendi pozisyonunu güçlendiren kısmı görünür kılar.

---

### 3.5.3 Güven Erozyonu ve Sessiz Risk Birikimi

Güven zayıfladıkça ekipler erken uyarıları paylaşmaktan kaçınır. Çünkü erken uyarı çoğu zaman destek değil, yeni bir sorgulama dalgası üretir.

Bu davranış kısa vadede bireyi korur; uzun vadede sistemi kırılganlaştırır. Riskler geç görünür, görünür olduğunda etkisi büyür.

Sessiz risk birikimi genellikle dramatik biçimde başlamaz. Bir geliştirici emin olmadığı bir bağımlılığı toplantıda gündeme getirmez. Bir analist gereksinimdeki belirsizliği "sonra netleşir" diye erteler. Bir operasyon uzmanı sahadaki istisna senaryolarını gündeme getirmez, çünkü her yeni detayın kapsam tartışmasına dönüşeceğini düşünür. Bir yönetici kötü haberi yukarı taşımadan önce biraz daha beklemeyi tercih eder.

Bu küçük sessizlikler başlangıçta makul görünür. İnsanlar çatışma çıkarmamak, ekibi baskı altına sokmamak veya kendini gereksiz yere hedef haline getirmemek ister. Fakat sistem açısından bakıldığında bu sessizlikler riskin erken sinyallerini ortadan kaldırır.

Güven erozyonu ilerledikçe şu davranışlar normalleşir:

* Riskler ancak kanıtlanabilir hale geldiğinde paylaşılır.
* Belirsizlikler erken keşif konusu değil, son dakika problemi olur.
* Ekipler kötü haberi yumuşatarak veya geciktirerek iletir.
* Karar vericiler eksik risk görünürlüğüyle iyimser planlar yapar.
* Sorun çıktığında "neden daha önce söylenmedi" sorusu yeni bir suçlama turu başlatır.

Böylece çatışma, yalnızca ilişkisel değil operasyonel maliyet de üretir.

Bu döngünün tehlikeli tarafı, organizasyonun bir süre boyunca her şey yolundaymış gibi görünmesidir. Çünkü riskler ortadan kalkmamıştır; yalnızca görünürlük alanının dışına itilmiştir. Sessiz kalan riskler daha sonra gecikme, kalite problemi, canlı hata, müşteri memnuniyetsizliği veya ekip tükenmişliği olarak geri döner.

---

### 3.5.4 Öğrenme Kaybı ve Tekrarlı Hata Üretimi

Suçlama döngüsünün en büyük maliyeti, organizasyonun öğrenme kapasitesini düşürmesidir. Olay sonrası analizler "ne öğrendik" yerine "kim yaptı" sorusuyla yürütüldüğünde kök neden kalıcı biçimde ele alınmaz <span class="bkz-ref" title="5. Senge, P. (2006). The Fifth Discipline.">(Bkz: 5)</span>.

Kök neden ele alınmadığında hata biçim değiştirir ama tekrar eder. Organizasyon her döngüde daha fazla enerji harcar, daha az kalıcı iyileşme üretir.

Sağlıklı bir olay sonrası değerlendirme, sistemin nasıl davrandığını anlamaya çalışır. Hangi varsayım yanlıştı? Hangi bilgi geç geldi? Hangi karar noktası belirsizdi? Hangi teknik borç riski büyüttü? Hangi süreç sinyali yakalayamadı? Hangi baskı, insanların kısa vadeli kararlar almasına neden oldu?

Suçlama kültüründe ise bu soruların yerini daha dar sorular alır:

* Kim gereksinimi eksik yazdı?
* Kim testi atladı?
* Kim onay verdi?
* Kim zamanında haber vermedi?
* Kim planı tutturamadı?

Bu sorular bazen gerekli olabilir; fakat tek başına yeterli değildir. Çünkü olayların çoğu tek bir kişinin tek bir hatasından değil, birçok küçük kararın ve görünmeyen varsayımın birleşiminden doğar. Sadece kişiyi bulmak, sistemi anlamak anlamına gelmez.

Öğrenme kaybı yaşanan organizasyonlarda aksiyon maddeleri de yüzeysel hale gelir. Daha fazla kontrol listesi hazırlanır, daha fazla onay eklenir, daha fazla raporlama istenir. Fakat tasarım kararları, mimari sınırlar, kapsam yönetimi, test stratejisi, karar alma ritmi ve ekipler arası bilgi akışı gibi asıl üretim mekanizmaları yeterince değişmez.

Bu nedenle suçlama döngüsü yalnızca bir iletişim sorunu değil, stratejik bir kapasite sorunudur.

Çünkü öğrenemeyen organizasyon aynı problemi farklı isimlerle tekrar yaşar. Bugün gecikme olarak görünen şey yarın kalite problemi, sonraki ay müşteri eskalasyonu, daha sonra ekip yorgunluğu olarak ortaya çıkabilir. Semptom değişir; üretim mekanizması aynı kalır.

---

### 3.5.5 Vaka: Program Düzeyinde Suçlama Normalleşmesi

Çok ekipli bir dönüşüm programında üç teslimat art arda gecikti. Programın amacı, eski bir operasyon platformunu yeni bir yapıya taşımaktı. Ürün ekibi müşteri vaatlerini yönetiyor, yazılım ekipleri entegrasyonları geliştiriyor, operasyon ekipleri sahadaki geçiş planını hazırlıyor, yönetim ise belirli bir tarihte görünür sonuç bekliyordu.

İlk gecikme yaşandığında konu teknik kapasite eksikliği olarak yorumlandı. Entegrasyonlardan biri beklenenden karmaşık çıkmıştı. Yazılım ekibi, eski sistemde dokümante edilmemiş iş kuralları olduğunu söyledi. Ürün tarafı ise bu belirsizliklerin daha erken görünür olması gerektiğini savundu.

İkinci gecikmede tartışma kapsam değişimine kaydı. Ürün ekibi müşteri geri bildirimleri nedeniyle bazı akışların değiştiğini belirtti. Yazılım tarafı bu değişikliklerin planı bozduğunu söyledi. Operasyon ekibi ise sahadaki kullanıcıların yeni akışa hazır olmadığını, bu nedenle değişikliklerin kaçınılmaz olduğunu vurguladı.

Üçüncü gecikmede yönetim toplantılarının tonu değişti. Artık soru "program nasıl toparlanır" değil, "hangi ekip planı bozuyor" haline gelmişti. Ürün tarafı teknik kapasiteyi, teknik taraf sürekli kapsam değişimini, operasyon tarafı karar gecikmesini ana neden olarak gösterdi.

Her ekip kendi verisini paylaştı; ancak ortak olay analizi yapılmadı. Ürün ekibi değişiklik taleplerinin müşteri etkisini gösteren tablolar hazırladı. Yazılım ekipleri sonradan gelen gereksinimlerin sprint planına etkisini çıkardı. Operasyon ekibi eğitim ve geçiş hazırlığındaki belirsizlikleri listeledi. Veriler arttı; fakat ortak resim netleşmedi.

Toplantıların odağı "öğrenme"den "sorumlu"ya kaydı. İnsanlar artık belirsizlikleri erken paylaşırken bile cümlelerini savunma diliyle kuruyordu. "Bu bizim tarafta değil", "biz bunu daha önce işaret etmiştik", "karar geç geldiği için böyle oldu" gibi ifadeler normalleşti.

Bir süre sonra ekipler riskleri zamanında raporlamamaya başladı, çünkü raporlamanın yeni bir suçlama turu başlatacağına inanılıyordu. Yazılım ekibi emin olmadığı teknik bağımlılıkları resmi risk listesine geç ekledi. Ürün ekibi müşteri beklentilerindeki değişkenliği daha yumuşak ifadelerle aktardı. Operasyon ekibi sahadaki hazırlık eksiklerini "takip ediliyor" başlığı altında tuttu.

Dördüncü gecikme yeni bir teknik sürprizden değil, geç paylaşılan risklerin birikiminden kaynaklandı. Geç görünen entegrasyon riski, netleşmeyen kapsam kararları ve sahadaki hazırlık eksikleri aynı haftada çakıştı. Program tekrar ertelendiğinde herkes kendi açısından haklı kanıtlara sahipti; fakat organizasyon hâlâ aynı temel soruyu cevaplamamıştı: Bu programda riskler neden erken ve güvenli biçimde görünür hale gelemiyordu?

Bu vaka, suçlama kültürünün yalnızca mevcut gecikmeyi açıklamakla kalmadığını, gelecekteki gecikmeleri de ürettiğini gösterir. Çünkü insanlar suçlanmamak için riskleri daha geç paylaşır; riskler geç paylaşıldıkça problemler büyür; problemler büyüdükçe suçlama daha da sertleşir.

---

## Sonuç

Bölüm-3'ün ortaya koyduğu ana gerçek şudur: yazılım organizasyonlarında çatışma çoğu zaman tek bir hatadan değil, tekrar eden yorum farklarından üretilir. "Neden bu kadar uzun sürüyor?", "Bu küçük bir işti", "Neden değişiklik yapamıyoruz?", "Yazılım ekibi direnç gösteriyor" ve "Suçlu kim?" cümleleri ayrı problemler gibi görünür; fakat aynı yapısal gerilimin farklı yüzleridir.

Bu bölümde önce zaman algısının nasıl bozulduğunu gördük. Yazılım işinin görünmeyen kapsamı, eksik bilgiyle yapılan tahminler ve keşif ihtiyacı dışarıdan yavaşlık gibi okunabilir. Ardından "küçük iş" algısının neden yanıltıcı olduğunu ele aldık: yazılım sistemlerinde lokal görünen değişiklikler bağımlılıklar, veri modelleri, entegrasyonlar ve test yüzeyleri nedeniyle geniş etkiler üretebilir.

Sonra değişim kapasitesinin yalnızca istekle ilgili olmadığını inceledik. Mimari kararlar, teknik borç, eski sistem bağımlılıkları ve operasyonel kısıtlar bazı değişiklikleri doğal olarak zorlaştırır. Bu zorluklar ortak dile çevrilemediğinde teknik gerçeklik direnç gibi algılanır.

Devamında, yazılım ekiplerinin temkinli davranışının nasıl "blokaj" olarak okunabildiğini gördük. Geçmiş arızalar, canlı sistem riski ve geri dönüş maliyeti teknik ekipte koruma refleksi üretir. Bu refleks iş tarafının aciliyet diliyle buluşamadığında güven zayıflar; iletişim savunmacı hale gelir.

Son olarak suçlama döngüsünü ele aldık. Çatışma sürekli tekrarlandığında organizasyon problemi anlamak yerine sorumluluk dağıtmaya başlar. Bilgi ortak çözüm üretmek için değil, pozisyon korumak için kullanılır. Riskler geç görünür, öğrenme azalır ve aynı problemler farklı biçimlerde yeniden üretilir.

Bu nedenle Bölüm-3'ün ana mesajı şudur: her ekip kendi perspektifinden rasyonel davranır; çatışmayı kalıcılaştıran unsur çoğu zaman kötü niyet değil, gerçekliklerin birbirine çevrilememesidir. Teknik kapsam iş diline, iş baskısı risk diline, risk maliyeti karar diline ve olay sonrası öğrenme sistemsel iyileştirme diline çevrilemediğinde gerilim kurumsal davranış haline gelir.

Bu nedenle çözüm tartışmasına geçmeden önce çatışmanın üretim mekanizmasını doğru teşhis etmek gerekir. Bir sonraki bölümde odak, bu teşhisten hareketle daha sağlıklı organizasyonların hangi müdahale alanlarıyla kurulabileceğine kayacaktır.

---

## Referanslar

1. McConnell, S. (2006). Software Estimation: Demystifying the Black Art.
2. Yourdon, E. (1989). Modern Structured Analysis.
3. Bass, L., Clements, P., Kazman, R. (2012). Software Architecture in Practice.
4. Kim, G., Behr, K., Spafford, G. (2013). The Phoenix Project.
5. Senge, P. (2006). The Fifth Discipline.

---


