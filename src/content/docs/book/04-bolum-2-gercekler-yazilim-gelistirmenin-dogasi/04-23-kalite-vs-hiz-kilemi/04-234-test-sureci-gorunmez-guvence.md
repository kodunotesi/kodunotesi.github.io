---
title: "2.3.4 Test Süreci: Görünmez Güvence"
sidebar:
  hidden: true
---

Test yazımı, yazılım geliştirmede en sık "zaman kaybı" olarak nitelendirilen ve en sık terk edilen pratiklerden biridir. Bu algı bir yönüyle anlaşılabilirdir: test yazmak zaman alır, başlangıçta doğrudan görünür bir çıktı üretmez ve teslimat takvimini uzatan ek bir iş gibi görünür. Ancak bu bakış, testlerin gerçek rolünü eksik değerlendirir.

Testler yalnızca hata bulma araçları değildir; aynı zamanda sistemin beklenen davranışını tanımlayan ve değişiklikler sırasında bu davranışın korunup korunmadığını doğrulayan çalıştırılabilir güvence mekanizmalarıdır. Bir test geçtiğinde, ilgili davranışın test edilen senaryolar altında hâlâ beklendiği gibi çalıştığı doğrulanmış olur. Bir değişiklik yapıldığında testlerin yeniden çalıştırılması, beklenmeyen yan etkilerin erken aşamada görünür hale gelmesini sağlar.

Bu güvence olmadan her değişiklik potansiyel bir belirsizlik kaynağına dönüşür. Ekipler yalnızca hata riskiyle değil, sistemin hangi davranışlarının etkilenmiş olabileceğini bilememenin yarattığı öngörülemezlikle mücadele etmeye başlar. Zamanla geliştirme süreçleri yavaşlar çünkü her yayın, kontrollü bir değişiklikten çok dikkatli bir tahmine dönüşmek zorunda kalır.

Bu nedenle testlerin temel değeri yalnızca hata önlemek değildir. Testlerin asıl değeri güvenli değişiklik yapabilme kapasitesi üretmektir. Güvenilir test altyapısına sahip ekipler sistem üzerinde daha cesur ve hızlı değişiklikler yapabilir. Buna karşılık test kapsamı zayıf sistemlerde ekipler kritik modüllere müdahale etmekten çekinir, küçük değişiklikler bile uzun manuel doğrulama süreçleri gerektirir ve teslim süreçlerinin öngörülebilirliği azalır.

Humble ve Farley, "Continuous Delivery" eserinde test kapsamını bir sigorta poliçesine benzetir: maliyet önceden ödenir, fayda ise beklenmedik anlarda ortaya çıkar <span class="bkz-ref" title="6. Humble, J., &amp; Farley, D. (2010). Continuous Delivery.">(Bkz: 6)</span>. Test yazmamak, bu güvence mekanizmasından vazgeçmek anlamına gelir. Sistemin büyüklüğü ve karmaşıklığı arttıkça, test eksikliğinin oluşturduğu risk ve belirsizlik de katlanarak büyür.

**Örnek:** Finans sektöründe faaliyet gösteren bir yazılım şirketi, teslim sürelerini kısaltmak amacıyla zaman içinde otomatik test kapsamını azaltmaya başladı. Özellikle uzun süren entegrasyon testleri çoğu sürümde çalıştırılmıyor, bazı başarısız testler ise "daha sonra düzeltilmek üzere" geçici olarak devre dışı bırakılıyordu. İlk aylarda bu yaklaşım verimli görünüyordu; sürümler daha hızlı hazırlanıyor ve teslim tarihleri rahatlıkla karşılanıyordu.

Ancak bir sürüm sırasında, fatura hesaplama modülünde yapılan küçük bir vergi hesaplama değişikliği eski bir hesaplama kuralını fark edilmeden etkiledi. Daha önce bu davranışı doğrulayan birim testleri devre dışı bırakıldığı için sorun geliştirme aşamasında yakalanamadı ve doğrudan üretim ortamına taşındı. Hata yüz binlerce işlem kaydını etkiledi.

Sorunun tespit edilmesi iki gün, geri alınması bir hafta ve etkilenen kayıtların düzeltilmesi de bir o kadar sürdü. Teknik problemin kendisinden daha büyük maliyet ise ekiplerin sisteme duyduğu güvenin zedelenmesiydi. Sonraki aylarda ekip üyeleri kritik modüllerde değişiklik yaparken daha temkinli davranmaya başladı; teslim süreçleri yavaşladı ve her yayın öncesinde kapsamlı manuel kontroller standart hale geldi.

Kısa vadede zaman kazandırıyor gibi görünen test kapsamının daraltılması, uzun vadede geliştirme hızını ve öngörülebilirliği azaltan yapısal bir probleme dönüşmüştü.

---



