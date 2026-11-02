---
title: "1.3.1 Görünmeyen İşin Anatomisi"
slug: book/03-bolum-1-alginin-kokeni-neden-hep-yazilim-ekibi/04-13-gorunmeyen-is-yuku/01-131-gorunmeyen-isin-anatomisi
sidebar:
  hidden: true
---

Yazılım geliştirme ekiplerinin günlük iş yükünün önemli bir kısmı şu başlıklar altında toplanabilir:

**Teknik borç ve refactoring:** Her yazılım geliştirme sürecinde, hız veya kaynak kısıtı nedeniyle "daha iyi yapılabilirdi" kararları alınır. Bu kararların birikimi teknik borç olarak adlandırılır. Teknik borç, zaman içinde her yeni özelliğin maliyetini artırır; eski kodun anlaşılması, değiştirilmesi ve test edilmesi giderek daha fazla zaman alır. Refactoring ise bu borcun geri ödenmesidir: mevcut davranışı değiştirmeden iç yapıyı iyileştirmek. Bu çalışma dışarıdan görünmez, çünkü yeni bir özellik sunmaz; ancak var olan özelliklerin daha güvenli, daha hızlı ve daha düşük maliyetle geliştirilebilmesini sağlar.

**Altyapı ve bağımlılık yönetimi:** Yazılım sistemleri bağımlılıklar üzerine kurulur: kütüphaneler, framework’ler, veritabanları, üçüncü taraf servisler. Bu bağımlılıkların güncellenmesi, güvenlik açıklarının kapatılması ve eski teknolojilerin yenileriyle değiştirilmesi, sürekli devam eden bir iş yükü oluşturur. Dışarıdan bakıldığında bu çalışmalar "hiçbir şey değişmedi" izlenimi verir; oysa "hiçbir şeyin bozulmaması" için ciddi bir efor harcanmıştır.

**Hata araştırması:** Bir hatanın düzeltilmesi, zaman zaman düzeltmenin kendisinden çok daha uzun süren bir araştırma aşaması gerektirir. Hatanın hangi koşulda oluştuğunu anlamak, sistemi gözlemlemek, logları incelemek ve kök nedeni tespit etmek görünmez bir çalışmadır. Ticket üzerinde "bug fix: 2 saat" görünür; ancak öncesindeki dört saatlik araştırma görünmez.

**Bilgi aktarımı ve dokümantasyon:** Yeni ekip üyelerinin sisteme dahil edilmesi, kritik bilginin aktarılması ve dokümantasyonun güncellenmesi yazılım ekiplerinin önemli bir zamanını alır. Bu çalışma doğrudan bir özellik veya düzeltme üretmez. Ancak yapılmadığında bilgi siloları oluşur, sistem bilgisi birkaç kişide yoğunlaşır ve ekibin kolektif kapasitesi azalır.

**Koordinasyon ve iletişim yükü:** Günlük toplantılar, planlama oturumları, gereksinimlerin netleştirilmesi için yapılan görüşmeler, code review’lar ve teknik tartışmalar için harcanan süre görünmez iş yükünün önemli bir parçasıdır. Bu süre sprint board’larına yansımaz; ancak gerçek bir kapasite tüketimidir.


