---
title: "EK: Organizasyonel Anti-Pattern Seti"
---

Bu ek, kitap boyunca ele alınan problemlerin kısa ve uygulanabilir bir kontrol listesi olarak özetlenmiş halidir. Her anti-pattern, sahada tekrar eden bir organizasyonel yanılgıyı temsil eder.

Bu liste yeni bir bölüm gibi okunmak zorunda değildir. Daha çok, toplantı öncesinde, retrospektiflerde, planlama oturumlarında veya kriz sonrası değerlendirmelerde kullanılabilecek bir teşhis aracıdır.

Her anti-pattern için üç soru sorulabilir:

* Bu davranış bizde görülüyor mu?
* Bu davranış hangi sistemsel koşullar nedeniyle oluşuyor?
* Bunun yerine hangi daha sağlıklı soruyu sormalıyız?

---

## Bölüm 1: Algı Anti-Pattern'leri

### "Yazılım Ekibi Yavaş"

**Belirti:** Yazılım ekibinin görünür çıktı üretmediği dönemler doğrudan düşük performans olarak yorumlanır.

**Neden sorun?** Görünmeyen analiz, refactoring, hata önleme, destek, risk azaltma ve teknik hazırlık çalışmaları hesaba katılmaz. Bu durumda organizasyon kapasiteyi yanlış okur.

**Örnek:** Sprint boyunca eski bir modülde refactoring ve performans iyileştirmesi yapan ekip, yeni feature üretmediği için "hiç iş yapmadı" şeklinde değerlendirildi.

**Daha sağlıklı soru:** Ekip zamanı hangi görünür ve görünmez iş türlerine harcanıyor?

### Teknik Karmaşıklık Yok Sayılır

**Belirti:** Talep yüzeyde basit göründüğü için teknik etki alanı analiz edilmeden süre veya kapsam beklentisi oluşturulur.

**Neden sorun?** Yazılım sistemlerinde görünen değişiklik ile gerçek değişiklik maliyeti aynı şey değildir. Bağımlılıklar, veri akışı, yetki modeli, test yüzeyi ve operasyonel etkiler hesaba katılmadığında plan gerçeklikten kopar.

**Örnek:** Üç servis bağımlılığı olan bir değişiklik, yalnızca arayüzde küçük göründüğü için iki günlük iş olarak planlandı.

**Daha sağlıklı soru:** Bu değişiklik hangi sistemleri, ekipleri ve doğrulama alanlarını etkiliyor?

### Farklı Ekipler Farklı Gerçekliklerde Yaşar

**Belirti:** Ürün, yazılım, satış, implementasyon ve operasyon ekipleri aynı konu hakkında konuşur; fakat her biri farklı bir problemi merkezde görür.

**Neden sorun?** Ortak gerçeklik kurulmadığında herkes kendi açısından haklı kalır, ancak organizasyon doğru karar alamaz.

**Örnek:** Ürün ekibi "müşteri istiyor" derken, yazılım ekibi "mimari uygun değil", operasyon ekibi ise "saha buna hazır değil" dedi.

**Daha sağlıklı soru:** Bu kararın müşteri, teknik, operasyonel ve stratejik gerçeklikleri aynı masada nasıl görünür hale getirilebilir?

### İletişim Problemi Konuşma Problemi Sanılır

**Belirti:** Daha fazla toplantı, daha fazla mesaj veya daha fazla rapor ile iletişim probleminin çözüleceği varsayılır.

**Neden sorun?** Asıl problem çoğu zaman konuşma miktarı değil, paylaşılan bağlamın eksikliğidir. Ortak kavramlar ve karar çerçevesi yoksa iletişim artar, fakat anlam ortaklaşmaz.

**Örnek:** Yazılım ekibinin "bu mümkün değil" ifadesi teknik kısıt açıklaması olarak değil, direnç olarak yorumlandı.

**Daha sağlıklı soru:** Taraflar aynı kelimeleri kullanırken aynı şeyi mi kastediyor?

### Görünmeyen İş Yok Sayılır

**Belirti:** Bakım, iyileştirme, test altyapısı, teknik borç azaltımı ve operasyonel destek işleri planlamada yer bulmaz.

**Neden sorun?** Görünmeyen iş yok sayıldığında ekip kapasitesi olduğundan yüksek sanılır. Sonuçta planlar şişer, gecikmeler artar ve teknik sağlık zayıflar.

