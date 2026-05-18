---
title: "1.5 İlk Çatışma Noktaları"
slug: book/03-bolum-1-alginin-kokeni-neden-hep-yazilim-ekibi/06-15-ilk-catisma-noktalari
---

Çatışmalar aniden ortaya çıkmaz. Önceki bölümlerde ele alınan yapısal koşullar - hizalanmamış başarı kriterleri, görünmez iş yükü, iletişim boşlukları - belirli tetikleyicilerle bir araya geldiğinde somut çatışmaya dönüşür. Bu tetikleyiciler öngörülebilir niteliktedir; farklı organizasyonlarda, farklı ekiplerle, farklı sektörlerde tekrar tekrar aynı biçimlerde ortaya çıkarlar.

Bu bölümde bu tetikleyicileri tek tek inceleyeceğiz.

### 1.5.1 Kapsam Değişimi: Görünmez Maliyet

Kapsam değişimi, yazılım geliştirme projelerinde en sık yaşanan çatışma tetikleyicisidir. Bir özelliğin eklenmesi, değiştirilmesi veya kaldırılması — dışarıdan bakıldığında küçük bir düzeltme gibi görünür. Yazılım ekibi için ise bu değişiklik çoğu zaman sistemin yeniden değerlendirilmesi anlamına gelir.

Bunun nedeni, yazılım sistemlerinin birbirine bağlı bileşenlerden oluşmasıdır. Bir noktada yapılan değişiklik, diğer noktaları etkiler. "Sadece şu alanı ekleyin" isteği; veri modelini, API sözleşmelerini, doğrulama kurallarını, mevcut testleri ve bazen güvenlik katmanını etkileyebilir. Bu bağlantılar dışarıdan görünmez; dolayısıyla değişikliğin maliyeti de görünmez.

Kapsam değişiminin özellikle sorunlu bir boyutu vardır: değişikliği talep eden taraf için maliyet sıfır görünür. Ürün yöneticisi bir özelliği yol haritasına eklediğinde kendi açısından bir kayıp yaşamaz. Proje yöneticisi müşteri talebini kabul ettiğinde yalnızca bir satır daha eklemiş olur. Yazılım ekibi ise bu eklemenin gerçek maliyetini hesaplamak ve karşılamak zorunda kalır.

Bu asimetri, kapsam yönetimini yazılım ekibinin tek başına üstlendiği bir yük haline getirir. Ekip "hayır" dediğinde dirençli görünür; "evet" dediğinde ise ilerleyen süreçte beklenmedik gecikmelerin sorumlusu haline gelir.

**Örnek:** Bir yazılım ekibi, dört haftalık bir sprint planlaması yaptı. Planlamanın üçüncü haftasında ürün yöneticisi, müşteri toplantısından dönerek yeni bir özellik talebini "sadece küçük bir ek" olarak iletti. Yazılım ekibi bu talebin mevcut sprint kapsamıyla çakışacağını belirtti. Ürün yöneticisi "ama bu gerçekten küçük bir şey" dedi. Yazılım ekibi analiz yaptı ve değişikliğin üç farklı modülü etkilediğini tespit etti. Sprint başındaki plan bozuldu, öncelikler yeniden sıralandı, taahhüt edilen bir başka teslimat ertelendi. Sprint sonunda proje yöneticisi gecikme nedenini sordu.

### 1.5.2 Zaman Baskısı: Hızın Gerçek Bedeli

"Daha hızlı yapılabilir mi?" sorusu, yazılım ekiplerinin en sık karşılaştığı baskı biçimidir. Bu sorunun arkasında çoğu zaman meşru bir iş ihtiyacı yatar: müşteri bekliyor, rekabet baskısı var, teslim tarihi sözü verilmiş. Buna rağmen, hız baskısının yazılım geliştirme üzerindeki etkisi çoğu zaman beklenilenin tersidir.

