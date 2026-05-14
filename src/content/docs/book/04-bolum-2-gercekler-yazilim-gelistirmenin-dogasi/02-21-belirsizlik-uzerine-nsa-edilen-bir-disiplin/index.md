---
title: "2.1 Belirsizlik Üzerine İnşa Edilen Bir Disiplin"
slug: book/04-bolum-2-gercekler-yazilim-gelistirmenin-dogasi/02-21-belirsizlik-uzerine-insa-edilen-bir-disiplin
---

Yazılım geliştirme, dışarıdan bakıldığında hesaplanabilir ve öngörülebilir bir süreç gibi görünür. Ancak pratikte bu alan, belirsizliğin yalnızca bir engel değil, işin doğasında var olan kalıcı bir koşul olduğu bir disiplindir. Bu bölümde belirsizliğin yazılım geliştirmedeki kökenlerini, biçimlerini ve organizasyonel yansımalarını ele alacağız.

---

### 2.1.1 Belirsizliğin Kaçınılmazlığı

Mühendislik disiplinlerinin büyük çoğunluğu, problemin tam tanımından başlar. İnşaat mühendisliğinde yapının ağırlığı, malzeme özellikleri ve zemin koşulları bilinir; tasarım bu parametreler çerçevesinde yapılır. Yazılım geliştirmede ise "ne yapılacağı" sorusu çoğu zaman hiçbir zaman tam olarak yanıtlanamaz. Problem, geliştiriciler onu çözmeye başlayana kadar gerçek boyutlarıyla ortaya çıkmaz.

Bu durum tesadüfi değildir. Yazılım geliştirme, kullanıcı davranışı, iş süreci değişkenliği, teknolojik bağımlılıklar ve sosyal dinamikler gibi çok sayıda değişkenin kesiştiği bir noktada gerçekleşir. Bu değişkenlerin tamamı proje başlangıcında bilinemez; bir kısmı yalnızca kullanım sürecinde görünür hale gelir.

Brooks, "The Mythical Man-Month" adlı kitabında bu durumu şöyle tanımlar: yazılım tasarımı, hataların düzeltilmesini değil, tasarımın kendisini görünür kılan bir keşif sürecidir <span class="bkz-ref" title="1. Brooks, F. P. (1995). The Mythical Man-Month.">(Bkz: 1)</span>. Yazılım ekipleri bu gerçeği deneyimle öğrenir; organizasyonun geri kalanı ise çoğunlukla bu gerçeği görebilecek bir bakış açısına sahip değildir.

**Örnek:** Bir e-ticaret platformunda müşteri sadakat programı geliştirme projesi başlatıldı. İlk gereksinim dokümanı yalnızca temel puan toplama ve harcama senaryolarını içeriyordu. Proje ilerledikçe kampanya yönetimi, çoklu segmentasyon ve gerçek zamanlı bildirim ihtiyaçları ortaya çıktı. Bu değişimler, yazılım ekibi için yalnızca yeni özellikler değil, mevcut sistemin mimarisinin baştan yeniden düşünülmesi anlamına geliyordu. Proje başında bu ihtiyaçlar kimsenin zihninde yoktu; çünkü sistemi kullanmaya başlamadan önce neye ihtiyaç duyulacağını kimse tam olarak bilmiyordu.

Belirsizlik yazılım geliştirmenin dışında bir etken değil, içinde barındırdığı yapısal bir koşuldur.

---

### 2.1.2 Gereksinimlerin Evrimi: Hareketli Hedef

Gereksinimlerin değişmesi, yazılım projelerinde bir istisna değil, kuraldır. Kullanıcılar sistemi kullanmadan önce ne istediklerini tam olarak bilemez. Organizasyonlar iş süreçlerini yazılıma aktarırken fark etmedikleri çelişkileri ancak geliştirme sırasında keşfeder. Pazar koşulları, rekabet dinamikleri ve yasal düzenlemeler proje ortasında değişebilir.

Bu durum, yazılım ekiplerinin çalıştığı hedefin sürekli hareket ettiği anlamına gelir. Hedef her değiştiğinde ekip, kısmen tamamlanmış işi değerlendirmek, neyin geçersiz hale geldiğini belirlemek ve yeniden planlamak zorunda kalır. Bu süreç görünmez bir iş yükü üretir; dışarıdan ise yalnızca gecikme olarak gözlemlenir.