**Örnek:** Performans iyileştirmesi yapan ekip, yeni özellik çıkarmadığı için verimsiz görüldü.

**Daha sağlıklı soru:** Teslimatı mümkün kılan ama çıktı olarak görünmeyen işler hangileri?

### Yapay Zekâ Varken Her Şey Hızlı Olmalıdır

**Belirti:** Yapay zekâ (YZ) araçları kullanıldığı için her işin kısa sürmesi beklenir; süre tahminleri şüpheyle karşılanır.

**Neden sorun?** YZ kod yazımını hızlandırır; ancak gereksinimi netleştirme, doğrulama, entegrasyon ve sahiplenme süresini aynı ölçüde kısaltmaz.

**Örnek:** YZ araçlarına geçildikten sonra yönetim teslimat kapasitesinin belirgin biçimde artmasını bekledi; değişiklikler ise inceleme ve test aşamasında birikti.

**Daha sağlıklı soru:** Bu işte zamanın çoğu nereye gidiyor ve YZ o kısmı gerçekten hızlandırıyor mu?

---

## Bölüm 2: Gerçeklik Anti-Pattern'leri

### Yazılım Üretim Hattı Gibi Görülür

**Belirti:** Yazılım işleri, baştan net tanımlanabilen ve yalnızca efor eklenerek hızlandırılabilen görevler gibi yönetilir.

**Neden sorun?** Yazılım geliştirme belirsizlik ve keşif içerir. Gereksinimler, bağımlılıklar ve riskler geliştirme sürecinde görünür hale gelebilir.

**Örnek:** Proje başında tüm işlerin net planlandığı varsayıldı; ancak geliştirme ilerledikçe veri modeli, entegrasyon ve kullanım senaryoları değişti.

**Daha sağlıklı soru:** Bu işin hangi bölümü üretim, hangi bölümü keşif içeriyor?

### "Küçük Değişiklik" Varsayımı

**Belirti:** Değişikliğin görünen yüzeyi küçük olduğu için gerçek etkisinin de küçük olduğu varsayılır.

**Neden sorun?** Küçük görünen değişiklikler bağlı sistemlerde, veri yapılarında, testlerde ve operasyonel süreçlerde zincirleme etki yaratabilir.

**Örnek:** Tek bir alan güncellemesi, API sözleşmelerini, raporlama sistemini ve entegrasyon testlerini etkiledi.

**Daha sağlıklı soru:** Bu değişikliğin görünen boyutu ile etki alanı aynı mı?

### Teknik Borç Ertelenir

**Belirti:** Teknik borç azaltımı sürekli daha acil görünen işlerin arkasına atılır.

**Neden sorun?** Ertelenen borç kaybolmaz; gelecekte daha yavaş geliştirme, daha fazla hata ve daha yüksek değişiklik maliyeti olarak geri döner.

**Örnek:** Hızlı teslim için geçici yazılan kod, altı ay sonra yeni geliştirmeleri engelledi ve yeniden yazım ihtiyacı doğurdu.

**Daha sağlıklı soru:** Bugün ertelediğimiz teknik borcun gelecekteki faizi ne olacak?

### Test Ortamı Yeterlidir Varsayımı

**Belirti:** Test ortamında çalışan sistemin canlı ortamda da aynı şekilde davranacağı varsayılır.

**Neden sorun?** Canlı ortam veri hacmi, kullanıcı davranışı, eş zamanlılık, entegrasyon koşulları ve operasyonel baskı açısından farklıdır.

**Örnek:** Test ortamında sorunsuz çalışan rapor, canlı ortamda büyük veri hacmiyle dakikalarca cevap veremedi.

**Daha sağlıklı soru:** Test ortamımız canlı davranışı hangi açılardan temsil etmiyor?

### Hız Kaliteye Tercih Edilir

**Belirti:** Kısa vadeli teslimat baskısı nedeniyle test, refactoring, güvenlik ve mimari kalite çalışmaları ertelenir.

**Neden sorun?** Kaliteyi düşürmek hızı kalıcı olarak artırmaz; yalnızca maliyeti geleceğe taşır. Zamanla sistem daha yavaş değişir hale gelir.

**Örnek:** Test atlanarak çıkarılan sürüm canlıda hata üretti ve rollback süreci ilk kazanılan zamandan daha pahalıya mal oldu.

**Daha sağlıklı soru:** Bugün kazandığımız hız, gelecekte hangi bakım ve hata maliyetini üretiyor?