Frederick Brooks, *The Mythical Man-Month* adlı kitabında bunu net biçimde ortaya koyar: geciken bir projeye insan kaynağı eklemek projeyi daha da geciktirir. Yeni ekip üyeleri sistemi öğrenmek için zamana ihtiyaç duyar; mevcut ekip bu öğretim sürecinde üretkenliğini kaybeder; iletişim maliyeti artar. Bu gözlem "Brooks Yasası" olarak bilinir ve onlarca yıllık deneyimle doğrulanmış durumdadır <span class="bkz-ref" title="1. Brooks, F. P. (1995). The Mythical Man-Month.">(Bkz: 1)</span>.

Hız baskısının daha doğrudan bir maliyeti ise teknik borç üretimidir. Zaman kısıtı altında çalışan yazılım ekipleri özellikleri kabaca geliştirir: testler yazılmaz, mimari kararlar ertelenir, güvenlik kontrolleri atlanır, hata yönetimi basitleştirilir. Kısa vadede sistem teslim edilir uzun vadede bu kararların her biri bakım maliyeti olarak geri döner. Hız baskısı altında teslim edilen her özellik, gelecekteki her özelliğin maliyetini artırır.

Bu dinamiğin en tehlikeli tarafı, maliyet ile faturanın farklı zamanlarda ve farklı kişilere kesilmesidir. Hız kararını veren yönetici veya ürün yöneticisi, altı ay sonra yavaşlayan sistemi başka bir sorunun çıktısı olarak görür. Maliyeti ödeyen ise o sırada ekipte çalışan geliştirici ve son kullanıcıdır.

**Örnek:** Bir yazılım ekibi, stratejik öneme sahip bir müşteri için modülü altı haftada teslim etmesi gerektiğini öğrendi. Normal koşullarda on iki haftalık bir iş olduğu değerlendirildi. Yönetim "bu müşteri çok önemli, nasıl yapacağımızı bulun" dedi. Ekip birçok kısa yolu kabul ederek altı haftada teslim etti. Müşteri memnun kaldı. Ancak üç ay sonra aynı modüle yeni bir gereksinim eklenmesi gerektiğinde, yazılım ekibi mevcut yapının bunu kaldırmayacağını belirtti. Yeniden yazım kararı alındı. Bu sefer gereken süre on altı haftaydı.

### 1.5.3 Önceliklendirme Çatışmaları

Her ekip kendi işini en öncelikli olarak görür. Bu doğal bir eğilimdir; ancak organizasyon düzeyinde ele alınmadığında süregelen bir gerilim kaynağına dönüşür.

Ürün ekibi yeni özelliklerin hızlı geliştirilmesini ister. Proje ekibi taahhüt edilen teslimatların zamanında yapılmasını ister. Implementasyon ekibi sahadaki kritik hataların önce giderilmesini ister. Yazılım ekibi ise teknik borcun azaltılması ve altyapının sağlıklı tutulması gerektiğini düşünür. Bu taleplerin tamamı meşrudur; ancak sınırlı bir kapasite üzerinde eş zamanlı baskı oluştururlar.

Önceliklendirme konusunda net bir karar mekanizması olmadığında, çatışma kaçınılmazdır. Yazılım ekibi kimin talebini önceliklendirir? Hangi kritere göre? Bu kararı kim verir? Bu sorular yanıtsız kaldığında, önceliklendirme çoğu zaman en çok baskı yapana göre şekillenir. Bu durum, hem kaliteyi düşürür hem de ekibin yönlendirilebileceği izlenimini güçlendirir.

**Örnek:** Bir yazılım ekibi aynı anda üç farklı yönden gelen taleple karşı karşıya kaldı: proje yöneticisi taahhüt edilen entegrasyonun bitmesini istiyordu, ürün yöneticisi yeni pazara açılış için kritik bir özelliğin hızla hazırlanmasını talep ediyordu, implementasyon ekibi ise üretim ortamında devam eden bir performans sorununa öncelik verilmesini istiyordu. Üç talep de meşruydu. Yazılım ekibi lideri hangisini önceliklendireceğine karar veremedi ve bu kararı üst yönetime iletti. Üst yönetim "hepsini yapın" dedi.

