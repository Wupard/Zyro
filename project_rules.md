# Çalışma Kuralları (her görevde geçerli)

Amaç: süre ve token tasarrufu. Bu kurallar her istekte, ayrıca hatırlatılmasa bile uygulanır.

## 1. Kodu baştan sona inceleme
- Projeyi, klasörleri veya tüm dosyaları tarama. Sadece görevle doğrudan ilgili dosyaları aç.
- Önce dosya adını tahmin etme, aramayla bul: adı, fonksiyonu veya metni arat (grep / dosya arama), sonra yalnızca bulunan dosyayı aç.
- Büyük dosyaları baştan sona okuma. Sadece ilgili fonksiyonu ve çevresindeki satırları oku.
- Aynı dosyayı aynı görevde ikinci kez okuma. İlk okumadaki bilgiyi kullan.
- Görevde adı geçmeyen sayfalara, bileşenlere, stil dosyalarına ve veri katmanına dokunma.

## 2. Çalışma biçimi
- Plan, uzun açıklama veya "önce şunu inceleyeyim" turu yazma. Doğrudan değişikliği yap.
- Küçük değişiklik için dosyayı baştan yazma. Sadece değişen kısmı düzenle.
- İstenmeyen refactor, yeniden adlandırma, biçim düzeltme veya "iyileştirme" yapma.
- Yeni paket, kütüphane veya bağımlılık ekleme. Gerekirse önce sor.

## 3. Test ve kontrol
- Tarayıcı açma, ekran görüntüsü alma, Lighthouse veya otomatik test çalıştırma. Kontrolü kullanıcı yapar.
- Sadece söz dizimi hatası için gerekiyorsa tek bir hızlı derleme/lint kontrolü yap, başka bir şey çalıştırma.

## 4. Hata ve döngü kontrolü
- Bir hata 2 denemede çözülmezse DUR. Hatayı, denediklerini ve şüphelendiğin nedeni yaz, yeni deneme yapma.
- Aynı komutu veya aynı düzeltmeyi tekrar tekrar deneme.

## 5. Bitirirken
- En fazla 5 satır özet yaz: hangi dosyalar değişti, ne değişti.
- Ek özellik önerme, ek iş yapma, "isterseniz şunu da yapabilirim" listesi yazma.

## 6. Belirsizlik
- Görev iki farklı şekilde anlaşılabiliyorsa ve fark büyükse tek bir kısa soru sor. Küçük farklarda en makul seçeneği uygula ve özette belirt.