### Bağımlılıklar Göz Ardı Edilir

**Belirti:** Sistemler, ekipler veya üçüncü parti servisler arasındaki bağımlılıklar planlama sırasında yeterince görünür değildir.

**Neden sorun?** Bağımlılıklar yönetilmediğinde gecikmeler, beklenmedik yan etkiler ve koordinasyon maliyeti büyür.

**Örnek:** Üçüncü parti servis davranışı değiştiğinde, buna bağlı modüller beklenmedik şekilde hata üretmeye başladı.

**Daha sağlıklı soru:** Bu işin başarısı hangi sistemlere, kararlara ve ekiplerin zamanında hareket etmesine bağlı?

### Çalışan Kod Hazır Koddur

**Belirti:** Derlenen, testlerden geçen ya da demoda çalışan kod üretime hazır kabul edilir.

**Neden sorun?** Çalışmak hazır olmak değildir. Yetkilendirme, sınır durumlar, entegrasyon, güvenlik ve anlaşılabilirlik ayrı sorulardır.

**Örnek:** İki günde hazırlanan bir YZ prototipi müşteriye "neredeyse bitti" olarak sunuldu; ürünleştirme üç ay sürdü.

**Daha sağlıklı soru:** Bu kodun kabul ölçütleri neler ve ekipte bu kodu kim açıklayabilir?

### Anlaşılmayan Kod Sorun Değildir

**Belirti:** Testlerden geçen kod, ekipte kimse nasıl çalıştığını açıklayamasa bile sorunsuz kabul edilir.

**Neden sorun?** Anlama borcu, ilk ciddi değişiklikte ya da ilk arızada faiziyle geri döner.

**Örnek:** YZ ile yeniden yazılan bir modülde, bir yıl sonra kimse hesaplama mantığının gerekçesini bilmiyordu.

**Daha sağlıklı soru:** Bu değişikliği ekipte kim açıklayabilir?

### Geçici Uygulama Geçici Kalır

**Belirti:** YZ ile hızlıca üretilen "geçici" araçlar sahipsiz bırakılır.

**Neden sorun?** Geçici araçlar zamanla iş süreçlerine bağlanır ve kimsenin üstlenmediği kalıcı sistemlere dönüşür.

**Örnek:** Bir ekibin hafta sonu hazırladığı raporlama aracı, iki yıl sonra finans sürecinin kritik bir parçası haline gelmişti.

**Daha sağlıklı soru:** Bu uygulama ne zaman ve kim tarafından kullanımdan kaldırılacak?

### İstem Bir Güvenlik Sınırıdır

**Belirti:** YZ ajanlarının güvenliği yalnızca istemdeki (prompt) "şunu yapma" talimatlarıyla sağlanmaya çalışılır.

**Neden sorun?** Dışarıdan gelen içerik modeli yönlendirebilir. Güvenliği istem değil, yetki sınırları sağlar.

**Örnek:** Bir destek ajanı, talep metnine gizlenmiş bir talimatla başka bir müşterinin kayıtlarına erişebildi.

**Daha sağlıklı soru:** Bu ajan en kötü durumda neye erişebilir ve ne yapabilir?

---

## Bölüm 3: Çatışma Anti-Pattern'leri

### "Neden Uzun Sürdü?" Refleksi

**Belirti:** Gecikme yaşandığında ilk tepki, sürenin neden arttığını sorgulamak olur.

**Neden sorun?** Bu soru çoğu zaman semptoma odaklanır. Kapsam değişimi, belirsizlik, bağımlılık ve karar gecikmesi gibi kök nedenler gölgede kalabilir.

**Örnek:** Raporlama talebi geciktiğinde yalnızca süre tartışıldı; veri modelindeki eksiklik ve geç gelen kararlar konuşulmadı.

**Daha sağlıklı soru:** Bu iş tahmin ettiğimizden neden farklı çıktı?

### Kapsam Sabit Varsayılır

**Belirti:** Yeni talepler veya değişiklikler eklenirken teslim tarihi ve kapasite beklentisi aynı kalır.

**Neden sorun?** Kapsam değişirken planın değişmemesi, gecikmeyi kaçınılmaz hale getirir. Ekip sonunda ya kaliteyi düşürür ya da tarihi kaçırır.

**Örnek:** Sprint ortasında üç yeni müşteri talebi eklendi, ancak teslim tarihi güncellenmedi.

**Daha sağlıklı soru:** Bu yeni talep hangi işi geriye atıyor veya hangi riski artırıyor?

