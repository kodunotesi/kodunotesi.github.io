---
title: "1.1 Yazılım Takımına Yönelik Klişeler"
---

Klişeler durup dudurken oluşmaz. Her klişenin arkasında, bağlamından koparılmış gerçek bir gözlem vardır. Yazılım ekiplerine yönelik klişeler de bu kuralın istisnası değildir. Bu yargılar çoğu zaman yaşanmış deneyimlere dayanır ve bu yargılar deneyimin tamamını değil yalnızca görünen kısmını yansıtır. Klişenin kalıcı olmasını sağlayan şey ise bağlamın kaybolması ve gözlemin sistematik bir etikete dönüşmesidir.

Bu bölümde yaygın klişeleri tek tek ele alacağız. Her birini tanımlamakla kalmayıp, bu klişenin neden oluştuğunu, hangi yapısal koşullar ile beslendiğini ve yazılım ekibinin perspektifinden nasıl göründüğünü inceleyeceğiz.

---

**"Yavaşlar"**

"Yavaşlar" klişesi en yaygın ve en kalıcı olanıdır. Bu yargı genellikle iki şeyin birbirine karıştırılmasından doğar: işin görünen karmaşıklığı ile işin gerçek karmaşıklığı.

Kullanıcı arayüzünde birkaç alanı değiştirmek gibi görünen bir iş, arka planda veri modelinin yeniden tasarlanmasını, birden fazla servisin güncellenmesini ve mevcut sistemde geriye dönük uyumluluğun sağlanmasını gerektirebilir. Bu karmaşıklık dışarıdan görünmez ve dolayısıyla anlaşılamaz.

Bu durumu psikolojide "planlama yanılgısı" olarak da bilinen bilişsel bir eğilim besler. İnsanlar, tamamlayacakları işlerin süresini sistematik olarak olduğundan kısa tahmin etme eğilimindedir. Yazılım geliştirme özelinde bu yanılgı daha da derinleşir, çünkü yazılım geliştirme karmaşıklığı kümülatif ve öngörülemez bir nitelik taşır.

**Örnek:** Bir fintech şirketinde çalışan proje yöneticisi, her sprint sonunda aynı yorumu yapıyordu: "Bu iş neden iki hafta sürdü?" Söz konusu iş, kullanıcı ekranına yeni bir filtreleme alanı eklenmesiydi. Ancak bu değişiklik arka planda üç farklı servisin yeniden yapılandırılmasını, iki legacy sistemle uyumluluğun sağlanmasını ve mevcut performans testlerinin yeniden koşturulmasını gerektiriyordu. Proje yöneticisi ekranı görüyordu; yazılım ekibi ise altta yatan sistemi.

---

**"Anlaşılmaz konuşurlar"**

Teknik terminoloji, yazılım geliştiriciler için kesinlik sağlarken diğer ekipler için belirsizlik yaratır. "Race condition", "schema migration", "N+1 sorunu" veya "teknik borç" gibi kavramlar, teknik olmayan paydaşlar için anlam taşımaz. Bu durum çoğu zaman kasıtlı değildir. Yazılım ekipleri kendi zihinsel modellerini kullanarak konuşur ve bu modellerin diğer paydaşlara aktarılmasının bir maliyet gerektirdiğini her zaman fark etmez.

Yapısal sorun ise şudur: organizasyonlar bu çeviri maliyetini görünür kılacak bir mekanizma sunmaz. Toplantılarda terminoloji köprüsünü kuracak bir rol (iş analisti, teknik ürün yöneticisi gibi) yoksa, her iki taraf da kendi dilinde konuşmaya devam eder ve anlaşıldığını zanneder.

**Örnek:** Bir lojistik firmasında yapılan proje durum değerlendirme toplantısında yazılım ekibi lideri, bir gecikmenin nedenini "veritabanı indekslerinin optimize edilmesi gerekliliği" ile açıkladı. Ürün yöneticisi konuyu anladığını düşünerek onayladı. Ancak sonraki hafta ortaya çıktı ki ürün yöneticisi "indeks" kelimesini raporlama için kullanılan bir Excel listesi olarak anlamıştı. İki haftalık zaman kaybı, aslında tek bir cümlenin farklı yorumlanmasından kaynaklanıyordu.

---

**"İş birliğine kapalıdırlar"**

Bu algı, çoğu zaman yanlış anlaşılmış bir koruma refleksinden doğar. Yazılım ekipleri, dışarıdan gelen değişiklik taleplerine temkinli yaklaşır. Bunun nedeni iş birliğine isteksizlik değil, sistemin bütünlüğünü koruma sorumluluğudur.

Bir yazılım sisteminde yapılan her değişiklik, başka bir yeri etkileme riski taşır. "Şu tabloya bir sütun ekleyelim" gibi görünen basit bir istek, ilgili modülleri, mevcut API sözleşmelerini, veri aktarım süreçlerini etkileyebilir üretilmiş dokümanları güncellenmesini gerektirebilir. Yazılım ekibi bu riskleri gördüğü için yavaşlar; diğer ekipler ise bu yavaşlamayı isteksizlik olarak okur.

