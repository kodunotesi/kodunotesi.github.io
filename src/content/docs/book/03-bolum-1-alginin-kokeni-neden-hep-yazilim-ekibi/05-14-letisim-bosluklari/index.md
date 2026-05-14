---
title: "1.4 İletişim Boşlukları"
---

Yazılım ekipleri ile iş ekipleri arasındaki iletişim sorunu yalnızca farklı kelimeler kullanmaktan ibaret değildir. Daha derinde, birbirinden farklı zihinsel modeller, risk algıları ve problem çerçeveleme biçimleri yatar. Bu farklılıklar, aynı toplantıda oturan, aynı konuyu konuştuğunu sanan iki tarafın aslında birbirini duymadığı bir ortam yaratır.

### 1.4.1 İki Farklı Dil

Yazılım ekipleri deterministik ve kesin ifadeler kullanmaya eğilimlidir. Bir sistemin nasıl davrandığını, hangi koşullarda ne ürettiğini ve hangi sınırlar içinde çalıştığını olabildiğince net tanımlamaya çalışırlar. Bu kesinlik eğilimi teknik doğruluk için bir zorunluluktur. Yazılımda muğlak bir gereksinim, muğlak bir sisteme dönüşür.

İş ekipleri ise belirsizlikle daha rahat çalışır. "Yaklaşık şöyle bir şey istiyoruz" veya "büyük ihtimalle bu yönde gideceğiz" gibi ifadeler, gereksinimin hâlâ şekillendiğini ve esnekliğe ihtiyaç duyulduğunu gösterir. Bu esneklik iş dünyasında çoğu zaman bir erdem olarak değerlendirilir.

Bu iki yaklaşım bir arada var olduğunda, aynı sözcükler farklı anlamlar taşır. "Mümkün mü?" sorusu iş ekibi için "yaklaşık olarak yapılabilir mi?" anlamına gelirken, yazılım ekibi için "tam olarak, şu koşullar altında, şu sürede yapılabilir mi?" anlamına gelir. Bu iki soru arasındaki fark büyüktür; ama toplantı sırasında çoğu zaman görünmez.

### 1.4.2 Mesajın Çarpıtılması: Söylenen ile Duyulan

Yazılım ekiplerinin kullandığı belirli ifadeler, diğer ekipler tarafından sistematik olarak farklı yorumlanır. Bu çarpıtma çoğu zaman kasıtsızdır; ancak sonuçları kalıcıdır.

| Yazılım ekibinin söylediği | Diğer ekiplerin duyduğu |
|---|---|
| "Bu mümkün değil." | "Yapmak istemiyorlar." |
| "İki ila dört hafta sürer." | "İki haftada biter." |
| "Bu biraz karmaşık." | "Bahane üretiyorlar." |
| "Daha fazla bilgiye ihtiyacım var." | "Başlamak istemiyorlar." |
| "Bunu test etmemiz gerekiyor." | "Gereksiz yere yavaşlatıyorlar." |
| "Mevcut mimariye uymaz." | "Esneklik göstermiyorlar." |

Bu çarpıtmaların ortak özelliği, yazılım ekibinin teknik bir gerçeği aktarırken karşı tarafın bir tutum veya niyet okumasıdır. Teknik kısıtlamalar iş birliğine kapalılık olarak yorumlanır. Belirsiz tahminler taahhüt olarak kaydedilir. Uyarılar direniş olarak algılanır.

**Örnek:** Bir yazılım ekibi, planlanan entegrasyonun mevcut sisteme eklenebilmesi için önce veri modelinin yeniden yapılandırılması gerektiğini belirtti ve bu çalışmanın iki sprint sürebileceğini aktardı. Proje yöneticisi bu mesajı "entegrasyonun iki sprintte tamamlanacağı" şeklinde anladı ve planını buna göre güncelledi. İki sprint sonunda entegrasyon henüz başlamamıştı; veri modeli çalışması tamamlanmış, ancak entegrasyon geliştirmesi başlamamıştı. Tarafların birbirini suçlamaya başladığı bu noktada asıl sorun, aynı cümleden farklı anlamların çıkarılmış olmasıydı.

### 1.4.3 Belirsizlik Toleransı ve Risk Algısı Farkı

Yazılım geliştirme sürecinde belirsizlik bir kayıp değil, bir gerçektir. Sistem nasıl davranacak, hangi uç durumlar ortaya çıkacak, bağımlılıklar nasıl tepki verecek — bunların tamamı ancak geliştirme ilerledikçe netleşir. Bu nedenle yazılım ekipleri belirsizliği ifade etmeye eğilimlidir: "Şu an kesin bir şey söyleyemem", "Bağımlılıkları incelemem gerekiyor", "Risk var ama boyutunu henüz bilemiyorum."

