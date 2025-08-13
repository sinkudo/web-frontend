export default function FeaturesSection() {
  const features = [
    {
      icon: '🔍',
      title: "Анализ данных PDF",
      description: "Работаем с информацией, хранящейся в PDF-документе для точного извлечения текста."
    },
    {
      icon: '📜',
      title: "Сохранение структуры",
      description: "Генерируем новый PDF с сохранением оригинальной структуры и возможностью копирования корректного текста."
    },
    {
      icon: '🛡️',
      title: "Без изменений PDF",
      description: "Исходный файл не трогаем, только читаем его данные на низком уровне."
    }
  ];

  return (
    <section id="features" class="py-5">
        <div class="container">
            <div class="text-center mb-5">
                <h2 class="fw-bold">Почему наш подход уникален</h2>
                <p class="lead text-muted">Обычные OCR работают с PDF-документом как набором изображений страниц, отвлекаясь на визуальные элементы и теряя текстовую информацию.</p>
            </div>
            
            <div class="row g-4">
                <div class="col-md-4">
                    <div class="text-center p-4">
                        <div class="feature-icon">🔍</div>
                        <h3>Анализ данных PDF</h3>
                        <p class="text-muted">Работаем с информацией, хранящейся в PDF-документе для точного извлечения текста.</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="text-center p-4">
                        <div class="feature-icon">📜</div>
                        <h3>Сохранение структуры</h3>
                        <p class="text-muted">Генерируем новый PDF с сохранением оригинальной структуры и возможностью копирования корректного текста.</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="text-center p-4">
                        <div class="feature-icon">🛡️</div>
                        <h3>Без изменений PDF</h3>
                        <p class="text-muted">Исходный файл не трогаем, только читаем его данные на низком уровне.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}