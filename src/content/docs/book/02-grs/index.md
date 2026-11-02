---
title: "GİRİŞ"
slug: book/02-giris
---

Bir toplantı düşünün: haftalık proje toplantısı başlamak üzere. Masanın etrafında ürün yöneticisi, proje yöneticisi, saha implementasyonunu yapan ekibin lideri ve yazılım takımından iki kişi var. Toplantı, daha başlamadan gergin.

Müşteri tarafında beklentiler artmış. Teslim tarihleri yaklaşmış. Sahadan gelen geri bildirimler sertleşiyor. Proje yöneticisi proje planını ve önceki hafta planlanan taskların listelendiği Jira dashboard'unu aynı ekranda yan yana açıyor. Ürün yöneticisi ve implementasyon takım lideri de kendi bilgisayarlarında aynı Jira dashboard'ına odaklanmış durumda.

İlk cümle proje yöneticisinden geliyor; Jira dashboard'ında henüz tamamlanmamış tasklardan birini işaret ederek:

> "Bu iş neden hala bitmedi? Geçen hafta yaptığımız planlamaya göre bu işin UAT aşamasına geçmiş olması gerekiyordu."

Yazılım ekibi açıklama yapmaya çalışıyor. Teknik bağımlılıklardan, veri modelindeki değişikliklerden, performans risklerinden bahsediyorlar. Proje yöneticisi için bu açıklamalar yeterli değil. Toplantı, kısa sürede bir çözüm arayışından çok bir savunma ve suçlama seansına dönüşüyor.

Bu sahne kurgusaldır ve hiçbir şirkete özgü değildir. Benzer toplantılar, farklı sektörlerde, farklı ekiplerle her gün tekrar eder. Cümleler değişir, kişiler değişir, şirketler değişir. 

Ancak yapı aynıdır.

- Ürün ekipleri yazılım ekiplerini yavaş olmakla suçlar. 
- Proje ekipleri teslimatların geciktiğini söyler. 
- Implementasyon ekipleri sahadaki baskıyı vurgular. 
- Yazılım ekipleri ise anlaşılmadıklarını düşünür.

Bu kitap, bu döngünün neden tekrar tekrar oluştuğunu anlamak için yazıldı. Yazılım ekiplerini savunmayı ya da diğer ekipleri suçlamayı değil, daha temel bir iddiayı ortaya koymayı amaçlar:

**Sorun bireylerde değildir. Sorun, sistemdedir.**

Organizasyonlar, yazılım geliştirmeyi çoğu zaman bir üretim faaliyeti gibi ele alır. Gereksinimlerin net olduğu, işlerin planlanabildiği ve çıktının öngörülebilir olduğu varsayılır. Ancak yazılım geliştirme, doğası gereği bu varsayımlarla çelişir.

- Belirsizlik vardır.
- Karmaşıklık vardır.
- Bağımlılıklar vardır.

Belirsizliklerin, karmaşıklıkların ve bağımlılıkların önemli bir kısmı doğrudan yazılım ekiplerinin kontrolünde değildir. Müşteriler, kurum içi paydaşlar, regülasyonlar, standartlar, kullanılan teknolojiler ve trendler yazılım geliştirme sürecinin doğrusal bir üretim bandı olarak işletilmesini zorlaştırır. Güncel yazılım geliştirme metodolojilerinin çoğu da lineer yaklaşım yerine sürekli iyileştirme ve sürekli teslimatı mümkün kılan yöntemleri öne çıkarır.

Bu gerçekler göz ardı edildiğinde, organizasyonlarda yazılım ekiplerinden gerçekçi olmayan beklentiler oluşur. Organizasyonlar bu beklentileri süregelen bir gerilim ortamında yönetmek için efor harcamak zorunda kalır. Yazılım ekipleri ise bu beklentiler karşısında ya savunmaya geçer ya da sessizce kendi bildiklerini okumaya devam eder.

Sonuçta ortaya çıkan şey, bireylerin başarısızlığı değil, sistemin ürettiği bir gerilimdir.

Bu gerilim, yapay zekâ (YZ) destekli yazılım geliştirme araçlarının yaygınlaşmasıyla ortadan kalkmıyor; yeni bir biçim kazanıyor. Kod yazmanın görünen maliyeti hızla düşüyor: bir prototip birkaç saatte, bir ekran birkaç dakikada ortaya çıkabiliyor. Bu, gerçek ve önemli bir verimlilik kazancıdır. Ancak YZ kod yazmayı ucuzlatırken; neyin yazılması gerektiğine karar vermeyi, yazılanı doğrulamayı, sistemin bütününü anlamayı ve sonuçların sahipliğini üstlenmeyi aynı ölçüde ucuzlatmıyor. Üretim hızlandıkça belirsizlik, karmaşıklık ve bağımlılıklarla yüzleşme anı da öne geliyor.

Bu nedenle "yazılım geliştirme bir üretim hattıdır" varsayımı, YZ çağında zayıflamak yerine yeni bir kılıkla geri dönüyor: "Kodu artık makine yazıyorsa, iş neden hâlâ uzun sürüyor?" Kitabın her bölümünde, bu sorunun izini de süreceğiz.

Bu kitap boyunca şu sorulara cevap arayacağız:

- Yazılım ekipleri neden sürekli "yavaş" olarak algılanır?
- "Küçük" görülen işler neden beklenenden uzun sürer?
- Neden değişiklik yapmak bu kadar zor görünür?
- Neden aynı çatışmalar farklı şirketlerde tekrar eder?

Bu soruların cevapları, yüzeyde görünen açıklamalardan daha derindedir.

Bu kitap dört bölümden oluşur.

- İlk bölümde, yazılım ekiplerine yönelik algının nasıl oluştuğunu inceleyeceğiz.
- İkinci bölümde, yazılım geliştirmenin teknik doğasını ele alacağız.
- Üçüncü bölümde, bu iki katmanın organizasyon içinde nasıl çatışmaya dönüştüğünü analiz edeceğiz.
- Dördüncü bölümde ise bu problemlere sistemsel çözümler önereceğiz.

Bu kitap, hızlı çözümler veya kolay cevaplar sunmaz. Bunun yerine doğru soruları sormaya çalışır; çünkü doğru sorular sorulmadan doğru çözümler bulunamaz.

Anlatılan örneklerde kendinizi, ekibinizi veya organizasyonunuzu görmeniz tesadüf olmayacaktır. Çünkü bu problemler bireysel değil, yapısaldır; yapısal problemler de ancak yapısal çözümlerle giderilebilir.

Bu kitap, o çözümlere giden yolu açmayı amaçlar.

