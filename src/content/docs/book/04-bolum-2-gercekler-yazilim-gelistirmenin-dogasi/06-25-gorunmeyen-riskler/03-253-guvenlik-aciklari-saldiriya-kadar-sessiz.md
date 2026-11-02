---
title: "2.5.3 Güvenlik Açıkları: Saldırıya Kadar Sessiz"
sidebar:
  hidden: true
---

Güvenlik açıkları, yazılım sistemlerinin en karakteristik görünmez riskleri arasındadır. Bir güvenlik açığı, istismar edilene kadar sistemin normal işleyişini bozmaz: hata mesajı üretmez, performansı düşürmez, sistemin görünür davranışını değiştirmez. Sistem yıllarca sorunsuz çalışırken aynı anda ciddi güvenlik zafiyetleri barındırıyor olabilir.

Bu durum, güvenlik açıklarını teknik borçtan bile daha sinsi bir risk kategorisine sokar. Teknik borç zamanla belirti üretir: teslim süreleri uzar, değişiklikler zorlaşır. Güvenlik açıkları ise çoğu zaman herhangi bir belirti vermeden birikir. İstismar gerçekleştiğinde ise sorun genellikle sistem içi teknik bir kriz olarak değil, organizasyonel bir olay olarak yaşanır.

Humble ve Farley, güvenliği teslimat sürecinin ayrılmaz bir parçası olarak ele alır ve güvenlik kontrollerinin kod değişikliklerinin rutin akışına entegre edilmesi gerektiğini vurgular <span class="bkz-ref" title="6. Humble, J., &amp; Farley, D. (2010). Continuous Delivery.">(Bkz: 6)</span>. Bu entegrasyon olmadan güvenlik, proje bitimine ya da bağımsız bir denetim sürecine ertelenir. Oysa güvenlik denetiminin geç yapılması, tespit edilen sorunların düzeltilmesini hem daha pahalı hem de organizasyonel olarak daha maliyetli hale getirir.

**Örnek:** Bir kurumsal insan kaynakları uygulamasında çalışan bilgi sorgulama modülü, yıllarca sorunsuz kullanıldı. Modül, belirli parametreleri alarak veritabanından ilgili kayıtları döndürüyordu. Bağımsız bir güvenlik denetimi sırasında uzmanlar, modülün kullanıcı girdisini yeterince doğrulamadığını ve özel karakterler içeren sorgulara karşı savunmasız olduğunu keşfetti (sql injection). Kötü niyetli bir kullanıcı bu açığı kullanarak yetki gerektiren kayıtlara erişebilirdi. Sistem yıllarca düzgün çalışmış; ancak bu zaafiyet hiç tetiklenmediği için tamamen görünmez kalmıştı. Sorun ancak yapılandırılmış bir güvenlik değerlendirmesi sayesinde keşfedilebildi.

---



