---
title: "1.3 Görünmeyen İş Yükü"
slug: book/03-bolum-1-alginin-kokeni-neden-hep-yazilim-ekibi/04-13-gorunmeyen-is-yuku
---

Yazılım geliştirme sürecinin büyük bir kısmı, proje yönetim araçlarında görünmez. Sprint board’larında listelenmez, Jira ticket’larına dönüşmez, raporlara yansımaz. Ancak bu görünmezlik, söz konusu işlerin yapılmadığı anlamına gelmez. Tam tersine, bu işlerin büyük çoğunluğu "görünür" işlerin var olabilmesini sağlayan zemin niteliğindedir.

### 1.3.1 Görünmeyen İşin Anatomisi

Yazılım geliştirme ekiplerinin günlük iş yükünün önemli bir kısmı şu başlıklar altında toplanabilir:

**Teknik borç ve refactoring:** Her yazılım geliştirme sürecinde, hız veya kaynak kısıtı nedeniyle "daha iyi yapılabilirdi" kararları alınır. Bu kararların birikimi teknik borç olarak adlandırılır. Teknik borç, zaman içinde her yeni özelliğin maliyetini artırır; eski kodun anlaşılması, değiştirilmesi ve test edilmesi giderek daha fazla zaman alır. Refactoring ise bu borcun geri ödenmesidir: mevcut davranışı değiştirmeden iç yapıyı iyileştirmek. Bu çalışma dışarıdan görünmez, çünkü yeni bir özellik sunmaz; ancak var olan özelliklerin daha güvenli, daha hızlı ve daha düşük maliyetle geliştirilebilmesini sağlar.

**Altyapı ve bağımlılık yönetimi:** Yazılım sistemleri bağımlılıklar üzerine kurulur: kütüphaneler, framework’ler, veritabanları, üçüncü taraf servisler. Bu bağımlılıkların güncellenmesi, güvenlik açıklarının kapatılması ve eski teknolojilerin yenileriyle değiştirilmesi, sürekli devam eden bir iş yükü oluşturur. Dışarıdan bakıldığında bu çalışmalar "hiçbir şey değişmedi" izlenimi verir; oysa "hiçbir şeyin bozulmaması" için ciddi bir efor harcanmıştır.

**Hata araştırması:** Bir hatanın düzeltilmesi, zaman zaman düzeltmenin kendisinden çok daha uzun süren bir araştırma aşaması gerektirir. Hatanın hangi koşulda oluştuğunu anlamak, sistemi gözlemlemek, logları incelemek ve kök nedeni tespit etmek görünmez bir çalışmadır. Ticket üzerinde "bug fix: 2 saat" görünür; ancak öncesindeki dört saatlik araştırma görünmez.

**Bilgi aktarımı ve dokümantasyon:** Yeni ekip üyelerinin sisteme dahil edilmesi, kritik bilginin aktarılması ve dokümantasyonun güncellenmesi yazılım ekiplerinin önemli bir zamanını alır. Bu çalışma doğrudan bir özellik veya düzeltme üretmez. Ancak yapılmadığında bilgi siloları oluşur, sistem bilgisi birkaç kişide yoğunlaşır ve ekibin kolektif kapasitesi azalır.

**Koordinasyon ve iletişim yükü:** Günlük toplantılar, planlama oturumları, gereksinimlerin netleştirilmesi için yapılan görüşmeler, code review’lar ve teknik tartışmalar için harcanan süre görünmez iş yükünün önemli bir parçasıdır. Bu süre sprint board’larına yansımaz; ancak gerçek bir kapasite tüketimidir.

### 1.3.2 Neden Görünmez?

Görünmez iş yükünün temel nedeni, organizasyonların yazılım geliştirmeyi çıktı (output) üzerinden ölçmesidir. Sprint hızı tamamlanan story point sayısını gösterir. Burndown grafiği kapatılan ticket’ları gösterir. Yol haritası teslim edilen özellikleri listeler.

Bu ölçüm araçları, teslim edilen değeri görünür kılarken teslim etmeyi mümkün kılan çalışmayı görünmez bırakır. Sonuç olarak şu paradoks ortaya çıkar: görünür iş ödüllendirilir, görünmez iş görmezden gelinir.

Bir geliştirici yeni bir özellik teslim ettiğinde bu başarı olarak değerlendirilir. Aynı geliştirici iki hafta boyunca kritik bir güvenlik açığını kapatmak için altyapıyı yeniden yapılandırdığında, sprint review’da gösterecek somut bir çıktısı yoktur. Performansı düşük görünebilir; oysa ekip için kritik bir riski ortadan kaldırmıştır.

**Örnek:** Bir SaaS şirketinde kıdemli bir geliştirici, üretim ortamında aralıklı olarak ortaya çıkan ve müşteri şikayetlerine yol açan bir performans sorununu araştırmaya başladı. Sorunun kök nedeni iki servis arasındaki senkronizasyon problemi olarak tespit edildi. Düzeltme, üç günlük mimari bir değişiklik gerektirdi. Sprint sonunda bu geliştirici yalnızca bir story point tamamlamıştı; ekip tarafından "düşük verimli bir hafta" olarak değerlendirildi. Müşteri şikayetlerinin kesilmesi ise doğrudan bu çalışmayla ilişkilendirilmedi.