Yapısal sorun şudur: yazılım ekibi "hayır" dediğinde, bu cevabın arkasındaki teknik gerekçeyi aktaracak ortak bir dil ve zemin genellikle yoktur. Sonuçta yazılım ekibine "iş birliğine kapalı" etiketi yapıştırılır.

**Örnek:** Otel yönetimi yazılımı geliştiren bir şirkette, satış ekibi yeni bir müşteri için hızlıca özelleştirilmiş bir raporlama modülü istedi. Yazılım ekibi "mevcut raporlama mimarimizle uyumsuz" yanıtını verdi. Satış ekibi bunu "istemiyorlar" olarak yorumladı ve üst yönetime şikayette bulundu. Oysa yazılım ekibi, talebin hayata geçirilmesinin kritik bir mimari değişikliği zorunlu kıldığını ve bu değişikliğin diğer aktif müşterilerin kullandığı modülleri etkileyebileceğini değerlendirmişti.

---

**"Sahaya inmek istemezler"**

Müşterilerine anahtar teslim proje yapan şirketlerde çokça rastlanan bu klişe, özellikle proje sayısının fazla olduğu kurumlarda belirginleşir. Yazılım geliştirme ekiplerinin sürekli sahada olması isteği; diğer ekiplerin sağlanan çözüme güvenlerinin olmaması, sahaya konumlanan yazılımlarda hataların bulunması ve implementasyon ekibinin domain bilgisi eksikliği gibi nedenlerden kaynaklanır.

Ancak sahaya inmemenin arka planında da yapısal bir neden yatar: yazılım geliştirme derin konsantrasyon gerektiren bir iştir. Araştırmalar, bir yazılım geliştiricisinin yoğun çalışma akışına girmesinin ortalama 15-20 dakika aldığını ve her kesintinin bu akışı sıfırladığını ortaya koymaktadır. Saha ziyaretleri ise genellikle tam gün süren, önceden planlanamayan ve bağlam değiştirme maliyeti çok yüksek olan aktivitelerdir. Birden fazla projenin eş zamanlı yürütüldüğü organizasyonlarda bu durum, saha ziyaretleri gibi zaman maliyeti yüksek aktiviteler nedeni ile zaten dar olan kapasitenin daha da daralmasına yol açar.

**Örnek:** Bir liman yönetim sistemi projesinde implementasyon ekibi, yazılım geliştiricilerin sahada bulunmasını talep etti. İki geliştirici iki haftayı sahada geçirdi. Bu sürede bekleyen sprint görevleri tamamlanamadı, bir sonraki müşterinin teslim tarihi kaydı ve yazılım ekibi lideri hem saha hem de ofis baskısıyla aynı anda mücadele etmek zorunda kaldı. Sahaya inme sorunu çözüldü; ama başka bir yerde yeni bir gecikme krizi başladı.

---

**"Müşteri toplantılarına katılmak istemezler"**

Sahaya inmeme klişesiyle yapısal olarak benzerdir. Özellikle müşteri ile ürün arasında proje yönetimi, ürün yönetimi ve iş analisti gibi aracı pozisyonların bulunmadığı organizasyonlarda bu şikayet sıkça duyulur.

Bu talebin arkasında meşru bir ihtiyaç yatar: müşteri isteklerinin teknik açıdan değerlendirilmesi gerekir. Ancak bu değerlendirmenin toplantı sırasında, hazırlıksız ve doğaçlama yapılması yazılım ekibi için yüksek bir belirsizlik ve hata riski taşır. "Yapılabilir mi?" sorusuna anında cevap vermek çoğu zaman ya gerçekçi olmayan taahhütlere ya da "hayır" cevabının yanlış yorumlanmasına yol açar. Gereksinim analizi bir beceridir ve özel rol gerektirir. Bu rol organizasyonda yoksa, yazılım ekibi hem geliştirici hem analist hem de müşteri toplantısı katılımcısı olmak zorunda kalır. Bu durum gerekli koşullar sağlanmaz ise hem verimsizdir hem de hata üretir.

**Örnek:** Bir üretim takip sistemi geliştiren firmada, müşteri toplantılarına yazılım ekibinden kıdemli bir geliştirici düzenli olarak dahil edildi. Toplantılar ortalama üç saat sürüyor, geliştirici kararları gerçek zamanlı olarak not alıyordu. Bir süre sonra bu geliştiricinin sprint hızı diğerlerinin yarısına düştü. Ekip içinde "o artık geliştirici değil, analist" yorumu yapılmaya başlandı. Organizasyon bir geliştiriciyi kaybetmeden bir analist kazanmıştı. Ancak, bunu fark etmemişti.

---

**"Teslim tarihi vermezler"**

En sık karşılaşılan klişelerden biridir ve çoğu zaman yazılım ekiplerinin sorumsuzluğu olarak yorumlanır. Oysa bunun ardında yapısal nedenler yatar.