Agile yöntemleri bu gerçeği kabul ederek gereksinimlerin değişkenliğini bir risk değil, yönetilmesi gereken bir özellik olarak tanımlar <span class="bkz-ref" title="2. Beck, K., Beedle, M. et al. (2001). Manifesto for Agile Software Development.">(Bkz: 2)</span>. Ancak bu kabulün pratik yansıması, çoğu organizasyonda hâlâ tam anlamıyla içselleştirilememiştir. Gereksinimler değiştiğinde "yazılım ekibi neden daha önce sormadı?" sorusu sorulur; oysa doğru soru şudur: "Biz neden değiştirdik?"

**Örnek:** Bir kamu kurumu için geliştirilen personel yönetim sistemi, proje başlangıcında belirlenmiş kapsamla altı ay boyunca geliştirildi. Projenin beşinci ayında kurumun bağlı olduğu bakanlık, mevzuat değişikliği nedeniyle izin takibi hesaplamalarının tamamen farklı bir metodolojiye göre yapılmasını zorunlu kıldı. Yazılım ekibi, bu alanı daha önceki üç sprintte geliştirmiş ve test etmişti. Değişiklik, tamamlanmış işin büyük bölümünü geçersiz kıldı. Proje yöneticisi "neden bu riski öngöremediniz?" diye sordu. Yazılım ekibi ise "mevzuat değişikliğini biz mi yapıyoruz?" diye düşündü. İki taraf da haklıydı; ancak kimse bu gerilimin asıl kaynağını—gereksinimlerin doğası gereği değişken olduğu gerçeğini—konuşmadı.

---

### 2.1.3 Bilinmeyen Bilinmeyenler

Donald Rumsfeld'in "known unknowns" (bilinen bilinmeyenler) ve "unknown unknowns" (bilinmeyen bilinmeyenler) ayrımı, yazılım geliştirme için olduğu kadar az sayıda alana bu kadar doğrudan uygulanabilir. Proje başlangıcında ekip, bazı risklerin farkındadır: entegrasyon güçlükleri, performans gereksinimleri, belirli teknoloji seçimlerinin kısıtları. Bunlar yönetilebilir belirsizliklerdir.

Asıl tehlike ise bilinmeyen bilinmeyenlerden gelir: önceden fark edilemeyen, yalnızca geliştirme süreci ilerledikçe ortaya çıkan sorunlar. Eski bir sistemdeki belgelenmemiş bir davranış, üçüncü parti bir API'nin beklenmedik bir kısıtı, iki farklı iş kuralının belirli bir edge case'de çelişmesi. Bunların hiçbirini proje planına dahil etmek mümkün değildir; çünkü henüz bilinmemektedirler.

Taleb'in **siyah kuğu kavramı** bu dinamiği iyi açıklar: düşük olasılıklı ama yüksek etkili olaylar, hesaba katılamadıkları için hesaplara katılmaz; ama gerçekleştiklerinde belirleyici olurlar <span class="bkz-ref" title="3. Taleb, N. N. (2007). The Black Swan.">(Bkz: 3)</span>. Yazılım projelerinde bu tür sürprizler sistematiktir; onları tamamen önlemek değil, onlarla başa çıkabilecek bir süreç tasarlamak mümkündür.

**Örnek:** Bir kargo şirketi için geliştirilen müşteri takip sistemi, test sürecini başarıyla tamamladı ve yayına alındı. İlk iki haftada sistem sorunsuz çalıştı. Ancak üçüncü haftada, belirli posta kodlarına yapılan teslimat güncellemelerinin veritabanında çoğaldığı fark edildi. İnceleme sonucunda, sistemin entegre olduğu adres doğrulama servisinin bazı posta kodlarını birden fazla kez yanıtladığı ortaya çıktı. Bu davranış ne dokümante edilmişti ne de test ortamında gözlemlenmişti. Bilinmediği için test edilemezdi; ama gerçekleştiğinde tüm veri bütünlüğünü tehdit etti. Düzeltme süreci 1 haftayı aştı. Kimse sabotaj yapmamıştı; bilinmeyen bir şey gerçekleşmişti.

---

### 2.1.4 Tahmin Paradoksu

Yazılım geliştirmede en çok gerilim yaratan konuların başında tahmin gelir. Organizasyonlar bütçe planlaması, kaynak dağılımı ve taahhüt yönetimi için kesin takvim ve maliyet bilgisine ihtiyaç duyar. Yazılım ekipleri ise belirsiz bir problemin ne kadar süreceğini, problem tam olarak netleşmeden söyleyemez.