### 1.3.3 Teknik Borcun Birikimi

Teknik borç kavramı, ilk olarak Ward Cunningham tarafından 1992 yılında tanımlandı. Cunningham, yazılım sistemlerinde bilinçli olarak alınan kısa vadeli kararların uzun vadede maliyete dönüştüğünü bir finansal metafor üzerinden açıkladı: tıpkı borç gibi, teknik borç da faiz öder. Her yeni geliştirme, birikmiş teknik borç üzerine inşa edildiğinde daha maliyetli hale gelir <span class="bkz-ref" title="3. McConnell, S. (2004). Code Complete.">(Bkz: 3)</span>.

Bu birikimin somut sonuçları şöyle gözlemlenir:

- Yeni bir özellik eklemek giderek daha uzun sürer.
- Küçük değişiklikler beklenmedik hatalara yol açar.
- Test yazmak zorlaşır, çünkü bileşenler birbirine sıkı sıkıya bağlıdır.
- Yeni geliştiriciler sistemi anlamakta giderek daha çok zorlanır.
- Belirli bir noktadan sonra "her şeyi yeniden yazalım" tartışması başlar.

Bu sürecin kritik özelliği, dışarıdan görünmemesidir. Sistem çalışmaya devam eder; ancak her geliştirme adımı biraz daha pahalıya gelir. Organizasyon "yazılım ekibi neden yavaşladı?" diye sorar; oysa asıl soru "hangi kararlar bu yavaşlamayı kaçınılmaz kıldı?" olmalıdır.

**Örnek:** Beş yıl önce kurulan bir e-ticaret platformunda, başlangıçta "hızlı çıkalım" kararıyla alınan mimari tercihler zaman içinde birikti. Her yeni geliştirme bu birikimin üzerine inşa edildi. Beşinci yılda aynı türde bir özelliği geliştirmek, birinci yıla göre üç kat daha uzun sürüyordu. Ekip değişmişti, teknoloji değişmişti; ama birikmiş borç yerli yerinde duruyordu.

### 1.3.4 Görünmeyen İşin Organizasyonel Maliyeti

Görünmez iş yükünün uzun vadeli maliyeti yalnızca teknik değildir; organizasyonel ve insani boyutları da vardır.

**Geliştirici yorgunluğu:** Görünmez işin sürekli göz ardı edilmesi, yazılım geliştiricilerin motivasyonunu aşındırır. Sistem borcunu görebilen ancak azaltmak için zaman bulamayan bir geliştirici, giderek artan bir çaresizlik hissiyle çalışır. Bu durum, deneyimli geliştiricilerin organizasyondan ayrılmasına zemin hazırlar; beraberinde kritik sistem bilgisinin de yitirilmesine neden olur.

**Kırılgan sistemler:** Görünmez bakım işlerinin ertelenmesi sistem kırılganlığını artırır. Güncellenmemiş bağımlılıklar güvenlik açığına dönüşür. Refactoring yapılmamış bileşenler beklenmedik durumlarda hata üretir. Dokümante edilmemiş sistemler, kritik bilgiye sahip tek bir geliştiricinin ayrılmasıyla aniden anlaşılamaz hale gelir.

**Hız kaybının yanlış yorumlanması:** Görünmeyen iş yükü göz ardı edildiğinde ekibin hız kaybı yanlış yorumlanır. Organizasyon "geliştirici yeterliliği" veya "süreç verimsizliği" gibi açıklamalara yönelir. Oysa hız kaybının gerçek nedeni birikmiş teknik borç ve ertelenmiş bakım işleridir. Doğru tanı konulmadan uygulanan çözümler (daha fazla geliştirici işe almak, daha sıkı takip, daha kısa sprint döngüleri gibi) sorunu çözmez aksine çoğu zaman derinleştirir.

**Örnek:** Hızlı büyüyen bir girişimde yazılım ekibi iki yıl boyunca yeni özellik geliştirmeye odaklandı. Refactoring talepleri "şimdi değil, ilerleyen sprintlerde" kararıyla ertelendi. İki yılın sonunda ekip her sprint daha az iş çıkarır hale geldi. Yönetim çözüm olarak iki yeni geliştirici işe aldı. Yeni geliştiriciler sistemi anlamakta güçlük çekti; mevcut ekip bu geliştiricilere destek vermek için zamanlarının önemli bir bölümünü harcadı. Sprint hızı gerilemeye devam etti.

---

Görünmeyen iş yükü, algı ile gerçeklik arasındaki en büyük boşluklardan biridir. Bu boşluğu kapatmanın yolu, yazılım geliştirmeyi yalnızca çıktı üzerinden ölçen yaklaşımın ötesine geçmektir. Bakım, iyileştirme ve teknik sağlık, özellik geliştirme kadar gerçek bir iştir; yalnızca farklı bir görünürlüğe sahiptir. Bu gerçeklik kabul edilmeden, ekip kapasitesine ilişkin yapılan her planlama eksik kalır <span class="bkz-ref" title="3. McConnell, S. (2004). Code Complete.">(Bkz: 3)</span>.

---