### 1.5.4 Beklenti-Gerçeklik Açığı

Yazılım geliştirme sürecinde en sarsıcı çatışma anlarından biri, paydaşların geliştirilen ürünü ilk kez gördüğü andır. Aylar boyunca süren çalışmanın ardından yapılan demo toplantısında "bu benim beklediğim şey değil" cümlesi, her taraf için farklı bir anlam taşır.

Paydaş için bu cümle, beklentilerinin karşılanmadığını ve sürecin yanlış ilerlediğini ifade eder. Yazılım ekibi için ise bu cümle, aylar boyunca verilen ve onaylanan gereksinimlere uygun çalışıldığını, ancak o gereksinimlerin yanlış yazıldığını ya da yanlış anlaşıldığını gösterir.

Bu açık, çoğu zaman gereksinim belirsizliğinden kaynaklanır. Yazılı bir gereksinim belgesi, paydaşın zihnindeki gerçek beklentiyi tam olarak yansıtmayabilir. Paydaş onayladığını sandığı belgeyi, aslında yüzeysel olarak değerlendirmiştir. Yazılım ekibi ise bu belgeyi teknik kesinlikle yorumlamış ve uygulamıştır.

Beklenti-gerçeklik açığı ne kadar geç ortaya çıkarsa, maliyeti o kadar yüksek olur. Erken bir geri bildirim küçük bir düzeltmeye yol açarken, teslimattan sonra gelen "bu benim istediğim değil" yorumu bazen aylar süren yeniden çalışmaya dönüşebilir.

**Örnek:** Bir yazılım ekibi, altı aylık geliştirme sürecinin sonunda müşteriye demo yaptı. Müşteri sistemi gördükten sonra "arayüz çok karmaşık, kullanıcılarım bunu anlayamaz" dedi. Yazılım ekibi gereksinim belgesinin arayüz tasarımına dair hiçbir kısıt içermediğini belirtti. Müşteri "ama biz sizden kullanımı kolay bir sistem istemiştik?" dedi. İki taraf da haklıydı; ama "kullanımı kolay" ifadesinin ne anlama geldiği hiçbir zaman netleştirilmemişti.

### 1.5.5 Çatışmanın Tırmanma Döngüsü

Yukarıda ele alınan tetikleyicilerin her biri, tek başına yönetilebilir bir sorundur. Asıl tehlike, bu tetikleyicilerin birbiriyle etkileşime girmesidir.

Kapsam değişimi zaman baskısıyla birleştiğinde kalite düşer. Kalite düşüşü sahada hatalara yol açar. Sahada hatalar çıkınca implementasyon ekibi baskı uygular. Bu baskı yazılım ekibini savunmaya iter. Savunmaya geçen yazılım ekibi iletişimi azaltır. Azalan iletişim beklenti-gerçeklik açığını büyütür. Büyüyen açık yeni bir kapsam değişikliğine zemin hazırlar.

Bu döngü kendi kendini besler ve giderek daha yıkıcı hale gelir. Başlangıçta teknik bir anlaşmazlık olan durum, zamanla kişisel suçlamalara dönüşür. "Yazılım ekibi yavaş" ifadesi yerini "yazılım ekibi anlaşılmaz" ifadesine bırakır, o da "yazılım ekibi güvenilmez" ifadesine.

Çatışmanın bu tırmanma dinamiği, bireylerin niyetinden bağımsızdır. İyi niyetli, yetenekli insanlar da bu döngüye girebilir. Çünkü döngüyü yaratan bireyler değil, yapıdır.

Bu tür çatışmaların kökeni bireylerde değil, sistemdedir.

---