Bu çelişki iki tarafı da haklı kılar ama yapısal bir gerilim üretir. Tahmin isteyen taraf sabit bir rakam ister; tahmin veren taraf ise bir aralık verir. Aralık kabul edilmez; rakam kabul edilir. Rakam kaçırıldığında sorumluluk yazılım ekibine yüklenir; oysa sorun, tahmin edilen işin öngörülemeyen bir değişkenler kümesi içerdiğidir.

Hofstadter Yasası bu gerilimi öz biçimde ifade eder: "Her şey tahmin edilenden daha uzun sürer; Hofstadter Yasası'nı hesaba katsanız bile." Bu bir şaka gibi görünür, ama bir gerçeği işaret eder: belirsizlik içeren işlerin tahmini yapısal olarak hatalıdır <span class="bkz-ref" title="4. Hofstadter, D. R. (1979). Gödel, Escher, Bach.">(Bkz: 4)</span>.

Agile topluluğunun bu sorunun çözümü için geliştirdiği "story point" gibi göreceli tahmin yöntemleri, kesin süre yerine karmaşıklık düzeyini ölçmeye çalışır. Ancak bu yöntemlerin bile, kapsamı değişen bir gereksinim ortamında yalnızca sınırlı bir kesinlik sağlayabildiği pratikte defalarca görülmüştür.

**Örnek:** Bir sigorta şirketinde geliştirilen hasar değerlendirme modülü için yazılım ekibi "altı ile sekiz hafta" aralığını verdi. Proje yöneticisi bütçe onayı için "altı hafta" olarak sundu. Yedinci haftada modülün entegre olduğu üçüncü parti bir değerlendirme servisinin API yapısının değiştiği öğrenildi. İki ek hafta gerekti. Proje yöneticisi "neden öngöremediniz?" diye sordu. Yazılım ekibi "bu yüzden sekiz hafta dedik" diye düşündü. Söylenen rakam altıydı; duyulan da altıydı. Ama konuşulan aslında altı ile sekiz arasındaki bir yerdi.

---

### 2.1.5 Belirsizliğin Organizasyonel Maliyeti

Belirsizlik yalnızca teknik bir mesele değildir; organizasyonel bir maliyet kaynağıdır. Belirsizlik arttığında karar döngüleri uzar, revizyon sayısı artar ve ekip motivasyonu aşınır. Belirsizliği yok saymak ise daha büyük bir maliyete yol açar: erken taahhütler, sabit takvimler ve değişmeyen kapsam baskısı altında gerçekleştirilen geliştirmeler, kaçınılmaz değişiklik geldiğinde çok daha ağır bir revizyon maliyetiyle karşılaşır.

Bu maliyet çoğu zaman görünmez kalır, çünkü kararların ötelenmesi değil sonradan alınması gereklidir; revizyonlar ek iş olarak değil, "düzeltme" olarak kaydedilir. Belirsizliğin organizasyonel maliyetini görünür kılmak, ekiplerin neden temkinli davrandığını, neden "şimdi karar vermeyelim" dediğini ve neden bazı tasarım kararlarını sonraya bıraktığını anlamanın ön koşuludur.

Simon'ın sınırlı rasyonellik kavramı bu durumu iyi açıklar: karar alıcılar her zaman en iyi kararı vermez; mevcut bilgi ve zamana göre yeterince iyi olan kararı verirler <span class="bkz-ref" title="5. Simon, H. A. (1996). The Sciences of the Artificial.">(Bkz: 5)</span>. Yazılım ekipleri de bunu yapar. Fark şudur: bu ekipler eksik bilgiyle verilen kararın bedelini en ağır biçimde ödeyen taraftır.

**Örnek:** Bir üretim firmasında geliştirilen kalite kontrol sistemi, ilk tasarım aşamasında mimari tartışmaya açıldı. Yazılım ekibi, veri akışının merkezileştirilmesi ya da dağıtık bırakılması konusunda iş gereksinimlerinin netleşmesini istedi. "Sonradan karar veririz, şimdi başlayalım" yanıtı geldi. Ekip merkezi mimari seçerek ilerledi. İki ay sonra, bazı üretim hatlarının ağ bağlantısının kısıtlı olduğu anlaşıldı ve dağıtık bir yapı zorunlu hale geldi. Mimari kısmen yeniden yazıldı. Bu yeniden yazım süreci altı hafta aldı ve projeyi planlanan tarihten geç bitirdi. Belirsizliğin maliyeti eninde sonunda ödendi, ancak ilave maliyetin ne olduğu ile kimse ilgilenmedi.

Belirsizlikle başa çıkmanın yolu onu yok saymak değil, onu yönetecek süreçleri, kararları ve organizasyonel kültürü inşa etmektir.

---