### Direnç Yanlış Yorumlanır

**Belirti:** Yazılım ekibinin temkinli yaklaşımı, risk uyarısı veya ek süre talebi isteksizlik olarak görülür.

**Neden sorun?** Teknik ekip çoğu zaman geçmiş arıza hafızasını, canlı sistem maliyetini ve geri dönüş riskini taşır. Bu bağlam görünmezse koruma refleksi blokaj gibi okunur.

**Örnek:** Kademeli yayın önerisi, müşteri etkisi sürdüğü için gereksiz bekletme olarak yorumlandı.

**Daha sağlıklı soru:** Bu temkin hangi geçmiş deneyim veya görünmeyen riskten kaynaklanıyor?

### Suçlama Kültürü Oluşur

**Belirti:** Problemler ortaya çıktığında toplantılar çözümden çok sorumluluk dağıtma alanına dönüşür.

**Neden sorun?** Suçlama, öğrenmeyi azaltır. Ekipler riskleri daha geç paylaşır, savunma dili artar ve aynı sorunlar tekrar eder.

**Örnek:** Her canlı hata sonrası toplantı "kim onayladı" tartışmasına döndü.

**Daha sağlıklı soru:** Sistem bu sonucu hangi kararlar, varsayımlar ve görünmeyen risklerle üretti?

### Herkes Haklıdır

**Belirti:** Her ekip kendi perspektifinden doğru davranır; ancak toplam sonuç organizasyon için kötü olur.

**Neden sorun?** Bu durum genellikle KPI, öncelik ve gerçeklik uyumsuzluğuna işaret eder. Lokal optimizasyon, sistemin bütününde kayıp üretir.

**Örnek:** Satış söz verdi, ürün kapsamı genişletti, yazılım kaliteyi korumaya çalıştı, operasyon hızlı geçiş istedi. Her ekip kendi hedefi açısından haklıydı; proje yine de başarısız oldu.

**Daha sağlıklı soru:** Hangi hedefler ekipleri ayrı ayrı doğru ama birlikte yanlış davranmaya itiyor?

### Problem Bireyselleştirilir

**Belirti:** Tekrarlayan sorunlar kişi hatası olarak yorumlanır.

**Neden sorun?** Aynı problem farklı kişilerle tekrar ediyorsa, mesele bireysel performans değil sistem davranışıdır.

**Örnek:** Aynı tür gecikme üç farklı proje yöneticisiyle tekrarlandı; buna rağmen sorun kişisel takip eksikliği olarak ele alındı.

**Daha sağlıklı soru:** Bu problemi tekrar üreten süreç, karar veya görünürlük eksikliği nedir?

### Sorumluluk Yapay Zekâya Devredilir

**Belirti:** Hata sonrasında "YZ böyle üretmiş" açıklaması kabul görür; değişikliğin insan sahibi belirsizdir.

**Neden sorun?** YZ hesap veremez. Sahipsiz değişiklik, suçlama döngüsünü yeni bir aktörle sürdürür.

**Örnek:** Canlı ortamdaki bir hatanın değerlendirmesinde, değişikliğin kim tarafından incelendiği ve onaylandığı tespit edilemedi.

**Daha sağlıklı soru:** Bu değişikliği kim anladı, kim onayladı ve kabul ölçütlerini kim tanımladı?

### Onay İnceleme Demektir

**Belirti:** Değişikliklerin "insan onayından geçmiş" olması yeterli güvence sayılır.

**Neden sorun?** Hacim arttıkça onay bir ritüele dönüşür; insan döngüde görünür, ancak gerçek bir inceleme yapılmaz.

**Örnek:** Günde onlarca YZ önerisini onaylayan bir ekipte, kritik bir hata üç ayrı onaydan geçerek canlıya çıktı.

**Daha sağlıklı soru:** Bu onay neyi doğruladı?

---

## Bölüm 4: Çözüm Anti-Pattern'leri

### "Daha İyi İletişim" Çözüm Sanılır

**Belirti:** Yapısal problemler, daha fazla toplantı veya daha sık raporlama ile çözülmeye çalışılır.

**Neden sorun?** Ortak gerçeklik, karar mekanizması ve sorumluluk netliği yoksa iletişim miktarı artsa da çatışma devam eder.

**Örnek:** Haftalık toplantılar ikiye çıkarıldı, ancak karar bağımlılıkları ve öncelik çatışmaları çözülmedi.

