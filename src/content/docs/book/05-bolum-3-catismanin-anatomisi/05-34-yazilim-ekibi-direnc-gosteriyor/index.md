---
title: "3.4 \"Yazılım Ekibi Direnç Gösteriyor\""
---

Yazılım ekiplerinin değişiklik taleplerine temkinli yaklaşması organizasyon içinde çoğu zaman "direnç" olarak yorumlanır. Özellikle teslim baskısının yüksek olduğu ortamlarda, ek doğrulama süresi isteyen, risk vurgulayan veya kontrollü geçiş öneren ekipler; işi yavaşlatan taraf gibi görünmeye başlayabilir.

Ancak burada çoğu zaman önemli bir yorum hatası vardır: yazılım ekiplerinin karşı çıktığı şey genellikle değişikliğin kendisi değil, etkisi öngörülemeyen ve geri dönüş maliyeti yüksek kontrolsüz değişikliklerdir.

Bu fark görünür olmadığında teknik temkin davranışı kolayca isteksizlik, bürokrasi veya değişime kapalılık şeklinde yorumlanır. Böylece teknik risk yönetimi davranışı zamanla kişisel niyet tartışmasına dönüşür.

"Direnç" etiketi bu nedenle organizasyon içinde güçlü etkiye sahiptir. Çünkü teknik tartışmayı davranış tartışmasına çevirir. Problem artık "risk nedir?" sorusundan uzaklaşır ve "kim neden yavaşlatıyor?" sorusuna dönüşür.

Bu dönüşüm gerçekleştiğinde güven hızla aşınmaya başlar.

---

### 3.4.1 Temkin Davranışının Yanlış Okunması

Yazılım ekipleri riskli değişikliklerde doğrulama süresi istediğinde, bu talep özellikle operasyon baskısı altında kolayca "engel" gibi algılanabilir. Çünkü iş tarafı çoğu zaman gecikmenin görünür maliyetini yaşar: müşteri şikayetleri artar, satış baskısı yükselir, SLA hedefleri risk altına girer veya yönetsel baskı yoğunlaşır.

Bu ortamda teknik ekibin istediği her ek süre, dışarıdan yalnızca gecikme gibi görünür.

Oysa teknik ekip için aynı süre tamamen farklı bir anlama sahiptir. Bu süre; sistem davranışını doğrulamak, yan etkileri analiz etmek, geri dönüş planı hazırlamak ve değişikliğin üretim ortamında kontrolsüz sonuçlar üretmesini engellemek için gereklidir.

Buradaki temel problem niyet farkı değil, görünürlük farkıdır.

İş tarafı bugünkü gecikmeyi görür. Teknik ekip yarın yaşanabilecek arızayı görür. Bu iki maliyet aynı anda görünür hale getirilmediğinde, taraflar birbirinin davranışını irrasyonel yorumlamaya başlar.

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

Operasyon tarafı: "Her değişiklikte neden bu kadar bekliyoruz?" sorusunu sormaya başladı.

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