Yazılım geliştirmede tahmin, diğer mesleklere kıyasla çok daha zor bir eylemdir. Belirsizliğin kendisi bir girdi olduğunda çıktıyı kesin olarak planlamak mümkün değildir. Ürün yol haritasındaki belirsizlikler, "definition of done" kavramının ekipler arasında farklı yorumlanması, çok paydaşlı implementasyon projelerinin karmaşıklığı, kaynak eksikliği ve yıllara yayılmış kod tabanlarının getirdiği teknik borç, teslim tarihi vermeyi yapısal olarak güçleştiren faktörler arasındadır.

**Hofstadter Yasası** bu durumu öz bir biçimde ifade eder: "Her şey tahmin edilenden daha uzun sürer; Hofstadter Yasası'nı hesaba katsanız bile." Öte yandan verilen bir teslim tarihi organizasyonda hemen taahhüt olarak kodlanır. Yazılım ekibi bunu bilir ve belirsiz koşullarda kesin tarih vermekten çekinir. Dışarıdan bu çekimserlik sorumluluk almaktan kaçınmak olarak okunur.

**Örnek:** Hastane otomasyon yazılımı üreten bir yazılım şirketinde ürün yöneticisi, bir sprint planlamasında yeni bir kamu entegrasyon modülü için teslim tarihi istedi. Yazılım ekibi lideri "iki ila dört hafta" aralığını verdi. Ürün yöneticisi bunu "iki hafta" olarak proje planına işledi. İki hafta sonra modül teslim edilemedi. Yazılım ekibi "tarih vermediklerini" söyledi; ürün yöneticisi ise "iki hafta dediler" dedi. İkisi de haklıydı, ama aynı konuşmayı farklı duymuştu.

---

**"Diğer ekiplere üstten bakarlar"**

İletişimsizlik, ekiplerin odak noktalarının ve kaygılarının farklı olması ve nihayetinde ekip kültürleri arasındaki derin uçurumun neden olduğu bu klişe, organizasyonlara ciddi hasar verir. Özellikle mühendislik pratiklerini önceleyen yazılım ekipleri, çözülmeye çalışılan problemin net tanımlanmasını; geçici ve baştan savma çözümler yerine üzerinde düşünülmüş, uzlaşılmış ve sürdürülebilir çözümleri tercih eder.

Ancak bu dinamiğin altında da yapısal bir neden vardır: yazılım ekibi, eksik veya hatalı gereksinimlerin bedelini en ağır biçimde ödeyen taraftır. Geliştirme bittikten sonra ortaya çıkan "aslında böyle değildi" yorumu, yazılım ekibi için emek kaybı anlamına gelir. Bu deneyimi defalarca yaşayan bir ekibin savunmacı ve sorgulayıcı bir tutum geliştirmesi bireysel bir karakter sorunu değil, kötü tasarlanmış bir sürecin çıktısıdır. Ürün, proje ve implementasyon ekipleri tarafından sağlanan eksik veya aceleyle oluşturulmuş gereksinimlerle sürekli karşılaşan yazılım ekiplerinin tepkisi zaman içinde diğer ekiplerin kararlarını sorgulamak yönünde şekillenir. Bu sorgulama, karşı tarafta küçümsenme hissi yaratır.

**Örnek:** Bir kamu yazılım projesinde iş analisti, gereksinimler dokümanını teslim etti. Yazılım ekibi beş kritik belirsizlik tespit etti ve bunları yazılı olarak iletti. İş analisti "bunları toplantıda konuşalım" dedi. Toplantıda yazılım ekibi lideri her maddeyi tek tek açıkladı. Toplantıdan çıkıldığında iş analisti ekibine "yazılım ekibi her şeyi sorguluyor, hiç kolaylaştırmıyorlar" yorumunu yaptı. Yazılım ekibi ise "gereksinimler hâlâ net değil" diye kendi içinde konuştu. İki ekip de aynı toplantıdan çıkmış, ama bambaşka deneyimler yaşamıştı.

---

Bu yedi klişenin ortak noktası yalnızca yazılım geliştirmenin doğasının yeterince anlaşılmaması değildir <span class="bkz-ref" title="1. Brooks, F. P. (1995). The Mythical Man-Month.">(Bkz: 1)</span>. Daha derin bir sorun vardır: bu klişelerin her biri, organizasyonun işleyiş biçiminin doğal bir çıktısıdır. Bağlam olmadan yapılan gözlemler etikete dönüşür; etiketler zaman içinde gerçekmiş gibi muamele görür. Bu döngü kırılmadan, ekipler arasındaki gerilim yönetilemez.

Bu klişelerin nasıl beslendiğini anlamak için bir adım daha atmak gerekir: her ekibin başarıyı farklı tanımladığı ve bu tanımların yapısal olarak çatıştığı gerçeğini görmek. Bu konu, bir sonraki bölümün konusudur.

---