**Daha sağlıklı soru:** Hangi sistemsel belirsizlik iletişim problemi gibi görünüyor?

### Memnuniyet Beklenti Yönetimi Sanılır

**Belirti:** Müşteriyi veya yönetimi kısa vadede memnun etmek için iyimser sözler verilir.

**Neden sorun?** Gerçekçi olmayan sözler kısa vadede rahatlık sağlar, uzun vadede güven kaybı üretir.

**Örnek:** Sürekli erken tarih verildi, sürekli gecikildi ve sonunda müşterinin güveni azaldı.

**Daha sağlıklı soru:** Verdiğimiz söz hangi varsayımlara ve risklere dayanıyor?

### Her Müşteri Özeldir Yaklaşımı

**Belirti:** Her müşteri talebi özel geliştirme olarak ele alınır.

**Neden sorun?** Ürün zamanla standart davranıştan uzaklaşır, kod tabanı parçalanır, test ve destek maliyeti artar.

**Örnek:** Her büyük müşteri için farklı kod yolu oluşturuldu; birkaç yıl sonra yeni özellik geliştirmek tüm varyantları test etmeyi gerektirdi.

**Daha sağlıklı soru:** Bu ihtiyaç ürün standardını genişletmeli mi, yoksa konfigürasyonla mı çözülmeli?

### Sahiplik Yoktur

**Belirti:** Sorumluluk birçok ekibe dağılmıştır, fakat sonucun uçtan uca sahibi yoktur.

**Neden sorun?** Problemler ekip arayüzlerinde kaybolur. Herkes kendi parçasını tamamladığını düşünür, ancak bütün sağlıklı çalışmaz.

**Örnek:** Canlı hata sonrası ürün, yazılım, test ve operasyon ekipleri kendi sorumluluk alanının tamamlandığını söyledi; fakat müşteri etkisi hâlâ devam ediyordu.

**Daha sağlıklı soru:** Bu ürün alanının uçtan uca sağlığını kim izliyor ve iyileştiriyor?

### Yol Haritası Kesin Plan Olarak Görülür

**Belirti:** Roadmap değişmeyen bir söz gibi ele alınır.

**Neden sorun?** Roadmap aslında stratejik varsayımların zamana yayılmış halidir. Pazar, müşteri, teknik risk veya kapasite değiştiğinde güncellenmelidir.

**Örnek:** Yeni regülasyon ve müşteri geri bildirimi gelmesine rağmen roadmap değişmedi; ekip gerçeklikten kopmuş bir plana göre çalışmaya zorlandı.

**Daha sağlıklı soru:** Roadmap'teki hangi varsayımlar değişti ve bu değişim hangi kararları etkiliyor?

### KPI'lar Bağımsız Tanımlanır

**Belirti:** Her ekip kendi hedefini optimize eder, fakat hedefler birbirini desteklemez.

**Neden sorun?** Uyumlu olmayan KPI'lar ekipleri karşı karşıya getirir. Bir ekibin başarısı diğer ekibin maliyetine dönüşebilir.

**Örnek:** Satış yeni müşteri sayısını artırdı, ürün özel talepleri kabul etti, yazılım karmaşıklıkla boğuştu, destek yükü arttı.

**Daha sağlıklı soru:** Bu hedefler sistemin bütününde hangi davranışı teşvik ediyor?

### Teknik Gerçeklik Görünmezdir

**Belirti:** Mimari sınırlar, teknik borç, bağımlılıklar ve riskler karar masasına yeterince taşınmaz.

**Neden sorun?** Eksik gerçeklikle alınan kararlar, ileride gecikme veya kalite problemi olarak geri döner.

**Örnek:** Mimari sınırlar dikkate alınmadan müşteri taahhüdü verildi; geliştirme sırasında kapsam dönüşüm projesine dönüştü.

**Daha sağlıklı soru:** Bu kararın teknik gerçekliği nedir ve hangi riskleri kabul ediyoruz?

### Organizasyon Değişmeden Sonuç Beklenir

**Belirti:** Aynı yapı, aynı hedefler ve aynı karar mekanizmaları korunurken farklı sonuçlar beklenir.

**Neden sorun?** Sistem aynı kaldığında davranışlar da büyük ölçüde aynı kalır. Kalıcı sonuç için sistemi oluşturan teşvikler, görünürlük ve sorumluluk mekanizmaları değişmelidir.