İş ekipleri ise çoğu zaman belirsizliği bir bilgi eksikliği veya hazırlıksızlık göstergesi olarak okur. Paydaşlara aktarılabilir ve yönetilebilir bir yanıt beklerler. "Risk var ama boyutunu bilmiyorum" ifadesi proje planına işlenemez; dolayısıyla ya görmezden gelinir ya da küçümsenir.

Bu fark, özellikle risk iletişiminde ciddi sorunlara yol açar. Yazılım ekibi bir riski erken ve açık biçimde dile getirdiğinde, bu uyarı çoğu zaman ciddiye alınmaz. Aynı risk gerçekleştiğinde ise "neden önceden söylemediniz?" sorusu gelir. Yazılım ekibi "söyledik" der; diğer ekip "ama bu kadar ciddi olduğunu anlamadık" der. Her ikisi de haklıdır.

**Örnek:** Bir yazılım ekibi, yeni modülün eski sistemle entegrasyonunda "veri tutarlılığı riski" olduğunu sprint planlamasında dile getirdi. Bu ifade proje planında bir aksiyon maddesi olarak değil, genel bir not olarak kaldı. Birkaç hafta sonra üretim ortamında veri tutarsızlığı yaşandı. Toplantıda yazılım ekibi uyardığını hatırlattı. Diğerleri bunu hatırlıyordu; ancak o uyarının bu kadar ciddi bir soruna işaret ettiğini anlamamışlardı.

### 1.4.4 Güven Erozyonu ve Kırık Telefon Etkisi

İletişim boşlukları tek seferlik olsaydı, kolayca düzeltilebilirdi. Asıl sorun, bu boşlukların tekrarlanması ve zamanla güven erozyonuna dönüşmesidir.

Yazılım ekibinin her uyarısı yanlış yorumlandığında, ekip uyarılarını daha üstü kapalı yapmaya başlar. "Söyledik ama dinlemediler" deneyimi biriktikçe iletişim giderek daha savunmacı bir hal alır. Öte yandan diğer ekipler, yazılım ekibinin her "bu karmaşık" ifadesini bir bahane olarak görmeye alışır. İki taraf arasındaki iletişim, bilgi aktarımı olmaktan çıkıp birer pozisyon savunmasına dönüşür.

Bu noktada bir başka sorun devreye girer: kırık telefon etkisi. Bir gereksinim organizasyon içinde el değiştirdikçe yalnızca bilgi kaybına uğramaz; aynı zamanda yeniden yorumlanır. Her ekip problemi kendi uzmanlık alanının diliyle yeniden ifade eder. Operasyon ekibi iş akışını düşünür, proje yöneticisi planlama açısından yaklaşır, ürün yöneticisi kapsam ve öncelik perspektifiyle değerlendirir, yazılım ekibi ise teknik risk ve mimari etkileri görür. Bu yeniden yorumlama zinciri ilerledikçe, başlangıçtaki ihtiyaç zaman zaman tamamen farklı bir probleme dönüşebilir.

Müşteriden implementasyon ekibine, implementasyon ekibinden proje yöneticisine, proje yöneticisinden ürün yöneticisine, ürün yöneticisinden yazılım ekibine ulaşan bir gereksinim; her aktarımda biraz anlam yitirir, biraz bağlam düşer, biraz öncelik değiştirir. Sonunda yazılım ekibinin önündeki problem tanımı, müşterinin orijinal ihtiyacıyla yalnızca uzaktan benzeşebilir.

**Örnek:** Bir müşteri, kullanıcıların günlük operasyon sırasında aynı raporu sürekli son 24 saat filtresiyle açtığını ve bu nedenle zaman kaybettiklerini belirterek, raporun varsayılan tarih aralığının değiştirilmesini istedi. Implementasyon ekibi bu talebi “raporlama ekranı kullanıcıları yavaşlatıyor” şeklinde özetledi. Proje yöneticisi bunu “raporlama performansı iyileştirilmeli” başlığıyla ürün yönetimine aktardı. Ürün yönetimi ise problemi sistem performansı perspektifiyle değerlendirerek yazılım ekibine “raporlama modülünde performans optimizasyonu gerekli” şeklinde iletti.

Yazılım ekibi bu bilgiyle kapsamlı bir performans analizi başlattı; sorgu süreleri incelendi, indeks stratejileri değerlendirildi ve altyapı tarafında optimizasyon planları hazırlandı. Oysa müşterinin gerçek ihtiyacı yalnızca varsayılan filtre değerinin değiştirilmesiydi ve bu değişiklik birkaç dakikalık bir geliştirmeyle çözülebilecek kadar basitti.

Sorun teknik yetersizlik değildi. Sorun, gereksinimin her aktarımda yeniden yorumlanması ve sonunda bambaşka bir probleme dönüşmesiydi.

---