**Örnek:** Süreç değişmeden yalnızca daha hızlı teslimat hedefi kondu; sonuç daha fazla stres, daha fazla hata ve daha fazla gecikme oldu.

**Daha sağlıklı soru:** Beklediğimiz yeni sonucu hangi yeni sistem davranışı üretecek?

### Yapay Zekâ Eklemek Süreci Düzeltir

**Belirti:** Teslimat sorunlarına çözüm olarak YZ araçları satın alınır; süreç, onay ve koordinasyon yapısı değişmeden kalır.

**Neden sorun?** Tanımsız bir süreci hızlandırmak kaosu da hızlandırır. Darboğaz kod yazmada değilse kazanç görünmez.

**Örnek:** YZ araçları yaygınlaştı ve tamamlanan görev sayısı arttı; ancak değişiklikler onay ve test kuyruğunda beklemeye devam etti.

**Daha sağlıklı soru:** Darboğazımız nerede ve YZ'yi o darboğazı giderecek biçimde mi kullanıyoruz?

### Yapay Zekâ Kullanım Oranı Başarı Ölçütüdür

**Belirti:** Kodun yüzde kaçının YZ ile yazıldığı ya da açılan değişiklik sayısı gibi çıktı metrikleri hedef haline getirilir.

**Neden sorun?** Bu metrikler kolayca şişirilebilir; değerle, kararlılıkla ve değişiklik maliyetiyle ilişkileri zayıftır.

**Örnek:** YZ kullanım hedefi konan ekiplerde değişiklik sayısı arttı; geri alınan değişikliklerin oranı da arttı.

**Daha sağlıklı soru:** Hangi değişiklikler kabul edildi, canlıya ulaştı ve beklenen değeri üretti?

### Yapay Zekâ ile Küçülmek Verimliliktir

**Belirti:** YZ kazanımı yalnızca kişi sayısını azaltma fırsatı olarak görülür.

**Neden sorun?** Maliyet azalırken alan bilgisi, kurumsal hafıza ve yeni başlayanların yetişme hattı da kaybolur.

**Örnek:** Yeni başlayan alımlarını durduran bir organizasyon, iki yıl sonra kritik modülleri devralacak kimseyi bulamadı.

**Daha sağlıklı soru:** YZ'den elde edilen kapasiteyi neye ayırıyoruz?

### Her Fikir Hemen Yapılabilir

**Belirti:** Kod ucuzladığı için her talep ve her fikir hemen geliştirmeye alınır.

**Neden sorun?** Ucuz üretim talebi artırır; önceliklendirme ve karar yükü büyür, ürün dağılır.

**Örnek:** YZ ile geliştirme hızlanınca yol haritasına giren madde sayısı ikiye katlandı; hiçbiri derinlemesine tamamlanamadı.

**Daha sağlıklı soru:** Bunu yapabildiğimiz için mi yapıyoruz, yoksa gerçekten gerekli olduğu için mi?

---

## Nasıl Kullanılır?

Bu anti-pattern seti bir kontrol listesi olarak kullanılabilir. Amaç, organizasyonu etiketlemek değil, tekrar eden davranışları görünür kılmaktır.

Bir ekip bu listeyi şu anlarda kullanabilir:

* Sprint veya proje retrospektiflerinde.
* Gecikme sonrası değerlendirmelerde.
* Roadmap ve önceliklendirme toplantılarında.
* Müşteri taahhüdü verilmeden önce.
* Teknik borç ve risk planlamasında.
* Ekipler arası güven problemi oluştuğunda.

En faydalı kullanım biçimi, her anti-pattern için şu cümleyi tamamlamaktır:

"Bizde bu davranış şu durumda ortaya çıkıyor: ..."

Bu cümle tamamlanabiliyorsa, anti-pattern yalnızca teorik bir kavram değildir; organizasyonun gerçek çalışma biçiminin bir parçasıdır.

---

## Sonuç

Anti-pattern'ler, organizasyonların tekrar tekrar düştüğü hataları kısa ve görünür hale getirir. Her biri basit görünebilir; fakat her biri sahada defalarca yaşanmış problemlerin yoğunlaştırılmış bir temsilidir.

Bu liste, kitabın ana iddiasını pratik bir kontrol aracına dönüştürür: Yazılım ekipleriyle yaşanan gerilimleri anlamak için yalnızca kişilere değil, sistemi oluşturan varsayımlara, teşviklere, görünürlük eksiklerine ve karar mekanizmalarına bakmak gerekir.

